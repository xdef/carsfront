var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

define(['app/app'], function(App) {
  return App.module("Car", function(Car, App, Backbone, Mn, $, _) {
    var API;
    Car.Router = (function(superClass) {
      extend(Router, superClass);

      function Router() {
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.appRoutes = {
        "!/car": "list",
        "!/car/create": "create",
        "!/car/:id": "show",
        "!/car/:id/edit": "edit",
        "!/car/.*": "list"
      };

      return Router;

    })(Mn.AppRouter);
    API = {
      list: function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return require(['app/modules/car/car_api'], function(Actions) {
          return Actions.list.apply(Actions, args);
        });
      },
      show: function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return require(['app/modules/car/car_api'], function(Actions) {
          return Actions.show.apply(Actions, args);
        });
      },
      create: function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return require(['app/modules/car/car_api'], function(Actions) {
          return Actions.create.apply(Actions, args);
        });
      },
      edit: function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return require(['app/modules/car/car_api'], function(Actions) {
          return Actions.edit.apply(Actions, args);
        });
      }
    };
    return Car.on("start", function(options) {
      if (options == null) {
        options = {};
      }
      return new Car.Router({
        controller: API
      });
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxDQUFQLEVBQW9CLFNBQUMsR0FBRDtTQUVsQixHQUFHLENBQUMsTUFBSixDQUFXLEtBQVgsRUFBa0IsU0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLFFBQVgsRUFBcUIsRUFBckIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUI7QUFFaEIsUUFBQTtJQUFNLEdBQUcsQ0FBQzs7Ozs7Ozt1QkFDUixTQUFBLEdBQ0U7UUFBQSxPQUFBLEVBQVMsTUFBVDtRQUNBLGNBQUEsRUFBZ0IsUUFEaEI7UUFFQSxXQUFBLEVBQWEsTUFGYjtRQUdBLGdCQUFBLEVBQWtCLE1BSGxCO1FBSUEsVUFBQSxFQUFZLE1BSlo7Ozs7O09BRnFCLEVBQUUsQ0FBQztJQVE1QixHQUFBLEdBQ0U7TUFBQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFlBQUE7UUFESztlQUNMLE9BQUEsQ0FBUSxDQUFDLHlCQUFELENBQVIsRUFBcUMsU0FBQyxPQUFEO2lCQUNuQyxPQUFPLENBQUMsSUFBUixnQkFBYSxJQUFiO1FBRG1DLENBQXJDO01BREksQ0FBTjtNQUlBLElBQUEsRUFBTSxTQUFBO0FBQ0osWUFBQTtRQURLO2VBQ0wsT0FBQSxDQUFRLENBQUMseUJBQUQsQ0FBUixFQUFxQyxTQUFDLE9BQUQ7aUJBQ25DLE9BQU8sQ0FBQyxJQUFSLGdCQUFhLElBQWI7UUFEbUMsQ0FBckM7TUFESSxDQUpOO01BUUEsTUFBQSxFQUFRLFNBQUE7QUFDTixZQUFBO1FBRE87ZUFDUCxPQUFBLENBQVEsQ0FBQyx5QkFBRCxDQUFSLEVBQXFDLFNBQUMsT0FBRDtpQkFDbkMsT0FBTyxDQUFDLE1BQVIsZ0JBQWUsSUFBZjtRQURtQyxDQUFyQztNQURNLENBUlI7TUFZQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFlBQUE7UUFESztlQUNMLE9BQUEsQ0FBUSxDQUFDLHlCQUFELENBQVIsRUFBcUMsU0FBQyxPQUFEO2lCQUNuQyxPQUFPLENBQUMsSUFBUixnQkFBYSxJQUFiO1FBRG1DLENBQXJDO01BREksQ0FaTjs7V0FnQkYsR0FBRyxDQUFDLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFNBQUMsT0FBRDs7UUFBQyxVQUFVOzthQUNyQixJQUFBLEdBQUcsQ0FBQyxNQUFKLENBQ0Y7UUFBQSxVQUFBLEVBQVksR0FBWjtPQURFO0lBRFUsQ0FBaEI7RUEzQmdCLENBQWxCO0FBRmtCLENBQXBCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2Nhci9tYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFsnYXBwL2FwcCddLCAoQXBwKSAtPlxuXG4gIEFwcC5tb2R1bGUgXCJDYXJcIiwgKENhciwgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBDYXIuUm91dGVyIGV4dGVuZHMgTW4uQXBwUm91dGVyXG4gICAgICBhcHBSb3V0ZXM6XG4gICAgICAgIFwiIS9jYXJcIjogXCJsaXN0XCJcbiAgICAgICAgXCIhL2Nhci9jcmVhdGVcIjogXCJjcmVhdGVcIlxuICAgICAgICBcIiEvY2FyLzppZFwiOiBcInNob3dcIlxuICAgICAgICBcIiEvY2FyLzppZC9lZGl0XCI6IFwiZWRpdFwiXG4gICAgICAgIFwiIS9jYXIvLipcIjogXCJsaXN0XCJcblxuICAgIEFQSSA9XG4gICAgICBsaXN0OiAoYXJncy4uLikgLT5cbiAgICAgICAgcmVxdWlyZSBbJ2FwcC9tb2R1bGVzL2Nhci9jYXJfYXBpJ10sIChBY3Rpb25zKSAtPlxuICAgICAgICAgIEFjdGlvbnMubGlzdChhcmdzLi4uKVxuXG4gICAgICBzaG93OiAoYXJncy4uLikgLT5cbiAgICAgICAgcmVxdWlyZSBbJ2FwcC9tb2R1bGVzL2Nhci9jYXJfYXBpJ10sIChBY3Rpb25zKSAtPlxuICAgICAgICAgIEFjdGlvbnMuc2hvdyhhcmdzLi4uKVxuXG4gICAgICBjcmVhdGU6IChhcmdzLi4uKSAtPlxuICAgICAgICByZXF1aXJlIFsnYXBwL21vZHVsZXMvY2FyL2Nhcl9hcGknXSwgKEFjdGlvbnMpIC0+XG4gICAgICAgICAgQWN0aW9ucy5jcmVhdGUoYXJncy4uLilcblxuICAgICAgZWRpdDogKGFyZ3MuLi4pIC0+XG4gICAgICAgIHJlcXVpcmUgWydhcHAvbW9kdWxlcy9jYXIvY2FyX2FwaSddLCAoQWN0aW9ucykgLT5cbiAgICAgICAgICBBY3Rpb25zLmVkaXQoYXJncy4uLilcblxuICAgIENhci5vbiBcInN0YXJ0XCIsIChvcHRpb25zID0ge30pIC0+XG4gICAgICBuZXcgQ2FyLlJvdXRlclxuICAgICAgICBjb250cm9sbGVyOiBBUElcbiJdfQ==
