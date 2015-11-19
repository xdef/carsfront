var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(['app/app', 'base.views', 'bindings.inputmask', './templates/layout', './templates/header', './templates/help', './templates/form', './templates/photo'], function() {
  var App, Views;
  App = require('app/app');
  Views = require('base.views');
  return App.module('Car.Edit', function(Edit, App, Backbone, Mn, $, _) {
    Edit.Layout = (function(superClass) {
      extend(Layout, superClass);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = 'car/edit/templates/layout';

      Layout.prototype.className = 'ui container';

      Layout.prototype.regions = {
        headerRegion: '#header-region',
        helpRegion: '#help-region',
        formRegion: '#form-region'
      };

      return Layout;

    })(Views.LayoutView);
    Edit.Header = (function(superClass) {
      extend(Header, superClass);

      function Header() {
        return Header.__super__.constructor.apply(this, arguments);
      }

      Header.prototype.template = 'car/edit/templates/header';

      Header.prototype.className = 'column';

      return Header;

    })(Views.ItemView);
    Edit.Help = (function(superClass) {
      extend(Help, superClass);

      function Help() {
        return Help.__super__.constructor.apply(this, arguments);
      }

      Help.prototype.template = 'car/edit/templates/help';

      Help.prototype.className = 'ui very relaxed list';

      return Help;

    })(Views.ItemView);
    Edit.Photo = (function(superClass) {
      extend(Photo, superClass);

      function Photo() {
        return Photo.__super__.constructor.apply(this, arguments);
      }

      Photo.prototype.template = 'car/edit/templates/photo';

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
    return Edit.Form = (function(superClass) {
      extend(Form, superClass);

      function Form() {
        return Form.__super__.constructor.apply(this, arguments);
      }

      Form.prototype.template = 'car/edit/templates/form';

      Form.prototype.tagName = 'form';

      Form.prototype.className = 'ui form';

      Form.prototype.ui = {
        inputPhotoUrl: '[name=photo]',
        addPhotoBtn: 'a.add-photo',
        cancelBtn: 'a.cancel'
      };

      Form.prototype.childView = Edit.Photo;

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2Nhci9lZGl0L2VkaXRfdmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7O0FBQUEsTUFBQSxDQUFPLENBQ0wsU0FESyxFQUVMLFlBRkssRUFHTCxvQkFISyxFQUlMLG9CQUpLLEVBS0wsb0JBTEssRUFNTCxrQkFOSyxFQU9MLGtCQVBLLEVBUUwsbUJBUkssQ0FBUCxFQVNHLFNBQUE7QUFDRCxNQUFBO0VBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxTQUFSO0VBQ04sS0FBQSxHQUFRLE9BQUEsQ0FBUSxZQUFSO1NBRVIsR0FBRyxDQUFDLE1BQUosQ0FBVyxVQUFYLEVBQXVCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCO0lBRWYsSUFBSSxDQUFDOzs7Ozs7O3VCQUNULFFBQUEsR0FBVTs7dUJBQ1YsU0FBQSxHQUFXOzt1QkFFWCxPQUFBLEdBQ0U7UUFBQSxZQUFBLEVBQWMsZ0JBQWQ7UUFDQSxVQUFBLEVBQVksY0FEWjtRQUVBLFVBQUEsRUFBWSxjQUZaOzs7OztPQUxzQixLQUFLLENBQUM7SUFTMUIsSUFBSSxDQUFDOzs7Ozs7O3VCQUNULFFBQUEsR0FBVTs7dUJBQ1YsU0FBQSxHQUFXOzs7O09BRmEsS0FBSyxDQUFDO0lBSTFCLElBQUksQ0FBQzs7Ozs7OztxQkFDVCxRQUFBLEdBQVU7O3FCQUNWLFNBQUEsR0FBVzs7OztPQUZXLEtBQUssQ0FBQztJQUl4QixJQUFJLENBQUM7Ozs7Ozs7c0JBQ1QsUUFBQSxHQUFVOztzQkFDVixTQUFBLEdBQVc7O3NCQUVYLEVBQUEsR0FDRTtRQUFBLFNBQUEsRUFBVyxVQUFYOzs7c0JBRUYsUUFBQSxHQUNFO1FBQUEscUJBQUEsRUFBdUIsUUFBdkI7OztzQkFFRixNQUFBLEdBQVEsU0FBQTtlQUNOLElBQUMsQ0FBQSxDQUFELENBQUcsUUFBSCxDQUFZLENBQUMsTUFBYixDQUFvQjtVQUFBLEVBQUEsRUFBSSxPQUFKO1NBQXBCO01BRE07Ozs7T0FWZSxLQUFLLENBQUM7V0FhekIsSUFBSSxDQUFDOzs7Ozs7O3FCQUNULFFBQUEsR0FBVTs7cUJBQ1YsT0FBQSxHQUFTOztxQkFDVCxTQUFBLEdBQVc7O3FCQUVYLEVBQUEsR0FDRTtRQUFBLGFBQUEsRUFBZSxjQUFmO1FBQ0EsV0FBQSxFQUFhLGFBRGI7UUFFQSxTQUFBLEVBQVcsVUFGWDs7O3FCQUlGLFNBQUEsR0FBVyxJQUFJLENBQUM7O3FCQUNoQixvQkFBQSxHQUFzQjs7cUJBQ3RCLGtCQUFBLEdBQW9COztxQkFFcEIsUUFBQSxHQUNFO1FBQUEsUUFBQSxFQUFVLFFBQVY7UUFDQSxxQkFBQSxFQUF1QixRQUR2Qjs7O3FCQUdGLE1BQUEsR0FDRTtRQUFBLHVCQUFBLEVBQXlCLFVBQXpCOzs7cUJBRUYsUUFBQSxHQUNFO1FBQUEsY0FBQSxFQUNFO1VBQUEsT0FBQSxFQUFTLE9BQVQ7U0FERjtRQUdBLGNBQUEsRUFDRTtVQUFBLE9BQUEsRUFBUyxPQUFUO1VBQ0EsV0FBQSxFQUFhLFNBRGI7U0FKRjtRQU9BLGFBQUEsRUFDRTtVQUFBLE9BQUEsRUFBUyxNQUFUO1VBQ0EsV0FBQSxFQUFhLFNBRGI7U0FSRjtRQVdBLG9CQUFBLEVBQ0U7VUFBQSxPQUFBLEVBQVMsYUFBVDtTQVpGOzs7cUJBY0YsUUFBQSxHQUFVLFNBQUMsQ0FBRDtBQUNSLFlBQUE7UUFBQSxDQUFDLENBQUMsY0FBRixDQUFBO1FBQ0EsQ0FBQyxDQUFDLGVBQUYsQ0FBQTtRQUVBLElBQUcsR0FBQSxHQUFNLElBQUMsQ0FBQSxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQWxCLENBQUEsQ0FBVDtVQUNFLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxDQUFXLFFBQVgsQ0FBb0IsQ0FBQyxHQUFyQixDQUNFO1lBQUEsR0FBQSxFQUFLLEdBQUw7V0FERjtpQkFHQSxJQUFDLENBQUEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFsQixDQUFzQixFQUF0QixFQUpGOztNQUpROzs7O09BcENZLEtBQUssQ0FBQztFQWhDVCxDQUF2QjtBQUpDLENBVEgiLCJmaWxlIjoiYXBwL21vZHVsZXMvY2FyL2VkaXQvZWRpdF92aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtcbiAgJ2FwcC9hcHAnXG4gICdiYXNlLnZpZXdzJ1xuICAnYmluZGluZ3MuaW5wdXRtYXNrJ1xuICAnLi90ZW1wbGF0ZXMvbGF5b3V0J1xuICAnLi90ZW1wbGF0ZXMvaGVhZGVyJ1xuICAnLi90ZW1wbGF0ZXMvaGVscCdcbiAgJy4vdGVtcGxhdGVzL2Zvcm0nXG4gICcuL3RlbXBsYXRlcy9waG90bydcbl0sICgpIC0+XG4gIEFwcCA9IHJlcXVpcmUgJ2FwcC9hcHAnXG4gIFZpZXdzID0gcmVxdWlyZSAnYmFzZS52aWV3cydcblxuICBBcHAubW9kdWxlICdDYXIuRWRpdCcsIChFZGl0LCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIGNsYXNzIEVkaXQuTGF5b3V0IGV4dGVuZHMgVmlld3MuTGF5b3V0Vmlld1xuICAgICAgdGVtcGxhdGU6ICdjYXIvZWRpdC90ZW1wbGF0ZXMvbGF5b3V0J1xuICAgICAgY2xhc3NOYW1lOiAndWkgY29udGFpbmVyJ1xuXG4gICAgICByZWdpb25zOlxuICAgICAgICBoZWFkZXJSZWdpb246ICcjaGVhZGVyLXJlZ2lvbidcbiAgICAgICAgaGVscFJlZ2lvbjogJyNoZWxwLXJlZ2lvbidcbiAgICAgICAgZm9ybVJlZ2lvbjogJyNmb3JtLXJlZ2lvbidcblxuICAgIGNsYXNzIEVkaXQuSGVhZGVyIGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL2VkaXQvdGVtcGxhdGVzL2hlYWRlcidcbiAgICAgIGNsYXNzTmFtZTogJ2NvbHVtbidcblxuICAgIGNsYXNzIEVkaXQuSGVscCBleHRlbmRzIFZpZXdzLkl0ZW1WaWV3XG4gICAgICB0ZW1wbGF0ZTogJ2Nhci9lZGl0L3RlbXBsYXRlcy9oZWxwJ1xuICAgICAgY2xhc3NOYW1lOiAndWkgdmVyeSByZWxheGVkIGxpc3QnXG5cbiAgICBjbGFzcyBFZGl0LlBob3RvIGV4dGVuZHMgVmlld3MuSXRlbVZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL2VkaXQvdGVtcGxhdGVzL3Bob3RvJ1xuICAgICAgY2xhc3NOYW1lOiAnY2FyZCdcblxuICAgICAgdWk6XG4gICAgICAgIHJlbW92ZUJ0bjogJ2EucmVtb3ZlJ1xuXG4gICAgICB0cmlnZ2VyczpcbiAgICAgICAgJ2NsaWNrIEB1aS5yZW1vdmVCdG4nOiAncmVtb3ZlJ1xuXG4gICAgICBvblNob3c6IC0+XG4gICAgICAgIEAkKCcuaW1hZ2UnKS5kaW1tZXIgb246ICdob3ZlcidcblxuICAgIGNsYXNzIEVkaXQuRm9ybSBleHRlbmRzIFZpZXdzLkNvbXBvc2l0ZVZpZXdcbiAgICAgIHRlbXBsYXRlOiAnY2FyL2VkaXQvdGVtcGxhdGVzL2Zvcm0nXG4gICAgICB0YWdOYW1lOiAnZm9ybSdcbiAgICAgIGNsYXNzTmFtZTogJ3VpIGZvcm0nXG5cbiAgICAgIHVpOlxuICAgICAgICBpbnB1dFBob3RvVXJsOiAnW25hbWU9cGhvdG9dJ1xuICAgICAgICBhZGRQaG90b0J0bjogJ2EuYWRkLXBob3RvJ1xuICAgICAgICBjYW5jZWxCdG46ICdhLmNhbmNlbCdcblxuICAgICAgY2hpbGRWaWV3OiBFZGl0LlBob3RvXG4gICAgICBjaGlsZFZpZXdFdmVudFByZWZpeDogJ2NhcjpwaG90bydcbiAgICAgIGNoaWxkVmlld0NvbnRhaW5lcjogJy5jYXJkcydcblxuICAgICAgdHJpZ2dlcnM6XG4gICAgICAgICdzdWJtaXQnOiAnc3VibWl0J1xuICAgICAgICAnY2xpY2sgQHVpLmNhbmNlbEJ0bic6ICdjYW5jZWwnXG5cbiAgICAgIGV2ZW50czpcbiAgICAgICAgJ2NsaWNrIEB1aS5hZGRQaG90b0J0bic6ICdhZGRQaG90bydcblxuICAgICAgYmluZGluZ3M6XG4gICAgICAgICdbbmFtZT1tb2RlbF0nOlxuICAgICAgICAgIG9ic2VydmU6ICdtb2RlbCdcblxuICAgICAgICAnW25hbWU9cHJpY2VdJzpcbiAgICAgICAgICBvYnNlcnZlOiAncHJpY2UnXG4gICAgICAgICAgaW5wdXRGaWx0ZXI6ICdudW1lcmljJyAjIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvanF1ZXJ5LmlucHV0bWFzay9pc3N1ZXMvMTExM1xuXG4gICAgICAgICdbbmFtZT15ZWFyXSc6XG4gICAgICAgICAgb2JzZXJ2ZTogJ3llYXInXG4gICAgICAgICAgaW5wdXRGaWx0ZXI6ICdudW1lcmljJyAjIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvanF1ZXJ5LmlucHV0bWFzay9pc3N1ZXMvMTExM1xuXG4gICAgICAgICdbbmFtZT1kZXNjcmlwdGlvbl0nOlxuICAgICAgICAgIG9ic2VydmU6ICdkZXNjcmlwdGlvbidcblxuICAgICAgYWRkUGhvdG86IChlKSAtPlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGlmIHVybCA9IEB1aS5pbnB1dFBob3RvVXJsLnZhbCgpXG4gICAgICAgICAgQG1vZGVsLmdldCgncGhvdG9zJykuYWRkXG4gICAgICAgICAgICB1cmw6IHVybFxuXG4gICAgICAgICAgQHVpLmlucHV0UGhvdG9VcmwudmFsKFwiXCIpXG4iXX0=
