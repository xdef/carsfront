var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["app/app", "base.controllers", "./home_view"], function(App) {
  App.module("Pages.Home", function(Home, App, Backbone, Mn, $, _) {
    return Home.Controller = (function(superClass) {
      extend(Controller, superClass);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        var cars;
        this.region = options.region;
        this.layout = this.getLayoutView();
        cars = App.reqres.request('car:entities', {
          size: 4
        });
        this.layout.on("before:show", (function(_this) {
          return function() {
            _this.getHeaderView();
            return App.commands.execute('when:fetched', cars, function() {
              return _this.getCarsView(cars);
            });
          };
        })(this));
        return this.region.show(this.layout);
      };

      Controller.prototype.getLayoutView = function() {
        return new Home.Layout;
      };

      Controller.prototype.getHeaderView = function() {
        var view;
        view = new Home.Header;
        return this.layout.showChildView('headerRegion', view);
      };

      Controller.prototype.getCarsView = function(cars) {
        var view;
        view = new Home.Cars({
          collection: cars
        });
        view.on('car:goto', function(args) {
          var collection, model;
          model = args.model, collection = args.collection, view = args.view;
          return App.navigate("/car/" + model.id, {
            trigger: true
          });
        });
        view.on('car:populate', function(args) {
          var collection, model;
          model = args.model, collection = args.collection, view = args.view;
          return App.commands.execute('car:entities:populate');
        });
        return this.layout.showChildView('carsRegion', view);
      };

      return Controller;

    })(App.Controllers.Base);
  });
  return App.Pages.Home.Controller;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3BhZ2VzL2hvbWUvaG9tZV9jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELEVBQVksa0JBQVosRUFBZ0MsYUFBaEMsQ0FBUCxFQUF1RCxTQUFDLEdBQUQ7RUFFckQsR0FBRyxDQUFDLE1BQUosQ0FBVyxZQUFYLEVBQXlCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO1dBRWpCLElBQUksQ0FBQzs7Ozs7OzsyQkFDVCxVQUFBLEdBQVksU0FBQyxPQUFEO0FBQ1YsWUFBQTtRQUFFLElBQUMsQ0FBQSxTQUFXLFFBQVg7UUFDSCxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxhQUFELENBQUE7UUFFVixJQUFBLEdBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFYLENBQW1CLGNBQW5CLEVBQW1DO1VBQUEsSUFBQSxFQUFNLENBQU47U0FBbkM7UUFFUCxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxhQUFYLEVBQTBCLENBQUEsU0FBQSxLQUFBO2lCQUFBLFNBQUE7WUFDeEIsS0FBQyxDQUFBLGFBQUQsQ0FBQTttQkFFQSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsSUFBckMsRUFBMkMsU0FBQTtxQkFDekMsS0FBQyxDQUFBLFdBQUQsQ0FBYSxJQUFiO1lBRHlDLENBQTNDO1VBSHdCO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQjtlQU1BLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQUMsQ0FBQSxNQUFkO01BWlU7OzJCQWNaLGFBQUEsR0FBZSxTQUFBO2VBQ2IsSUFBSSxJQUFJLENBQUM7TUFESTs7MkJBR2YsYUFBQSxHQUFlLFNBQUE7QUFDYixZQUFBO1FBQUEsSUFBQSxHQUFPLElBQUksSUFBSSxDQUFDO2VBQ2hCLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFzQixjQUF0QixFQUFzQyxJQUF0QztNQUZhOzsyQkFJZixXQUFBLEdBQWEsU0FBQyxJQUFEO0FBQ1gsWUFBQTtRQUFBLElBQUEsR0FBVyxJQUFBLElBQUksQ0FBQyxJQUFMLENBQ1Q7VUFBQSxVQUFBLEVBQVksSUFBWjtTQURTO1FBR1gsSUFBSSxDQUFDLEVBQUwsQ0FBUSxVQUFSLEVBQW9CLFNBQUMsSUFBRDtBQUNsQixjQUFBO1VBQUUsYUFBQSxLQUFGLEVBQVMsa0JBQUEsVUFBVCxFQUFxQixZQUFBO2lCQUNyQixHQUFHLENBQUMsUUFBSixDQUFhLE9BQUEsR0FBUSxLQUFLLENBQUMsRUFBM0IsRUFBaUM7WUFBRSxPQUFBLEVBQVMsSUFBWDtXQUFqQztRQUZrQixDQUFwQjtRQUlBLElBQUksQ0FBQyxFQUFMLENBQVEsY0FBUixFQUF3QixTQUFDLElBQUQ7QUFDdEIsY0FBQTtVQUFFLGFBQUEsS0FBRixFQUFTLGtCQUFBLFVBQVQsRUFBcUIsWUFBQTtpQkFDckIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFiLENBQXFCLHVCQUFyQjtRQUZzQixDQUF4QjtlQUlBLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFzQixZQUF0QixFQUFvQyxJQUFwQztNQVpXOzs7O09BdEJlLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFGdkIsQ0FBekI7U0FzQ0EsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUF4Q3NDLENBQXZEIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3BhZ2VzL2hvbWUvaG9tZV9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcImFwcC9hcHBcIiwgXCJiYXNlLmNvbnRyb2xsZXJzXCIsIFwiLi9ob21lX3ZpZXdcIl0sIChBcHApLT5cblxuICBBcHAubW9kdWxlIFwiUGFnZXMuSG9tZVwiLCAoSG9tZSwgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBIb21lLkNvbnRyb2xsZXIgZXh0ZW5kcyBBcHAuQ29udHJvbGxlcnMuQmFzZVxuICAgICAgaW5pdGlhbGl6ZTogKG9wdGlvbnMpIC0+XG4gICAgICAgIHsgQHJlZ2lvbiB9ID0gb3B0aW9uc1xuICAgICAgICBAbGF5b3V0ID0gQGdldExheW91dFZpZXcoKVxuXG4gICAgICAgIGNhcnMgPSBBcHAucmVxcmVzLnJlcXVlc3QgJ2NhcjplbnRpdGllcycsIHNpemU6IDRcblxuICAgICAgICBAbGF5b3V0Lm9uIFwiYmVmb3JlOnNob3dcIiwgPT5cbiAgICAgICAgICBAZ2V0SGVhZGVyVmlldygpXG5cbiAgICAgICAgICBBcHAuY29tbWFuZHMuZXhlY3V0ZSAnd2hlbjpmZXRjaGVkJywgY2FycywgPT5cbiAgICAgICAgICAgIEBnZXRDYXJzVmlldyBjYXJzXG5cbiAgICAgICAgQHJlZ2lvbi5zaG93IEBsYXlvdXRcblxuICAgICAgZ2V0TGF5b3V0VmlldzogLT5cbiAgICAgICAgbmV3IEhvbWUuTGF5b3V0XG5cbiAgICAgIGdldEhlYWRlclZpZXc6IC0+XG4gICAgICAgIHZpZXcgPSBuZXcgSG9tZS5IZWFkZXJcbiAgICAgICAgQGxheW91dC5zaG93Q2hpbGRWaWV3ICdoZWFkZXJSZWdpb24nLCB2aWV3XG5cbiAgICAgIGdldENhcnNWaWV3OiAoY2FycykgLT5cbiAgICAgICAgdmlldyA9IG5ldyBIb21lLkNhcnNcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjYXJzXG5cbiAgICAgICAgdmlldy5vbiAnY2FyOmdvdG8nLCAoYXJncykgLT5cbiAgICAgICAgICB7IG1vZGVsLCBjb2xsZWN0aW9uLCB2aWV3IH0gPSBhcmdzXG4gICAgICAgICAgQXBwLm5hdmlnYXRlIFwiL2Nhci8je21vZGVsLmlkfVwiLCB7IHRyaWdnZXI6IHRydWUgfVxuXG4gICAgICAgIHZpZXcub24gJ2Nhcjpwb3B1bGF0ZScsIChhcmdzKSAtPlxuICAgICAgICAgIHsgbW9kZWwsIGNvbGxlY3Rpb24sIHZpZXcgfSA9IGFyZ3NcbiAgICAgICAgICBBcHAuY29tbWFuZHMuZXhlY3V0ZSAnY2FyOmVudGl0aWVzOnBvcHVsYXRlJ1xuXG4gICAgICAgIEBsYXlvdXQuc2hvd0NoaWxkVmlldyAnY2Fyc1JlZ2lvbicsIHZpZXdcblxuICBBcHAuUGFnZXMuSG9tZS5Db250cm9sbGVyXG4iXX0=
