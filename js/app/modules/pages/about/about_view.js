var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', './templates/layout'], function() {
  var App, Views;
  App = require('app/app');
  Views = require('base.views');
  return App.module('Pages.About', function(About, App, Backbone, Mn, $, _) {
    return About.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'pages/about/templates/layout';

      Layout.prototype.className = 'ui container';

      return Layout;

    })(Views.LayoutView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3BhZ2VzL2Fib3V0L2Fib3V0X3ZpZXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFBLE1BQUEsQ0FBTyxDQUNMLFNBREssRUFFTCxZQUZLLEVBR0wsb0JBSEssQ0FBUCxFQUlHLFNBQUE7QUFDRCxNQUFBO0VBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSO0VBQ04sS0FBQSxHQUFRLE9BQUEsQ0FBUSxZQUFSO1NBRVIsR0FBRyxDQUFDLE1BQUosQ0FBVyxhQUFYLEVBQTBCLFNBQUMsS0FBRCxFQUFRLEdBQVIsRUFBYSxRQUFiLEVBQXVCLEVBQXZCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCO1dBRWxCLEtBQUssQ0FBQzs7Ozs7Ozt1QkFDVixRQUFBLEdBQVU7O3VCQUNWLFNBQUEsR0FBVzs7OztPQUZjLEtBQUssQ0FBQztFQUZULENBQTFCO0FBSkMsQ0FKSCIsImZpbGUiOiJhcHAvbW9kdWxlcy9wYWdlcy9hYm91dC9hYm91dF92aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcbiAgJ2FwcC9hcHAnXG4gICdiYXNlLnZpZXdzJ1xuICAnLi90ZW1wbGF0ZXMvbGF5b3V0J1xuXSwgKCkgLT5cbiAgQXBwID0gcmVxdWlyZSAnYXBwL2FwcCdcbiAgVmlld3MgPSByZXF1aXJlICdiYXNlLnZpZXdzJ1xuXG4gIEFwcC5tb2R1bGUgJ1BhZ2VzLkFib3V0JywgKEFib3V0LCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIEFib3V0LkxheW91dCBleHRlbmRzIFZpZXdzLkxheW91dFZpZXdcbiAgICAgIHRlbXBsYXRlOiAncGFnZXMvYWJvdXQvdGVtcGxhdGVzL2xheW91dCdcbiAgICAgIGNsYXNzTmFtZTogJ3VpIGNvbnRhaW5lcidcbiJdfQ==
