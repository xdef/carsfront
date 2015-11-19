var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app"], function(App) {
  return App.module("Views", function(Views, App, Backbone, Mn, $, _) {
    return Views.ItemView = (function(superClass) {
      extend(ItemView, superClass);

      function ItemView() {
        return ItemView.__super__.constructor.apply(this, arguments);
      }

      ItemView.prototype.render = function() {
        var result;
        result = ItemView.__super__.render.apply(this, arguments);
        if (this.model && this.model instanceof Backbone.Model) {
          this.stickit();
          this.model.on('invalid', this.validationError, this);
        }
        return result;
      };

      return ItemView;

    })(Mn.ItemView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL3ZpZXdzL2l0ZW1fdmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxDQUFQLEVBQW9CLFNBQUMsR0FBRDtTQUVsQixHQUFHLENBQUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsU0FBQyxLQUFELEVBQVEsR0FBUixFQUFhLFFBQWIsRUFBdUIsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUI7V0FFWixLQUFLLENBQUM7Ozs7Ozs7eUJBRVYsTUFBQSxHQUFRLFNBQUE7QUFFTixZQUFBO1FBQUEsTUFBQSxHQUFTLHNDQUFBLFNBQUE7UUFHVCxJQUFHLElBQUMsQ0FBQSxLQUFELElBQVcsSUFBQyxDQUFBLEtBQUQsWUFBa0IsUUFBUSxDQUFDLEtBQXpDO1VBQ0UsSUFBQyxDQUFBLE9BQUQsQ0FBQTtVQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBUCxDQUFVLFNBQVYsRUFBcUIsSUFBQyxDQUFBLGVBQXRCLEVBQXVDLElBQXZDLEVBRkY7O2VBS0E7TUFWTTs7OztPQUZtQixFQUFFLENBQUM7RUFGZCxDQUFwQjtBQUZrQixDQUFwQiIsImZpbGUiOiJhcHAvYmFzZS92aWV3cy9pdGVtX3ZpZXcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgW1wiYXBwL2FwcFwiXSwgKEFwcCkgLT5cblxuICBBcHAubW9kdWxlIFwiVmlld3NcIiwgKFZpZXdzLCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIFZpZXdzLkl0ZW1WaWV3IGV4dGVuZHMgTW4uSXRlbVZpZXdcblxuICAgICAgcmVuZGVyOiAtPlxuICAgICAgICAjIEludm9rZSBvcmlnaW5hbCByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgcmVzdWx0ID0gc3VwZXJcblxuICAgICAgICAjIEFwcGx5IHN0aWNraXQsIGxpc3RlbiBlcnJvcnNcbiAgICAgICAgaWYgQG1vZGVsIGFuZCBAbW9kZWwgaW5zdGFuY2VvZiBCYWNrYm9uZS5Nb2RlbFxuICAgICAgICAgIEBzdGlja2l0KClcbiAgICAgICAgICBAbW9kZWwub24gJ2ludmFsaWQnLCBAdmFsaWRhdGlvbkVycm9yLCBAXG5cbiAgICAgICAgIyBSZXR1cm4gcmVuZGVyIHJlc3VsdFxuICAgICAgICByZXN1bHRcbiJdfQ==
