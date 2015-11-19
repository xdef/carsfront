var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

define(['app/app', 'base.entities'], function(App, Entities) {
  return App.module("Entities", function(Entities, App, Backbone, Mn, $, _) {
    var API;
    Entities.Flash = (function(superClass) {
      extend(Flash, superClass);

      function Flash() {
        return Flash.__super__.constructor.apply(this, arguments);
      }

      Flash.prototype.localStorage = new Backbone.LocalStorage("Flashes");

      Flash.prototype.defaults = {
        timer: 5000,
        type: void 0,
        title: void 0,
        message: void 0
      };

      return Flash;

    })(Entities.Model);
    Entities.FlashesCollection = (function(superClass) {
      extend(FlashesCollection, superClass);

      function FlashesCollection() {
        return FlashesCollection.__super__.constructor.apply(this, arguments);
      }

      FlashesCollection.prototype.model = Entities.Flash;

      FlashesCollection.prototype.localStorage = new Backbone.LocalStorage("Flashes");

      return FlashesCollection;

    })(Entities.Collection);
    API = {
      getFlashMessages: function() {
        this.messages || (this.messages = new Entities.FlashesCollection);
        this.messages.fetch();
        return this.messages;
      },
      createFlashMessage: function(attrs, options) {
        var messages;
        if (options == null) {
          options = {};
        }
        messages = App.reqres.request('flash:entities');
        return App.commands.execute('when:fetched', messages, function() {
          return messages.create(attrs, options);
        });
      }
    };
    App.reqres.setHandler('flash:entities', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.getFlashMessages.apply(API, args);
    });
    return App.vent.on('flash:create', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.createFlashMessage.apply(API, args);
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9mbGFzaC9mbGFzaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7OztBQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQUQsRUFBWSxlQUFaLENBQVAsRUFBcUMsU0FBQyxHQUFELEVBQU0sUUFBTjtTQUVuQyxHQUFHLENBQUMsTUFBSixDQUFXLFVBQVgsRUFBdUIsU0FBQyxRQUFELEVBQVcsR0FBWCxFQUFnQixRQUFoQixFQUEwQixFQUExQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQztBQUVyQixRQUFBO0lBQU0sUUFBUSxDQUFDOzs7Ozs7O3NCQUViLFlBQUEsR0FBa0IsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixTQUF0Qjs7c0JBQ2xCLFFBQUEsR0FDRTtRQUFBLEtBQUEsRUFBTyxJQUFQO1FBQ0EsSUFBQSxFQUFNLE1BRE47UUFFQSxLQUFBLEVBQU8sTUFGUDtRQUdBLE9BQUEsRUFBUyxNQUhUOzs7OztPQUp5QixRQUFRLENBQUM7SUFTaEMsUUFBUSxDQUFDOzs7Ozs7O2tDQUNiLEtBQUEsR0FBTyxRQUFRLENBQUM7O2tDQUNoQixZQUFBLEdBQWtCLElBQUEsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsU0FBdEI7Ozs7T0FGcUIsUUFBUSxDQUFDO0lBSWxELEdBQUEsR0FDRTtNQUFBLGdCQUFBLEVBQWtCLFNBQUE7UUFDaEIsSUFBQyxDQUFBLGFBQUQsSUFBQyxDQUFBLFdBQWEsSUFBSSxRQUFRLENBQUM7UUFDM0IsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFWLENBQUE7ZUFDQSxJQUFDLENBQUE7TUFIZSxDQUFsQjtNQUtBLGtCQUFBLEVBQW9CLFNBQUMsS0FBRCxFQUFRLE9BQVI7QUFDbEIsWUFBQTs7VUFEMEIsVUFBVTs7UUFDcEMsUUFBQSxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBWCxDQUFtQixnQkFBbkI7ZUFDWCxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsUUFBckMsRUFBK0MsU0FBQTtpQkFDN0MsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUIsT0FBdkI7UUFENkMsQ0FBL0M7TUFGa0IsQ0FMcEI7O0lBV0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFYLENBQXNCLGdCQUF0QixFQUF3QyxTQUFBO0FBQ3RDLFVBQUE7TUFEdUM7YUFDdkMsR0FBRyxDQUFDLGdCQUFKLFlBQXFCLElBQXJCO0lBRHNDLENBQXhDO1dBR0EsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFULENBQVksY0FBWixFQUE0QixTQUFBO0FBQzFCLFVBQUE7TUFEMkI7YUFDM0IsR0FBRyxDQUFDLGtCQUFKLFlBQXVCLElBQXZCO0lBRDBCLENBQTVCO0VBOUJxQixDQUF2QjtBQUZtQyxDQUFyQyIsImZpbGUiOiJhcHAvZW50aXRpZXMvZmxhc2gvZmxhc2guanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgWydhcHAvYXBwJywgJ2Jhc2UuZW50aXRpZXMnXSwgKEFwcCwgRW50aXRpZXMpIC0+XG5cbiAgQXBwLm1vZHVsZSBcIkVudGl0aWVzXCIsIChFbnRpdGllcywgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBFbnRpdGllcy5GbGFzaCBleHRlbmRzIEVudGl0aWVzLk1vZGVsXG5cbiAgICAgIGxvY2FsU3RvcmFnZTogbmV3IEJhY2tib25lLkxvY2FsU3RvcmFnZShcIkZsYXNoZXNcIilcbiAgICAgIGRlZmF1bHRzOlxuICAgICAgICB0aW1lcjogNTAwMFxuICAgICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICAgICAgdGl0bGU6IHVuZGVmaW5lZFxuICAgICAgICBtZXNzYWdlOiB1bmRlZmluZWRcblxuICAgIGNsYXNzIEVudGl0aWVzLkZsYXNoZXNDb2xsZWN0aW9uIGV4dGVuZHMgRW50aXRpZXMuQ29sbGVjdGlvblxuICAgICAgbW9kZWw6IEVudGl0aWVzLkZsYXNoXG4gICAgICBsb2NhbFN0b3JhZ2U6IG5ldyBCYWNrYm9uZS5Mb2NhbFN0b3JhZ2UoXCJGbGFzaGVzXCIpXG5cbiAgICBBUEkgPVxuICAgICAgZ2V0Rmxhc2hNZXNzYWdlczogLT5cbiAgICAgICAgQG1lc3NhZ2VzIHx8PSBuZXcgRW50aXRpZXMuRmxhc2hlc0NvbGxlY3Rpb25cbiAgICAgICAgQG1lc3NhZ2VzLmZldGNoKClcbiAgICAgICAgQG1lc3NhZ2VzXG5cbiAgICAgIGNyZWF0ZUZsYXNoTWVzc2FnZTogKGF0dHJzLCBvcHRpb25zID0ge30pIC0+XG4gICAgICAgIG1lc3NhZ2VzID0gQXBwLnJlcXJlcy5yZXF1ZXN0ICdmbGFzaDplbnRpdGllcydcbiAgICAgICAgQXBwLmNvbW1hbmRzLmV4ZWN1dGUgJ3doZW46ZmV0Y2hlZCcsIG1lc3NhZ2VzLCAtPlxuICAgICAgICAgIG1lc3NhZ2VzLmNyZWF0ZSBhdHRycywgb3B0aW9uc1xuXG5cbiAgICBBcHAucmVxcmVzLnNldEhhbmRsZXIgJ2ZsYXNoOmVudGl0aWVzJywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkuZ2V0Rmxhc2hNZXNzYWdlcyBhcmdzLi4uXG5cbiAgICBBcHAudmVudC5vbiAnZmxhc2g6Y3JlYXRlJywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkuY3JlYXRlRmxhc2hNZXNzYWdlIGFyZ3MuLi5cbiJdfQ==
