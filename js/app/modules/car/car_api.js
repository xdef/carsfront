var slice = [].slice;

define(['app/app', './list/list_controller', './create/create_controller', './show/show_controller', './edit/edit_controller'], function(App) {
  var API;
  return API = {
    list: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return new App.Car.List.Controller({
        region: App.mainRegion
      });
    },
    create: function(params) {
      if (params == null) {
        params = "";
      }
      return new App.Car.Create.Controller({
        region: App.mainRegion
      });
    },
    edit: function(id, params) {
      if (params == null) {
        params = "";
      }
      return new App.Car.Edit.Controller({
        id: id,
        region: App.mainRegion
      });
    },
    show: function(id, params) {
      if (params == null) {
        params = "";
      }
      return new App.Car.Show.Controller({
        id: id,
        region: App.mainRegion
      });
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9jYXJfYXBpLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLE1BQUEsQ0FBTyxDQUNMLFNBREssRUFFTCx3QkFGSyxFQUdMLDRCQUhLLEVBSUwsd0JBSkssRUFLTCx3QkFMSyxDQUFQLEVBTUcsU0FBQyxHQUFEO0FBRUQsTUFBQTtTQUFBLEdBQUEsR0FDRTtJQUFBLElBQUEsRUFBTSxTQUFBO0FBQ0osVUFBQTtNQURLO2FBQ0QsSUFBQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFiLENBQ0Y7UUFBQSxNQUFBLEVBQVEsR0FBRyxDQUFDLFVBQVo7T0FERTtJQURBLENBQU47SUFJQSxNQUFBLEVBQVEsU0FBQyxNQUFEOztRQUFDLFNBQVM7O2FBQ1osSUFBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFmLENBQ0Y7UUFBQSxNQUFBLEVBQVEsR0FBRyxDQUFDLFVBQVo7T0FERTtJQURFLENBSlI7SUFRQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTDs7UUFBSyxTQUFTOzthQUNkLElBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBYixDQUNGO1FBQUEsRUFBQSxFQUFJLEVBQUo7UUFDQSxNQUFBLEVBQVEsR0FBRyxDQUFDLFVBRFo7T0FERTtJQURBLENBUk47SUFhQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTDs7UUFBSyxTQUFTOzthQUNkLElBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBYixDQUNGO1FBQUEsRUFBQSxFQUFJLEVBQUo7UUFDQSxNQUFBLEVBQVEsR0FBRyxDQUFDLFVBRFo7T0FERTtJQURBLENBYk47O0FBSEQsQ0FOSCIsImZpbGUiOiJhcHAvbW9kdWxlcy9jYXIvY2FyX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gICdhcHAvYXBwJ1xuICAnLi9saXN0L2xpc3RfY29udHJvbGxlcidcbiAgJy4vY3JlYXRlL2NyZWF0ZV9jb250cm9sbGVyJ1xuICAnLi9zaG93L3Nob3dfY29udHJvbGxlcidcbiAgJy4vZWRpdC9lZGl0X2NvbnRyb2xsZXInXG5dLCAoQXBwKSAtPlxuXG4gIEFQSSA9XG4gICAgbGlzdDogKGFyZ3MuLi4pIC0+XG4gICAgICBuZXcgQXBwLkNhci5MaXN0LkNvbnRyb2xsZXJcbiAgICAgICAgcmVnaW9uOiBBcHAubWFpblJlZ2lvblxuXG4gICAgY3JlYXRlOiAocGFyYW1zID0gXCJcIikgLT5cbiAgICAgIG5ldyBBcHAuQ2FyLkNyZWF0ZS5Db250cm9sbGVyXG4gICAgICAgIHJlZ2lvbjogQXBwLm1haW5SZWdpb25cblxuICAgIGVkaXQ6IChpZCwgcGFyYW1zID0gXCJcIikgLT5cbiAgICAgIG5ldyBBcHAuQ2FyLkVkaXQuQ29udHJvbGxlclxuICAgICAgICBpZDogaWRcbiAgICAgICAgcmVnaW9uOiBBcHAubWFpblJlZ2lvblxuXG4gICAgc2hvdzogKGlkLCBwYXJhbXMgPSBcIlwiKSAtPlxuICAgICAgbmV3IEFwcC5DYXIuU2hvdy5Db250cm9sbGVyXG4gICAgICAgIGlkOiBpZFxuICAgICAgICByZWdpb246IEFwcC5tYWluUmVnaW9uXG4iXX0=
