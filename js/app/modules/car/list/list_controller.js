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
        filter.on('change', function(model) {
          return App.commands.execute("car:entities:refresh", cars, model);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9saXN0L2xpc3RfY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGtCQUFaLEVBQWdDLGFBQWhDLENBQVAsRUFBdUQsU0FBQyxHQUFEO0VBRXJELEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksUUFBWixFQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QjtXQUVmLElBQUksQ0FBQzs7Ozs7OzsyQkFDVCxVQUFBLEdBQVksU0FBQyxPQUFEO0FBQ1YsWUFBQTtRQUFFLElBQUMsQ0FBQSxTQUFXLFFBQVg7UUFDSCxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxhQUFELENBQUE7UUFFVixNQUFBLEdBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFYLENBQW1CLGVBQW5CO1FBQ1QsSUFBQSxHQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBWCxDQUFtQixjQUFuQjtRQUVQLElBQUMsQ0FBQSxNQUFNLENBQUMsRUFBUixDQUFXLGFBQVgsRUFBMEIsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQTtZQUN4QixLQUFDLENBQUEsV0FBRCxDQUFhLE1BQWIsRUFBcUIsSUFBckI7bUJBRUEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFiLENBQXFCLGNBQXJCLEVBQXFDLElBQXJDLEVBQTJDLFNBQUE7cUJBQ3pDLEtBQUMsQ0FBQSxXQUFELENBQWEsSUFBYjtZQUR5QyxDQUEzQztVQUh3QjtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUI7ZUFNQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFDLENBQUEsTUFBZDtNQWJVOzsyQkFlWixhQUFBLEdBQWUsU0FBQTtlQUNiLElBQUksSUFBSSxDQUFDO01BREk7OzJCQUdmLFdBQUEsR0FBYSxTQUFDLE1BQUQsRUFBUyxJQUFUO0FBQ1gsWUFBQTtRQUFBLElBQUEsR0FBVyxJQUFBLElBQUksQ0FBQyxJQUFMLENBQ1Q7VUFBQSxLQUFBLEVBQU8sTUFBUDtTQURTO1FBR1gsTUFBTSxDQUFDLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFNBQUMsS0FBRDtpQkFDbEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFiLENBQXFCLHNCQUFyQixFQUE2QyxJQUE3QyxFQUFtRCxLQUFuRDtRQURrQixDQUFwQjtlQUdBLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFzQixZQUF0QixFQUFvQyxJQUFwQztNQVBXOzsyQkFTYixXQUFBLEdBQWEsU0FBQyxJQUFEO0FBQ1gsWUFBQTtRQUFBLElBQUEsR0FBVyxJQUFBLElBQUksQ0FBQyxJQUFMLENBQ1Q7VUFBQSxVQUFBLEVBQVksSUFBWjtTQURTO1FBR1gsSUFBSSxDQUFDLEVBQUwsQ0FBUSxZQUFSLEVBQXNCLFNBQUMsSUFBRDtBQUNwQixjQUFBO1VBQUUsYUFBQSxLQUFGLEVBQVMsa0JBQUEsVUFBVCxFQUFxQixZQUFBO2lCQUNyQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDLEtBQTNDO1FBRm9CLENBQXRCO2VBSUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxhQUFSLENBQXNCLFlBQXRCLEVBQW9DLElBQXBDO01BUlc7Ozs7T0E1QmUsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUZ6QixDQUF2QjtTQXdDQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQTFDd0MsQ0FBdkQiLCJmaWxlIjoiYXBwL21vZHVsZXMvY2FyL2xpc3QvbGlzdF9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIiwgXCJiYXNlLmNvbnRyb2xsZXJzXCIsIFwiLi9saXN0X3ZpZXdcIl0sIChBcHApLT5cblxuICBBcHAubW9kdWxlIFwiQ2FyLkxpc3RcIiwgKExpc3QsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgTGlzdC5Db250cm9sbGVyIGV4dGVuZHMgQXBwLkNvbnRyb2xsZXJzLkJhc2VcbiAgICAgIGluaXRpYWxpemU6IChvcHRpb25zKSAtPlxuICAgICAgICB7IEByZWdpb24gfSA9IG9wdGlvbnNcbiAgICAgICAgQGxheW91dCA9IEBnZXRMYXlvdXRWaWV3KClcblxuICAgICAgICBmaWx0ZXIgPSBBcHAucmVxcmVzLnJlcXVlc3QgJ2ZpbHRlcjplbnRpdHknXG4gICAgICAgIGNhcnMgPSBBcHAucmVxcmVzLnJlcXVlc3QgJ2NhcjplbnRpdGllcydcblxuICAgICAgICBAbGF5b3V0Lm9uIFwiYmVmb3JlOnNob3dcIiwgPT5cbiAgICAgICAgICBAZ2V0TWVudVZpZXcgZmlsdGVyLCBjYXJzXG5cbiAgICAgICAgICBBcHAuY29tbWFuZHMuZXhlY3V0ZSAnd2hlbjpmZXRjaGVkJywgY2FycywgPT5cbiAgICAgICAgICAgIEBnZXRDYXJzVmlldyBjYXJzXG5cbiAgICAgICAgQHJlZ2lvbi5zaG93IEBsYXlvdXRcblxuICAgICAgZ2V0TGF5b3V0VmlldzogLT5cbiAgICAgICAgbmV3IExpc3QuTGF5b3V0XG5cbiAgICAgIGdldE1lbnVWaWV3OiAoZmlsdGVyLCBjYXJzKSAtPlxuICAgICAgICB2aWV3ID0gbmV3IExpc3QuTWVudVxuICAgICAgICAgIG1vZGVsOiBmaWx0ZXJcblxuICAgICAgICBmaWx0ZXIub24gJ2NoYW5nZScsIChtb2RlbCkgLT5cbiAgICAgICAgICBBcHAuY29tbWFuZHMuZXhlY3V0ZSBcImNhcjplbnRpdGllczpyZWZyZXNoXCIsIGNhcnMsIG1vZGVsXG5cbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdtZW51UmVnaW9uJywgdmlld1xuXG4gICAgICBnZXRDYXJzVmlldzogKGNhcnMpIC0+XG4gICAgICAgIHZpZXcgPSBuZXcgTGlzdC5DYXJzXG4gICAgICAgICAgY29sbGVjdGlvbjogY2Fyc1xuXG4gICAgICAgIHZpZXcub24gJ2NhcjpkZWxldGUnLCAoYXJncykgLT5cbiAgICAgICAgICB7IG1vZGVsLCBjb2xsZWN0aW9uLCB2aWV3IH0gPSBhcmdzXG4gICAgICAgICAgQXBwLmNvbW1hbmRzLmV4ZWN1dGUgJ2NhcjplbnRpdHk6ZGVzdHJveScsIG1vZGVsXG5cbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdsaXN0UmVnaW9uJywgdmlld1xuXG4gIEFwcC5DYXIuTGlzdC5Db250cm9sbGVyXG4iXX0=
