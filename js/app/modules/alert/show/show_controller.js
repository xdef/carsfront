var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.controllers', './show_view'], function(App) {
  return App.module('Alert.Show', function(Show, Backbone, Mn, $, _) {
    return Show.Controller = (function(superClass) {
      extend(Controller, superClass);

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function(options) {
        var alert;
        alert = options.alert, this.region = options.region;
        this.layout = this.getLayoutView(alert);
        return this.region.show(this.layout);
      };

      Controller.prototype.getLayoutView = function(alert) {
        return new Show.Layout({
          model: alert
        });
      };

      return Controller;

    })(App.Controllers.Base);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FsZXJ0L3Nob3cvc2hvd19jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBQSxNQUFBLENBQU8sQ0FBQyxTQUFELEVBQVksa0JBQVosRUFBZ0MsYUFBaEMsQ0FBUCxFQUF1RCxTQUFDLEdBQUQ7U0FFckQsR0FBRyxDQUFDLE1BQUosQ0FBVyxZQUFYLEVBQXlCLFNBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUIsRUFBakIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7V0FFakIsSUFBSSxDQUFDOzs7Ozs7OzJCQUVULFVBQUEsR0FBWSxTQUFDLE9BQUQ7QUFDVixZQUFBO1FBQUUsZ0JBQUEsS0FBRixFQUFTLElBQUMsQ0FBQSxpQkFBQTtRQUVWLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLGFBQUQsQ0FBZSxLQUFmO2VBQ1YsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsSUFBQyxDQUFBLE1BQWQ7TUFKVTs7MkJBTVosYUFBQSxHQUFlLFNBQUMsS0FBRDtlQUNULElBQUEsSUFBSSxDQUFDLE1BQUwsQ0FDRjtVQUFBLEtBQUEsRUFBTyxLQUFQO1NBREU7TUFEUzs7OztPQVJhLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFGdkIsQ0FBekI7QUFGcUQsQ0FBdkQiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWxlcnQvc2hvdy9zaG93X2NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUgWydhcHAvYXBwJywgJ2Jhc2UuY29udHJvbGxlcnMnLCAnLi9zaG93X3ZpZXcnXSwgKEFwcCkgLT5cblxuICBBcHAubW9kdWxlICdBbGVydC5TaG93JywgKFNob3csIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIFNob3cuQ29udHJvbGxlciBleHRlbmRzIEFwcC5Db250cm9sbGVycy5CYXNlXG5cbiAgICAgIGluaXRpYWxpemU6IChvcHRpb25zKSAtPlxuICAgICAgICB7IGFsZXJ0LCBAcmVnaW9uIH0gPSBvcHRpb25zXG5cbiAgICAgICAgQGxheW91dCA9IEBnZXRMYXlvdXRWaWV3IGFsZXJ0XG4gICAgICAgIEByZWdpb24uc2hvdyBAbGF5b3V0XG5cbiAgICAgIGdldExheW91dFZpZXc6IChhbGVydCkgLT5cbiAgICAgICAgbmV3IFNob3cuTGF5b3V0XG4gICAgICAgICAgbW9kZWw6IGFsZXJ0XG4iXX0=
