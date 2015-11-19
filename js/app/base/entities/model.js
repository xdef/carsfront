var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app"], function(App) {
  return App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
    Entities.Model = (function(superClass) {
      extend(Model, superClass);

      function Model() {
        return Model.__super__.constructor.apply(this, arguments);
      }

      return Model;

    })(Backbone.Model);
    return Entities.RelationalModel = (function(superClass) {
      extend(RelationalModel, superClass);

      function RelationalModel() {
        return RelationalModel.__super__.constructor.apply(this, arguments);
      }

      return RelationalModel;

    })(Backbone.NestedAttributesModel);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL2VudGl0aWVzL21vZGVsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELENBQVAsRUFBb0IsU0FBQyxHQUFEO1NBRWxCLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLFFBQWhCLEVBQTBCLFVBQTFCLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDO0lBRWYsUUFBUSxDQUFDOzs7Ozs7Ozs7T0FBYyxRQUFRLENBQUM7V0FFaEMsUUFBUSxDQUFDOzs7Ozs7Ozs7T0FBd0IsUUFBUSxDQUFDO0VBSjNCLENBQXZCO0FBRmtCLENBQXBCIiwiZmlsZSI6ImFwcC9iYXNlL2VudGl0aWVzL21vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIl0sIChBcHApIC0+XG5cbiAgQXBwLm1vZHVsZSBcIkVudGl0aWVzXCIsIChFbnRpdGllcywgQXBwLCBCYWNrYm9uZSwgTWFyaW9uZXR0ZSwgJCwgXykgLT5cblxuICAgIGNsYXNzIEVudGl0aWVzLk1vZGVsIGV4dGVuZHMgQmFja2JvbmUuTW9kZWxcblxuICAgIGNsYXNzIEVudGl0aWVzLlJlbGF0aW9uYWxNb2RlbCBleHRlbmRzIEJhY2tib25lLk5lc3RlZEF0dHJpYnV0ZXNNb2RlbFxuIl19
