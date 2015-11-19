var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app", "base.controllers", "./show_view"], function(App) {
  App.module("Car.Show", function(Show, App, Backbone, Mn, $, _) {
    return Show.Controller = (function(superClass) {
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
            _this.getHeaderView(car);
            return _this.getDescriptionView(car);
          };
        })(this));
        return this.region.show(this.layout);
      };

      Controller.prototype.getLayoutView = function() {
        return new Show.Layout;
      };

      Controller.prototype.getHeaderView = function(car) {
        var view;
        view = new Show.Header({
          model: car
        });
        view.on('car:delete', function(args) {
          var collection, model;
          model = args.model, collection = args.collection, view = args.view;
          return App.commands.execute('car:entity:destroy', model);
        });
        return this.layout.showChildView('headerRegion', view);
      };

      Controller.prototype.getDescriptionView = function(car) {
        var view;
        view = new Show.Description({
          model: car
        });
        return this.layout.showChildView('descriptionRegion', view);
      };

      return Controller;

    })(App.Controllers.Base);
  });
  return App.Car.Show.Controller;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9zaG93L3Nob3dfY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGtCQUFaLEVBQWdDLGFBQWhDLENBQVAsRUFBdUQsU0FBQyxHQUFEO0VBRXJELEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksUUFBWixFQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QjtXQUVmLElBQUksQ0FBQzs7Ozs7OzsyQkFDVCxVQUFBLEdBQVksU0FBQyxPQUFEO0FBQ1YsWUFBQTtRQUFFLGFBQUEsRUFBRixFQUFNLElBQUMsQ0FBQSxpQkFBQTtRQUNQLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLGFBQUQsQ0FBQTtRQUVWLEdBQUEsR0FBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQVgsQ0FBbUIsWUFBbkIsRUFBaUMsRUFBakM7UUFFTixJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxhQUFYLEVBQTBCLENBQUEsU0FBQSxLQUFBO2lCQUFBLFNBQUE7WUFDeEIsS0FBQyxDQUFBLGFBQUQsQ0FBZSxHQUFmO21CQUNBLEtBQUMsQ0FBQSxrQkFBRCxDQUFvQixHQUFwQjtVQUZ3QjtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUI7ZUFJQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFDLENBQUEsTUFBZDtNQVZVOzsyQkFZWixhQUFBLEdBQWUsU0FBQTtlQUNiLElBQUksSUFBSSxDQUFDO01BREk7OzJCQUdmLGFBQUEsR0FBZSxTQUFDLEdBQUQ7QUFDYixZQUFBO1FBQUEsSUFBQSxHQUFXLElBQUEsSUFBSSxDQUFDLE1BQUwsQ0FDVDtVQUFBLEtBQUEsRUFBTyxHQUFQO1NBRFM7UUFHWCxJQUFJLENBQUMsRUFBTCxDQUFRLFlBQVIsRUFBc0IsU0FBQyxJQUFEO0FBQ3BCLGNBQUE7VUFBRSxhQUFBLEtBQUYsRUFBUyxrQkFBQSxVQUFULEVBQXFCLFlBQUE7aUJBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBYixDQUFxQixvQkFBckIsRUFBMkMsS0FBM0M7UUFGb0IsQ0FBdEI7ZUFJQSxJQUFDLENBQUEsTUFBTSxDQUFDLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0MsSUFBdEM7TUFSYTs7MkJBVWYsa0JBQUEsR0FBb0IsU0FBQyxHQUFEO0FBQ2xCLFlBQUE7UUFBQSxJQUFBLEdBQVcsSUFBQSxJQUFJLENBQUMsV0FBTCxDQUNUO1VBQUEsS0FBQSxFQUFPLEdBQVA7U0FEUztlQUdYLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFzQixtQkFBdEIsRUFBMkMsSUFBM0M7TUFKa0I7Ozs7T0ExQlEsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUZ6QixDQUF2QjtTQWtDQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQXBDd0MsQ0FBdkQiLCJmaWxlIjoiYXBwL21vZHVsZXMvY2FyL3Nob3cvc2hvd19jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIiwgXCJiYXNlLmNvbnRyb2xsZXJzXCIsIFwiLi9zaG93X3ZpZXdcIl0sIChBcHApLT5cblxuICBBcHAubW9kdWxlIFwiQ2FyLlNob3dcIiwgKFNob3csIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgU2hvdy5Db250cm9sbGVyIGV4dGVuZHMgQXBwLkNvbnRyb2xsZXJzLkJhc2VcbiAgICAgIGluaXRpYWxpemU6IChvcHRpb25zKSAtPlxuICAgICAgICB7IGlkLCBAcmVnaW9uIH0gPSBvcHRpb25zXG4gICAgICAgIEBsYXlvdXQgPSBAZ2V0TGF5b3V0VmlldygpXG5cbiAgICAgICAgY2FyID0gQXBwLnJlcXJlcy5yZXF1ZXN0ICdjYXI6ZW50aXR5JywgaWRcblxuICAgICAgICBAbGF5b3V0Lm9uIFwiYmVmb3JlOnNob3dcIiwgPT5cbiAgICAgICAgICBAZ2V0SGVhZGVyVmlldyBjYXJcbiAgICAgICAgICBAZ2V0RGVzY3JpcHRpb25WaWV3IGNhclxuXG4gICAgICAgIEByZWdpb24uc2hvdyBAbGF5b3V0XG5cbiAgICAgIGdldExheW91dFZpZXc6IC0+XG4gICAgICAgIG5ldyBTaG93LkxheW91dFxuXG4gICAgICBnZXRIZWFkZXJWaWV3OiAoY2FyKSAtPlxuICAgICAgICB2aWV3ID0gbmV3IFNob3cuSGVhZGVyXG4gICAgICAgICAgbW9kZWw6IGNhclxuXG4gICAgICAgIHZpZXcub24gJ2NhcjpkZWxldGUnLCAoYXJncykgLT5cbiAgICAgICAgICB7IG1vZGVsLCBjb2xsZWN0aW9uLCB2aWV3IH0gPSBhcmdzXG4gICAgICAgICAgQXBwLmNvbW1hbmRzLmV4ZWN1dGUgJ2NhcjplbnRpdHk6ZGVzdHJveScsIG1vZGVsXG5cbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdoZWFkZXJSZWdpb24nLCB2aWV3XG5cbiAgICAgIGdldERlc2NyaXB0aW9uVmlldzogKGNhcikgLT5cbiAgICAgICAgdmlldyA9IG5ldyBTaG93LkRlc2NyaXB0aW9uXG4gICAgICAgICAgbW9kZWw6IGNhclxuXG4gICAgICAgIEBsYXlvdXQuc2hvd0NoaWxkVmlldyAnZGVzY3JpcHRpb25SZWdpb24nLCB2aWV3XG5cbiAgQXBwLkNhci5TaG93LkNvbnRyb2xsZXJcbiJdfQ==
