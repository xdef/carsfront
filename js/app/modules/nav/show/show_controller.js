var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', './show_view'], function(App) {
  App.module("Nav.Show", function(Show, App, Backbone, Mn, $, _) {
    return Show.Controller = (function(superClass) {
      extend(Controller, superClass);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        this.region = options.region;
        this.layout = this.getLayoutView();
        this.layout.on("before:show", (function(_this) {
          return function() {
            return _this.getMenuView();
          };
        })(this));
        return this.region.show(this.layout);
      };

      Controller.prototype.getLayoutView = function() {
        return new Show.Layout;
      };

      Controller.prototype.getMenuView = function() {
        var view;
        view = new Show.Menu;
        return this.layout.menuRegion.show(view);
      };

      Controller.prototype.getDescriptionView = function() {
        var view;
        view = new Show.Description;
        return this.layout.descriptionRegion.show(view);
      };

      return Controller;

    })(App.Controllers.Base);
  });
  return App.Nav.Show.Controller;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL25hdi9zaG93L3Nob3dfY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGFBQVosQ0FBUCxFQUFtQyxTQUFDLEdBQUQ7RUFFakMsR0FBRyxDQUFDLE1BQUosQ0FBVyxVQUFYLEVBQXVCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO1dBRWYsSUFBSSxDQUFDOzs7Ozs7OzJCQUNULFVBQUEsR0FBWSxTQUFDLE9BQUQ7UUFDUixJQUFDLENBQUEsU0FBVyxRQUFYO1FBQ0gsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsYUFBRCxDQUFBO1FBRVYsSUFBQyxDQUFBLE1BQU0sQ0FBQyxFQUFSLENBQVcsYUFBWCxFQUEwQixDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO21CQUN4QixLQUFDLENBQUEsV0FBRCxDQUFBO1VBRHdCO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQjtlQUlBLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQUMsQ0FBQSxNQUFkO01BUlU7OzJCQVVaLGFBQUEsR0FBZSxTQUFBO2VBQ2IsSUFBSSxJQUFJLENBQUM7TUFESTs7MkJBR2YsV0FBQSxHQUFhLFNBQUE7QUFDWCxZQUFBO1FBQUEsSUFBQSxHQUFPLElBQUksSUFBSSxDQUFDO2VBQ2hCLElBQUMsQ0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQW5CLENBQXdCLElBQXhCO01BRlc7OzJCQUliLGtCQUFBLEdBQW9CLFNBQUE7QUFDbEIsWUFBQTtRQUFBLElBQUEsR0FBTyxJQUFJLElBQUksQ0FBQztlQUNoQixJQUFDLENBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQTFCLENBQStCLElBQS9CO01BRmtCOzs7O09BbEJRLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFGekIsQ0FBdkI7U0F3QkEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUExQm9CLENBQW5DIiwiZmlsZSI6ImFwcC9tb2R1bGVzL25hdi9zaG93L3Nob3dfY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbJ2FwcC9hcHAnLCAnLi9zaG93X3ZpZXcnXSwgKEFwcCkgLT5cblxuICBBcHAubW9kdWxlIFwiTmF2LlNob3dcIiwgKFNob3csIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgU2hvdy5Db250cm9sbGVyIGV4dGVuZHMgQXBwLkNvbnRyb2xsZXJzLkJhc2VcbiAgICAgIGluaXRpYWxpemU6IChvcHRpb25zKSAtPlxuICAgICAgICB7IEByZWdpb24gfSA9IG9wdGlvbnNcbiAgICAgICAgQGxheW91dCA9IEBnZXRMYXlvdXRWaWV3KClcblxuICAgICAgICBAbGF5b3V0Lm9uIFwiYmVmb3JlOnNob3dcIiwgPT5cbiAgICAgICAgICBAZ2V0TWVudVZpZXcoKVxuICAgICAgICAgICMgQGdldERlc2NyaXB0aW9uVmlldygpXG5cbiAgICAgICAgQHJlZ2lvbi5zaG93IEBsYXlvdXRcblxuICAgICAgZ2V0TGF5b3V0VmlldzogLT5cbiAgICAgICAgbmV3IFNob3cuTGF5b3V0XG5cbiAgICAgIGdldE1lbnVWaWV3OiAtPlxuICAgICAgICB2aWV3ID0gbmV3IFNob3cuTWVudVxuICAgICAgICBAbGF5b3V0Lm1lbnVSZWdpb24uc2hvdyB2aWV3XG5cbiAgICAgIGdldERlc2NyaXB0aW9uVmlldzogLT5cbiAgICAgICAgdmlldyA9IG5ldyBTaG93LkRlc2NyaXB0aW9uXG4gICAgICAgIEBsYXlvdXQuZGVzY3JpcHRpb25SZWdpb24uc2hvdyB2aWV3XG5cbiAgQXBwLk5hdi5TaG93LkNvbnRyb2xsZXJcbiJdfQ==
