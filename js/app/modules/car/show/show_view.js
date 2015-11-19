var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', './templates/layout', './templates/header', './templates/description'], function() {
  var App, Views;
  App = require('app/app');
  Views = require('base.views');
  return App.module('Car.Show', function(Show, App, Backbone, Mn, $, _) {
    Show.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'car/show/templates/layout';

      Layout.prototype.className = 'ui container';

      Layout.prototype.regions = {
        headerRegion: '#header-region',
        descriptionRegion: '#description-region'
      };

      return Layout;

    })(Views.LayoutView);
    Show.Header = (function(superClass) {
      extend(Header, superClass);

      function Header() {
        return Header.__super__.constructor.apply(this, arguments);
      }

      Header.prototype.template = 'car/show/templates/header';

      Header.prototype.className = 'ui basic segment';

      Header.prototype.ui = {
        destroyBtn: 'a.delete'
      };

      Header.prototype.triggers = {
        'click @ui.destroyBtn': 'car:delete'
      };

      return Header;

    })(Views.ItemView);
    return Show.Description = (function(superClass) {
      extend(Description, superClass);

      function Description() {
        return Description.__super__.constructor.apply(this, arguments);
      }

      Description.prototype.template = 'car/show/templates/description';

      Description.prototype.className = 'ui basic segment';

      return Description;

    })(Views.ItemView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9zaG93L3Nob3dfdmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQ0wsU0FESyxFQUVMLFlBRkssRUFHTCxvQkFISyxFQUlMLG9CQUpLLEVBS0wseUJBTEssQ0FBUCxFQU1HLFNBQUE7QUFDRCxNQUFBO0VBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSO0VBQ04sS0FBQSxHQUFRLE9BQUEsQ0FBUSxZQUFSO1NBRVIsR0FBRyxDQUFDLE1BQUosQ0FBVyxVQUFYLEVBQXVCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0lBRWYsSUFBSSxDQUFDOzs7Ozs7O3VCQUNULFFBQUEsR0FBVTs7dUJBQ1YsU0FBQSxHQUFXOzt1QkFFWCxPQUFBLEdBQ0U7UUFBQSxZQUFBLEVBQWMsZ0JBQWQ7UUFDQSxpQkFBQSxFQUFtQixxQkFEbkI7Ozs7O09BTHNCLEtBQUssQ0FBQztJQVExQixJQUFJLENBQUM7Ozs7Ozs7dUJBQ1QsUUFBQSxHQUFVOzt1QkFDVixTQUFBLEdBQVc7O3VCQUVYLEVBQUEsR0FDRTtRQUFBLFVBQUEsRUFBWSxVQUFaOzs7dUJBRUYsUUFBQSxHQUNFO1FBQUEsc0JBQUEsRUFBd0IsWUFBeEI7Ozs7O09BUnNCLEtBQUssQ0FBQztXQVUxQixJQUFJLENBQUM7Ozs7Ozs7NEJBQ1QsUUFBQSxHQUFVOzs0QkFDVixTQUFBLEdBQVc7Ozs7T0FGa0IsS0FBSyxDQUFDO0VBcEJoQixDQUF2QjtBQUpDLENBTkgiLCJmaWxlIjoiYXBwL21vZHVsZXMvY2FyL3Nob3cvc2hvd192aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcbiAgJ2FwcC9hcHAnXG4gICdiYXNlLnZpZXdzJ1xuICAnLi90ZW1wbGF0ZXMvbGF5b3V0J1xuICAnLi90ZW1wbGF0ZXMvaGVhZGVyJ1xuICAnLi90ZW1wbGF0ZXMvZGVzY3JpcHRpb24nXG5dLCAoKSAtPlxuICBBcHAgPSByZXF1aXJlICdhcHAvYXBwJ1xuICBWaWV3cyA9IHJlcXVpcmUgJ2Jhc2Uudmlld3MnXG5cbiAgQXBwLm1vZHVsZSAnQ2FyLlNob3cnLCAoU2hvdywgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBTaG93LkxheW91dCBleHRlbmRzIFZpZXdzLkxheW91dFZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL3Nob3cvdGVtcGxhdGVzL2xheW91dCdcbiAgICAgIGNsYXNzTmFtZTogJ3VpIGNvbnRhaW5lcidcblxuICAgICAgcmVnaW9uczpcbiAgICAgICAgaGVhZGVyUmVnaW9uOiAnI2hlYWRlci1yZWdpb24nXG4gICAgICAgIGRlc2NyaXB0aW9uUmVnaW9uOiAnI2Rlc2NyaXB0aW9uLXJlZ2lvbidcblxuICAgIGNsYXNzIFNob3cuSGVhZGVyIGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL3Nob3cvdGVtcGxhdGVzL2hlYWRlcidcbiAgICAgIGNsYXNzTmFtZTogJ3VpIGJhc2ljIHNlZ21lbnQnXG5cbiAgICAgIHVpOlxuICAgICAgICBkZXN0cm95QnRuOiAnYS5kZWxldGUnXG5cbiAgICAgIHRyaWdnZXJzOlxuICAgICAgICAnY2xpY2sgQHVpLmRlc3Ryb3lCdG4nOiAnY2FyOmRlbGV0ZSdcblxuICAgIGNsYXNzIFNob3cuRGVzY3JpcHRpb24gZXh0ZW5kcyBWaWV3cy5JdGVtVmlld1xuICAgICAgdGVtcGxhdGU6ICdjYXIvc2hvdy90ZW1wbGF0ZXMvZGVzY3JpcHRpb24nXG4gICAgICBjbGFzc05hbWU6ICd1aSBiYXNpYyBzZWdtZW50J1xuIl19
