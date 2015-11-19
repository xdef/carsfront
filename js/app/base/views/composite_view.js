var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app"], function(App) {
  return App.module("Views", function(Views, App, Backbone, Mn, $, _) {
    return Views.CompositeView = (function(superClass) {
      extend(CompositeView, superClass);

      function CompositeView() {
        return CompositeView.__super__.constructor.apply(this, arguments);
      }

      CompositeView.prototype.render = function() {
        var result;
        result = CompositeView.__super__.render.apply(this, arguments);
        if (this.model && this.model instanceof Backbone.Model) {
          this.stickit();
          this.model.on('invalid', this.validationError, this);
        }
        if ((this.collection != null) && this.collection instanceof Backbone.Collection) {
          if (this.$el.hasClass('loading')) {
            this.collection.on('sync:stop', (function(_this) {
              return function() {
                return _this.$el.removeClass('loading');
              };
            })(this));
          }
        }
        return result;
      };

      return CompositeView;

    })(Mn.CompositeView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL3ZpZXdzL2NvbXBvc2l0ZV92aWV3LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELENBQVAsRUFBb0IsU0FBQyxHQUFEO1NBRWxCLEdBQUcsQ0FBQyxNQUFKLENBQVcsT0FBWCxFQUFvQixTQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsUUFBYixFQUF1QixFQUF2QixFQUEyQixDQUEzQixFQUE4QixDQUE5QjtXQUVaLEtBQUssQ0FBQzs7Ozs7Ozs4QkFFVixNQUFBLEdBQVEsU0FBQTtBQUVOLFlBQUE7UUFBQSxNQUFBLEdBQVMsMkNBQUEsU0FBQTtRQUdULElBQUcsSUFBQyxDQUFBLEtBQUQsSUFBVyxJQUFDLENBQUEsS0FBRCxZQUFrQixRQUFRLENBQUMsS0FBekM7VUFDRSxJQUFDLENBQUEsT0FBRCxDQUFBO1VBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLENBQVUsU0FBVixFQUFxQixJQUFDLENBQUEsZUFBdEIsRUFBdUMsSUFBdkMsRUFGRjs7UUFJQSxJQUFHLHlCQUFBLElBQWlCLElBQUMsQ0FBQSxVQUFELFlBQXVCLFFBQVEsQ0FBQyxVQUFwRDtVQUNFLElBQUcsSUFBQyxDQUFBLEdBQUcsQ0FBQyxRQUFMLENBQWMsU0FBZCxDQUFIO1lBQ0UsSUFBQyxDQUFBLFVBQVUsQ0FBQyxFQUFaLENBQWUsV0FBZixFQUE0QixDQUFBLFNBQUEsS0FBQTtxQkFBQSxTQUFBO3VCQUMxQixLQUFDLENBQUEsR0FBRyxDQUFDLFdBQUwsQ0FBaUIsU0FBakI7Y0FEMEI7WUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTVCLEVBREY7V0FERjs7ZUFNQTtNQWZNOzs7O09BRndCLEVBQUUsQ0FBQztFQUZuQixDQUFwQjtBQUZrQixDQUFwQiIsImZpbGUiOiJhcHAvYmFzZS92aWV3cy9jb21wb3NpdGVfdmlldy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXCJhcHAvYXBwXCJdLCAoQXBwKSAtPlxuXG4gIEFwcC5tb2R1bGUgXCJWaWV3c1wiLCAoVmlld3MsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgVmlld3MuQ29tcG9zaXRlVmlldyBleHRlbmRzIE1uLkNvbXBvc2l0ZVZpZXdcblxuICAgICAgcmVuZGVyOiAtPlxuICAgICAgICAjIEludm9rZSBvcmlnaW5hbCByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgcmVzdWx0ID0gc3VwZXJcblxuICAgICAgICAjIEFwcGx5IHN0aWNraXQsIGxpc3RlbiBlcnJvcnNcbiAgICAgICAgaWYgQG1vZGVsIGFuZCBAbW9kZWwgaW5zdGFuY2VvZiBCYWNrYm9uZS5Nb2RlbFxuICAgICAgICAgIEBzdGlja2l0KClcbiAgICAgICAgICBAbW9kZWwub24gJ2ludmFsaWQnLCBAdmFsaWRhdGlvbkVycm9yLCBAXG5cbiAgICAgICAgaWYgQGNvbGxlY3Rpb24/IGFuZCBAY29sbGVjdGlvbiBpbnN0YW5jZW9mIEJhY2tib25lLkNvbGxlY3Rpb25cbiAgICAgICAgICBpZiBAJGVsLmhhc0NsYXNzKCdsb2FkaW5nJylcbiAgICAgICAgICAgIEBjb2xsZWN0aW9uLm9uICdzeW5jOnN0b3AnLCA9PlxuICAgICAgICAgICAgICBAJGVsLnJlbW92ZUNsYXNzKCdsb2FkaW5nJylcblxuICAgICAgICAjIFJldHVybiByZW5kZXIgcmVzdWx0XG4gICAgICAgIHJlc3VsdFxuIl19
