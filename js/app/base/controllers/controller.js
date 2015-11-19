var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app"], function(App) {
  App.module("Controllers", function(Controllers, App, Backbone, Mn, $, _) {
    return Controllers.Base = (function(superClass) {
      extend(Base, superClass);

      function Base() {
        return Base.__super__.constructor.apply(this, arguments);
      }

      return Base;

    })(Mn.Object);
  });
  return App.Controllers;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQUQsQ0FBUCxFQUFvQixTQUFDLEdBQUQ7RUFDbEIsR0FBRyxDQUFDLE1BQUosQ0FBVyxhQUFYLEVBQTBCLFNBQUMsV0FBRCxFQUFjLEdBQWQsRUFBbUIsUUFBbkIsRUFBNkIsRUFBN0IsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEM7V0FFbEIsV0FBVyxDQUFDOzs7Ozs7Ozs7T0FBYSxFQUFFLENBQUM7RUFGVixDQUExQjtTQUlBLEdBQUcsQ0FBQztBQUxjLENBQXBCIiwiZmlsZSI6ImFwcC9iYXNlL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgW1wiYXBwL2FwcFwiXSwgKEFwcCkgLT5cbiAgQXBwLm1vZHVsZSBcIkNvbnRyb2xsZXJzXCIsIChDb250cm9sbGVycywgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBDb250cm9sbGVycy5CYXNlIGV4dGVuZHMgTW4uT2JqZWN0XG5cbiAgQXBwLkNvbnRyb2xsZXJzXG4iXX0=
