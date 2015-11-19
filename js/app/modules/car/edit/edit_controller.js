var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app", "base.controllers", "./edit_view"], function(App) {
  App.module("Car.Edit", function(Edit, App, Backbone, Mn, $, _) {
    return Edit.Controller = (function(superClass) {
      extend(Controller, superClass);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        var car, id;
        id = options.id, this.region = options.region;
        this.layout = this.getLayoutView();
        car = App.reqres.request('car:entity', id);
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
        return new Edit.Layout;
      };

      Controller.prototype.getHeaderView = function() {
        var view;
        view = new Edit.Header;
        return this.layout.showChildView('headerRegion', view);
      };

      Controller.prototype.getHelpView = function() {
        var view;
        view = new Edit.Help;
        return this.layout.showChildView('helpRegion', view);
      };

      Controller.prototype.getFormView = function(car) {
        var view;
        view = new Edit.Form({
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
  return App.Car.Edit.Controller;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9lZGl0L2VkaXRfY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGtCQUFaLEVBQWdDLGFBQWhDLENBQVAsRUFBdUQsU0FBQyxHQUFEO0VBRXJELEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksUUFBWixFQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QjtXQUVmLElBQUksQ0FBQzs7Ozs7OzsyQkFDVCxVQUFBLEdBQVksU0FBQyxPQUFEO0FBQ1YsWUFBQTtRQUFFLGFBQUEsRUFBRixFQUFNLElBQUMsQ0FBQSxpQkFBQTtRQUNQLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLGFBQUQsQ0FBQTtRQUVWLEdBQUEsR0FBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQVgsQ0FBbUIsWUFBbkIsRUFBaUMsRUFBakM7UUFFTixJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxhQUFYLEVBQTBCLENBQUEsU0FBQSxLQUFBO2lCQUFBLFNBQUE7WUFDeEIsS0FBQyxDQUFBLGFBQUQsQ0FBQTtZQUNBLEtBQUMsQ0FBQSxXQUFELENBQUE7bUJBQ0EsS0FBQyxDQUFBLFdBQUQsQ0FBYSxHQUFiO1VBSHdCO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQjtlQUtBLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQUMsQ0FBQSxNQUFkO01BWFU7OzJCQWFaLGFBQUEsR0FBZSxTQUFBO2VBQ2IsSUFBSSxJQUFJLENBQUM7TUFESTs7MkJBR2YsYUFBQSxHQUFlLFNBQUE7QUFDYixZQUFBO1FBQUEsSUFBQSxHQUFPLElBQUksSUFBSSxDQUFDO2VBQ2hCLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFzQixjQUF0QixFQUFzQyxJQUF0QztNQUZhOzsyQkFJZixXQUFBLEdBQWEsU0FBQTtBQUNYLFlBQUE7UUFBQSxJQUFBLEdBQU8sSUFBSSxJQUFJLENBQUM7ZUFDaEIsSUFBQyxDQUFBLE1BQU0sQ0FBQyxhQUFSLENBQXNCLFlBQXRCLEVBQW9DLElBQXBDO01BRlc7OzJCQUliLFdBQUEsR0FBYSxTQUFDLEdBQUQ7QUFDWCxZQUFBO1FBQUEsSUFBQSxHQUFXLElBQUEsSUFBSSxDQUFDLElBQUwsQ0FDVDtVQUFBLEtBQUEsRUFBTyxHQUFQO1VBQ0EsVUFBQSxFQUFZLEdBQUcsQ0FBQyxHQUFKLENBQVEsUUFBUixDQURaO1NBRFM7UUFJWCxJQUFJLENBQUMsRUFBTCxDQUFRLFFBQVIsRUFBa0IsU0FBQyxJQUFEO0FBQ2hCLGNBQUE7VUFBRSxZQUFBLElBQUYsRUFBUSxhQUFBLEtBQVIsRUFBZSxrQkFBQTtpQkFDZixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQWIsQ0FBcUIsbUJBQXJCLEVBQTBDLEtBQTFDO1FBRmdCLENBQWxCO1FBSUEsSUFBSSxDQUFDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFNBQUMsSUFBRDtBQUNoQixjQUFBO1VBQUUsYUFBQSxLQUFGLEVBQVMsa0JBQUEsVUFBVCxFQUFxQixZQUFBO2lCQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsQ0FBQTtRQUZnQixDQUFsQjtRQUlBLElBQUksQ0FBQyxFQUFMLENBQVEsa0JBQVIsRUFBNEIsU0FBQyxJQUFELEVBQU8sSUFBUDtBQUMxQixjQUFBO1VBQUUsWUFBQSxJQUFGLEVBQVEsYUFBQSxLQUFSLEVBQWUsa0JBQUE7aUJBQ2YsR0FBRyxDQUFDLEdBQUosQ0FBUSxRQUFSLENBQWlCLENBQUMsTUFBbEIsQ0FBeUIsS0FBekI7UUFGMEIsQ0FBNUI7ZUFJQSxJQUFDLENBQUEsTUFBTSxDQUFDLGFBQVIsQ0FBc0IsWUFBdEIsRUFBb0MsSUFBcEM7TUFqQlc7Ozs7T0F6QmUsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUZ6QixDQUF2QjtTQThDQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQWhEd0MsQ0FBdkQiLCJmaWxlIjoiYXBwL21vZHVsZXMvY2FyL2VkaXQvZWRpdF9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIiwgXCJiYXNlLmNvbnRyb2xsZXJzXCIsIFwiLi9lZGl0X3ZpZXdcIl0sIChBcHApLT5cblxuICBBcHAubW9kdWxlIFwiQ2FyLkVkaXRcIiwgKEVkaXQsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgRWRpdC5Db250cm9sbGVyIGV4dGVuZHMgQXBwLkNvbnRyb2xsZXJzLkJhc2VcbiAgICAgIGluaXRpYWxpemU6IChvcHRpb25zKSAtPlxuICAgICAgICB7IGlkLCBAcmVnaW9uIH0gPSBvcHRpb25zXG4gICAgICAgIEBsYXlvdXQgPSBAZ2V0TGF5b3V0VmlldygpXG5cbiAgICAgICAgY2FyID0gQXBwLnJlcXJlcy5yZXF1ZXN0ICdjYXI6ZW50aXR5JywgaWRcblxuICAgICAgICBAbGF5b3V0Lm9uIFwiYmVmb3JlOnNob3dcIiwgPT5cbiAgICAgICAgICBAZ2V0SGVhZGVyVmlldygpXG4gICAgICAgICAgQGdldEhlbHBWaWV3KClcbiAgICAgICAgICBAZ2V0Rm9ybVZpZXcgY2FyXG5cbiAgICAgICAgQHJlZ2lvbi5zaG93IEBsYXlvdXRcblxuICAgICAgZ2V0TGF5b3V0VmlldzogLT5cbiAgICAgICAgbmV3IEVkaXQuTGF5b3V0XG5cbiAgICAgIGdldEhlYWRlclZpZXc6IC0+XG4gICAgICAgIHZpZXcgPSBuZXcgRWRpdC5IZWFkZXJcbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdoZWFkZXJSZWdpb24nLCB2aWV3XG5cbiAgICAgIGdldEhlbHBWaWV3OiAtPlxuICAgICAgICB2aWV3ID0gbmV3IEVkaXQuSGVscFxuICAgICAgICBAbGF5b3V0LnNob3dDaGlsZFZpZXcgJ2hlbHBSZWdpb24nLCB2aWV3XG5cbiAgICAgIGdldEZvcm1WaWV3OiAoY2FyKSAtPlxuICAgICAgICB2aWV3ID0gbmV3IEVkaXQuRm9ybVxuICAgICAgICAgIG1vZGVsOiBjYXJcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjYXIuZ2V0KCdwaG90b3MnKVxuXG4gICAgICAgIHZpZXcub24gJ3N1Ym1pdCcsIChhcmdzKSAtPlxuICAgICAgICAgIHsgdmlldywgbW9kZWwsIGNvbGxlY3Rpb24gfSA9IGFyZ3NcbiAgICAgICAgICBBcHAuY29tbWFuZHMuZXhlY3V0ZSAnY2FyOmVudGl0eTpjcmVhdGUnLCBtb2RlbFxuXG4gICAgICAgIHZpZXcub24gJ2NhbmNlbCcsIChhcmdzKSAtPlxuICAgICAgICAgIHsgbW9kZWwsIGNvbGxlY3Rpb24sIHZpZXcgfSA9IGFyZ3NcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcblxuICAgICAgICB2aWV3Lm9uICdjYXI6cGhvdG86cmVtb3ZlJywgKHZpZXcsIGFyZ3MpIC0+XG4gICAgICAgICAgeyB2aWV3LCBtb2RlbCwgY29sbGVjdGlvbiB9ID0gYXJnc1xuICAgICAgICAgIGNhci5nZXQoXCJwaG90b3NcIikucmVtb3ZlIG1vZGVsXG5cbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdmb3JtUmVnaW9uJywgdmlld1xuXG4gIEFwcC5DYXIuRWRpdC5Db250cm9sbGVyXG4iXX0=
