var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

define(['app/app'], function(App, API) {
  return App.module("Pages", function(Pages, App, Backbone, Mn, $, _) {
    Pages.Router = (function(superClass) {
      extend(Router, superClass);

      function Router() {
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.appRoutes = {
        "!/": "home",
        "!/home": "home",
        "!/about-us": "about"
      };

      return Router;

    })(Mn.AppRouter);
    API = {
      home: function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return require(['app/modules/pages/pages_api'], function(Actions) {
          return Actions.home.apply(Actions, args);
        });
      },
      about: function() {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return require(['app/modules/pages/pages_api'], function(Actions) {
          return Actions.about.apply(Actions, args);
        });
      }
    };
    return Pages.on("start", function(options) {
      if (options == null) {
        options = {};
      }
      return new Pages.Router({
        controller: API
      });
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3BhZ2VzL21haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7Ozs7QUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELENBQVAsRUFBb0IsU0FBQyxHQUFELEVBQU0sR0FBTjtTQUVsQixHQUFHLENBQUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsU0FBQyxLQUFELEVBQVEsR0FBUixFQUFhLFFBQWIsRUFBdUIsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUI7SUFFWixLQUFLLENBQUM7Ozs7Ozs7dUJBQ1YsU0FBQSxHQUNFO1FBQUEsSUFBQSxFQUFNLE1BQU47UUFDQSxRQUFBLEVBQVUsTUFEVjtRQUVBLFlBQUEsRUFBYyxPQUZkOzs7OztPQUZ1QixFQUFFLENBQUM7SUFNOUIsR0FBQSxHQUNFO01BQUEsSUFBQSxFQUFNLFNBQUE7QUFDSixZQUFBO1FBREs7ZUFDTCxPQUFBLENBQVEsQ0FBQyw2QkFBRCxDQUFSLEVBQXlDLFNBQUMsT0FBRDtpQkFDdkMsT0FBTyxDQUFDLElBQVIsZ0JBQWEsSUFBYjtRQUR1QyxDQUF6QztNQURJLENBQU47TUFJQSxLQUFBLEVBQU8sU0FBQTtBQUNMLFlBQUE7UUFETTtlQUNOLE9BQUEsQ0FBUSxDQUFDLDZCQUFELENBQVIsRUFBeUMsU0FBQyxPQUFEO2lCQUN2QyxPQUFPLENBQUMsS0FBUixnQkFBYyxJQUFkO1FBRHVDLENBQXpDO01BREssQ0FKUDs7V0FRRixLQUFLLENBQUMsRUFBTixDQUFTLE9BQVQsRUFBa0IsU0FBQyxPQUFEOztRQUFDLFVBQVU7O2FBQ3ZCLElBQUEsS0FBSyxDQUFDLE1BQU4sQ0FDRjtRQUFBLFVBQUEsRUFBWSxHQUFaO09BREU7SUFEWSxDQUFsQjtFQWpCa0IsQ0FBcEI7QUFGa0IsQ0FBcEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvcGFnZXMvbWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbJ2FwcC9hcHAnXSwgKEFwcCwgQVBJKSAtPlxuXG4gIEFwcC5tb2R1bGUgXCJQYWdlc1wiLCAoUGFnZXMsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgUGFnZXMuUm91dGVyIGV4dGVuZHMgTW4uQXBwUm91dGVyXG4gICAgICBhcHBSb3V0ZXM6XG4gICAgICAgIFwiIS9cIjogXCJob21lXCJcbiAgICAgICAgXCIhL2hvbWVcIjogXCJob21lXCJcbiAgICAgICAgXCIhL2Fib3V0LXVzXCI6IFwiYWJvdXRcIlxuXG4gICAgQVBJID1cbiAgICAgIGhvbWU6IChhcmdzLi4uKSAtPlxuICAgICAgICByZXF1aXJlIFsnYXBwL21vZHVsZXMvcGFnZXMvcGFnZXNfYXBpJ10sIChBY3Rpb25zKSAtPlxuICAgICAgICAgIEFjdGlvbnMuaG9tZShhcmdzLi4uKVxuXG4gICAgICBhYm91dDogKGFyZ3MuLi4pIC0+XG4gICAgICAgIHJlcXVpcmUgWydhcHAvbW9kdWxlcy9wYWdlcy9wYWdlc19hcGknXSwgKEFjdGlvbnMpIC0+XG4gICAgICAgICAgQWN0aW9ucy5hYm91dChhcmdzLi4uKVxuXG4gICAgUGFnZXMub24gXCJzdGFydFwiLCAob3B0aW9ucyA9IHt9KSAtPlxuICAgICAgbmV3IFBhZ2VzLlJvdXRlclxuICAgICAgICBjb250cm9sbGVyOiBBUElcbiJdfQ==
