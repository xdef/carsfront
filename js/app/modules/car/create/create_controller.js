var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app", "base.controllers", "./create_view"], function(App) {
  App.module("Car.Create", function(Create, App, Backbone, Mn, $, _) {
    return Create.Controller = (function(superClass) {
      extend(Controller, superClass);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        var car;
        this.region = options.region;
        this.layout = this.getLayoutView();
        car = App.reqres.request('car:entity:new');
        this.layout.on("before:show", (function(_this) {
          return function() {
            _this.getHeaderView();
            _this.getHelpView();
            return _this.getFormView(car);
          };
        })(this));
        return this.region.show(this.layout);
      };

      Controller.prototype.getLayoutView = function() {
        return new Create.Layout;
      };

      Controller.prototype.getHeaderView = function() {
        var view;
        view = new Create.Header;
        return this.layout.showChildView('headerRegion', view);
      };

      Controller.prototype.getHelpView = function() {
        var view;
        view = new Create.Help;
        return this.layout.showChildView('helpRegion', view);
      };

      Controller.prototype.getFormView = function(car) {
        var view;
        view = new Create.Form({
          model: car,
          collection: car.get('photos')
        });
        view.on('submit', function(args) {
          var collection, model;
          view = args.view, model = args.model, collection = args.collection;
          return App.commands.execute('car:entity:create', model);
        });
        view.on('cancel', function(args) {
          var collection, model;
          model = args.model, collection = args.collection, view = args.view;
          return window.history.back();
        });
        view.on('car:photo:remove', function(view, args) {
          var collection, model;
          view = args.view, model = args.model, collection = args.collection;
          return car.get("photos").remove(model);
        });
        return this.layout.showChildView('formRegion', view);
      };

      return Controller;

    })(App.Controllers.Base);
  });
  return App.Car.Create.Controller;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9jcmVhdGUvY3JlYXRlX2NvbnRyb2xsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQUQsRUFBWSxrQkFBWixFQUFnQyxlQUFoQyxDQUFQLEVBQXlELFNBQUMsR0FBRDtFQUV2RCxHQUFHLENBQUMsTUFBSixDQUFXLFlBQVgsRUFBeUIsU0FBQyxNQUFELEVBQVMsR0FBVCxFQUFjLFFBQWQsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7V0FFakIsTUFBTSxDQUFDOzs7Ozs7OzJCQUNYLFVBQUEsR0FBWSxTQUFDLE9BQUQ7QUFDVixZQUFBO1FBQUUsSUFBQyxDQUFBLFNBQVcsUUFBWDtRQUNILElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLGFBQUQsQ0FBQTtRQUVWLEdBQUEsR0FBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQVgsQ0FBbUIsZ0JBQW5CO1FBRU4sSUFBQyxDQUFBLE1BQU0sQ0FBQyxFQUFSLENBQVcsYUFBWCxFQUEwQixDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO1lBQ3hCLEtBQUMsQ0FBQSxhQUFELENBQUE7WUFDQSxLQUFDLENBQUEsV0FBRCxDQUFBO21CQUNBLEtBQUMsQ0FBQSxXQUFELENBQWEsR0FBYjtVQUh3QjtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUI7ZUFLQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFDLENBQUEsTUFBZDtNQVhVOzsyQkFhWixhQUFBLEdBQWUsU0FBQTtlQUNiLElBQUksTUFBTSxDQUFDO01BREU7OzJCQUdmLGFBQUEsR0FBZSxTQUFBO0FBQ2IsWUFBQTtRQUFBLElBQUEsR0FBTyxJQUFJLE1BQU0sQ0FBQztlQUNsQixJQUFDLENBQUEsTUFBTSxDQUFDLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsSUFBdEM7TUFGYTs7MkJBSWYsV0FBQSxHQUFhLFNBQUE7QUFDWCxZQUFBO1FBQUEsSUFBQSxHQUFPLElBQUksTUFBTSxDQUFDO2VBQ2xCLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFzQixZQUF0QixFQUFvQyxJQUFwQztNQUZXOzsyQkFJYixXQUFBLEdBQWEsU0FBQyxHQUFEO0FBQ1gsWUFBQTtRQUFBLElBQUEsR0FBVyxJQUFBLE1BQU0sQ0FBQyxJQUFQLENBQ1Q7VUFBQSxLQUFBLEVBQU8sR0FBUDtVQUNBLFVBQUEsRUFBWSxHQUFHLENBQUMsR0FBSixDQUFRLFFBQVIsQ0FEWjtTQURTO1FBSVgsSUFBSSxDQUFDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFNBQUMsSUFBRDtBQUNoQixjQUFBO1VBQUUsWUFBQSxJQUFGLEVBQVEsYUFBQSxLQUFSLEVBQWUsa0JBQUE7aUJBQ2YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFiLENBQXFCLG1CQUFyQixFQUEwQyxLQUExQztRQUZnQixDQUFsQjtRQUlBLElBQUksQ0FBQyxFQUFMLENBQVEsUUFBUixFQUFrQixTQUFDLElBQUQ7QUFDaEIsY0FBQTtVQUFFLGFBQUEsS0FBRixFQUFTLGtCQUFBLFVBQVQsRUFBcUIsWUFBQTtpQkFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFmLENBQUE7UUFGZ0IsQ0FBbEI7UUFJQSxJQUFJLENBQUMsRUFBTCxDQUFRLGtCQUFSLEVBQTRCLFNBQUMsSUFBRCxFQUFPLElBQVA7QUFDMUIsY0FBQTtVQUFFLFlBQUEsSUFBRixFQUFRLGFBQUEsS0FBUixFQUFlLGtCQUFBO2lCQUNmLEdBQUcsQ0FBQyxHQUFKLENBQVEsUUFBUixDQUFpQixDQUFDLE1BQWxCLENBQXlCLEtBQXpCO1FBRjBCLENBQTVCO2VBSUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxhQUFSLENBQXNCLFlBQXRCLEVBQW9DLElBQXBDO01BakJXOzs7O09BekJpQixHQUFHLENBQUMsV0FBVyxDQUFDO0VBRnpCLENBQXpCO1NBOENBLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBaER3QyxDQUF6RCIsImZpbGUiOiJhcHAvbW9kdWxlcy9jYXIvY3JlYXRlL2NyZWF0ZV9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIiwgXCJiYXNlLmNvbnRyb2xsZXJzXCIsIFwiLi9jcmVhdGVfdmlld1wiXSwgKEFwcCktPlxuXG4gIEFwcC5tb2R1bGUgXCJDYXIuQ3JlYXRlXCIsIChDcmVhdGUsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgQ3JlYXRlLkNvbnRyb2xsZXIgZXh0ZW5kcyBBcHAuQ29udHJvbGxlcnMuQmFzZVxuICAgICAgaW5pdGlhbGl6ZTogKG9wdGlvbnMpIC0+XG4gICAgICAgIHsgQHJlZ2lvbiB9ID0gb3B0aW9uc1xuICAgICAgICBAbGF5b3V0ID0gQGdldExheW91dFZpZXcoKVxuXG4gICAgICAgIGNhciA9IEFwcC5yZXFyZXMucmVxdWVzdCAnY2FyOmVudGl0eTpuZXcnXG5cbiAgICAgICAgQGxheW91dC5vbiBcImJlZm9yZTpzaG93XCIsID0+XG4gICAgICAgICAgQGdldEhlYWRlclZpZXcoKVxuICAgICAgICAgIEBnZXRIZWxwVmlldygpXG4gICAgICAgICAgQGdldEZvcm1WaWV3IGNhclxuXG4gICAgICAgIEByZWdpb24uc2hvdyBAbGF5b3V0XG5cbiAgICAgIGdldExheW91dFZpZXc6IC0+XG4gICAgICAgIG5ldyBDcmVhdGUuTGF5b3V0XG5cbiAgICAgIGdldEhlYWRlclZpZXc6IC0+XG4gICAgICAgIHZpZXcgPSBuZXcgQ3JlYXRlLkhlYWRlclxuICAgICAgICBAbGF5b3V0LnNob3dDaGlsZFZpZXcgJ2hlYWRlclJlZ2lvbicsIHZpZXdcblxuICAgICAgZ2V0SGVscFZpZXc6IC0+XG4gICAgICAgIHZpZXcgPSBuZXcgQ3JlYXRlLkhlbHBcbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdoZWxwUmVnaW9uJywgdmlld1xuXG4gICAgICBnZXRGb3JtVmlldzogKGNhcikgLT5cbiAgICAgICAgdmlldyA9IG5ldyBDcmVhdGUuRm9ybVxuICAgICAgICAgIG1vZGVsOiBjYXJcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjYXIuZ2V0KCdwaG90b3MnKVxuXG4gICAgICAgIHZpZXcub24gJ3N1Ym1pdCcsIChhcmdzKSAtPlxuICAgICAgICAgIHsgdmlldywgbW9kZWwsIGNvbGxlY3Rpb24gfSA9IGFyZ3NcbiAgICAgICAgICBBcHAuY29tbWFuZHMuZXhlY3V0ZSAnY2FyOmVudGl0eTpjcmVhdGUnLCBtb2RlbFxuXG4gICAgICAgIHZpZXcub24gJ2NhbmNlbCcsIChhcmdzKSAtPlxuICAgICAgICAgIHsgbW9kZWwsIGNvbGxlY3Rpb24sIHZpZXcgfSA9IGFyZ3NcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcblxuICAgICAgICB2aWV3Lm9uICdjYXI6cGhvdG86cmVtb3ZlJywgKHZpZXcsIGFyZ3MpIC0+XG4gICAgICAgICAgeyB2aWV3LCBtb2RlbCwgY29sbGVjdGlvbiB9ID0gYXJnc1xuICAgICAgICAgIGNhci5nZXQoXCJwaG90b3NcIikucmVtb3ZlIG1vZGVsXG5cbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdmb3JtUmVnaW9uJywgdmlld1xuXG4gIEFwcC5DYXIuQ3JlYXRlLkNvbnRyb2xsZXJcbiJdfQ==
