var slice = [].slice;

define(['app/app', './home/home_controller', './about/about_controller'], function(App) {
  var API;
  return API = {
    home: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return new App.Pages.Home.Controller({
        region: App.mainRegion
      });
    },
    about: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return new App.Pages.About.Controller({
        region: App.mainRegion
      });
    }
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3BhZ2VzL3BhZ2VzX2FwaS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxNQUFBLENBQU8sQ0FDTCxTQURLLEVBRUwsd0JBRkssRUFHTCwwQkFISyxDQUFQLEVBSUcsU0FBQyxHQUFEO0FBRUQsTUFBQTtTQUFBLEdBQUEsR0FDRTtJQUFBLElBQUEsRUFBTSxTQUFBO0FBQ0osVUFBQTtNQURLO2FBQ0QsSUFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFmLENBQ0Y7UUFBQSxNQUFBLEVBQVEsR0FBRyxDQUFDLFVBQVo7T0FERTtJQURBLENBQU47SUFJQSxLQUFBLEVBQU8sU0FBQTtBQUNMLFVBQUE7TUFETTthQUNGLElBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBaEIsQ0FDRjtRQUFBLE1BQUEsRUFBUSxHQUFHLENBQUMsVUFBWjtPQURFO0lBREMsQ0FKUDs7QUFIRCxDQUpIIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3BhZ2VzL3BhZ2VzX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gICdhcHAvYXBwJ1xuICAnLi9ob21lL2hvbWVfY29udHJvbGxlcidcbiAgJy4vYWJvdXQvYWJvdXRfY29udHJvbGxlcidcbl0sIChBcHApIC0+XG5cbiAgQVBJID1cbiAgICBob21lOiAoYXJncy4uLikgLT5cbiAgICAgIG5ldyBBcHAuUGFnZXMuSG9tZS5Db250cm9sbGVyXG4gICAgICAgIHJlZ2lvbjogQXBwLm1haW5SZWdpb25cblxuICAgIGFib3V0OiAoYXJncy4uLikgLT5cbiAgICAgIG5ldyBBcHAuUGFnZXMuQWJvdXQuQ29udHJvbGxlclxuICAgICAgICByZWdpb246IEFwcC5tYWluUmVnaW9uXG4iXX0=
