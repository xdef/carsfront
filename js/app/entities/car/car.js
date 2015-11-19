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
      resortCars: function(cars, filter) {
        var attr, funcName, reverse;
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
    App.commands.setHandler('car:entities:resort', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.resortCars.apply(API, args);
    });
    return App.commands.setHandler('car:entities:populate', function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return API.populateCars.apply(API, args);
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9jYXIvY2FyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7O0FBQUEsTUFBQSxDQUFPLENBQUMsU0FBRCxFQUFZLGVBQVosRUFBNkIsU0FBN0IsQ0FBUCxFQUFnRCxTQUFDLEdBQUQsRUFBTSxRQUFOO1NBRTlDLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBWCxFQUF1QixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLFFBQWhCLEVBQTBCLEVBQTFCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBRXJCLFFBQUE7SUFBTSxRQUFRLENBQUM7Ozs7Ozs7b0JBQ2IsWUFBQSxHQUFrQixJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLE1BQXRCOztvQkFDbEIsUUFBQSxHQUNFO1FBQUEsU0FBQSxFQUFXLE1BQUEsQ0FBQSxDQUFRLENBQUMsV0FBVCxDQUFBLENBQVg7OztvQkFFRixTQUFBLEdBQVc7UUFDVDtVQUNFLEdBQUEsRUFBSyxRQURQO1VBRUUsWUFBQSxFQUFjLFNBQUE7bUJBQUcsUUFBUSxDQUFDO1VBQVosQ0FGaEI7VUFHRSxjQUFBLEVBQWdCLFNBQUE7bUJBQUcsUUFBUSxDQUFDO1VBQVosQ0FIbEI7U0FEUzs7O29CQVFYLFFBQUEsR0FBVSxTQUFDLEtBQUQsRUFBUSxPQUFSO0FBQ1IsWUFBQTs7VUFEZ0IsVUFBVTs7UUFDMUIsTUFBQSxHQUFTO1FBRVQsSUFBRyxDQUFDLENBQUMsT0FBRixDQUFVLEtBQUssQ0FBQyxLQUFoQixDQUFIO1VBQ0UsTUFBTSxDQUFDLElBQVAsQ0FDRTtZQUFBLElBQUEsRUFBTSxPQUFOO1lBQ0EsR0FBQSxFQUFLLENBQUMsUUFBRCxDQURMO1dBREYsRUFERjs7UUFLQSxJQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsS0FBSyxDQUFDLEtBQWhCLENBQUg7VUFDRSxNQUFNLENBQUMsSUFBUCxDQUNFO1lBQUEsSUFBQSxFQUFNLE9BQU47WUFDQSxHQUFBLEVBQUssQ0FBQyxXQUFE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LFVBQWIsQ0FBd0Isb0JBQXhCLEVBQThDLFNBQUE7QUFDNUMsVUFBQTtNQUQ2QzthQUM3QyxHQUFHLENBQUMsVUFBSixZQUFlLElBQWY7SUFENEMsQ0FBOUM7SUFHQSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQWIsQ0FBd0IscUJBQXhCLEVBQStDLFNBQUE7QUFDN0MsVUFBQTtNQUQ4QzthQUM5QyxHQUFHLENBQUMsVUFBSixZQUFlLElBQWY7SUFENkMsQ0FBL0M7V0FHQSxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQWIsQ0FBd0IsdUJBQXhCLEVBQWlELFNBQUE7QUFDL0MsVUFBQTtNQURnRDthQUNoRCxHQUFHLENBQUMsWUFBSixZQUFpQixJQUFqQjtJQUQrQyxDQUFqRDtFQXJKcUIsQ0FBdkI7QUFGOEMsQ0FBaEQiLCJmaWxlIjoiYXBwL2VudGl0aWVzL2Nhci9jYXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgWydhcHAvYXBwJywgJ2Jhc2UuZW50aXRpZXMnLCAnLi9waG90byddLCAoQXBwLCBFbnRpdGllcykgLT5cblxuICBBcHAubW9kdWxlIFwiRW50aXRpZXNcIiwgKEVudGl0aWVzLCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIEVudGl0aWVzLkNhciBleHRlbmRzIEVudGl0aWVzLlJlbGF0aW9uYWxNb2RlbFxuICAgICAgbG9jYWxTdG9yYWdlOiBuZXcgQmFja2JvbmUuTG9jYWxTdG9yYWdlKFwiQ2Fyc1wiKVxuICAgICAgZGVmYXVsdHM6XG4gICAgICAgIGNyZWF0ZWRBdDogbW9tZW50KCkudG9JU09TdHJpbmcoKVxuXG4gICAgICByZWxhdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3Bob3RvcydcbiAgICAgICAgICByZWxhdGVkTW9kZWw6IC0+IEVudGl0aWVzLlBob3RvXG4gICAgICAgICAgY29sbGVjdGlvblR5cGU6IC0+IEVudGl0aWVzLlBob3Rvc0NvbGxlY3Rpb25cbiAgICAgICAgfVxuICAgICAgXVxuXG4gICAgICB2YWxpZGF0ZTogKGF0dHJzLCBvcHRpb25zID0ge30pIC0+XG4gICAgICAgIGVycm9ycyA9IFtdXG5cbiAgICAgICAgaWYgXy5pc0VtcHR5IGF0dHJzLm1vZGVsXG4gICAgICAgICAgZXJyb3JzLnB1c2hcbiAgICAgICAgICAgIGF0dHI6IFwibW9kZWxcIlxuICAgICAgICAgICAgbXNnOiBbXCLQnNC+0LTQtdC70YxcIl1cblxuICAgICAgICBpZiBfLmlzRW1wdHkgYXR0cnMucHJpY2VcbiAgICAgICAgICBlcnJvcnMucHVzaFxuICAgICAgICAgICAgYXR0cjogXCJwcmljZVwiXG4gICAgICAgICAgICBtc2c6IFtcItCh0YLQvtC40LzQvtGB0YLRjFwiXVxuXG4gICAgICAgIGlmIF8uaXNFbXB0eSBhdHRycy55ZWFyXG4gICAgICAgICAgZXJyb3JzLnB1c2hcbiAgICAgICAgICAgIGF0dHI6IFwieWVhclwiXG4gICAgICAgICAgICBtc2c6IFtcItCT0L7QtCDQstGL0L/Rg9GB0LrQsFwiXVxuXG4gICAgICAgIGlmIF8uaXNFbXB0eSBhdHRycy5kZXNjcmlwdGlvblxuICAgICAgICAgIGVycm9ycy5wdXNoXG4gICAgICAgICAgICBhdHRyOiBcImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIG1zZzogW1wi0J7Qv9C40YHQsNC90LjQtVwiXVxuXG4gICAgICAgIHJlc3VsdCA9IGlmIGVycm9ycy5sZW5ndGggdGhlbiBlcnJvcnMgZWxzZSB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgY2xhc3MgRW50aXRpZXMuQ2Fyc0NvbGxlY3Rpb24gZXh0ZW5kcyBFbnRpdGllcy5Db2xsZWN0aW9uXG4gICAgICBtb2RlbDogRW50aXRpZXMuQ2FyXG4gICAgICBsb2NhbFN0b3JhZ2U6IG5ldyBCYWNrYm9uZS5Mb2NhbFN0b3JhZ2UoXCJDYXJzXCIpXG5cbiAgICAgIGNvbXBhcmF0b3I6IChtb2RlbCkgLT5cbiAgICAgICAgQF9zb3J0QnlSZXZlcnNlX2NyZWF0ZWRBdChtb2RlbClcblxuICAgICAgX3NvcnRCeV9jcmVhdGVkQXQ6IChtb2RlbCkgLT5cbiAgICAgICAgbmV3IERhdGUgbW9kZWwuZ2V0KFwiY3JlYXRlZEF0XCIpXG5cbiAgICAgIF9zb3J0QnlSZXZlcnNlX2NyZWF0ZWRBdDogKG1vZGVsKSAtPlxuICAgICAgICAtIG5ldyBEYXRlIG1vZGVsLmdldChcImNyZWF0ZWRBdFwiKVxuXG4gICAgICBfc29ydEJ5X3ByaWNlOiAobW9kZWwpIC0+XG4gICAgICAgIG5ldyBOdW1iZXIgbW9kZWwuZ2V0KFwicHJpY2VcIilcblxuICAgICAgX3NvcnRCeVJldmVyc2VfcHJpY2U6IChtb2RlbCkgLT5cbiAgICAgICAgLSBuZXcgTnVtYmVyIG1vZGVsLmdldChcInByaWNlXCIpXG5cbiAgICBBUEkgPVxuICAgICAgbmV3Q2FyOiAoYXJncyA9IHt9KSAtPlxuICAgICAgICBuZXcgRW50aXRpZXMuQ2FyIGFyZ3NcblxuICAgICAgZ2V0Q2FyczogKG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgICAgQGNhcnMgfHw9IG5ldyBFbnRpdGllcy5DYXJzQ29sbGVjdGlvblxuICAgICAgICBAY2Fycy5mZXRjaCgpXG5cbiAgICAgICAgaWYgc2l6ZSA9IG9wdGlvbnMuc2l6ZVxuICAgICAgICAgIGNhcnMgPSBuZXcgRW50aXRpZXMuQ2Fyc0NvbGxlY3Rpb24gQGNhcnMubW9kZWxzWzAgLi4uIHNpemVdXG4gICAgICAgICAgY2Fycy50b3RhbCA9IEBjYXJzLmxlbmd0aFxuICAgICAgICAgIGNhcnNcbiAgICAgICAgZWxzZVxuICAgICAgICAgIEBjYXJzXG5cbiAgICAgIGdldENhcjogKGlkLCBvcHRpb25zID0ge30pIC0+XG4gICAgICAgIEBjYXJzIHx8PSBBcHAucmVxcmVzLnJlcXVlc3QgJ2NhcjplbnRpdGllcydcbiAgICAgICAgQGNhcnMuZ2V0IGlkXG5cbiAgICAgIGNyZWF0ZUNhcjogKG1vZGVsLCBvcHRpb25zID0ge30pIC0+XG4gICAgICAgIHJldHVybiB1bmxlc3MgbW9kZWwuaXNWYWxpZCgpXG5cbiAgICAgICAgb3B0aW9ucyA9IF8uZGVmYXVsdHMgb3B0aW9ucyxcbiAgICAgICAgICBzdWNjZXNzOiAobW9kZWwsIHJlc3BvbnNlLCBvcHRpb25zKSAtPlxuICAgICAgICAgICAgQXBwLm5hdmlnYXRlICcvY2FyJywge3RyaWdnZXI6IHRydWV9XG5cbiAgICAgICAgICBlcnJvcjogKG1vZGVsLCByZXNwb25zZSwgb3B0aW9ucykgLT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdlcnJvcidcblxuICAgICAgICBtb2RlbC5zYXZlIHt9LCBvcHRpb25zXG5cbiAgICAgIGRlc3Ryb3lDYXI6IChjYXIsIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgICAgb3B0aW9ucyA9IF8uZGVmYXVsdHMgb3B0aW9ucyxcbiAgICAgICAgICBzdWNjZXNzOiAobW9kZWwsIHJlc3BvbnNlLCBvcHRpb25zKSAtPlxuICAgICAgICAgICAgQXBwLm5hdmlnYXRlICcvY2FyJywge3RyaWdnZXI6IHRydWV9XG5cbiAgICAgICAgICBlcnJvcjogKG1vZGVsLCByZXNwb25zZSwgb3B0aW9ucykgLT5cbiAgICAgICAgICAgICNcblxuICAgICAgICBhbGVydCA9IEFwcC5yZXFyZXMucmVxdWVzdCAnYWxlcnQ6d2luZG93JyxcbiAgICAgICAgICBoZWFkZXI6ICfQo9C00LDQu9C40YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjCdcbiAgICAgICAgICBtZXNzYWdlOiAnJydcbiAgICAgICAgICAgINCS0Ysg0YPQstC10YDQtdC90YssINGH0YLQviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LDQstGC0L7QvNC+0LHQuNC70Ywg0LjQtyDQu9C+0LrQsNC70YzQvdC+0Lkg0LHQsNC30Ysg0LTQsNC90L3Ri9GFINCS0LDRiNC10LPQviDQsdGA0LDRg9C30LXRgNCwP1xuICAgICAgICAgICcnJ1xuXG4gICAgICAgIGFsZXJ0Lm9uICdhcHByb3ZlJywgLT5cbiAgICAgICAgICBjYXIuZGVzdHJveSBvcHRpb25zXG5cbiAgICAgICAgYWxlcnQub24gJ2RlbnknLCAtPlxuICAgICAgICAgICNcblxuICAgICAgcmVzb3J0Q2FyczogKGNhcnMsIGZpbHRlcikgLT5cbiAgICAgICAgcmV2ZXJzZSA9IGlmIGZpbHRlci5nZXQoXCJkaXJlY3Rpb25cIikgPiAwIHRoZW4gXCJcIiBlbHNlIFwiUmV2ZXJzZVwiXG4gICAgICAgIGF0dHIgPSBmaWx0ZXIuZ2V0KCdzb3J0X2J5JylcbiAgICAgICAgZnVuY05hbWUgPSBcIl9zb3J0Qnkje3JldmVyc2V9XyN7YXR0cn1cIlxuXG4gICAgICAgIHVubGVzcyBfLmlzRnVuY3Rpb24gY2Fyc1tmdW5jTmFtZV1cbiAgICAgICAgICB0aHJvdyBcIkNvbXBhcmF0b3IgZnVuY3Rpb24gc2hvdWxkIGJlIGV4aXN0IGluIENhcnNDb2xsZWN0aW9uOiAje2Z1bmNOYW1lfVwiXG5cbiAgICAgICAgY2Fycy5jb21wYXJhdG9yID0gY2Fyc1tmdW5jTmFtZV1cbiAgICAgICAgY2Fycy5zb3J0KClcblxuICAgICAgcG9wdWxhdGVDYXJzOiAoY2FycykgLT5cbiAgICAgICAgcmVxdWlyZSBbJ2FwcC9lbnRpdGllcy9jYXIvZGF0YSddLCAoZGF0YSkgLT5cbiAgICAgICAgICBjYXJzIHx8PSBBcHAucmVxcmVzLnJlcXVlc3QgJ2NhcjplbnRpdGllcydcbiAgICAgICAgICBfLmVhY2ggZGF0YSwgKG1vZGVsKSAtPlxuICAgICAgICAgICAgY2Fycy5jcmVhdGUgbW9kZWxcblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuXG5cbiAgICBBcHAucmVxcmVzLnNldEhhbmRsZXIgJ2NhcjplbnRpdGllcycsIChhcmdzLi4uKSAtPlxuICAgICAgQVBJLmdldENhcnMgYXJncy4uLlxuXG4gICAgQXBwLnJlcXJlcy5zZXRIYW5kbGVyICdjYXI6ZW50aXR5JywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkuZ2V0Q2FyIGFyZ3MuLi5cblxuICAgIEFwcC5yZXFyZXMuc2V0SGFuZGxlciAnY2FyOmVudGl0eTpuZXcnLCAoYXJncy4uLikgLT5cbiAgICAgIEFQSS5uZXdDYXIgYXJncy4uLlxuXG4gICAgQXBwLmNvbW1hbmRzLnNldEhhbmRsZXIgJ2NhcjplbnRpdHk6Y3JlYXRlJywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkuY3JlYXRlQ2FyIGFyZ3MuLi5cblxuICAgIEFwcC5jb21tYW5kcy5zZXRIYW5kbGVyICdjYXI6ZW50aXR5OmRlc3Ryb3knLCAoYXJncy4uLikgLT5cbiAgICAgIEFQSS5kZXN0cm95Q2FyIGFyZ3MuLi5cblxuICAgIEFwcC5jb21tYW5kcy5zZXRIYW5kbGVyICdjYXI6ZW50aXRpZXM6cmVzb3J0JywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkucmVzb3J0Q2FycyBhcmdzLi4uXG5cbiAgICBBcHAuY29tbWFuZHMuc2V0SGFuZGxlciAnY2FyOmVudGl0aWVzOnBvcHVsYXRlJywgKGFyZ3MuLi4pIC0+XG4gICAgICBBUEkucG9wdWxhdGVDYXJzIGFyZ3MuLi5cbiJdfQ==
