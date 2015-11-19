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
        direction: -1
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9jYXIvZmlsdGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGVBQVosQ0FBUCxFQUFxQyxTQUFDLEdBQUQsRUFBTSxRQUFOO1NBRW5DLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLFFBQWhCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBRXJCLFFBQUE7SUFBTSxRQUFRLENBQUM7Ozs7Ozs7dUJBRWIsUUFBQSxHQUNFO1FBQUEsT0FBQSxFQUFTLFdBQVQ7UUFDQSxTQUFBLEVBQVcsQ0FBQyxDQURaOzs7dUJBSUYsZUFBQSxHQUFpQixTQUFDLENBQUQ7QUFDZixZQUFBO1FBQUEsSUFBQSxDQUFjLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBQyxDQUFBLEdBQUQsQ0FBSyxNQUFMLENBQVgsQ0FBZDtBQUFBLGlCQUFBOztRQUVBLElBQUEsR0FBTyxJQUFDLENBQUEsR0FBRCxDQUFLLE1BQUw7UUFDUCxJQUFJLENBQUMsU0FBTCxHQUFpQjtlQUVqQixJQUFDLENBQUEsR0FBRCxDQUFLO1VBQUMsSUFBQSxFQUFNLElBQVA7U0FBTCxDQUFBLElBQXNCLElBQUMsQ0FBQSxPQUFELENBQVMsYUFBVCxFQUF3QixJQUF4QjtNQU5QOzt1QkFRakIsUUFBQSxHQUFVLFNBQUE7QUFDUixZQUFBO1FBQUEsSUFBQSxHQUFPO1FBRVAsSUFBRyxDQUFDLENBQUEsR0FBSSxJQUFDLENBQUEsR0FBRCxDQUFLLFNBQUwsQ0FBTCxDQUFBLElBQTBCLENBQUMsQ0FBQSxHQUFJLElBQUMsQ0FBQSxHQUFELENBQUssV0FBTCxDQUFMLENBQTdCO1VBQ0UsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxJQUFULEVBQWU7WUFBQSxJQUFBLEVBQU07Y0FBRSxLQUFBLEVBQU8sQ0FBVDtjQUFZLFNBQUEsRUFBVyxDQUF2QjthQUFOO1dBQWYsRUFERjs7UUFHQSxJQUFHLElBQUMsQ0FBQSxHQUFELENBQUssT0FBTCxDQUFIO1VBQ0UsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxJQUFULEVBQWU7WUFBQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEdBQUQsQ0FBSyxPQUFMLENBQVA7V0FBZixFQURGOztRQUdBLElBQUcsSUFBQyxDQUFBLEdBQUQsQ0FBSyxRQUFMLENBQUg7VUFDRSxDQUFDLENBQUMsTUFBRixDQUFTLElBQVQsRUFBZTtZQUFBLE1BQUEsRUFBUSxJQUFDLENBQUEsR0FBRCxDQUFLLFFBQUwsQ0FBUjtXQUFmLEVBREY7O0FBR0EsZUFBTztNQVpDOzs7O09BZmtCLFFBQVEsQ0FBQztJQTZCdkMsR0FBQSxHQUNFO01BQUEsU0FBQSxFQUFXLFNBQUMsS0FBRDs7VUFBQyxRQUFROztlQUNkLElBQUEsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7TUFESyxDQUFYOztXQUlGLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBWCxDQUFzQixlQUF0QixFQUF1QyxTQUFBO0FBQ3JDLFVBQUE7TUFEc0M7YUFDdEMsR0FBRyxDQUFDLFNBQUosWUFBYyxJQUFkO0lBRHFDLENBQXZDO0VBcENxQixDQUF2QjtBQUZtQyxDQUFyQyIsImZpbGUiOiJhcHAvZW50aXRpZXMvY2FyL2ZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbJ2FwcC9hcHAnLCAnYmFzZS5lbnRpdGllcyddLCAoQXBwLCBFbnRpdGllcykgLT5cblxuICBBcHAubW9kdWxlIFwiRW50aXRpZXNcIiwgKEVudGl0aWVzLCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIEVudGl0aWVzLkZpbHRlciBleHRlbmRzIEVudGl0aWVzLk1vZGVsXG5cbiAgICAgIGRlZmF1bHRzOlxuICAgICAgICBzb3J0X2J5OiAnY3JlYXRlZEF0J1xuICAgICAgICBkaXJlY3Rpb246IC0xXG4gICAgICAgICMgcXVlcnk6IHtjaGFyczogJ9C30LDQs9C+0LvQvtCy0L7Quid9XG5cbiAgICAgIGNoYW5nZURpcmVjdGlvbjogKGQpIC0+XG4gICAgICAgIHJldHVybiB1bmxlc3MgXy5pc09iamVjdCBAZ2V0KCdzb3J0JylcblxuICAgICAgICBzb3J0ID0gQGdldCgnc29ydCcpXG4gICAgICAgIHNvcnQuZGlyZWN0aW9uID0gZFxuXG4gICAgICAgIEBzZXQoe3NvcnQ6IHNvcnR9KSAmJiBAdHJpZ2dlciBcImNoYW5nZTpzb3J0XCIsIEBcblxuICAgICAgdG9QYXJhbXM6IC0+XG4gICAgICAgIGRhdGEgPSB7fVxuXG4gICAgICAgIGlmIChmID0gQGdldCgnc29ydF9ieScpKSBhbmQgKGQgPSBAZ2V0KCdkaXJlY3Rpb24nKSlcbiAgICAgICAgICBfLmV4dGVuZCBkYXRhLCBzb3J0OiB7IGZpZWxkOiBmLCBkaXJlY3Rpb246IGQgfVxuXG4gICAgICAgIGlmIEBnZXQoJ3F1ZXJ5JylcbiAgICAgICAgICBfLmV4dGVuZCBkYXRhLCBxdWVyeTogQGdldCgncXVlcnknKVxuXG4gICAgICAgIGlmIEBnZXQoJ2ZpbHRlcicpXG4gICAgICAgICAgXy5leHRlbmQgZGF0YSwgZmlsdGVyOiBAZ2V0KCdmaWx0ZXInKVxuXG4gICAgICAgIHJldHVybiBkYXRhXG5cbiAgICBBUEkgPVxuICAgICAgZ2V0RmlsdGVyOiAoYXR0cnMgPSB7fSkgLT5cbiAgICAgICAgbmV3IEVudGl0aWVzLkZpbHRlciBhdHRyc1xuXG5cbiAgICBBcHAucmVxcmVzLnNldEhhbmRsZXIgJ2ZpbHRlcjplbnRpdHknLCAoYXJncy4uLikgLT5cbiAgICAgIEFQSS5nZXRGaWx0ZXIgYXJncy4uLlxuIl19
