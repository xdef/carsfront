var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', './templates/layout', './templates/header', './templates/cars', './templates/cars-item', './templates/cars-empty'], function() {
  var App, Views;
  App = require('app/app');
  Views = require('base.views');
  return App.module('Pages.Home', function(Home, App, Backbone, Mn, $, _) {
    Home.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'pages/home/templates/layout';

      Layout.prototype.className = 'ui container';

      Layout.prototype.regions = {
        headerRegion: '#header-region',
        carsRegion: '#cars-region'
      };

      return Layout;

    })(Views.LayoutView);
    Home.Header = (function(superClass) {
      extend(Header, superClass);

      function Header() {
        return Header.__super__.constructor.apply(this, arguments);
      }

      Header.prototype.template = 'pages/home/templates/header';

      Header.prototype.className = 'ui vertical segment';

      return Header;

    })(Views.ItemView);
    Home.CarsEmpty = (function(superClass) {
      extend(CarsEmpty, superClass);

      function CarsEmpty() {
        return CarsEmpty.__super__.constructor.apply(this, arguments);
      }

      CarsEmpty.prototype.template = 'pages/home/templates/cars-empty';

      CarsEmpty.prototype.className = 'ui basic segment container';

      CarsEmpty.prototype.ui = {
        populateBtn: 'a.populate'
      };

      CarsEmpty.prototype.triggers = {
        'click @ui.populateBtn': 'populate'
      };

      return CarsEmpty;

    })(Views.ItemView);
    Home.CarsItem = (function(superClass) {
      extend(CarsItem, superClass);

      function CarsItem() {
        return CarsItem.__super__.constructor.apply(this, arguments);
      }

      CarsItem.prototype.template = 'pages/home/templates/cars-item';

      CarsItem.prototype.className = 'card';

      CarsItem.prototype.triggers = {
        'click': 'goto'
      };

      return CarsItem;

    })(Views.ItemView);
    return Home.Cars = (function(superClass) {
      extend(Cars, superClass);

      function Cars() {
        return Cars.__super__.constructor.apply(this, arguments);
      }

      Cars.prototype.template = 'pages/home/templates/cars';

      Cars.prototype.className = 'ui vertical segment';

      Cars.prototype.childView = Home.CarsItem;

      Cars.prototype.childViewEventPrefix = 'car';

      Cars.prototype.childViewContainer = '.cards';

      Cars.prototype.emptyView = Home.CarsEmpty;

      Cars.prototype.serializeData = function() {
        var data;
        data = {
          size: this.collection.length,
          total: this.collection.total
        };
        return data;
      };

      return Cars;

    })(Views.CompositeView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3BhZ2VzL2hvbWUvaG9tZV92aWV3LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBQSxNQUFBLENBQU8sQ0FDTCxTQURLLEVBRUwsWUFGSyxFQUdMLG9CQUhLLEVBSUwsb0JBSkssRUFLTCxrQkFMSyxFQU1MLHVCQU5LLEVBT0wsd0JBUEssQ0FBUCxFQVFHLFNBQUE7QUFDRCxNQUFBO0VBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSO0VBQ04sS0FBQSxHQUFRLE9BQUEsQ0FBUSxZQUFSO1NBRVIsR0FBRyxDQUFDLE1BQUosQ0FBVyxZQUFYLEVBQXlCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0lBRWpCLElBQUksQ0FBQzs7Ozs7Ozt1QkFDVCxRQUFBLEdBQVU7O3VCQUNWLFNBQUEsR0FBVzs7dUJBRVgsT0FBQSxHQUNFO1FBQUEsWUFBQSxFQUFjLGdCQUFkO1FBQ0EsVUFBQSxFQUFZLGNBRFo7Ozs7O09BTHNCLEtBQUssQ0FBQztJQVExQixJQUFJLENBQUM7Ozs7Ozs7dUJBQ1QsUUFBQSxHQUFVOzt1QkFDVixTQUFBLEdBQVc7Ozs7T0FGYSxLQUFLLENBQUM7SUFJMUIsSUFBSSxDQUFDOzs7Ozs7OzBCQUNULFFBQUEsR0FBVTs7MEJBQ1YsU0FBQSxHQUFXOzswQkFFWCxFQUFBLEdBQ0U7UUFBQSxXQUFBLEVBQWEsWUFBYjs7OzBCQUVGLFFBQUEsR0FDRTtRQUFBLHVCQUFBLEVBQXlCLFVBQXpCOzs7OztPQVJ5QixLQUFLLENBQUM7SUFVN0IsSUFBSSxDQUFDOzs7Ozs7O3lCQUNULFFBQUEsR0FBVTs7eUJBQ1YsU0FBQSxHQUFXOzt5QkFFWCxRQUFBLEdBQ0U7UUFBQSxPQUFBLEVBQVMsTUFBVDs7Ozs7T0FMd0IsS0FBSyxDQUFDO1dBTzVCLElBQUksQ0FBQzs7Ozs7OztxQkFDVCxRQUFBLEdBQVU7O3FCQUNWLFNBQUEsR0FBVzs7cUJBRVgsU0FBQSxHQUFXLElBQUksQ0FBQzs7cUJBQ2hCLG9CQUFBLEdBQXNCOztxQkFDdEIsa0JBQUEsR0FBb0I7O3FCQUNwQixTQUFBLEdBQVcsSUFBSSxDQUFDOztxQkFFaEIsYUFBQSxHQUFlLFNBQUE7QUFDYixZQUFBO1FBQUEsSUFBQSxHQUNFO1VBQUEsSUFBQSxFQUFNLElBQUMsQ0FBQSxVQUFVLENBQUMsTUFBbEI7VUFDQSxLQUFBLEVBQU8sSUFBQyxDQUFBLFVBQVUsQ0FBQyxLQURuQjs7ZUFHRjtNQUxhOzs7O09BVE8sS0FBSyxDQUFDO0VBL0JQLENBQXpCO0FBSkMsQ0FSSCIsImZpbGUiOiJhcHAvbW9kdWxlcy9wYWdlcy9ob21lL2hvbWVfdmlldy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gICdhcHAvYXBwJ1xuICAnYmFzZS52aWV3cydcbiAgJy4vdGVtcGxhdGVzL2xheW91dCdcbiAgJy4vdGVtcGxhdGVzL2hlYWRlcidcbiAgJy4vdGVtcGxhdGVzL2NhcnMnXG4gICcuL3RlbXBsYXRlcy9jYXJzLWl0ZW0nXG4gICcuL3RlbXBsYXRlcy9jYXJzLWVtcHR5J1xuXSwgKCkgLT5cbiAgQXBwID0gcmVxdWlyZSAnYXBwL2FwcCdcbiAgVmlld3MgPSByZXF1aXJlICdiYXNlLnZpZXdzJ1xuXG4gIEFwcC5tb2R1bGUgJ1BhZ2VzLkhvbWUnLCAoSG9tZSwgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBIb21lLkxheW91dCBleHRlbmRzIFZpZXdzLkxheW91dFZpZXdcbiAgICAgIHRlbXBsYXRlOiAncGFnZXMvaG9tZS90ZW1wbGF0ZXMvbGF5b3V0J1xuICAgICAgY2xhc3NOYW1lOiAndWkgY29udGFpbmVyJ1xuXG4gICAgICByZWdpb25zOlxuICAgICAgICBoZWFkZXJSZWdpb246ICcjaGVhZGVyLXJlZ2lvbidcbiAgICAgICAgY2Fyc1JlZ2lvbjogJyNjYXJzLXJlZ2lvbidcblxuICAgIGNsYXNzIEhvbWUuSGVhZGVyIGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAncGFnZXMvaG9tZS90ZW1wbGF0ZXMvaGVhZGVyJ1xuICAgICAgY2xhc3NOYW1lOiAndWkgdmVydGljYWwgc2VnbWVudCdcblxuICAgIGNsYXNzIEhvbWUuQ2Fyc0VtcHR5IGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAncGFnZXMvaG9tZS90ZW1wbGF0ZXMvY2Fycy1lbXB0eSdcbiAgICAgIGNsYXNzTmFtZTogJ3VpIGJhc2ljIHNlZ21lbnQgY29udGFpbmVyJ1xuXG4gICAgICB1aTpcbiAgICAgICAgcG9wdWxhdGVCdG46ICdhLnBvcHVsYXRlJ1xuXG4gICAgICB0cmlnZ2VyczpcbiAgICAgICAgJ2NsaWNrIEB1aS5wb3B1bGF0ZUJ0bic6ICdwb3B1bGF0ZSdcblxuICAgIGNsYXNzIEhvbWUuQ2Fyc0l0ZW0gZXh0ZW5kcyBWaWV3cy5JdGVtVmlld1xuICAgICAgdGVtcGxhdGU6ICdwYWdlcy9ob21lL3RlbXBsYXRlcy9jYXJzLWl0ZW0nXG4gICAgICBjbGFzc05hbWU6ICdjYXJkJ1xuXG4gICAgICB0cmlnZ2VyczpcbiAgICAgICAgJ2NsaWNrJzogJ2dvdG8nXG5cbiAgICBjbGFzcyBIb21lLkNhcnMgZXh0ZW5kcyBWaWV3cy5Db21wb3NpdGVWaWV3XG4gICAgICB0ZW1wbGF0ZTogJ3BhZ2VzL2hvbWUvdGVtcGxhdGVzL2NhcnMnXG4gICAgICBjbGFzc05hbWU6ICd1aSB2ZXJ0aWNhbCBzZWdtZW50J1xuXG4gICAgICBjaGlsZFZpZXc6IEhvbWUuQ2Fyc0l0ZW1cbiAgICAgIGNoaWxkVmlld0V2ZW50UHJlZml4OiAnY2FyJ1xuICAgICAgY2hpbGRWaWV3Q29udGFpbmVyOiAnLmNhcmRzJ1xuICAgICAgZW1wdHlWaWV3OiBIb21lLkNhcnNFbXB0eVxuXG4gICAgICBzZXJpYWxpemVEYXRhOiAtPlxuICAgICAgICBkYXRhID1cbiAgICAgICAgICBzaXplOiBAY29sbGVjdGlvbi5sZW5ndGhcbiAgICAgICAgICB0b3RhbDogQGNvbGxlY3Rpb24udG90YWxcblxuICAgICAgICBkYXRhXG4iXX0=
