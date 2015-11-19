var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app'], function(App) {
  return App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
    Entities.Collection = (function(superClass) {
      extend(Collection, superClass);

      function Collection() {
        return Collection.__super__.constructor.apply(this, arguments);
      }

      return Collection;

    })(Backbone.Collection);
    return Entities.PaginatedCollection = (function(superClass) {
      extend(PaginatedCollection, superClass);

      function PaginatedCollection() {
        return PaginatedCollection.__super__.constructor.apply(this, arguments);
      }

      PaginatedCollection.prototype.total = 0;

      PaginatedCollection.prototype.number = 1;

      PaginatedCollection.prototype.size = 24;

      PaginatedCollection.prototype.parse = function(response, options) {
        var ref;
        if (response.meta) {
          ref = response.meta, this.number = ref.number, this.total = ref.total, this.count = ref.count;
        }
        return response.data;
      };

      PaginatedCollection.prototype.isLastPage = function() {
        return this.number >= this.total;
      };

      PaginatedCollection.prototype.more = function(options) {
        if (options == null) {
          options = {};
        }
        this.number++;
        options = _.defaults(options, {
          merge: false,
          remove: false
        });
        return this.fetch(options);
      };

      PaginatedCollection.prototype.fetch = function(options) {
        if (options == null) {
          options = {};
        }
        options.data || (options.data = {});
        _.defaults(options.data, {
          page: {
            number: this.number,
            size: this.size
          }
        });
        return Backbone.Collection.prototype.fetch.call(this, options);
      };

      return PaginatedCollection;

    })(Backbone.Collection);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL2VudGl0aWVzL2NvbGxlY3Rpb24uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQUQsQ0FBUCxFQUFvQixTQUFDLEdBQUQ7U0FDbEIsR0FBRyxDQUFDLE1BQUosQ0FBVyxVQUFYLEVBQXVCLFNBQUMsUUFBRCxFQUFXLEdBQVgsRUFBZ0IsUUFBaEIsRUFBMEIsVUFBMUIsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekM7SUFFZixRQUFRLENBQUM7Ozs7Ozs7OztPQUFtQixRQUFRLENBQUM7V0FFckMsUUFBUSxDQUFDOzs7Ozs7O29DQUdiLEtBQUEsR0FBTzs7b0NBR1AsTUFBQSxHQUFROztvQ0FHUixJQUFBLEdBQU07O29DQUVOLEtBQUEsR0FBTyxTQUFDLFFBQUQsRUFBVyxPQUFYO0FBQ0wsWUFBQTtRQUFBLElBQUcsUUFBUSxDQUFDLElBQVo7VUFDRSxNQUE4QixRQUFRLENBQUMsSUFBdkMsRUFBRSxJQUFDLENBQUEsYUFBQSxNQUFILEVBQVcsSUFBQyxDQUFBLFlBQUEsS0FBWixFQUFtQixJQUFDLENBQUEsWUFBQSxNQUR0Qjs7ZUFHQSxRQUFRLENBQUM7TUFKSjs7b0NBTVAsVUFBQSxHQUFZLFNBQUE7ZUFDVixJQUFDLENBQUEsTUFBRCxJQUFXLElBQUMsQ0FBQTtNQURGOztvQ0FHWixJQUFBLEdBQU0sU0FBQyxPQUFEOztVQUFDLFVBQVU7O1FBQ2YsSUFBQyxDQUFBLE1BQUQ7UUFFQSxPQUFBLEdBQVUsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ1I7VUFBQSxLQUFBLEVBQU8sS0FBUDtVQUNBLE1BQUEsRUFBUSxLQURSO1NBRFE7ZUFJVixJQUFDLENBQUEsS0FBRCxDQUFPLE9BQVA7TUFQSTs7b0NBU04sS0FBQSxHQUFPLFNBQUMsT0FBRDs7VUFBQyxVQUFVOztRQUNoQixPQUFPLENBQUMsU0FBUixPQUFPLENBQUMsT0FBUztRQUNqQixDQUFDLENBQUMsUUFBRixDQUFXLE9BQU8sQ0FBQyxJQUFuQixFQUNFO1VBQUEsSUFBQSxFQUFNO1lBQUUsTUFBQSxFQUFRLElBQUMsQ0FBQSxNQUFYO1lBQW1CLElBQUEsRUFBTSxJQUFDLENBQUEsSUFBMUI7V0FBTjtTQURGO2VBR0EsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQXBDLENBQXlDLElBQXpDLEVBQTRDLE9BQTVDO01BTEs7Ozs7T0E3QmtDLFFBQVEsQ0FBQztFQUovQixDQUF2QjtBQURrQixDQUFwQiIsImZpbGUiOiJhcHAvYmFzZS9lbnRpdGllcy9jb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFsnYXBwL2FwcCddLCAoQXBwKSAtPlxuICBBcHAubW9kdWxlIFwiRW50aXRpZXNcIiwgKEVudGl0aWVzLCBBcHAsIEJhY2tib25lLCBNYXJpb25ldHRlLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgRW50aXRpZXMuQ29sbGVjdGlvbiBleHRlbmRzIEJhY2tib25lLkNvbGxlY3Rpb25cblxuICAgIGNsYXNzIEVudGl0aWVzLlBhZ2luYXRlZENvbGxlY3Rpb24gZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uXG5cbiAgICAgICMgVG90YWwgcGFnZXNcbiAgICAgIHRvdGFsOiAwXG5cbiAgICAgICMgQ3VycmVudCBwYWdlXG4gICAgICBudW1iZXI6IDFcblxuICAgICAgIyBJdGVtcyBwZXIgcGFnZVxuICAgICAgc2l6ZTogMjRcblxuICAgICAgcGFyc2U6IChyZXNwb25zZSwgb3B0aW9ucykgLT5cbiAgICAgICAgaWYgcmVzcG9uc2UubWV0YVxuICAgICAgICAgIHsgQG51bWJlciwgQHRvdGFsLCBAY291bnQgfSA9IHJlc3BvbnNlLm1ldGFcblxuICAgICAgICByZXNwb25zZS5kYXRhXG5cbiAgICAgIGlzTGFzdFBhZ2U6IC0+XG4gICAgICAgIEBudW1iZXIgPj0gQHRvdGFsXG5cbiAgICAgIG1vcmU6IChvcHRpb25zID0ge30pIC0+XG4gICAgICAgIEBudW1iZXIrK1xuXG4gICAgICAgIG9wdGlvbnMgPSBfLmRlZmF1bHRzIG9wdGlvbnMsXG4gICAgICAgICAgbWVyZ2U6IGZhbHNlXG4gICAgICAgICAgcmVtb3ZlOiBmYWxzZVxuXG4gICAgICAgIEBmZXRjaCBvcHRpb25zXG5cbiAgICAgIGZldGNoOiAob3B0aW9ucyA9IHt9KSAtPlxuICAgICAgICBvcHRpb25zLmRhdGEgfHw9IHt9XG4gICAgICAgIF8uZGVmYXVsdHMgb3B0aW9ucy5kYXRhLFxuICAgICAgICAgIHBhZ2U6IHsgbnVtYmVyOiBAbnVtYmVyLCBzaXplOiBAc2l6ZSB9XG5cbiAgICAgICAgQmFja2JvbmUuQ29sbGVjdGlvbi5wcm90b3R5cGUuZmV0Y2guY2FsbChALCBvcHRpb25zKVxuIl19
