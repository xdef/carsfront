var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  slice = [].slice;

define(['app/app', 'base.entities', './photo'], function(App, Entities) {
  return App.module("Entities", function(Entities, App, Backbone, Mn, $, _) {
    var API;
    Entities.Car = (function(superClass) {
      extend(Car, superClass);

      function Car() {
        return Car.__super__.constructor.apply(this, arguments);
      }

      Car.prototype.localStorage = new Backbone.LocalStorage("Cars");

      Car.prototype.defaults = {
        createdAt: moment().toISOString()
      };

      Car.prototype.relations = [
        {
          key: 'photos',
          relatedModel: function() {
            return Entities.Photo;
          },
          collectionType: function() {
            return Entities.PhotosCollection;
          }
        }
      ];

      Car.prototype.validate = function(attrs, options) {
        var errors, result;
        if (options == null) {
          options = {};
        }
        errors = [];
        if (_.isEmpty(attrs.model)) {
          errors.push({
            attr: "model",
            msg: ["Модель"]
          });
        }
        if (_.isEmpty(attrs.price)) {
          errors.push({
            attr: "price",
            msg: ["Стоимость"]
          });
        }
        if (_.isEmpty(attrs.year)) {
          errors.push({
            attr: "year",
            msg: ["Год выпуска"]
          });
        }
        if (_.isEmpty(attrs.description)) {
          errors.push({
            attr: "description",
            msg: ["Описание"]
          });
        }
        result = errors.length ? errors : void 0;
        return result;
      };

      return Car;

    })(Entities.RelationalModel);
    Entities.CarsCollection = (function(superClass) {
      extend(CarsCollection, superClass);

      function CarsCollection() {
        return CarsCollection.__super__.constructor.apply(this, arguments);
      }

      CarsCollection.prototype.model = Entities.Car;

      CarsCollection.prototype.localStorage = new Backbone.LocalStorage("Cars");

      CarsCollection.prototype.comparator = function(model) {
        return this._sortByReverse_createdAt(model);
      };

      CarsCollection.prototype._sortBy_createdAt = function(model) {
        return new Date(model.get("createdAt"));
      };

      CarsCollection.prototype._sortByReverse_createdAt = function(model) {
        return -new Date(model.get("createdAt"));
      };

      CarsCollection.prototype._sortBy_price = function(model) {
        return new Number(model.get("price"));
      };

      CarsCollection.prototype._sortByReverse_price = function(model) {
        return -new Number(model.get("price"));
      };

      CarsCollection.prototype.filterByModel = function(chars) {
        var pattern;
        if (_.isEmpty(chars)) {
          return this.models;
        }
        pattern = new RegExp(chars, "gi");
        return this.filter(function(car) {
          return pattern.test(car.get("model"));
        });
      };

      return CarsCollection;

    })(Entities.Collection);
    API = {
      newCar: function(args) {
        if (args == null) {
          args = {};
        }
        return new Entities.Car(args);
      },
      getCars: function(options) {
        var cars, size;
        if (options == null) {
          options = {};
        }
        this.cars || (this.cars = new Entities.CarsCollection);
        this.cars.fetch();
        if (size = options.size) {
          cars = new Entities.CarsCollection(this.cars.models.slice(0, size));
          cars.total = this.cars.length;
          return cars;
        } else {
          return this.cars;
        }
      },
      getCar: function(id, options) {
        if (options == null) {
          options = {};
        }
        this.cars || (this.cars = App.reqres.request('car:entities'));
        return this.cars.get(id);
      },
      createCar: function(model, options) {
        if (options == null) {
          options = {};
        }
        if (!model.isValid()) {
          return;
        }
        options = _.defaults(options, {
          success: function(model, response, options) {
            return App.navigate('/car', {
              trigger: true
            });
          },
          error: function(model, response, options) {
            return console.log('error');
          }
        });
        return model.save({}, options);
      },
      destroyCar: function(car, options) {
        var alert;
        if (options == null) {
          options = {};
        }
        options = _.defaults(options, {
          success: function(model, response, options) {
            return App.navigate('/car', {
              trigger: true
            });
          },
          error: function(model, response, options) {}
        });
        alert = App.reqres.request('alert:window', {
          header: 'Удалить автомобиль',
          message: 'Вы уверены, что хотите удалить автомобиль из локальной базы данных Вашего браузера?'
        });
        alert.on('approve', function() {
          return car.destroy(options);
        });
        return alert.on('deny', function() {});
      },
      refreshCars: function(cars, filter) {
        var attr, funcName, models, query, reverse;
        query = filter.get('query');
        models = App.reqres.request('car:entities').filterByModel(query);
        cars.reset(models);
        reverse = filter.get("direction") > 0 ? "" : "Reverse";
        attr = filter.get('sort_by');
        funcName = "_sortBy" + reverse + "_" + attr;
        if (!_.isFunction(cars[funcName])) {
          throw "Comparator function should be exist in CarsCollection: " + funcName;
        }
        cars.comparator = cars[funcName];
        return cars.sort();
      },
      populateCars: function(cars) {
        return require(['app/entities/car/data'], function(data) {
          cars || (cars = App.reqres.request('car:entities'));
          _.each(data, function(model) {
            return cars.create(model);
          });
          return window.location.reload();
        });
      }
    };
    App.reqres.setHandler('car:entities', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.getCars.apply(API, args);
    });
    App.reqres.setHandler('car:entity', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.getCar.apply(API, args);
    });
    App.reqres.setHandler('car:entity:new', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.newCar.apply(API, args);
    });
    App.commands.setHandler('car:entity:create', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.createCar.apply(API, args);
    });
    App.commands.setHandler('car:entity:destroy', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.destroyCar.apply(API, args);
    });
    App.commands.setHandler('car:entities:refresh', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.refreshCars.apply(API, args);
    });
    return App.commands.setHandler('car:entities:populate', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.populateCars.apply(API, args);
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9jYXIvY2FyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGVBQVosRUFBNkIsU0FBN0IsQ0FBUCxFQUFnRCxTQUFDLEdBQUQsRUFBTSxRQUFOO1NBRTlDLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLFFBQWhCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBRXJCLFFBQUE7SUFBTSxRQUFRLENBQUM7Ozs7Ozs7b0JBQ2IsWUFBQSxHQUFrQixJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLE1BQXRCOztvQkFDbEIsUUFBQSxHQUNFO1FBQUEsU0FBQSxFQUFXLE1BQUEsQ0FBQSxDQUFRLENBQUMsV0FBVCxDQUFBLENBQVg7OztvQkFFRixTQUFBLEdBQVc7UUFDVDtVQUNFLEdBQUEsRUFBSyxRQURQO1VBRUUsWUFBQSxFQUFjLFNBQUE7bUJBQUcsUUFBUSxDQUFDO1VBQVosQ0FGaEI7VUFHRSxjQUFBLEVBQWdCLFNBQUE7bUJBQUcsUUFBUSxDQUFDO1VBQVosQ0FIbEI7U0FEUzs7O29CQVFYLFFBQUEsR0FBVSxTQUFDLEtBQUQsRUFBUSxPQUFSO0FBQ1IsWUFBQTs7VUFEZ0IsVUFBVTs7UUFDMUIsTUFBQSxHQUFTO1FBRVQsSUFBRyxDQUFDLENBQUMsT0FBRixDQUFVLEtBQUssQ0FBQyxLQUFoQixDQUFIO1VBQ0UsTUFBTSxDQUFDLElBQVAsQ0FDRTtZQUFBLElBQUEsRUFBTSxPQUFOO1lBQ0EsR0FBQSxFQUFLLENBQUMsUUFBRCxDQURMO1dBREYsRUFERjs7UUFLQSxJQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsS0FBSyxDQUFDLEtBQWhCLENBQUg7VUFDRSxNQUFNLENBQUMsSUFBUCxDQUNFO1lBQUEsSUFBQSxFQUFNLE9BQU47WUFDQSxHQUFBLEVBQUssQ0FBQyxXQUFE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QUNyQyxHQUFHLENBQUMsT0FBSixZQUFZLElBQVo7SUFEb0MsQ0FBdEM7SUFHQSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVgsQ0FBc0IsWUFBdEIsRUFBb0MsU0FBQTtBQUNsQyxVQUFBO01BRG1DO2FBQ25DLEdBQUcsQ0FBQyxNQUFKLFlBQVcsSUFBWDtJQURrQyxDQUFwQztJQUdBLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBWCxDQUFzQixnQkFBdEIsRUFBd0MsU0FBQTtBQUN0QyxVQUFBO01BRHVDO2FBQ3ZDLEdBQUcsQ0FBQyxNQUFKLFlBQVcsSUFBWDtJQURzQyxDQUF4QztJQUdBLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBYixDQUF3QixtQkFBeEIsRUFBNkMsU0FBQTtBQUMzQyxVQUFBO01BRDRDO2FBQzVDLEdBQUcsQ0FBQyxTQUFKLFlBQWMsSUFBZDtJQUQyQyxDQUE3QztJQUdBLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBYixDQUF3QixvQkFBeEIsRUFBOEMsU0FBQTtBQUM1QyxVQUFBO01BRDZDO2FBQzdDLEdBQUcsQ0FBQyxVQUFKLFlBQWUsSUFBZjtJQUQ0QyxDQUE5QztJQUdBLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBYixDQUF3QixzQkFBeEIsRUFBZ0QsU0FBQTtBQUM5QyxVQUFBO01BRCtDO2FBQy9DLEdBQUcsQ0FBQyxXQUFKLFlBQWdCLElBQWhCO0lBRDhDLENBQWhEO1dBR0EsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFiLENBQXdCLHVCQUF4QixFQUFpRCxTQUFBO0FBQy9DLFVBQUE7TUFEZ0Q7YUFDaEQsR0FBRyxDQUFDLFlBQUosWUFBaUIsSUFBakI7SUFEK0MsQ0FBakQ7RUFyS3FCLENBQXZCO0FBRjhDLENBQWhEIiwiZmlsZSI6ImFwcC9lbnRpdGllcy9jYXIvY2FyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFsnYXBwL2FwcCcsICdiYXNlLmVudGl0aWVzJywgJy4vcGhvdG8nXSwgKEFwcCwgRW50aXRpZXMpIC0+XG5cbiAgQXBwLm1vZHVsZSBcIkVudGl0aWVzXCIsIChFbnRpdGllcywgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBFbnRpdGllcy5DYXIgZXh0ZW5kcyBFbnRpdGllcy5SZWxhdGlvbmFsTW9kZWxcbiAgICAgIGxvY2FsU3RvcmFnZTogbmV3IEJhY2tib25lLkxvY2FsU3RvcmFnZShcIkNhcnNcIilcbiAgICAgIGRlZmF1bHRzOlxuICAgICAgICBjcmVhdGVkQXQ6IG1vbWVudCgpLnRvSVNPU3RyaW5nKClcblxuICAgICAgcmVsYXRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdwaG90b3MnXG4gICAgICAgICAgcmVsYXRlZE1vZGVsOiAtPiBFbnRpdGllcy5QaG90b1xuICAgICAgICAgIGNvbGxlY3Rpb25UeXBlOiAtPiBFbnRpdGllcy5QaG90b3NDb2xsZWN0aW9uXG4gICAgICAgIH1cbiAgICAgIF1cblxuICAgICAgdmFsaWRhdGU6IChhdHRycywgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgICBlcnJvcnMgPSBbXVxuXG4gICAgICAgIGlmIF8uaXNFbXB0eSBhdHRycy5tb2RlbFxuICAgICAgICAgIGVycm9ycy5wdXNoXG4gICAgICAgICAgICBhdHRyOiBcIm1vZGVsXCJcbiAgICAgICAgICAgIG1zZzogW1wi0JzQvtC00LXQu9GMXCJdXG5cbiAgICAgICAgaWYgXy5pc0VtcHR5IGF0dHJzLnByaWNlXG4gICAgICAgICAgZXJyb3JzLnB1c2hcbiAgICAgICAgICAgIGF0dHI6IFwicHJpY2VcIlxuICAgICAgICAgICAgbXNnOiBbXCLQodGC0L7QuNC80L7RgdGC0YxcIl1cblxuICAgICAgICBpZiBfLmlzRW1wdHkgYXR0cnMueWVhclxuICAgICAgICAgIGVycm9ycy5wdXNoXG4gICAgICAgICAgICBhdHRyOiBcInllYXJcIlxuICAgICAgICAgICAgbXNnOiBbXCLQk9C+0LQg0LLRi9C/0YPRgdC60LBcIl1cblxuICAgICAgICBpZiBfLmlzRW1wdHkgYXR0cnMuZGVzY3JpcHRpb25cbiAgICAgICAgICBlcnJvcnMucHVzaFxuICAgICAgICAgICAgYXR0cjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBtc2c6IFtcItCe0L/QuNGB0LDQvdC40LVcIl1cblxuICAgICAgICByZXN1bHQgPSBpZiBlcnJvcnMubGVuZ3RoIHRoZW4gZXJyb3JzIGVsc2UgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiByZXN1bHRcblxuICAgIGNsYXNzIEVudGl0aWVzLkNhcnNDb2xsZWN0aW9uIGV4dGVuZHMgRW50aXRpZXMuQ29sbGVjdGlvblxuICAgICAgbW9kZWw6IEVudGl0aWVzLkNhclxuICAgICAgbG9jYWxTdG9yYWdlOiBuZXcgQmFja2JvbmUuTG9jYWxTdG9yYWdlKFwiQ2Fyc1wiKVxuXG4gICAgICBjb21wYXJhdG9yOiAobW9kZWwpIC0+XG4gICAgICAgIEBfc29ydEJ5UmV2ZXJzZV9jcmVhdGVkQXQobW9kZWwpXG5cbiAgICAgIF9zb3J0QnlfY3JlYXRlZEF0OiAobW9kZWwpIC0+XG4gICAgICAgIG5ldyBEYXRlIG1vZGVsLmdldChcImNyZWF0ZWRBdFwiKVxuXG4gICAgICBfc29ydEJ5UmV2ZXJzZV9jcmVhdGVkQXQ6IChtb2RlbCkgLT5cbiAgICAgICAgLSBuZXcgRGF0ZSBtb2RlbC5nZXQoXCJjcmVhdGVkQXRcIilcblxuICAgICAgX3NvcnRCeV9wcmljZTogKG1vZGVsKSAtPlxuICAgICAgICBuZXcgTnVtYmVyIG1vZGVsLmdldChcInByaWNlXCIpXG5cbiAgICAgIF9zb3J0QnlSZXZlcnNlX3ByaWNlOiAobW9kZWwpIC0+XG4gICAgICAgIC0gbmV3IE51bWJlciBtb2RlbC5nZXQoXCJwcmljZVwiKVxuXG4gICAgICBmaWx0ZXJCeU1vZGVsOiAoY2hhcnMpIC0+XG4gICAgICAgIHJldHVybiBAbW9kZWxzIGlmIF8uaXNFbXB0eSBjaGFyc1xuXG4gICAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwIGNoYXJzLCBcImdpXCJcbiAgICAgICAgQGZpbHRlciAoY2FyKSAtPlxuICAgICAgICAgIHBhdHRlcm4udGVzdCBjYXIuZ2V0KFwibW9kZWxcIilcblxuXG4gICAgQVBJID1cbiAgICAgIG5ld0NhcjogKGFyZ3MgPSB7fSkgLT5cbiAgICAgICAgbmV3IEVudGl0aWVzLkNhciBhcmdzXG5cbiAgICAgIGdldENhcnM6IChvcHRpb25zID0ge30pIC0+XG4gICAgICAgIEBjYXJzIHx8PSBuZXcgRW50aXRpZXMuQ2Fyc0NvbGxlY3Rpb25cbiAgICAgICAgQGNhcnMuZmV0Y2goKVxuXG4gICAgICAgIGlmIHNpemUgPSBvcHRpb25zLnNpemVcbiAgICAgICAgICBjYXJzID0gbmV3IEVudGl0aWVzLkNhcnNDb2xsZWN0aW9uIEBjYXJzLm1vZGVsc1swIC4uLiBzaXplXVxuICAgICAgICAgIGNhcnMudG90YWwgPSBAY2Fycy5sZW5ndGhcbiAgICAgICAgICBjYXJzXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBAY2Fyc1xuXG4gICAgICBnZXRDYXI6IChpZCwgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgICBAY2FycyB8fD0gQXBwLnJlcXJlcy5yZXF1ZXN0ICdjYXI6ZW50aXRpZXMnXG4gICAgICAgIEBjYXJzLmdldCBpZFxuXG4gICAgICBjcmVhdGVDYXI6IChtb2RlbCwgb3B0aW9ucyA9IHt9KSAtPlxuICAgICAgICByZXR1cm4gdW5sZXNzIG1vZGVsLmlzVmFsaWQoKVxuXG4gICAgICAgIG9wdGlvbnMgPSBfLmRlZmF1bHRzIG9wdGlvbnMsXG4gICAgICAgICAgc3VjY2VzczogKG1vZGVsLCByZXNwb25zZSwgb3B0aW9ucykgLT5cbiAgICAgICAgICAgIEFwcC5uYXZpZ2F0ZSAnL2NhcicsIHt0cmlnZ2VyOiB0cnVlfVxuXG4gICAgICAgICAgZXJyb3I6IChtb2RlbCwgcmVzcG9uc2UsIG9wdGlvbnMpIC0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3InXG5cbiAgICAgICAgbW9kZWwuc2F2ZSB7fSwgb3B0aW9uc1xuXG4gICAgICBkZXN0cm95Q2FyOiAoY2FyLCBvcHRpb25zID0ge30pIC0+XG4gICAgICAgIG9wdGlvbnMgPSBfLmRlZmF1bHRzIG9wdGlvbnMsXG4gICAgICAgICAgc3VjY2VzczogKG1vZGVsLCByZXNwb25zZSwgb3B0aW9ucykgLT5cbiAgICAgICAgICAgIEFwcC5uYXZpZ2F0ZSAnL2NhcicsIHt0cmlnZ2VyOiB0cnVlfVxuXG4gICAgICAgICAgZXJyb3I6IChtb2RlbCwgcmVzcG9uc2UsIG9wdGlvbnMpIC0+XG4gICAgICAgICAgICAjXG5cbiAgICAgICAgYWxlcnQgPSBBcHAucmVxcmVzLnJlcXVlc3QgJ2FsZXJ0OndpbmRvdycsXG4gICAgICAgICAgaGVhZGVyOiAn0KPQtNCw0LvQuNGC0Ywg0LDQstGC0L7QvNC+0LHQuNC70YwnXG4gICAgICAgICAgbWVzc2FnZTogJycnXG4gICAgICAgICAgICDQktGLINGD0LLQtdGA0LXQvdGLLCDRh9GC0L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINCw0LLRgtC+0LzQvtCx0LjQu9GMINC40Lcg0LvQvtC60LDQu9GM0L3QvtC5INCx0LDQt9GLINC00LDQvdC90YvRhSDQktCw0YjQtdCz0L4g0LHRgNCw0YPQt9C10YDQsD9cbiAgICAgICAgICAnJydcblxuICAgICAgICBhbGVydC5vbiAnYXBwcm92ZScsIC0+XG4gICAgICAgICAgY2FyLmRlc3Ryb3kgb3B0aW9uc1xuXG4gICAgICAgIGFsZXJ0Lm9uICdkZW55JywgLT5cbiAgICAgICAgICAjXG5cbiAgICAgIHJlZnJlc2hDYXJzOiAoY2FycywgZmlsdGVyKSAtPlxuICAgICAgICAjIEZpbHRlcmluZ1xuICAgICAgICBxdWVyeSA9IGZpbHRlci5nZXQoJ3F1ZXJ5JylcbiAgICAgICAgbW9kZWxzID0gQXBwLnJlcXJlcy5yZXF1ZXN0KCdjYXI6ZW50aXRpZXMnKVxuICAgICAgICAgIC5maWx0ZXJCeU1vZGVsKHF1ZXJ5KVxuICAgICAgICBjYXJzLnJlc2V0IG1vZGVsc1xuXG4gICAgICAgICMgU29ydGluZ1xuICAgICAgICByZXZlcnNlID0gaWYgZmlsdGVyLmdldChcImRpcmVjdGlvblwiKSA+IDAgdGhlbiBcIlwiIGVsc2UgXCJSZXZlcnNlXCJcbiAgICAgICAgYXR0ciA9IGZpbHRlci5nZXQoJ3NvcnRfYnknKVxuICAgICAgICBmdW5jTmFtZSA9IFwiX3NvcnRCeSN7cmV2ZXJzZX1fI3thdHRyfVwiXG5cbiAgICAgICAgdW5sZXNzIF8uaXNGdW5jdGlvbiBjYXJzW2Z1bmNOYW1lXVxuICAgICAgICAgIHRocm93IFwiQ29tcGFyYXRvciBmdW5jdGlvbiBzaG91bGQgYmUgZXhpc3QgaW4gQ2Fyc0NvbGxlY3Rpb246ICN7ZnVuY05hbWV9XCJcblxuICAgICAgICBjYXJzLmNvbXBhcmF0b3IgPSBjYXJzW2Z1bmNOYW1lXVxuICAgICAgICBjYXJzLnNvcnQoKVxuXG5cbiAgICAgIHBvcHVsYXRlQ2FyczogKGNhcnMpIC0+XG4gICAgICAgIHJlcXVpcmUgWydhcHAvZW50aXRpZXMvY2FyL2RhdGEnXSwgKGRhdGEpIC0+XG4gICAgICAgICAgY2FycyB8fD0gQXBwLnJlcXJlcy5yZXF1ZXN0ICdjYXI6ZW50aXRpZXMnXG4gICAgICAgICAgXy5lYWNoIGRhdGEsIChtb2RlbCkgLT5cbiAgICAgICAgICAgIGNhcnMuY3JlYXRlIG1vZGVsXG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcblxuXG4gICAgQXBwLnJlcXJlcy5zZXRIYW5kbGVyICdjYXI6ZW50aXRpZXMnLCAoYXJncy4uLikgLT5cbiAgICAgIEFQSS5nZXRDYXJzIGFyZ3MuLi5cblxuICAgIEFwcC5yZXFyZXMuc2V0SGFuZGxlciAnY2FyOmVudGl0eScsIChhcmdzLi4uKSAtPlxuICAgICAgQVBJLmdldENhciBhcmdzLi4uXG5cbiAgICBBcHAucmVxcmVzLnNldEhhbmRsZXIgJ2NhcjplbnRpdHk6bmV3JywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkubmV3Q2FyIGFyZ3MuLi5cblxuICAgIEFwcC5jb21tYW5kcy5zZXRIYW5kbGVyICdjYXI6ZW50aXR5OmNyZWF0ZScsIChhcmdzLi4uKSAtPlxuICAgICAgQVBJLmNyZWF0ZUNhciBhcmdzLi4uXG5cbiAgICBBcHAuY29tbWFuZHMuc2V0SGFuZGxlciAnY2FyOmVudGl0eTpkZXN0cm95JywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkuZGVzdHJveUNhciBhcmdzLi4uXG5cbiAgICBBcHAuY29tbWFuZHMuc2V0SGFuZGxlciAnY2FyOmVudGl0aWVzOnJlZnJlc2gnLCAoYXJncy4uLikgLT5cbiAgICAgIEFQSS5yZWZyZXNoQ2FycyBhcmdzLi4uXG5cbiAgICBBcHAuY29tbWFuZHMuc2V0SGFuZGxlciAnY2FyOmVudGl0aWVzOnBvcHVsYXRlJywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkucG9wdWxhdGVDYXJzIGFyZ3MuLi5cbiJdfQ==
