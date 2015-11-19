var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.entities', './car'], function(App, Entities) {
  return App.module("Entities", function(Entities, App, Backbone, Mn, $, _) {
    Entities.Photo = (function(superClass) {
      extend(Photo, superClass);

      function Photo() {
        return Photo.__super__.constructor.apply(this, arguments);
      }

      Photo.prototype.localStorage = new Backbone.LocalStorage("Photos");

      Photo.prototype.relations = [
        {
          type: 'one',
          key: 'car',
          relatedModel: function() {
            return Entities.Car;
          }
        }
      ];

      return Photo;

    })(Entities.RelationalModel);
    return Entities.PhotosCollection = (function(superClass) {
      extend(PhotosCollection, superClass);

      function PhotosCollection() {
        return PhotosCollection.__super__.constructor.apply(this, arguments);
      }

      PhotosCollection.prototype.model = Entities.Photo;

      PhotosCollection.prototype.localStorage = new Backbone.LocalStorage("Photos");

      return PhotosCollection;

    })(Entities.Collection);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9jYXIvcGhvdG8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQUQsRUFBWSxlQUFaLEVBQTZCLE9BQTdCLENBQVAsRUFBOEMsU0FBQyxHQUFELEVBQU0sUUFBTjtTQUU1QyxHQUFHLENBQUMsTUFBSixDQUFXLFVBQVgsRUFBdUIsU0FBQyxRQUFELEVBQVcsR0FBWCxFQUFnQixRQUFoQixFQUEwQixFQUExQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQztJQUVmLFFBQVEsQ0FBQzs7Ozs7OztzQkFDYixZQUFBLEdBQWtCLElBQUEsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsUUFBdEI7O3NCQUVsQixTQUFBLEdBQVc7UUFDVDtVQUNFLElBQUEsRUFBTSxLQURSO1VBRUUsR0FBQSxFQUFLLEtBRlA7VUFHRSxZQUFBLEVBQWMsU0FBQTttQkFBRyxRQUFRLENBQUM7VUFBWixDQUhoQjtTQURTOzs7OztPQUhnQixRQUFRLENBQUM7V0FXaEMsUUFBUSxDQUFDOzs7Ozs7O2lDQUNiLEtBQUEsR0FBTyxRQUFRLENBQUM7O2lDQUNoQixZQUFBLEdBQWtCLElBQUEsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsUUFBdEI7Ozs7T0FGb0IsUUFBUSxDQUFDO0VBYjVCLENBQXZCO0FBRjRDLENBQTlDIiwiZmlsZSI6ImFwcC9lbnRpdGllcy9jYXIvcGhvdG8uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgWydhcHAvYXBwJywgJ2Jhc2UuZW50aXRpZXMnLCAnLi9jYXInXSwgKEFwcCwgRW50aXRpZXMpIC0+XG5cbiAgQXBwLm1vZHVsZSBcIkVudGl0aWVzXCIsIChFbnRpdGllcywgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBFbnRpdGllcy5QaG90byBleHRlbmRzIEVudGl0aWVzLlJlbGF0aW9uYWxNb2RlbFxuICAgICAgbG9jYWxTdG9yYWdlOiBuZXcgQmFja2JvbmUuTG9jYWxTdG9yYWdlKFwiUGhvdG9zXCIpXG5cbiAgICAgIHJlbGF0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ29uZSdcbiAgICAgICAgICBrZXk6ICdjYXInXG4gICAgICAgICAgcmVsYXRlZE1vZGVsOiAtPiBFbnRpdGllcy5DYXJcbiAgICAgICAgfVxuICAgICAgXVxuXG4gICAgY2xhc3MgRW50aXRpZXMuUGhvdG9zQ29sbGVjdGlvbiBleHRlbmRzIEVudGl0aWVzLkNvbGxlY3Rpb25cbiAgICAgIG1vZGVsOiBFbnRpdGllcy5QaG90b1xuICAgICAgbG9jYWxTdG9yYWdlOiBuZXcgQmFja2JvbmUuTG9jYWxTdG9yYWdlKFwiUGhvdG9zXCIpXG4iXX0=
