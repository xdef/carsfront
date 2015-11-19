var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app", "base.controllers", "./list_view"], function(App) {
  App.module("Car.List", function(List, App, Backbone, Mn, $, _) {
    return List.Controller = (function(superClass) {
      extend(Controller, superClass);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        var cars, filter;
        this.region = options.region;
        this.layout = this.getLayoutView();
        filter = App.reqres.request('filter:entity');
        cars = App.reqres.request('car:entities');
        this.layout.on("before:show", (function(_this) {
          return function() {
            _this.getMenuView(filter, cars);
            return App.commands.execute('when:fetched', cars, function() {
              return _this.getCarsView(cars);
            });
          };
        })(this));
        return this.region.show(this.layout);
      };

      Controller.prototype.getLayoutView = function() {
        return new List.Layout;
      };

      Controller.prototype.getMenuView = function(filter, cars) {
        var view;
        view = new List.Menu({
          model: filter
        });
        filter.on('change:sort_by change:direction', function(model) {
          return App.commands.execute("car:entities:resort", cars, model);
        });
        return this.layout.showChildView('menuRegion', view);
      };

      Controller.prototype.getCarsView = function(cars) {
        var view;
        view = new List.Cars({
          collection: cars
        });
        view.on('car:delete', function(args) {
          var collection, model;
          model = args.model, collection = args.collection, view = args.view;
          return App.commands.execute('car:entity:destroy', model);
        });
        return this.layout.showChildView('listRegion', view);
      };

      return Controller;

    })(App.Controllers.Base);
  });
  return App.Car.List.Controller;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9saXN0L2xpc3RfY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGtCQUFaLEVBQWdDLGFBQWhDLENBQVAsRUFBdUQsU0FBQyxHQUFEO0VBRXJELEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksUUFBWixFQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QjtXQUVmLElBQUksQ0FBQzs7Ozs7OzsyQkFDVCxVQUFBLEdBQVksU0FBQyxPQUFEO0FBQ1YsWUFBQTtRQUFFLElBQUMsQ0FBQSxTQUFXLFFBQVg7UUFDSCxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxhQUFELENBQUE7UUFFVixNQUFBLEdBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFYLENBQW1CLGVBQW5CO1FBQ1QsSUFBQSxHQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBWCxDQUFtQixjQUFuQjtRQUVQLElBQUMsQ0FBQSxNQUFNLENBQUMsRUFBUixDQUFXLGFBQVgsRUFBMEIsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQTtZQUN4QixLQUFDLENBQUEsV0FBRCxDQUFhLE1BQWIsRUFBcUIsSUFBckI7bUJBRUEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFiLENBQXFCLGNBQXJCLEVBQXFDLElBQXJDLEVBQTJDLFNBQUE7cUJBQ3pDLEtBQUMsQ0FBQSxXQUFELENBQWEsSUFBYjtZQUR5QyxDQUEzQztVQUh3QjtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUI7ZUFNQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFDLENBQUEsTUFBZDtNQWJVOzsyQkFlWixhQUFBLEdBQWUsU0FBQTtlQUNiLElBQUksSUFBSSxDQUFDO01BREk7OzJCQUdmLFdBQUEsR0FBYSxTQUFDLE1BQUQsRUFBUyxJQUFUO0FBQ1gsWUFBQTtRQUFBLElBQUEsR0FBVyxJQUFBLElBQUksQ0FBQyxJQUFMLENBQ1Q7VUFBQSxLQUFBLEVBQU8sTUFBUDtTQURTO1FBR1gsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQ0FBVixFQUE2QyxTQUFDLEtBQUQ7aUJBQzNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBYixDQUFxQixxQkFBckIsRUFBNEMsSUFBNUMsRUFBa0QsS0FBbEQ7UUFEMkMsQ0FBN0M7ZUFHQSxJQUFDLENBQUEsTUFBTSxDQUFDLGFBQVIsQ0FBc0IsWUFBdEIsRUFBb0MsSUFBcEM7TUFQVzs7MkJBU2IsV0FBQSxHQUFhLFNBQUMsSUFBRDtBQUNYLFlBQUE7UUFBQSxJQUFBLEdBQVcsSUFBQSxJQUFJLENBQUMsSUFBTCxDQUNUO1VBQUEsVUFBQSxFQUFZLElBQVo7U0FEUztRQUdYLElBQUksQ0FBQyxFQUFMLENBQVEsWUFBUixFQUFzQixTQUFDLElBQUQ7QUFDcEIsY0FBQTtVQUFFLGFBQUEsS0FBRixFQUFTLGtCQUFBLFVBQVQsRUFBcUIsWUFBQTtpQkFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFiLENBQXFCLG9CQUFyQixFQUEyQyxLQUEzQztRQUZvQixDQUF0QjtlQUlBLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFzQixZQUF0QixFQUFvQyxJQUFwQztNQVJXOzs7O09BNUJlLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFGekIsQ0FBdkI7U0F3Q0EsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUExQ3dDLENBQXZEIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2Nhci9saXN0L2xpc3RfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXCJhcHAvYXBwXCIsIFwiYmFzZS5jb250cm9sbGVyc1wiLCBcIi4vbGlzdF92aWV3XCJdLCAoQXBwKS0+XG5cbiAgQXBwLm1vZHVsZSBcIkNhci5MaXN0XCIsIChMaXN0LCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIExpc3QuQ29udHJvbGxlciBleHRlbmRzIEFwcC5Db250cm9sbGVycy5CYXNlXG4gICAgICBpbml0aWFsaXplOiAob3B0aW9ucykgLT5cbiAgICAgICAgeyBAcmVnaW9uIH0gPSBvcHRpb25zXG4gICAgICAgIEBsYXlvdXQgPSBAZ2V0TGF5b3V0VmlldygpXG5cbiAgICAgICAgZmlsdGVyID0gQXBwLnJlcXJlcy5yZXF1ZXN0ICdmaWx0ZXI6ZW50aXR5J1xuICAgICAgICBjYXJzID0gQXBwLnJlcXJlcy5yZXF1ZXN0ICdjYXI6ZW50aXRpZXMnXG5cbiAgICAgICAgQGxheW91dC5vbiBcImJlZm9yZTpzaG93XCIsID0+XG4gICAgICAgICAgQGdldE1lbnVWaWV3IGZpbHRlciwgY2Fyc1xuXG4gICAgICAgICAgQXBwLmNvbW1hbmRzLmV4ZWN1dGUgJ3doZW46ZmV0Y2hlZCcsIGNhcnMsID0+XG4gICAgICAgICAgICBAZ2V0Q2Fyc1ZpZXcgY2Fyc1xuXG4gICAgICAgIEByZWdpb24uc2hvdyBAbGF5b3V0XG5cbiAgICAgIGdldExheW91dFZpZXc6IC0+XG4gICAgICAgIG5ldyBMaXN0LkxheW91dFxuXG4gICAgICBnZXRNZW51VmlldzogKGZpbHRlciwgY2FycykgLT5cbiAgICAgICAgdmlldyA9IG5ldyBMaXN0Lk1lbnVcbiAgICAgICAgICBtb2RlbDogZmlsdGVyXG5cbiAgICAgICAgZmlsdGVyLm9uICdjaGFuZ2U6c29ydF9ieSBjaGFuZ2U6ZGlyZWN0aW9uJywgKG1vZGVsKSAtPlxuICAgICAgICAgIEFwcC5jb21tYW5kcy5leGVjdXRlIFwiY2FyOmVudGl0aWVzOnJlc29ydFwiLCBjYXJzLCBtb2RlbFxuXG4gICAgICAgIEBsYXlvdXQuc2hvd0NoaWxkVmlldyAnbWVudVJlZ2lvbicsIHZpZXdcblxuICAgICAgZ2V0Q2Fyc1ZpZXc6IChjYXJzKSAtPlxuICAgICAgICB2aWV3ID0gbmV3IExpc3QuQ2Fyc1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNhcnNcblxuICAgICAgICB2aWV3Lm9uICdjYXI6ZGVsZXRlJywgKGFyZ3MpIC0+XG4gICAgICAgICAgeyBtb2RlbCwgY29sbGVjdGlvbiwgdmlldyB9ID0gYXJnc1xuICAgICAgICAgIEFwcC5jb21tYW5kcy5leGVjdXRlICdjYXI6ZW50aXR5OmRlc3Ryb3knLCBtb2RlbFxuXG4gICAgICAgIEBsYXlvdXQuc2hvd0NoaWxkVmlldyAnbGlzdFJlZ2lvbicsIHZpZXdcblxuICBBcHAuQ2FyLkxpc3QuQ29udHJvbGxlclxuIl19
