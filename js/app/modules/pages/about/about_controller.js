var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app", "base.controllers", "./about_view"], function(App) {
  App.module("Pages.About", function(About, App, Backbone, Mn, $, _) {
    return About.Controller = (function(superClass) {
      extend(Controller, superClass);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        this.region = options.region;
        this.layout = this.getLayoutView();
        this.layout.on("before:show", (function(_this) {
          return function() {};
        })(this));
        return this.region.show(this.layout);
      };

      Controller.prototype.getLayoutView = function() {
        return new About.Layout;
      };

      return Controller;

    })(App.Controllers.Base);
  });
  return App.Pages.About.Controller;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3BhZ2VzL2Fib3V0L2Fib3V0X2NvbnRyb2xsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQUQsRUFBWSxrQkFBWixFQUFnQyxjQUFoQyxDQUFQLEVBQXdELFNBQUMsR0FBRDtFQUV0RCxHQUFHLENBQUMsTUFBSixDQUFXLGFBQVgsRUFBMEIsU0FBQyxLQUFELEVBQVEsR0FBUixFQUFhLFFBQWIsRUFBdUIsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUI7V0FFbEIsS0FBSyxDQUFDOzs7Ozs7OzJCQUNWLFVBQUEsR0FBWSxTQUFDLE9BQUQ7UUFDUixJQUFDLENBQUEsU0FBVyxRQUFYO1FBQ0gsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsYUFBRCxDQUFBO1FBRVYsSUFBQyxDQUFBLE1BQU0sQ0FBQyxFQUFSLENBQVcsYUFBWCxFQUEwQixDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBLEdBQUE7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCO2VBR0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBQyxDQUFBLE1BQWQ7TUFQVTs7MkJBU1osYUFBQSxHQUFlLFNBQUE7ZUFDYixJQUFJLEtBQUssQ0FBQztNQURHOzs7O09BVmMsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUZ2QixDQUExQjtTQWVBLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBakJzQyxDQUF4RCIsImZpbGUiOiJhcHAvbW9kdWxlcy9wYWdlcy9hYm91dC9hYm91dF9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIiwgXCJiYXNlLmNvbnRyb2xsZXJzXCIsIFwiLi9hYm91dF92aWV3XCJdLCAoQXBwKS0+XG5cbiAgQXBwLm1vZHVsZSBcIlBhZ2VzLkFib3V0XCIsIChBYm91dCwgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBBYm91dC5Db250cm9sbGVyIGV4dGVuZHMgQXBwLkNvbnRyb2xsZXJzLkJhc2VcbiAgICAgIGluaXRpYWxpemU6IChvcHRpb25zKSAtPlxuICAgICAgICB7IEByZWdpb24gfSA9IG9wdGlvbnNcbiAgICAgICAgQGxheW91dCA9IEBnZXRMYXlvdXRWaWV3KClcblxuICAgICAgICBAbGF5b3V0Lm9uIFwiYmVmb3JlOnNob3dcIiwgPT5cbiAgICAgICAgICAjXG5cbiAgICAgICAgQHJlZ2lvbi5zaG93IEBsYXlvdXRcblxuICAgICAgZ2V0TGF5b3V0VmlldzogLT5cbiAgICAgICAgbmV3IEFib3V0LkxheW91dFxuXG4gIEFwcC5QYWdlcy5BYm91dC5Db250cm9sbGVyXG4iXX0=
