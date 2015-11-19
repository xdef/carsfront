var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', 'bindings.inputmask', './templates/layout', './templates/header', './templates/help', './templates/form', './templates/photo'], function() {
  var App, Views;
  App = require('app/app');
  Views = require('base.views');
  return App.module('Car.Create', function(Create, App, Backbone, Mn, $, _) {
    Create.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'car/create/templates/layout';

      Layout.prototype.className = 'ui container';

      Layout.prototype.regions = {
        headerRegion: '#header-region',
        helpRegion: '#help-region',
        formRegion: '#form-region'
      };

      return Layout;

    })(Views.LayoutView);
    Create.Header = (function(superClass) {
      extend(Header, superClass);

      function Header() {
        return Header.__super__.constructor.apply(this, arguments);
      }

      Header.prototype.template = 'car/create/templates/header';

      Header.prototype.className = 'column';

      return Header;

    })(Views.ItemView);
    Create.Help = (function(superClass) {
      extend(Help, superClass);

      function Help() {
        return Help.__super__.constructor.apply(this, arguments);
      }

      Help.prototype.template = 'car/create/templates/help';

      Help.prototype.className = 'ui very relaxed list';

      return Help;

    })(Views.ItemView);
    Create.Photo = (function(superClass) {
      extend(Photo, superClass);

      function Photo() {
        return Photo.__super__.constructor.apply(this, arguments);
      }

      Photo.prototype.template = 'car/create/templates/photo';

      Photo.prototype.className = 'card';

      Photo.prototype.ui = {
        removeBtn: 'a.remove'
      };

      Photo.prototype.triggers = {
        'click @ui.removeBtn': 'remove'
      };

      Photo.prototype.onShow = function() {
        return this.$('.image').dimmer({
          on: 'hover'
        });
      };

      return Photo;

    })(Views.ItemView);
    return Create.Form = (function(superClass) {
      extend(Form, superClass);

      function Form() {
        return Form.__super__.constructor.apply(this, arguments);
      }

      Form.prototype.template = 'car/create/templates/form';

      Form.prototype.tagName = 'form';

      Form.prototype.className = 'ui form';

      Form.prototype.ui = {
        inputPhotoUrl: '[name=photo]',
        addPhotoBtn: 'a.add-photo',
        cancelBtn: 'a.cancel'
      };

      Form.prototype.childView = Create.Photo;

      Form.prototype.childViewEventPrefix = 'car:photo';

      Form.prototype.childViewContainer = '.cards';

      Form.prototype.triggers = {
        'submit': 'submit',
        'click @ui.cancelBtn': 'cancel'
      };

      Form.prototype.events = {
        'click @ui.addPhotoBtn': 'addPhoto'
      };

      Form.prototype.bindings = {
        '[name=model]': {
          observe: 'model'
        },
        '[name=price]': {
          observe: 'price',
          inputFilter: 'numeric'
        },
        '[name=year]': {
          observe: 'year',
          inputFilter: 'numeric'
        },
        '[name=description]': {
          observe: 'description'
        }
      };

      Form.prototype.addPhoto = function(e) {
        var url;
        e.preventDefault();
        e.stopPropagation();
        if (url = this.ui.inputPhotoUrl.val()) {
          this.model.get('photos').add({
            url: url
          });
          return this.ui.inputPhotoUrl.val("");
        }
      };

      return Form;

    })(Views.CompositeView);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9jcmVhdGUvY3JlYXRlX3ZpZXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7OztBQUFBLE1BQUEsQ0FBTyxDQUNMLFNBREssRUFFTCxZQUZLLEVBR0wsb0JBSEssRUFJTCxvQkFKSyxFQUtMLG9CQUxLLEVBTUwsa0JBTkssRUFPTCxrQkFQSyxFQVFMLG1CQVJLLENBQVAsRUFTRyxTQUFBO0FBQ0QsTUFBQTtFQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsU0FBUjtFQUNOLEtBQUEsR0FBUSxPQUFBLENBQVEsWUFBUjtTQUVSLEdBQUcsQ0FBQyxNQUFKLENBQVcsWUFBWCxFQUF5QixTQUFDLE1BQUQsRUFBUyxHQUFULEVBQWMsUUFBZCxFQUF3QixFQUF4QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtJQUVqQixNQUFNLENBQUM7Ozs7Ozs7dUJBQ1gsUUFBQSxHQUFVOzt1QkFDVixTQUFBLEdBQVc7O3VCQUVYLE9BQUEsR0FDRTtRQUFBLFlBQUEsRUFBYyxnQkFBZDtRQUNBLFVBQUEsRUFBWSxjQURaO1FBRUEsVUFBQSxFQUFZLGNBRlo7Ozs7O09BTHdCLEtBQUssQ0FBQztJQVM1QixNQUFNLENBQUM7Ozs7Ozs7dUJBQ1gsUUFBQSxHQUFVOzt1QkFDVixTQUFBLEdBQVc7Ozs7T0FGZSxLQUFLLENBQUM7SUFJNUIsTUFBTSxDQUFDOzs7Ozs7O3FCQUNYLFFBQUEsR0FBVTs7cUJBQ1YsU0FBQSxHQUFXOzs7O09BRmEsS0FBSyxDQUFDO0lBSTFCLE1BQU0sQ0FBQzs7Ozs7OztzQkFDWCxRQUFBLEdBQVU7O3NCQUNWLFNBQUEsR0FBVzs7c0JBRVgsRUFBQSxHQUNFO1FBQUEsU0FBQSxFQUFXLFVBQVg7OztzQkFFRixRQUFBLEdBQ0U7UUFBQSxxQkFBQSxFQUF1QixRQUF2Qjs7O3NCQUVGLE1BQUEsR0FBUSxTQUFBO2VBQ04sSUFBQyxDQUFBLENBQUQsQ0FBRyxRQUFILENBQVksQ0FBQyxNQUFiLENBQW9CO1VBQUEsRUFBQSxFQUFJLE9BQUo7U0FBcEI7TUFETTs7OztPQVZpQixLQUFLLENBQUM7V0FhM0IsTUFBTSxDQUFDOzs7Ozs7O3FCQUNYLFFBQUEsR0FBVTs7cUJBQ1YsT0FBQSxHQUFTOztxQkFDVCxTQUFBLEdBQVc7O3FCQUVYLEVBQUEsR0FDRTtRQUFBLGFBQUEsRUFBZSxjQUFmO1FBQ0EsV0FBQSxFQUFhLGFBRGI7UUFFQSxTQUFBLEVBQVcsVUFGWDs7O3FCQUlGLFNBQUEsR0FBVyxNQUFNLENBQUM7O3FCQUNsQixvQkFBQSxHQUFzQjs7cUJBQ3RCLGtCQUFBLEdBQW9COztxQkFFcEIsUUFBQSxHQUNFO1FBQUEsUUFBQSxFQUFVLFFBQVY7UUFDQSxxQkFBQSxFQUF1QixRQUR2Qjs7O3FCQUdGLE1BQUEsR0FDRTtRQUFBLHVCQUFBLEVBQXlCLFVBQXpCOzs7cUJBRUYsUUFBQSxHQUNFO1FBQUEsY0FBQSxFQUNFO1VBQUEsT0FBQSxFQUFTLE9BQVQ7U0FERjtRQUdBLGNBQUEsRUFDRTtVQUFBLE9BQUEsRUFBUyxPQUFUO1VBQ0EsV0FBQSxFQUFhLFNBRGI7U0FKRjtRQU9BLGFBQUEsRUFDRTtVQUFBLE9BQUEsRUFBUyxNQUFUO1VBQ0EsV0FBQSxFQUFhLFNBRGI7U0FSRjtRQVdBLG9CQUFBLEVBQ0U7VUFBQSxPQUFBLEVBQVMsYUFBVDtTQVpGOzs7cUJBY0YsUUFBQSxHQUFVLFNBQUMsQ0FBRDtBQUNSLFlBQUE7UUFBQSxDQUFDLENBQUMsY0FBRixDQUFBO1FBQ0EsQ0FBQyxDQUFDLGVBQUYsQ0FBQTtRQUVBLElBQUcsR0FBQSxHQUFNLElBQUMsQ0FBQSxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQWxCLENBQUEsQ0FBVDtVQUNFLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxDQUFXLFFBQVgsQ0FBb0IsQ0FBQyxHQUFyQixDQUNFO1lBQUEsR0FBQSxFQUFLLEdBQUw7V0FERjtpQkFHQSxJQUFDLENBQUEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFsQixDQUFzQixFQUF0QixFQUpGOztNQUpROzs7O09BcENjLEtBQUssQ0FBQztFQWhDVCxDQUF6QjtBQUpDLENBVEgiLCJmaWxlIjoiYXBwL21vZHVsZXMvY2FyL2NyZWF0ZS9jcmVhdGVfdmlldy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gICdhcHAvYXBwJ1xuICAnYmFzZS52aWV3cydcbiAgJ2JpbmRpbmdzLmlucHV0bWFzaydcbiAgJy4vdGVtcGxhdGVzL2xheW91dCdcbiAgJy4vdGVtcGxhdGVzL2hlYWRlcidcbiAgJy4vdGVtcGxhdGVzL2hlbHAnXG4gICcuL3RlbXBsYXRlcy9mb3JtJ1xuICAnLi90ZW1wbGF0ZXMvcGhvdG8nXG5dLCAoKSAtPlxuICBBcHAgPSByZXF1aXJlICdhcHAvYXBwJ1xuICBWaWV3cyA9IHJlcXVpcmUgJ2Jhc2Uudmlld3MnXG5cbiAgQXBwLm1vZHVsZSAnQ2FyLkNyZWF0ZScsIChDcmVhdGUsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgY2xhc3MgQ3JlYXRlLkxheW91dCBleHRlbmRzIFZpZXdzLkxheW91dFZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL2NyZWF0ZS90ZW1wbGF0ZXMvbGF5b3V0J1xuICAgICAgY2xhc3NOYW1lOiAndWkgY29udGFpbmVyJ1xuXG4gICAgICByZWdpb25zOlxuICAgICAgICBoZWFkZXJSZWdpb246ICcjaGVhZGVyLXJlZ2lvbidcbiAgICAgICAgaGVscFJlZ2lvbjogJyNoZWxwLXJlZ2lvbidcbiAgICAgICAgZm9ybVJlZ2lvbjogJyNmb3JtLXJlZ2lvbidcblxuICAgIGNsYXNzIENyZWF0ZS5IZWFkZXIgZXh0ZW5kcyBWaWV3cy5JdGVtVmlld1xuICAgICAgdGVtcGxhdGU6ICdjYXIvY3JlYXRlL3RlbXBsYXRlcy9oZWFkZXInXG4gICAgICBjbGFzc05hbWU6ICdjb2x1bW4nXG5cbiAgICBjbGFzcyBDcmVhdGUuSGVscCBleHRlbmRzIFZpZXdzLkl0ZW1WaWV3XG4gICAgICB0ZW1wbGF0ZTogJ2Nhci9jcmVhdGUvdGVtcGxhdGVzL2hlbHAnXG4gICAgICBjbGFzc05hbWU6ICd1aSB2ZXJ5IHJlbGF4ZWQgbGlzdCdcblxuICAgIGNsYXNzIENyZWF0ZS5QaG90byBleHRlbmRzIFZpZXdzLkl0ZW1WaWV3XG4gICAgICB0ZW1wbGF0ZTogJ2Nhci9jcmVhdGUvdGVtcGxhdGVzL3Bob3RvJ1xuICAgICAgY2xhc3NOYW1lOiAnY2FyZCdcblxuICAgICAgdWk6XG4gICAgICAgIHJlbW92ZUJ0bjogJ2EucmVtb3ZlJ1xuXG4gICAgICB0cmlnZ2VyczpcbiAgICAgICAgJ2NsaWNrIEB1aS5yZW1vdmVCdG4nOiAncmVtb3ZlJ1xuXG4gICAgICBvblNob3c6IC0+XG4gICAgICAgIEAkKCcuaW1hZ2UnKS5kaW1tZXIgb246ICdob3ZlcidcblxuICAgIGNsYXNzIENyZWF0ZS5Gb3JtIGV4dGVuZHMgVmlld3MuQ29tcG9zaXRlVmlld1xuICAgICAgdGVtcGxhdGU6ICdjYXIvY3JlYXRlL3RlbXBsYXRlcy9mb3JtJ1xuICAgICAgdGFnTmFtZTogJ2Zvcm0nXG4gICAgICBjbGFzc05hbWU6ICd1aSBmb3JtJ1xuXG4gICAgICB1aTpcbiAgICAgICAgaW5wdXRQaG90b1VybDogJ1tuYW1lPXBob3RvXSdcbiAgICAgICAgYWRkUGhvdG9CdG46ICdhLmFkZC1waG90bydcbiAgICAgICAgY2FuY2VsQnRuOiAnYS5jYW5jZWwnXG5cbiAgICAgIGNoaWxkVmlldzogQ3JlYXRlLlBob3RvXG4gICAgICBjaGlsZFZpZXdFdmVudFByZWZpeDogJ2NhcjpwaG90bydcbiAgICAgIGNoaWxkVmlld0NvbnRhaW5lcjogJy5jYXJkcydcblxuICAgICAgdHJpZ2dlcnM6XG4gICAgICAgICdzdWJtaXQnOiAnc3VibWl0J1xuICAgICAgICAnY2xpY2sgQHVpLmNhbmNlbEJ0bic6ICdjYW5jZWwnXG5cbiAgICAgIGV2ZW50czpcbiAgICAgICAgJ2NsaWNrIEB1aS5hZGRQaG90b0J0bic6ICdhZGRQaG90bydcblxuICAgICAgYmluZGluZ3M6XG4gICAgICAgICdbbmFtZT1tb2RlbF0nOlxuICAgICAgICAgIG9ic2VydmU6ICdtb2RlbCdcblxuICAgICAgICAnW25hbWU9cHJpY2VdJzpcbiAgICAgICAgICBvYnNlcnZlOiAncHJpY2UnXG4gICAgICAgICAgaW5wdXRGaWx0ZXI6ICdudW1lcmljJyAjIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvanF1ZXJ5LmlucHV0bWFzay9pc3N1ZXMvMTExM1xuXG4gICAgICAgICdbbmFtZT15ZWFyXSc6XG4gICAgICAgICAgb2JzZXJ2ZTogJ3llYXInXG4gICAgICAgICAgaW5wdXRGaWx0ZXI6ICdudW1lcmljJyAjIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvanF1ZXJ5LmlucHV0bWFzay9pc3N1ZXMvMTExM1xuXG4gICAgICAgICdbbmFtZT1kZXNjcmlwdGlvbl0nOlxuICAgICAgICAgIG9ic2VydmU6ICdkZXNjcmlwdGlvbidcblxuICAgICAgYWRkUGhvdG86IChlKSAtPlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGlmIHVybCA9IEB1aS5pbnB1dFBob3RvVXJsLnZhbCgpXG4gICAgICAgICAgQG1vZGVsLmdldCgncGhvdG9zJykuYWRkXG4gICAgICAgICAgICB1cmw6IHVybFxuXG4gICAgICAgICAgQHVpLmlucHV0UGhvdG9VcmwudmFsKFwiXCIpXG4iXX0=
