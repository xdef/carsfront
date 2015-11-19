define(['backbone.marionette'], function() {
  _.extend(Mn.Renderer, {
    render: function(template, data) {
      var path;
      path = JST[template];
      if (!path) {
        throw "Template " + template + " not found!";
      }
      return path(data);
    }
  });
  return _.extend(Mn.Application.prototype, {
    navigate: function(route, options) {
      if (options == null) {
        options = {};
      }
      route = route.replace(/\/api\/v./, "");
      if (route.charAt(0) === "/") {
        route = "#!" + route;
      }
      return Backbone.history.navigate(route, options);
    },
    getCurrentRoute: function() {
      var frag;
      frag = Backbone.history.fragment;
      if (_.isEmpty(frag)) {
        return null;
      } else {
        return frag;
      }
    },
    startHistory: function(options) {
      if (Backbone.history) {
        return Backbone.history.start(options);
      }
    }
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWxwZXJzL21hcmlvbmV0dGVfbWl4aW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQUEsQ0FBTyxDQUFDLHFCQUFELENBQVAsRUFBZ0MsU0FBQTtFQUU5QixDQUFDLENBQUMsTUFBRixDQUFTLEVBQUUsQ0FBQyxRQUFaLEVBRUU7SUFBQSxNQUFBLEVBQVEsU0FBQyxRQUFELEVBQVcsSUFBWDtBQUNOLFVBQUE7TUFBQSxJQUFBLEdBQU8sR0FBSSxDQUFBLFFBQUE7TUFFWCxJQUFBLENBQU8sSUFBUDtBQUNFLGNBQU0sV0FBQSxHQUFZLFFBQVosR0FBcUIsY0FEN0I7O2FBRUEsSUFBQSxDQUFLLElBQUw7SUFMTSxDQUFSO0dBRkY7U0FTQSxDQUFDLENBQUMsTUFBRixDQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUEsU0FBdkIsRUFFRTtJQUFBLFFBQUEsRUFBVSxTQUFDLEtBQUQsRUFBUSxPQUFSOztRQUFRLFVBQVU7O01BQzFCLEtBQUEsR0FBUSxLQUFLLENBQUMsT0FBTixDQUFjLFdBQWQsRUFBMkIsRUFBM0I7TUFDUixJQUF3QixLQUFLLENBQUMsTUFBTixDQUFhLENBQWIsQ0FBQSxLQUFtQixHQUEzQztRQUFBLEtBQUEsR0FBUSxJQUFBLEdBQU8sTUFBZjs7YUFFQSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQWpCLENBQTBCLEtBQTFCLEVBQWlDLE9BQWpDO0lBSlEsQ0FBVjtJQU1BLGVBQUEsRUFBaUIsU0FBQTtBQUNmLFVBQUE7TUFBQSxJQUFBLEdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztNQUN4QixJQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBVixDQUFIO2VBQXdCLEtBQXhCO09BQUEsTUFBQTtlQUFrQyxLQUFsQzs7SUFGZSxDQU5qQjtJQVVBLFlBQUEsRUFBYyxTQUFDLE9BQUQ7TUFDWixJQUFHLFFBQVEsQ0FBQyxPQUFaO2VBQ0UsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFqQixDQUF1QixPQUF2QixFQURGOztJQURZLENBVmQ7R0FGRjtBQVg4QixDQUFoQyIsImZpbGUiOiJhcHAvaGVscGVycy9tYXJpb25ldHRlX21peGluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFsnYmFja2JvbmUubWFyaW9uZXR0ZSddLCAtPlxuXG4gIF8uZXh0ZW5kIE1uLlJlbmRlcmVyLFxuXG4gICAgcmVuZGVyOiAodGVtcGxhdGUsIGRhdGEpIC0+XG4gICAgICBwYXRoID0gSlNUW3RlbXBsYXRlXVxuXG4gICAgICB1bmxlc3MgcGF0aFxuICAgICAgICB0aHJvdyBcIlRlbXBsYXRlICN7dGVtcGxhdGV9IG5vdCBmb3VuZCFcIlxuICAgICAgcGF0aChkYXRhKVxuXG4gIF8uZXh0ZW5kIE1uLkFwcGxpY2F0aW9uOjosXG5cbiAgICBuYXZpZ2F0ZTogKHJvdXRlLCBvcHRpb25zID0ge30pIC0+XG4gICAgICByb3V0ZSA9IHJvdXRlLnJlcGxhY2UgL1xcL2FwaVxcL3YuLywgXCJcIlxuICAgICAgcm91dGUgPSBcIiMhXCIgKyByb3V0ZSBpZiByb3V0ZS5jaGFyQXQoMCkgaXMgXCIvXCJcblxuICAgICAgQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSByb3V0ZSwgb3B0aW9uc1xuXG4gICAgZ2V0Q3VycmVudFJvdXRlOiAtPlxuICAgICAgZnJhZyA9IEJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnRcbiAgICAgIGlmIF8uaXNFbXB0eShmcmFnKSB0aGVuIG51bGwgZWxzZSBmcmFnXG5cbiAgICBzdGFydEhpc3Rvcnk6IChvcHRpb25zKSAtPlxuICAgICAgaWYgQmFja2JvbmUuaGlzdG9yeVxuICAgICAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0IG9wdGlvbnNcbiJdfQ==
