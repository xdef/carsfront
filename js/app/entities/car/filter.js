var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

define(['app/app', 'base.entities'], function(App, Entities) {
  return App.module("Entities", function(Entities, App, Backbone, Mn, $, _) {
    var API;
    Entities.Filter = (function(superClass) {
      extend(Filter, superClass);

      function Filter() {
        return Filter.__super__.constructor.apply(this, arguments);
      }

      Filter.prototype.defaults = {
        sort_by: 'createdAt',
        direction: -1,
        query: void 0
      };

      Filter.prototype.changeDirection = function(d) {
        var sort;
        if (!_.isObject(this.get('sort'))) {
          return;
        }
        sort = this.get('sort');
        sort.direction = d;
        return this.set({
          sort: sort
        }) && this.trigger("change:sort", this);
      };

      Filter.prototype.toParams = function() {
        var d, data, f;
        data = {};
        if ((f = this.get('sort_by')) && (d = this.get('direction'))) {
          _.extend(data, {
            sort: {
              field: f,
              direction: d
            }
          });
        }
        if (this.get('query')) {
          _.extend(data, {
            query: this.get('query')
          });
        }
        if (this.get('filter')) {
          _.extend(data, {
            filter: this.get('filter')
          });
        }
        return data;
      };

      return Filter;

    })(Entities.Model);
    API = {
      getFilter: function(attrs) {
        if (attrs == null) {
          attrs = {};
        }
        return new Entities.Filter(attrs);
      }
    };
    return App.reqres.setHandler('filter:entity', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.getFilter.apply(API, args);
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9jYXIvZmlsdGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGVBQVosQ0FBUCxFQUFxQyxTQUFDLEdBQUQsRUFBTSxRQUFOO1NBRW5DLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLFFBQWhCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBRXJCLFFBQUE7SUFBTSxRQUFRLENBQUM7Ozs7Ozs7dUJBRWIsUUFBQSxHQUNFO1FBQUEsT0FBQSxFQUFTLFdBQVQ7UUFDQSxTQUFBLEVBQVcsQ0FBQyxDQURaO1FBRUEsS0FBQSxFQUFPLE1BRlA7Ozt1QkFJRixlQUFBLEdBQWlCLFNBQUMsQ0FBRDtBQUNmLFlBQUE7UUFBQSxJQUFBLENBQWMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFDLENBQUEsR0FBRCxDQUFLLE1BQUwsQ0FBWCxDQUFkO0FBQUEsaUJBQUE7O1FBRUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxHQUFELENBQUssTUFBTDtRQUNQLElBQUksQ0FBQyxTQUFMLEdBQWlCO2VBRWpCLElBQUMsQ0FBQSxHQUFELENBQUs7VUFBQyxJQUFBLEVBQU0sSUFBUDtTQUFMLENBQUEsSUFBc0IsSUFBQyxDQUFBLE9BQUQsQ0FBUyxhQUFULEVBQXdCLElBQXhCO01BTlA7O3VCQVFqQixRQUFBLEdBQVUsU0FBQTtBQUNSLFlBQUE7UUFBQSxJQUFBLEdBQU87UUFFUCxJQUFHLENBQUMsQ0FBQSxHQUFJLElBQUMsQ0FBQSxHQUFELENBQUssU0FBTCxDQUFMLENBQUEsSUFBMEIsQ0FBQyxDQUFBLEdBQUksSUFBQyxDQUFBLEdBQUQsQ0FBSyxXQUFMLENBQUwsQ0FBN0I7VUFDRSxDQUFDLENBQUMsTUFBRixDQUFTLElBQVQsRUFBZTtZQUFBLElBQUEsRUFBTTtjQUFFLEtBQUEsRUFBTyxDQUFUO2NBQVksU0FBQSxFQUFXLENBQXZCO2FBQU47V0FBZixFQURGOztRQUdBLElBQUcsSUFBQyxDQUFBLEdBQUQsQ0FBSyxPQUFMLENBQUg7VUFDRSxDQUFDLENBQUMsTUFBRixDQUFTLElBQVQsRUFBZTtZQUFBLEtBQUEsRUFBTyxJQUFDLENBQUEsR0FBRCxDQUFLLE9BQUwsQ0FBUDtXQUFmLEVBREY7O1FBR0EsSUFBRyxJQUFDLENBQUEsR0FBRCxDQUFLLFFBQUwsQ0FBSDtVQUNFLENBQUMsQ0FBQyxNQUFGLENBQVMsSUFBVCxFQUFlO1lBQUEsTUFBQSxFQUFRLElBQUMsQ0FBQSxHQUFELENBQUssUUFBTCxDQUFSO1dBQWYsRUFERjs7QUFHQSxlQUFPO01BWkM7Ozs7T0Fma0IsUUFBUSxDQUFDO0lBNkJ2QyxHQUFBLEdBQ0U7TUFBQSxTQUFBLEVBQVcsU0FBQyxLQUFEOztVQUFDLFFBQVE7O2VBQ2QsSUFBQSxRQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtNQURLLENBQVg7O1dBSUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFYLENBQXNCLGVBQXRCLEVBQXVDLFNBQUE7QUFDckMsVUFBQTtNQURzQzthQUN0QyxHQUFHLENBQUMsU0FBSixZQUFjLElBQWQ7SUFEcUMsQ0FBdkM7RUFwQ3FCLENBQXZCO0FBRm1DLENBQXJDIiwiZmlsZSI6ImFwcC9lbnRpdGllcy9jYXIvZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFsnYXBwL2FwcCcsICdiYXNlLmVudGl0aWVzJ10sIChBcHAsIEVudGl0aWVzKSAtPlxuXG4gIEFwcC5tb2R1bGUgXCJFbnRpdGllc1wiLCAoRW50aXRpZXMsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgRW50aXRpZXMuRmlsdGVyIGV4dGVuZHMgRW50aXRpZXMuTW9kZWxcblxuICAgICAgZGVmYXVsdHM6XG4gICAgICAgIHNvcnRfYnk6ICdjcmVhdGVkQXQnXG4gICAgICAgIGRpcmVjdGlvbjogLTFcbiAgICAgICAgcXVlcnk6IHVuZGVmaW5lZFxuXG4gICAgICBjaGFuZ2VEaXJlY3Rpb246IChkKSAtPlxuICAgICAgICByZXR1cm4gdW5sZXNzIF8uaXNPYmplY3QgQGdldCgnc29ydCcpXG5cbiAgICAgICAgc29ydCA9IEBnZXQoJ3NvcnQnKVxuICAgICAgICBzb3J0LmRpcmVjdGlvbiA9IGRcblxuICAgICAgICBAc2V0KHtzb3J0OiBzb3J0fSkgJiYgQHRyaWdnZXIgXCJjaGFuZ2U6c29ydFwiLCBAXG5cbiAgICAgIHRvUGFyYW1zOiAtPlxuICAgICAgICBkYXRhID0ge31cblxuICAgICAgICBpZiAoZiA9IEBnZXQoJ3NvcnRfYnknKSkgYW5kIChkID0gQGdldCgnZGlyZWN0aW9uJykpXG4gICAgICAgICAgXy5leHRlbmQgZGF0YSwgc29ydDogeyBmaWVsZDogZiwgZGlyZWN0aW9uOiBkIH1cblxuICAgICAgICBpZiBAZ2V0KCdxdWVyeScpXG4gICAgICAgICAgXy5leHRlbmQgZGF0YSwgcXVlcnk6IEBnZXQoJ3F1ZXJ5JylcblxuICAgICAgICBpZiBAZ2V0KCdmaWx0ZXInKVxuICAgICAgICAgIF8uZXh0ZW5kIGRhdGEsIGZpbHRlcjogQGdldCgnZmlsdGVyJylcblxuICAgICAgICByZXR1cm4gZGF0YVxuXG4gICAgQVBJID1cbiAgICAgIGdldEZpbHRlcjogKGF0dHJzID0ge30pIC0+XG4gICAgICAgIG5ldyBFbnRpdGllcy5GaWx0ZXIgYXR0cnNcblxuXG4gICAgQXBwLnJlcXJlcy5zZXRIYW5kbGVyICdmaWx0ZXI6ZW50aXR5JywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkuZ2V0RmlsdGVyIGFyZ3MuLi5cbiJdfQ==
