var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', './templates/layout', './templates/menu', './templates/description'], function() {
  var App, Views;
  App = require('app/app');
  Views = require('base.views');
  return App.module("Nav.Show", function(Show, App, Backbone, Mn, $, _) {
    Show.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'nav/show/templates/layout';

      Layout.prototype.className = 'home-layout';

      Layout.prototype.regions = {
        menuRegion: '#menu-region',
        descriptionRegion: '#description-region'
      };

      return Layout;

    })(Views.LayoutView);
    Show.Menu = (function(superClass) {
      extend(Menu, superClass);

      function Menu() {
        return Menu.__super__.constructor.apply(this, arguments);
      }

      Menu.prototype.template = 'nav/show/templates/menu';

      Menu.prototype.tagName = 'nav';

      Menu.prototype.className = 'ui menu labeled icon borderless top';

      Menu.prototype.onShow = function() {
        var options;
        options = {
          on: 'hover',
          delay: {
            show: 50,
            hide: 100
          }
        };
        return this.$('.ui.dropdown').dropdown(options);
      };

      return Menu;

    })(Views.ItemView);
    return Show.Description = (function(superClass) {
      extend(Description, superClass);

      function Description() {
        return Description.__super__.constructor.apply(this, arguments);
      }

      Description.prototype.template = 'nav/show/templates/description';

      Description.prototype.className = 'ui container';

      return Description;

    })(Views.ItemView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL25hdi9zaG93L3Nob3dfdmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQ0wsU0FESyxFQUNNLFlBRE4sRUFFTCxvQkFGSyxFQUdMLGtCQUhLLEVBSUwseUJBSkssQ0FBUCxFQUtHLFNBQUE7QUFFRCxNQUFBO0VBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSO0VBQ04sS0FBQSxHQUFRLE9BQUEsQ0FBUSxZQUFSO1NBRVIsR0FBRyxDQUFDLE1BQUosQ0FBVyxVQUFYLEVBQXVCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0lBQ2YsSUFBSSxDQUFDOzs7Ozs7O3VCQUNULFFBQUEsR0FBVTs7dUJBQ1YsU0FBQSxHQUFXOzt1QkFFWCxPQUFBLEdBQ0U7UUFBQSxVQUFBLEVBQVksY0FBWjtRQUNBLGlCQUFBLEVBQW1CLHFCQURuQjs7Ozs7T0FMc0IsS0FBSyxDQUFDO0lBUTFCLElBQUksQ0FBQzs7Ozs7OztxQkFDVCxRQUFBLEdBQVU7O3FCQUNWLE9BQUEsR0FBUzs7cUJBQ1QsU0FBQSxHQUFXOztxQkFFWCxNQUFBLEdBQVEsU0FBQTtBQUNOLFlBQUE7UUFBQSxPQUFBLEdBQ0U7VUFBQSxFQUFBLEVBQUksT0FBSjtVQUNBLEtBQUEsRUFDRTtZQUFBLElBQUEsRUFBTSxFQUFOO1lBQ0EsSUFBQSxFQUFNLEdBRE47V0FGRjs7ZUFLRixJQUFDLENBQUEsQ0FBRCxDQUFHLGNBQUgsQ0FBa0IsQ0FBQyxRQUFuQixDQUE0QixPQUE1QjtNQVBNOzs7O09BTGMsS0FBSyxDQUFDO1dBY3hCLElBQUksQ0FBQzs7Ozs7Ozs0QkFDVCxRQUFBLEdBQVU7OzRCQUNWLFNBQUEsR0FBVzs7OztPQUZrQixLQUFLLENBQUM7RUF2QmhCLENBQXZCO0FBTEMsQ0FMSCIsImZpbGUiOiJhcHAvbW9kdWxlcy9uYXYvc2hvdy9zaG93X3ZpZXcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgW1xuICAnYXBwL2FwcCcsICdiYXNlLnZpZXdzJyxcbiAgJy4vdGVtcGxhdGVzL2xheW91dCdcbiAgJy4vdGVtcGxhdGVzL21lbnUnXG4gICcuL3RlbXBsYXRlcy9kZXNjcmlwdGlvbidcbl0sIC0+XG5cbiAgQXBwID0gcmVxdWlyZSAnYXBwL2FwcCdcbiAgVmlld3MgPSByZXF1aXJlICdiYXNlLnZpZXdzJ1xuXG4gIEFwcC5tb2R1bGUgXCJOYXYuU2hvd1wiLCAoU2hvdywgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG4gICAgY2xhc3MgU2hvdy5MYXlvdXQgZXh0ZW5kcyBWaWV3cy5MYXlvdXRWaWV3XG4gICAgICB0ZW1wbGF0ZTogJ25hdi9zaG93L3RlbXBsYXRlcy9sYXlvdXQnXG4gICAgICBjbGFzc05hbWU6ICdob21lLWxheW91dCdcblxuICAgICAgcmVnaW9uczpcbiAgICAgICAgbWVudVJlZ2lvbjogJyNtZW51LXJlZ2lvbidcbiAgICAgICAgZGVzY3JpcHRpb25SZWdpb246ICcjZGVzY3JpcHRpb24tcmVnaW9uJ1xuXG4gICAgY2xhc3MgU2hvdy5NZW51IGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAnbmF2L3Nob3cvdGVtcGxhdGVzL21lbnUnXG4gICAgICB0YWdOYW1lOiAnbmF2J1xuICAgICAgY2xhc3NOYW1lOiAndWkgbWVudSBsYWJlbGVkIGljb24gYm9yZGVybGVzcyB0b3AnXG5cbiAgICAgIG9uU2hvdzogLT5cbiAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgb246ICdob3ZlcidcbiAgICAgICAgICBkZWxheTpcbiAgICAgICAgICAgIHNob3c6IDUwXG4gICAgICAgICAgICBoaWRlOiAxMDBcblxuICAgICAgICBAJCgnLnVpLmRyb3Bkb3duJykuZHJvcGRvd24ob3B0aW9ucylcblxuICAgIGNsYXNzIFNob3cuRGVzY3JpcHRpb24gZXh0ZW5kcyBWaWV3cy5JdGVtVmlld1xuICAgICAgdGVtcGxhdGU6ICduYXYvc2hvdy90ZW1wbGF0ZXMvZGVzY3JpcHRpb24nXG4gICAgICBjbGFzc05hbWU6ICd1aSBjb250YWluZXInXG4iXX0=
