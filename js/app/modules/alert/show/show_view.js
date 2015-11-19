var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', './templates/layout'], function(App, Views) {
  return App.module("Alert.Show", function(Show, App, Backbone, Mn, $, _) {
    return Show.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'alert/show/templates/layout';

      Layout.prototype.className = 'ui basic small modal';

      Layout.prototype.onRender = function() {
        return this.$el.modal({
          onDeny: (function(_this) {
            return function() {
              return _this.model.trigger('deny');
            };
          })(this),
          onApprove: (function(_this) {
            return function() {
              return _this.model.trigger('approve');
            };
          })(this)
        }).modal('show');
      };

      return Layout;

    })(Views.LayoutView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FsZXJ0L3Nob3cvc2hvd192aWV3LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOzs7QUFBQSxNQUFBLENBQU8sQ0FDTCxTQURLLEVBRUwsWUFGSyxFQUdMLG9CQUhLLENBQVAsRUFJRyxTQUFDLEdBQUQsRUFBTSxLQUFOO1NBRUQsR0FBRyxDQUFDLE1BQUosQ0FBVyxZQUFYLEVBQXlCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO1dBRWpCLElBQUksQ0FBQzs7Ozs7Ozt1QkFDVCxRQUFBLEdBQVU7O3VCQUNWLFNBQUEsR0FBVzs7dUJBRVgsUUFBQSxHQUFVLFNBQUE7ZUFDUixJQUFDLENBQUEsR0FDQyxDQUFDLEtBREgsQ0FFSTtVQUFBLE1BQUEsRUFBUSxDQUFBLFNBQUEsS0FBQTttQkFBQSxTQUFBO3FCQUNOLEtBQUMsQ0FBQSxLQUFLLENBQUMsT0FBUCxDQUFlLE1BQWY7WUFETTtVQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBUjtVQUdBLFNBQUEsRUFBVyxDQUFBLFNBQUEsS0FBQTttQkFBQSxTQUFBO3FCQUNULEtBQUMsQ0FBQSxLQUFLLENBQUMsT0FBUCxDQUFlLFNBQWY7WUFEUztVQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FIWDtTQUZKLENBUUUsQ0FBQyxLQVJILENBUVMsTUFSVDtNQURROzs7O09BSmMsS0FBSyxDQUFDO0VBRlQsQ0FBekI7QUFGQyxDQUpIIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FsZXJ0L3Nob3cvc2hvd192aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcbiAgJ2FwcC9hcHAnXG4gICdiYXNlLnZpZXdzJ1xuICAnLi90ZW1wbGF0ZXMvbGF5b3V0J1xuXSwgKEFwcCwgVmlld3MpIC0+XG5cbiAgQXBwLm1vZHVsZSBcIkFsZXJ0LlNob3dcIiwgKFNob3csIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgU2hvdy5MYXlvdXQgZXh0ZW5kcyBWaWV3cy5MYXlvdXRWaWV3XG4gICAgICB0ZW1wbGF0ZTogJ2FsZXJ0L3Nob3cvdGVtcGxhdGVzL2xheW91dCdcbiAgICAgIGNsYXNzTmFtZTogJ3VpIGJhc2ljIHNtYWxsIG1vZGFsJ1xuXG4gICAgICBvblJlbmRlcjogLT5cbiAgICAgICAgQCRlbFxuICAgICAgICAgIC5tb2RhbFxuICAgICAgICAgICAgb25EZW55OiA9PlxuICAgICAgICAgICAgICBAbW9kZWwudHJpZ2dlciAnZGVueSdcblxuICAgICAgICAgICAgb25BcHByb3ZlOiA9PlxuICAgICAgICAgICAgICBAbW9kZWwudHJpZ2dlciAnYXBwcm92ZSdcblxuICAgICAgICAgIC5tb2RhbCAnc2hvdydcbiJdfQ==
