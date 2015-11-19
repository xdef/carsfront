var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

define(['app/app', 'base.entities'], function(App, Entities) {
  return App.module("Entities", function(Entities, App, Backbone, Mn, $, _) {
    var API;
    Entities.Alert = (function(superClass) {
      extend(Alert, superClass);

      function Alert() {
        return Alert.__super__.constructor.apply(this, arguments);
      }

      Alert.prototype.defaults = {
        icon: 'ban large red icon',
        header: 'Объект будет удален',
        message: 'Вы уверены, что хотите удалить данный объект?',
        actions: {
          ok: 'Да',
          cancel: 'Нет'
        }
      };

      return Alert;

    })(Entities.Model);
    API = {
      getAlert: function(attrs) {
        if (attrs == null) {
          attrs = {};
        }
        return new Entities.Alert(attrs);
      }
    };
    return App.reqres.setHandler('alert:entity', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.getAlert.apply(API, args);
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9hbGVydC9hbGVydC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7OztBQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQUQsRUFBWSxlQUFaLENBQVAsRUFBcUMsU0FBQyxHQUFELEVBQU0sUUFBTjtTQUVuQyxHQUFHLENBQUMsTUFBSixDQUFXLFVBQVgsRUFBdUIsU0FBQyxRQUFELEVBQVcsR0FBWCxFQUFnQixRQUFoQixFQUEwQixFQUExQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQztBQUVyQixRQUFBO0lBQU0sUUFBUSxDQUFDOzs7Ozs7O3NCQUViLFFBQUEsR0FDRTtRQUFBLElBQUEsRUFBTSxvQkFBTjtRQUNBLE1BQUEsRUFBUSxxQkFEUjtRQUVBLE9BQUEsRUFBUywrQ0FGVDtRQUdBLE9BQUEsRUFDRTtVQUFBLEVBQUEsRUFBSSxJQUFKO1VBQ0EsTUFBQSxFQUFRLEtBRFI7U0FKRjs7Ozs7T0FIeUIsUUFBUSxDQUFDO0lBV3RDLEdBQUEsR0FDRTtNQUFBLFFBQUEsRUFBVSxTQUFDLEtBQUQ7O1VBQUMsUUFBUTs7ZUFDYixJQUFBLFFBQVEsQ0FBQyxLQUFULENBQWUsS0FBZjtNQURJLENBQVY7O1dBSUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFYLENBQXNCLGNBQXRCLEVBQXNDLFNBQUE7QUFDcEMsVUFBQTtNQURxQzthQUNyQyxHQUFHLENBQUMsUUFBSixZQUFhLElBQWI7SUFEb0MsQ0FBdEM7RUFsQnFCLENBQXZCO0FBRm1DLENBQXJDIiwiZmlsZSI6ImFwcC9lbnRpdGllcy9hbGVydC9hbGVydC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbJ2FwcC9hcHAnLCAnYmFzZS5lbnRpdGllcyddLCAoQXBwLCBFbnRpdGllcykgLT5cblxuICBBcHAubW9kdWxlIFwiRW50aXRpZXNcIiwgKEVudGl0aWVzLCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIEVudGl0aWVzLkFsZXJ0IGV4dGVuZHMgRW50aXRpZXMuTW9kZWxcblxuICAgICAgZGVmYXVsdHM6XG4gICAgICAgIGljb246ICdiYW4gbGFyZ2UgcmVkIGljb24nXG4gICAgICAgIGhlYWRlcjogJ9Ce0LHRitC10LrRgiDQsdGD0LTQtdGCINGD0LTQsNC70LXQvSdcbiAgICAgICAgbWVzc2FnZTogJ9CS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LTQsNC90L3Ri9C5INC+0LHRitC10LrRgj8nXG4gICAgICAgIGFjdGlvbnM6XG4gICAgICAgICAgb2s6ICfQlNCwJ1xuICAgICAgICAgIGNhbmNlbDogJ9Cd0LXRgidcblxuXG4gICAgQVBJID1cbiAgICAgIGdldEFsZXJ0OiAoYXR0cnMgPSB7fSkgLT5cbiAgICAgICAgbmV3IEVudGl0aWVzLkFsZXJ0IGF0dHJzXG5cblxuICAgIEFwcC5yZXFyZXMuc2V0SGFuZGxlciAnYWxlcnQ6ZW50aXR5JywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkuZ2V0QWxlcnQgYXJncy4uLlxuIl19
