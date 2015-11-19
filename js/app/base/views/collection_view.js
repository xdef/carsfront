var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app"], function(App) {
  return App.module("Views", function(Views, App, Backbone, Mn, $, _) {
    return Views.CollectionView = (function(superClass) {
      extend(CollectionView, superClass);

      function CollectionView() {
        return CollectionView.__super__.constructor.apply(this, arguments);
      }

      return CollectionView;

    })(Mn.CollectionView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL3ZpZXdzL2NvbGxlY3Rpb25fdmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxDQUFQLEVBQW9CLFNBQUMsR0FBRDtTQUVsQixHQUFHLENBQUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsU0FBQyxLQUFELEVBQVEsR0FBUixFQUFhLFFBQWIsRUFBdUIsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUI7V0FFWixLQUFLLENBQUM7Ozs7Ozs7OztPQUF1QixFQUFFLENBQUM7RUFGcEIsQ0FBcEI7QUFGa0IsQ0FBcEIiLCJmaWxlIjoiYXBwL2Jhc2Uvdmlld3MvY29sbGVjdGlvbl92aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIl0sIChBcHApIC0+XG5cbiAgQXBwLm1vZHVsZSBcIlZpZXdzXCIsIChWaWV3cywgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBWaWV3cy5Db2xsZWN0aW9uVmlldyBleHRlbmRzIE1uLkNvbGxlY3Rpb25WaWV3XG5cbiJdfQ==
