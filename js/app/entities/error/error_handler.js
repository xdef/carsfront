var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

define(['app/app', 'base.entities'], function(App, Entities) {
  return App.module("Entities", function(Entities, App, Backbone, Mn, $, _) {
    var API;
    Entities.ErrorHandler = (function(superClass) {
      extend(ErrorHandler, superClass);

      function ErrorHandler() {
        return ErrorHandler.__super__.constructor.apply(this, arguments);
      }

      return ErrorHandler;

    })(Entities.Model);
    API = {
      initErrorHandler: function() {
        return this.handler || (this.handler = new Entities.ErrorHandler);
      },
      handlerError: function(model, response, textStatus) {
        switch (response.status) {
          case 400:
            return this.badRequest(model, response, textStatus);
          case 401:
            return this.unauthorized(model, response, textStatus);
          case 403:
            return this.forbidden(model, response, textStatus);
          case 404:
            return this.notFound(model, response, textStatus);
          case 422:
            return this.unprocessableEntity(model, response, textStatus);
        }
      },
      badRequest: function(model, response, textStatus) {},
      unauthorized: function(model, response, textStatus) {
        var msg, title;
        title = App.reqres.request('i18n:t', 'frontend.flash.profile.create.error.title');
        msg = this._formatedAuthorizedErrors(response);
        App.vent.trigger('flash:create', {
          type: 'error',
          title: title,
          message: msg
        });
        return App.commands.execute('session:destroy');
      },
      forbidden: function(model, response, textStatus) {
        var msg, title;
        title = App.reqres.request('i18n:t', 'frontend.flash.profile.create.error.title');
        msg = this._formatedAuthorizedErrors(response);
        App.vent.trigger('flash:create', {
          type: 'error',
          title: title,
          message: msg
        });
        return App.commands.execute('session:destroy');
      },
      unprocessableEntity: function(model, response, textStatus) {
        var attr, errors, msg, title;
        if (errors = response.responseJSON) {
          for (attr in errors) {
            msg = errors[attr];
            model.validationError || (model.validationError = []);
            model.validationError.push({
              attr: attr,
              msg: msg
            });
          }
          model.trigger("invalid", model);
          msg = this._formatedValidationErrors(model);
        } else {
          errors = response.responseText;
          msg = errors;
        }
        title = App.reqres.request('i18n:t', 'frontend.flash.profile.create.error.title');
        return App.vent.trigger('flash:create', {
          type: 'error',
          title: title,
          message: msg
        });
      },
      _formatedAuthorizedErrors: function(response) {
        var error, msg;
        msg = (error = response.responseJSON) ? error.error : response.responseText;
        return "<div class='item'>" + msg + "</div>";
      },
      _formatedValidationErrors: function(model) {
        var messages;
        messages = _.map(model.validationError, function(error) {
          var attr, msg;
          attr = error.attr, msg = error.msg;
          if (_.isArray(msg)) {
            msg = msg.join(', ');
          }
          return "<div class='item'>" + attr + ": " + msg + "</div>";
        });
        return messages.join('');
      }
    };
    App.on('before:start', function() {
      return API.initErrorHandler();
    });
    App.vent.on('model:error', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.handlerError.apply(API, args);
    });
    return App.commands.execute('error:handler:init', function() {
      return API.initErrorHandler();
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9lcnJvci9lcnJvcl9oYW5kbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGVBQVosQ0FBUCxFQUFxQyxTQUFDLEdBQUQsRUFBTSxRQUFOO1NBRW5DLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLFFBQWhCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBRXJCLFFBQUE7SUFBTSxRQUFRLENBQUM7Ozs7Ozs7OztPQUFxQixRQUFRLENBQUM7SUFHN0MsR0FBQSxHQUNFO01BQUEsZ0JBQUEsRUFBa0IsU0FBQTtlQUNoQixJQUFDLENBQUEsWUFBRCxJQUFDLENBQUEsVUFBWSxJQUFJLFFBQVEsQ0FBQztNQURWLENBQWxCO01BR0EsWUFBQSxFQUFjLFNBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsVUFBbEI7QUFDWixnQkFBTyxRQUFRLENBQUMsTUFBaEI7QUFBQSxlQUNPLEdBRFA7bUJBRUksSUFBQyxDQUFBLFVBQUQsQ0FBWSxLQUFaLEVBQW1CLFFBQW5CLEVBQTZCLFVBQTdCO0FBRkosZUFHTyxHQUhQO21CQUlJLElBQUMsQ0FBQSxZQUFELENBQWMsS0FBZCxFQUFxQixRQUFyQixFQUErQixVQUEvQjtBQUpKLGVBS08sR0FMUDttQkFNSSxJQUFDLENBQUEsU0FBRCxDQUFXLEtBQVgsRUFBa0IsUUFBbEIsRUFBNEIsVUFBNUI7QUFOSixlQU9PLEdBUFA7bUJBUUksSUFBQyxDQUFBLFFBQUQsQ0FBVSxLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLFVBQTNCO0FBUkosZUFTTyxHQVRQO21CQVVJLElBQUMsQ0FBQSxtQkFBRCxDQUFxQixLQUFyQixFQUE0QixRQUE1QixFQUFzQyxVQUF0QztBQVZKO01BRFksQ0FIZDtNQWdCQSxVQUFBLEVBQVksU0FBQyxLQUFELEVBQVEsUUFB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RUFBdUIsU0FBQTthQUNyQixHQUFHLENBQUMsZ0JBQUosQ0FBQTtJQURxQixDQUF2QjtJQUdBLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBVCxDQUFZLGFBQVosRUFBMkIsU0FBQTtBQUN6QixVQUFBO01BRDBCO2FBQzFCLEdBQUcsQ0FBQyxZQUFKLFlBQWlCLElBQWpCO0lBRHlCLENBQTNCO1dBR0EsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQyxTQUFBO2FBQ3pDLEdBQUcsQ0FBQyxnQkFBSixDQUFBO0lBRHlDLENBQTNDO0VBNUZxQixDQUF2QjtBQUZtQyxDQUFyQyIsImZpbGUiOiJhcHAvZW50aXRpZXMvZXJyb3IvZXJyb3JfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbJ2FwcC9hcHAnLCAnYmFzZS5lbnRpdGllcyddLCAoQXBwLCBFbnRpdGllcykgLT5cblxuICBBcHAubW9kdWxlIFwiRW50aXRpZXNcIiwgKEVudGl0aWVzLCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIEVudGl0aWVzLkVycm9ySGFuZGxlciBleHRlbmRzIEVudGl0aWVzLk1vZGVsXG5cblxuICAgIEFQSSA9XG4gICAgICBpbml0RXJyb3JIYW5kbGVyOiAtPlxuICAgICAgICBAaGFuZGxlciB8fD0gbmV3IEVudGl0aWVzLkVycm9ySGFuZGxlclxuXG4gICAgICBoYW5kbGVyRXJyb3I6IChtb2RlbCwgcmVzcG9uc2UsIHRleHRTdGF0dXMpIC0+XG4gICAgICAgIHN3aXRjaCByZXNwb25zZS5zdGF0dXNcbiAgICAgICAgICB3aGVuIDQwMFxuICAgICAgICAgICAgQGJhZFJlcXVlc3QgbW9kZWwsIHJlc3BvbnNlLCB0ZXh0U3RhdHVzXG4gICAgICAgICAgd2hlbiA0MDFcbiAgICAgICAgICAgIEB1bmF1dGhvcml6ZWQgbW9kZWwsIHJlc3BvbnNlLCB0ZXh0U3RhdHVzXG4gICAgICAgICAgd2hlbiA0MDNcbiAgICAgICAgICAgIEBmb3JiaWRkZW4gbW9kZWwsIHJlc3BvbnNlLCB0ZXh0U3RhdHVzXG4gICAgICAgICAgd2hlbiA0MDRcbiAgICAgICAgICAgIEBub3RGb3VuZCBtb2RlbCwgcmVzcG9uc2UsIHRleHRTdGF0dXNcbiAgICAgICAgICB3aGVuIDQyMlxuICAgICAgICAgICAgQHVucHJvY2Vzc2FibGVFbnRpdHkgbW9kZWwsIHJlc3BvbnNlLCB0ZXh0U3RhdHVzXG5cbiAgICAgIGJhZFJlcXVlc3Q6IChtb2RlbCwgcmVzcG9uc2UsIHRleHRTdGF0dXMpIC0+XG4gICAgICAgICNcblxuICAgICAgdW5hdXRob3JpemVkOiAobW9kZWwsIHJlc3BvbnNlLCB0ZXh0U3RhdHVzKSAtPlxuICAgICAgICAjIE5vdGlmeVxuICAgICAgICB0aXRsZSA9IEFwcC5yZXFyZXMucmVxdWVzdChcbiAgICAgICAgICAnaTE4bjp0JywgJ2Zyb250ZW5kLmZsYXNoLnByb2ZpbGUuY3JlYXRlLmVycm9yLnRpdGxlJylcblxuICAgICAgICBtc2cgPSBAX2Zvcm1hdGVkQXV0aG9yaXplZEVycm9ycyByZXNwb25zZVxuXG4gICAgICAgIEFwcC52ZW50LnRyaWdnZXIgJ2ZsYXNoOmNyZWF0ZScsXG4gICAgICAgICAgdHlwZTogJ2Vycm9yJywgdGl0bGU6IHRpdGxlLCBtZXNzYWdlOiBtc2dcblxuICAgICAgICBBcHAuY29tbWFuZHMuZXhlY3V0ZSAnc2Vzc2lvbjpkZXN0cm95J1xuXG4gICAgICBmb3JiaWRkZW46IChtb2RlbCwgcmVzcG9uc2UsIHRleHRTdGF0dXMpIC0+XG4gICAgICAgICMgTm90aWZ5XG4gICAgICAgIHRpdGxlID0gQXBwLnJlcXJlcy5yZXF1ZXN0KFxuICAgICAgICAgICdpMThuOnQnLCAnZnJvbnRlbmQuZmxhc2gucHJvZmlsZS5jcmVhdGUuZXJyb3IudGl0bGUnKVxuXG4gICAgICAgIG1zZyA9IEBfZm9ybWF0ZWRBdXRob3JpemVkRXJyb3JzIHJlc3BvbnNlXG5cbiAgICAgICAgQXBwLnZlbnQudHJpZ2dlciAnZmxhc2g6Y3JlYXRlJyxcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLCB0aXRsZTogdGl0bGUsIG1lc3NhZ2U6IG1zZ1xuXG4gICAgICAgIEFwcC5jb21tYW5kcy5leGVjdXRlICdzZXNzaW9uOmRlc3Ryb3knXG5cbiAgICAgIHVucHJvY2Vzc2FibGVFbnRpdHk6IChtb2RlbCwgcmVzcG9uc2UsIHRleHRTdGF0dXMpIC0+XG4gICAgICAgIGlmIGVycm9ycyA9IHJlc3BvbnNlLnJlc3BvbnNlSlNPTlxuICAgICAgICAgICMgUG9wdWxhdGUgbW9kZWwgYnkgZXJyb3JzIGZyb20gc2VydmVyXG4gICAgICAgICAgZm9yIGF0dHIsIG1zZyBvZiBlcnJvcnNcbiAgICAgICAgICAgIG1vZGVsLnZhbGlkYXRpb25FcnJvciB8fD0gW11cbiAgICAgICAgICAgIG1vZGVsLnZhbGlkYXRpb25FcnJvci5wdXNoIHthdHRyOiBhdHRyLCBtc2c6IG1zZ31cblxuICAgICAgICAgIG1vZGVsLnRyaWdnZXIgXCJpbnZhbGlkXCIsIG1vZGVsXG5cbiAgICAgICAgICBtc2cgPSBAX2Zvcm1hdGVkVmFsaWRhdGlvbkVycm9ycyBtb2RlbFxuICAgICAgICBlbHNlXG4gICAgICAgICAgZXJyb3JzID0gcmVzcG9uc2UucmVzcG9uc2VUZXh0XG4gICAgICAgICAgbXNnID0gZXJyb3JzXG5cbiAgICAgICAgIyBOb3RpZnlcbiAgICAgICAgdGl0bGUgPSBBcHAucmVxcmVzLnJlcXVlc3QoXG4gICAgICAgICAgJ2kxOG46dCcsICdmcm9udGVuZC5mbGFzaC5wcm9maWxlLmNyZWF0ZS5lcnJvci50aXRsZScpXG5cbiAgICAgICAgQXBwLnZlbnQudHJpZ2dlciAnZmxhc2g6Y3JlYXRlJyxcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLCB0aXRsZTogdGl0bGUsIG1lc3NhZ2U6IG1zZ1xuXG4gICAgICBfZm9ybWF0ZWRBdXRob3JpemVkRXJyb3JzOiAocmVzcG9uc2UpIC0+XG4gICAgICAgIG1zZyA9IGlmIGVycm9yID0gcmVzcG9uc2UucmVzcG9uc2VKU09OXG4gICAgICAgICAgZXJyb3IuZXJyb3JcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc3BvbnNlLnJlc3BvbnNlVGV4dFxuXG4gICAgICAgIFwiPGRpdiBjbGFzcz0naXRlbSc+I3ttc2d9PC9kaXY+XCJcblxuICAgICAgX2Zvcm1hdGVkVmFsaWRhdGlvbkVycm9yczogKG1vZGVsKSAtPlxuICAgICAgICBtZXNzYWdlcyA9IF8ubWFwIG1vZGVsLnZhbGlkYXRpb25FcnJvciwgKGVycm9yKSAtPlxuICAgICAgICAgIHsgYXR0ciwgbXNnIH0gPSBlcnJvclxuICAgICAgICAgIG1zZyA9IG1zZy5qb2luKCcsICcpIGlmIF8uaXNBcnJheShtc2cpXG4gICAgICAgICAgXCI8ZGl2IGNsYXNzPSdpdGVtJz4je2F0dHJ9OiAje21zZ308L2Rpdj5cIlxuXG4gICAgICAgIG1lc3NhZ2VzLmpvaW4oJycpXG5cbiAgICBBcHAub24gJ2JlZm9yZTpzdGFydCcsIC0+XG4gICAgICBBUEkuaW5pdEVycm9ySGFuZGxlcigpXG5cbiAgICBBcHAudmVudC5vbiAnbW9kZWw6ZXJyb3InLCAoYXJncy4uLikgLT5cbiAgICAgIEFQSS5oYW5kbGVyRXJyb3IgYXJncy4uLlxuXG4gICAgQXBwLmNvbW1hbmRzLmV4ZWN1dGUgJ2Vycm9yOmhhbmRsZXI6aW5pdCcsIC0+XG4gICAgICBBUEkuaW5pdEVycm9ySGFuZGxlcigpXG4iXX0=
