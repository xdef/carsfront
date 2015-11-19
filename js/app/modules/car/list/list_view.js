var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', './templates/layout', './templates/menu', './templates/item', './templates/empty'], function() {
  var App, Views;
  App = require('app/app');
  Views = require('base.views');
  return App.module('Car.List', function(List, App, Backbone, Mn, $, _) {
    List.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'car/list/templates/layout';

      Layout.prototype.className = 'ui container';

      Layout.prototype.regions = {
        menuRegion: '#menu-region',
        listRegion: '#list-region',
        moreRegion: '#more-region'
      };

      return Layout;

    })(Views.LayoutView);
    List.Menu = (function(superClass) {
      extend(Menu, superClass);

      function Menu() {
        return Menu.__super__.constructor.apply(this, arguments);
      }

      Menu.prototype.template = 'car/list/templates/menu';

      Menu.prototype.className = 'ui icon menu';

      Menu.prototype.ui = {
        dropdownBtn: '.ui.dropdown',
        directionBtn: '.direction'
      };

      Menu.prototype.triggers = {
        'submit form': 'submit'
      };

      Menu.prototype.events = {
        'click @ui.directionBtn': 'toggleDirection'
      };

      Menu.prototype.bindings = {
        '[name=query]': {
          observe: 'query'
        },
        '[data-direction]': {
          observe: 'direction',
          updateMethod: 'html',
          onGet: function(val, options) {
            switch (Number(val)) {
              case -1:
                return '<i class="sort content descending large icon"></i>';
              case 1:
                return '<i class="sort content ascending large icon"></i>';
            }
          }
        }
      };

      Menu.prototype.initSortBy = function($el) {
        var options;
        options = {
          onChange: (function(_this) {
            return function(value, text, $choice) {
              return _this.model.set({
                sort_by: $choice.data('attr')
              });
            };
          })(this)
        };
        return $el.dropdown(options);
      };

      Menu.prototype.toggleDirection = function(e) {
        var value;
        e.preventDefault();
        e.stopPropagation();
        value = -Number(this.model.get("direction"));
        return this.model.set({
          direction: value
        });
      };

      Menu.prototype.onRender = function() {
        return this.initSortBy(this.ui.dropdownBtn);
      };

      return Menu;

    })(Views.ItemView);
    List.Empty = (function(superClass) {
      extend(Empty, superClass);

      function Empty() {
        return Empty.__super__.constructor.apply(this, arguments);
      }

      Empty.prototype.template = 'car/list/templates/empty';

      Empty.prototype.className = 'ui icon message';

      return Empty;

    })(Views.ItemView);
    List.Item = (function(superClass) {
      extend(Item, superClass);

      function Item() {
        return Item.__super__.constructor.apply(this, arguments);
      }

      Item.prototype.template = 'car/list/templates/item';

      Item.prototype.className = 'item';

      Item.prototype.ui = {
        destroyBtn: 'a.delete'
      };

      Item.prototype.triggers = {
        'click @ui.destroyBtn': 'delete'
      };

      return Item;

    })(Views.ItemView);
    return List.Cars = (function(superClass) {
      extend(Cars, superClass);

      function Cars() {
        return Cars.__super__.constructor.apply(this, arguments);
      }

      Cars.prototype.className = 'ui very relaxed divided items';

      Cars.prototype.childView = List.Item;

      Cars.prototype.childViewEventPrefix = 'car';

      Cars.prototype.emptyView = List.Empty;

      return Cars;

    })(Views.CollectionView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9saXN0L2xpc3Rfdmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQ0wsU0FESyxFQUVMLFlBRkssRUFHTCxvQkFISyxFQUlMLGtCQUpLLEVBS0wsa0JBTEssRUFNTCxtQkFOSyxDQUFQLEVBT0csU0FBQTtBQUNELE1BQUE7RUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLFNBQVI7RUFDTixLQUFBLEdBQVEsT0FBQSxDQUFRLFlBQVI7U0FFUixHQUFHLENBQUMsTUFBSixDQUFXLFVBQVgsRUFBdUIsU0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLFFBQVosRUFBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0I7SUFFZixJQUFJLENBQUM7Ozs7Ozs7dUJBQ1QsUUFBQSxHQUFVOzt1QkFDVixTQUFBLEdBQVc7O3VCQUVYLE9BQUEsR0FDRTtRQUFBLFVBQUEsRUFBWSxjQUFaO1FBQ0EsVUFBQSxFQUFZLGNBRFo7UUFFQSxVQUFBLEVBQVksY0FGWjs7Ozs7T0FMc0IsS0FBSyxDQUFDO0lBUzFCLElBQUksQ0FBQzs7Ozs7OztxQkFDVCxRQUFBLEdBQVU7O3FCQUNWLFNBQUEsR0FBVzs7cUJBRVgsRUFBQSxHQUNFO1FBQUEsV0FBQSxFQUFhLGNBQWI7UUFDQSxZQUFBLEVBQWMsWUFEZDs7O3FCQUdGLFFBQUEsR0FDRTtRQUFBLGFBQUEsRUFBZSxRQUFmOzs7cUJBRUYsTUFBQSxHQUNFO1FBQUEsd0JBQUEsRUFBMEIsaUJBQTFCOzs7cUJBRUYsUUFBQSxHQUNFO1FBQUEsY0FBQSxFQUNFO1VBQUEsT0FBQSxFQUFTLE9BQVQ7U0FERjtRQUdBLGtCQUFBLEVBQ0U7VUFBQSxPQUFBLEVBQVMsV0FBVDtVQUNBLFlBQUEsRUFBYyxNQURkO1VBR0EsS0FBQSxFQUFPLFNBQUMsR0FBRCxFQUFNLE9BQU47QUFDTCxvQkFBTyxNQUFBLENBQU8sR0FBUCxDQUFQO0FBQUEsbUJBQ08sQ0FBQyxDQURSO3VCQUVJO0FBRkosbUJBR08sQ0FIUDt1QkFJSTtBQUpKO1VBREssQ0FIUDtTQUpGOzs7cUJBY0YsVUFBQSxHQUFZLFNBQUMsR0FBRDtBQUNWLFlBQUE7UUFBQSxPQUFBLEdBQ0U7VUFBQSxRQUFBLEVBQVUsQ0FBQSxTQUFBLEtBQUE7bUJBQUEsU0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLE9BQWQ7cUJBQ1IsS0FBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQVc7Z0JBQUEsT0FBQSxFQUFTLE9BQU8sQ0FBQyxJQUFSLENBQWEsTUFBYixDQUFUO2VBQVg7WUFEUTtVQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBVjs7ZUFHRixHQUFHLENBQUMsUUFBSixDQUFhLE9BQWI7TUFMVTs7cUJBT1osZUFBQSxHQUFpQixTQUFDLENBQUQ7QUFDZixZQUFBO1FBQUEsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQUNBLENBQUMsQ0FBQyxlQUFGLENBQUE7UUFFQSxLQUFBLEdBQVEsQ0FBRSxNQUFBLENBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQVcsV0FBWCxDQUFQO2VBQ1YsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQVc7VUFBQSxTQUFBLEVBQVcsS0FBWDtTQUFYO01BTGU7O3FCQU9qQixRQUFBLEdBQVUsU0FBQTtlQUNSLElBQUMsQ0FBQSxVQUFELENBQVksSUFBQyxDQUFBLEVBQUUsQ0FBQyxXQUFoQjtNQURROzs7O09BM0NZLEtBQUssQ0FBQztJQStDeEIsSUFBSSxDQUFDOzs7Ozs7O3NCQUNULFFBQUEsR0FBVTs7c0JBQ1YsU0FBQSxHQUFXOzs7O09BRlksS0FBSyxDQUFDO0lBSXpCLElBQUksQ0FBQzs7Ozs7OztxQkFDVCxRQUFBLEdBQVU7O3FCQUNWLFNBQUEsR0FBVzs7cUJBRVgsRUFBQSxHQUNFO1FBQUEsVUFBQSxFQUFZLFVBQVo7OztxQkFFRixRQUFBLEdBQ0U7UUFBQSxzQkFBQSxFQUF3QixRQUF4Qjs7Ozs7T0FSb0IsS0FBSyxDQUFDO1dBV3hCLElBQUksQ0FBQzs7Ozs7OztxQkFDVCxTQUFBLEdBQVc7O3FCQUVYLFNBQUEsR0FBVyxJQUFJLENBQUM7O3FCQUNoQixvQkFBQSxHQUFzQjs7cUJBQ3RCLFNBQUEsR0FBVyxJQUFJLENBQUM7Ozs7T0FMTSxLQUFLLENBQUM7RUF6RVQsQ0FBdkI7QUFKQyxDQVBIIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2Nhci9saXN0L2xpc3Rfdmlldy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gICdhcHAvYXBwJ1xuICAnYmFzZS52aWV3cydcbiAgJy4vdGVtcGxhdGVzL2xheW91dCdcbiAgJy4vdGVtcGxhdGVzL21lbnUnXG4gICcuL3RlbXBsYXRlcy9pdGVtJ1xuICAnLi90ZW1wbGF0ZXMvZW1wdHknXG5dLCAoKSAtPlxuICBBcHAgPSByZXF1aXJlICdhcHAvYXBwJ1xuICBWaWV3cyA9IHJlcXVpcmUgJ2Jhc2Uudmlld3MnXG5cbiAgQXBwLm1vZHVsZSAnQ2FyLkxpc3QnLCAoTGlzdCwgQXBwLCBCYWNrYm9uZSwgTW4sICQsIF8pIC0+XG5cbiAgICBjbGFzcyBMaXN0LkxheW91dCBleHRlbmRzIFZpZXdzLkxheW91dFZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL2xpc3QvdGVtcGxhdGVzL2xheW91dCdcbiAgICAgIGNsYXNzTmFtZTogJ3VpIGNvbnRhaW5lcidcblxuICAgICAgcmVnaW9uczpcbiAgICAgICAgbWVudVJlZ2lvbjogJyNtZW51LXJlZ2lvbidcbiAgICAgICAgbGlzdFJlZ2lvbjogJyNsaXN0LXJlZ2lvbidcbiAgICAgICAgbW9yZVJlZ2lvbjogJyNtb3JlLXJlZ2lvbidcblxuICAgIGNsYXNzIExpc3QuTWVudSBleHRlbmRzIFZpZXdzLkl0ZW1WaWV3XG4gICAgICB0ZW1wbGF0ZTogJ2Nhci9saXN0L3RlbXBsYXRlcy9tZW51J1xuICAgICAgY2xhc3NOYW1lOiAndWkgaWNvbiBtZW51J1xuXG4gICAgICB1aTpcbiAgICAgICAgZHJvcGRvd25CdG46ICcudWkuZHJvcGRvd24nXG4gICAgICAgIGRpcmVjdGlvbkJ0bjogJy5kaXJlY3Rpb24nXG5cbiAgICAgIHRyaWdnZXJzOlxuICAgICAgICAnc3VibWl0IGZvcm0nOiAnc3VibWl0J1xuXG4gICAgICBldmVudHM6XG4gICAgICAgICdjbGljayBAdWkuZGlyZWN0aW9uQnRuJzogJ3RvZ2dsZURpcmVjdGlvbidcblxuICAgICAgYmluZGluZ3M6XG4gICAgICAgICdbbmFtZT1xdWVyeV0nOlxuICAgICAgICAgIG9ic2VydmU6ICdxdWVyeSdcblxuICAgICAgICAnW2RhdGEtZGlyZWN0aW9uXSc6XG4gICAgICAgICAgb2JzZXJ2ZTogJ2RpcmVjdGlvbidcbiAgICAgICAgICB1cGRhdGVNZXRob2Q6ICdodG1sJ1xuXG4gICAgICAgICAgb25HZXQ6ICh2YWwsIG9wdGlvbnMpIC0+XG4gICAgICAgICAgICBzd2l0Y2ggTnVtYmVyKHZhbClcbiAgICAgICAgICAgICAgd2hlbiAtMVxuICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cInNvcnQgY29udGVudCBkZXNjZW5kaW5nIGxhcmdlIGljb25cIj48L2k+J1xuICAgICAgICAgICAgICB3aGVuIDFcbiAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJzb3J0IGNvbnRlbnQgYXNjZW5kaW5nIGxhcmdlIGljb25cIj48L2k+J1xuXG4gICAgICBpbml0U29ydEJ5OiAoJGVsKSAtPlxuICAgICAgICBvcHRpb25zID1cbiAgICAgICAgICBvbkNoYW5nZTogKHZhbHVlLCB0ZXh0LCAkY2hvaWNlKSA9PlxuICAgICAgICAgICAgQG1vZGVsLnNldCBzb3J0X2J5OiAkY2hvaWNlLmRhdGEoJ2F0dHInKVxuXG4gICAgICAgICRlbC5kcm9wZG93bihvcHRpb25zKVxuXG4gICAgICB0b2dnbGVEaXJlY3Rpb246IChlKSAtPlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIHZhbHVlID0gLSBOdW1iZXIgQG1vZGVsLmdldChcImRpcmVjdGlvblwiKVxuICAgICAgICBAbW9kZWwuc2V0IGRpcmVjdGlvbjogdmFsdWVcblxuICAgICAgb25SZW5kZXI6IC0+XG4gICAgICAgIEBpbml0U29ydEJ5IEB1aS5kcm9wZG93bkJ0blxuXG5cbiAgICBjbGFzcyBMaXN0LkVtcHR5IGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL2xpc3QvdGVtcGxhdGVzL2VtcHR5J1xuICAgICAgY2xhc3NOYW1lOiAndWkgaWNvbiBtZXNzYWdlJ1xuXG4gICAgY2xhc3MgTGlzdC5JdGVtIGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL2xpc3QvdGVtcGxhdGVzL2l0ZW0nXG4gICAgICBjbGFzc05hbWU6ICdpdGVtJ1xuXG4gICAgICB1aTpcbiAgICAgICAgZGVzdHJveUJ0bjogJ2EuZGVsZXRlJ1xuXG4gICAgICB0cmlnZ2VyczpcbiAgICAgICAgJ2NsaWNrIEB1aS5kZXN0cm95QnRuJzogJ2RlbGV0ZSdcblxuXG4gICAgY2xhc3MgTGlzdC5DYXJzIGV4dGVuZHMgVmlld3MuQ29sbGVjdGlvblZpZXdcbiAgICAgIGNsYXNzTmFtZTogJ3VpIHZlcnkgcmVsYXhlZCBkaXZpZGVkIGl0ZW1zJ1xuXG4gICAgICBjaGlsZFZpZXc6IExpc3QuSXRlbVxuICAgICAgY2hpbGRWaWV3RXZlbnRQcmVmaXg6ICdjYXInXG4gICAgICBlbXB0eVZpZXc6IExpc3QuRW1wdHlcbiJdfQ==
