var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app"], function(App) {
  return App.module("Views", function(Views, App, Backbone, Mn, $, _) {
    return Views.LayoutView = (function(superClass) {
      extend(LayoutView, superClass);

      function LayoutView() {
        return LayoutView.__super__.constructor.apply(this, arguments);
      }

      LayoutView.prototype.render = function() {
        var result;
        result = LayoutView.__super__.render.apply(this, arguments);
        if (this.model && this.model instanceof Backbone.Model) {
          this.stickit();
          this.model.on('invalid', this.validationError, this);
        }
        return result;
      };

      return LayoutView;

    })(Mn.LayoutView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL3ZpZXdzL2xheW91dF92aWV3LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELENBQVAsRUFBb0IsU0FBQyxHQUFEO1NBRWxCLEdBQUcsQ0FBQyxNQUFKLENBQVcsT0FBWCxFQUFvQixTQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsUUFBYixFQUF1QixFQUF2QixFQUEyQixDQUEzQixFQUE4QixDQUE5QjtXQUVaLEtBQUssQ0FBQzs7Ozs7OzsyQkFFVixNQUFBLEdBQVEsU0FBQTtBQUVOLFlBQUE7UUFBQSxNQUFBLEdBQVMsd0NBQUEsU0FBQTtRQUdULElBQUcsSUFBQyxDQUFBLEtBQUQsSUFBVyxJQUFDLENBQUEsS0FBRCxZQUFrQixRQUFRLENBQUMsS0FBekM7VUFDRSxJQUFDLENBQUEsT0FBRCxDQUFBO1VBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLENBQVUsU0FBVixFQUFxQixJQUFDLENBQUEsZUFBdEIsRUFBdUMsSUFBdkMsRUFGRjs7ZUFLQTtNQVZNOzs7O09BRnFCLEVBQUUsQ0FBQztFQUZoQixDQUFwQjtBQUZrQixDQUFwQiIsImZpbGUiOiJhcHAvYmFzZS92aWV3cy9sYXlvdXRfdmlldy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXCJhcHAvYXBwXCJdLCAoQXBwKSAtPlxuXG4gIEFwcC5tb2R1bGUgXCJWaWV3c1wiLCAoVmlld3MsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgVmlld3MuTGF5b3V0VmlldyBleHRlbmRzIE1uLkxheW91dFZpZXdcblxuICAgICAgcmVuZGVyOiAtPlxuICAgICAgICAjIEludm9rZSBvcmlnaW5hbCByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgcmVzdWx0ID0gc3VwZXJcblxuICAgICAgICAjIEFwcGx5IHN0aWNraXQsIGxpc3RlbiBlcnJvcnNcbiAgICAgICAgaWYgQG1vZGVsIGFuZCBAbW9kZWwgaW5zdGFuY2VvZiBCYWNrYm9uZS5Nb2RlbFxuICAgICAgICAgIEBzdGlja2l0KClcbiAgICAgICAgICBAbW9kZWwub24gJ2ludmFsaWQnLCBAdmFsaWRhdGlvbkVycm9yLCBAXG5cbiAgICAgICAgIyBSZXR1cm4gcmVuZGVyIHJlc3VsdFxuICAgICAgICByZXN1bHRcbiJdfQ==
