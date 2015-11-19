define(["app/app", "./item_view", "./collection_view", "./composite_view", "./layout_view"], function(App) {
  return App.module("Views", function(Views, App, Backbone, Mn, $, _) {
    return _.extend(Mn.View.prototype, {
      bindings: {},

      /* Global templates helpers */
      mixinTemplateHelpers: function(target) {
        var templateHelpers;
        target = target || {};
        templateHelpers = this.getOption('templateHelpers');
        templateHelpers = Mn._getValue(templateHelpers, this);
        target = _.extend(target, Mn.Renderer.templateHelpers);
        return _.extend(target, templateHelpers);
      },
      initCustomScrollBar: function(el) {
        var options;
        options = {
          suppressScrollX: true,
          wheelPropagation: true
        };
        return el.perfectScrollbar(options);
      },
      setHeightAsWindow: function(el) {
        $(window).on('resize', function() {
          var offset, windowHeight;
          windowHeight = $(window).height();
          offset = 64;
          return el.css('height', windowHeight - offset);
        });
        return $(window).trigger('resize');
      },
      validationError: function(model) {
        return _.each(model.validationError, (function(_this) {
          return function(error) {
            return _this._addError(error);
          };
        })(this));
      },
      _addError: function(error) {
        var attr, input_el, msg, parent_el;
        attr = error.attr, msg = error.msg;
        input_el = this.$("[name=" + attr + "]");
        input_el.on("keyup change", this._removeError);
        parent_el = input_el.parents(".field");
        if (!parent_el.hasClass("error")) {
          return parent_el.addClass("error");
        }
      },
      _removeError: function(e) {
        var input_el;
        input_el = $(e.currentTarget);
        input_el.off("keyup change");
        return input_el.parents(".field").removeClass("error");
      }
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL3ZpZXdzL3ZpZXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQUEsQ0FBTyxDQUNMLFNBREssRUFFTCxhQUZLLEVBR0wsbUJBSEssRUFJTCxrQkFKSyxFQUtMLGVBTEssQ0FBUCxFQU1HLFNBQUMsR0FBRDtTQUVELEdBQUcsQ0FBQyxNQUFKLENBQVcsT0FBWCxFQUFvQixTQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsUUFBYixFQUF1QixFQUF2QixFQUEyQixDQUEzQixFQUE4QixDQUE5QjtXQUVsQixDQUFDLENBQUMsTUFBRixDQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUEsU0FBaEIsRUFFRTtNQUFBLFFBQUEsRUFBVSxFQUFWOztBQUVBO01BRUEsb0JBQUEsRUFBc0IsU0FBQyxNQUFEO0FBQ3BCLFlBQUE7UUFBQSxNQUFBLEdBQVMsTUFBQSxJQUFVO1FBQ25CLGVBQUEsR0FBa0IsSUFBQyxDQUFBLFNBQUQsQ0FBVyxpQkFBWDtRQUNsQixlQUFBLEdBQWtCLEVBQUUsQ0FBQyxTQUFILENBQWEsZUFBYixFQUE4QixJQUE5QjtRQUNsQixNQUFBLEdBQVMsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxNQUFULEVBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBN0I7QUFDVCxlQUFPLENBQUMsQ0FBQyxNQUFGLENBQVMsTUFBVCxFQUFpQixlQUFqQjtNQUxhLENBSnRCO01BWUEsbUJBQUEsRUFBcUIsU0FBQyxFQUFEO0FBQ25CLFlBQUE7UUFBQSxPQUFBLEdBQ0U7VUFBQSxlQUFBLEVBQWlCLElBQWpCO1VBQ0EsZ0JBQUEsRUFBa0IsSUFEbEI7O2VBR0YsRUFBRSxDQUFDLGdCQUFILENBQW9CLE9BQXBCO01BTG1CLENBWnJCO01Bb0JBLGlCQUFBLEVBQW1CLFNBQUMsRUFBRDtRQUNqQixDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsU0FBQTtBQUNyQixjQUFBO1VBQUEsWUFBQSxHQUFlLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxNQUFWLENBQUE7VUFDZixNQUFBLEdBQVM7aUJBRVQsRUFBRSxDQUFDLEdBQUgsQ0FBTyxRQUFQLEVBQWlCLFlBQUEsR0FBZSxNQUFoQztRQUpxQixDQUF2QjtlQU1BLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxPQUFWLENBQWtCLFFBQWxCO01BUGlCLENBcEJuQjtNQThCQSxlQUFBLEVBQWlCLFNBQUMsS0FBRDtlQUNmLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBSyxDQUFDLGVBQWIsRUFBOEIsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQyxLQUFEO21CQUM1QixLQUFDLENBQUEsU0FBRCxDQUFXLEtBQVg7VUFENEI7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTlCO01BRGUsQ0E5QmpCO01Ba0NBLFNBQUEsRUFBVyxTQUFDLEtBQUQ7QUFDVCxZQUFBO1FBQUMsYUFBQSxJQUFELEVBQU8sWUFBQTtRQUVQLFFBQUEsR0FBVyxJQUFDLENBQUEsQ0FBRCxDQUFHLFFBQUEsR0FBUyxJQUFULEdBQWMsR0FBakI7UUFDWCxRQUFRLENBQUMsRUFBVCxDQUFZLGNBQVosRUFBNEIsSUFBQyxDQUFBLFlBQTdCO1FBRUEsU0FBQSxHQUFZLFFBQVEsQ0FBQyxPQUFULENBQWlCLFFBQWpCO1FBQ1osSUFBQSxDQUFPLFNBQVMsQ0FBQyxRQUFWLENBQW1CLE9BQW5CLENBQVA7aUJBQ0UsU0FBUyxDQUFDLFFBQVYsQ0FBbUIsT0FBbkIsRUFERjs7TUFQUyxDQWxDWDtNQTRDQSxZQUFBLEVBQWMsU0FBQyxDQUFEO0FBQ1osWUFBQTtRQUFBLFFBQUEsR0FBVyxDQUFBLENBQUUsQ0FBQyxDQUFDLGFBQUo7UUFDWCxRQUFRLENBQUMsR0FBVCxDQUFhLGNBQWI7ZUFFQSxRQUNFLENBQUMsT0FESCxDQUNXLFFBRFgsQ0FFRSxDQUFDLFdBRkgsQ0FFZSxPQUZmO01BSlksQ0E1Q2Q7S0FGRjtFQUZrQixDQUFwQjtBQUZDLENBTkgiLCJmaWxlIjoiYXBwL2Jhc2Uvdmlld3Mvdmlldy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gIFwiYXBwL2FwcFwiLFxuICBcIi4vaXRlbV92aWV3XCIsXG4gIFwiLi9jb2xsZWN0aW9uX3ZpZXdcIixcbiAgXCIuL2NvbXBvc2l0ZV92aWV3XCJcbiAgXCIuL2xheW91dF92aWV3XCIsXG5dLCAoQXBwKSAtPlxuXG4gIEFwcC5tb2R1bGUgXCJWaWV3c1wiLCAoVmlld3MsIEFwcCwgQmFja2JvbmUsIE1uLCAkLCBfKSAtPlxuXG4gICAgXy5leHRlbmQgTW4uVmlldzo6LFxuXG4gICAgICBiaW5kaW5nczoge31cblxuICAgICAgIyMjIEdsb2JhbCB0ZW1wbGF0ZXMgaGVscGVycyAjIyNcbiAgICAgICMgaHR0cHM6Ly9naXRodWIuY29tL21hcmlvbmV0dGVqcy9iYWNrYm9uZS5tYXJpb25ldHRlL2lzc3Vlcy8yMTY0XG4gICAgICBtaXhpblRlbXBsYXRlSGVscGVyczogKHRhcmdldCkgLT5cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuICAgICAgICB0ZW1wbGF0ZUhlbHBlcnMgPSBAZ2V0T3B0aW9uICd0ZW1wbGF0ZUhlbHBlcnMnXG4gICAgICAgIHRlbXBsYXRlSGVscGVycyA9IE1uLl9nZXRWYWx1ZSB0ZW1wbGF0ZUhlbHBlcnMsIEBcbiAgICAgICAgdGFyZ2V0ID0gXy5leHRlbmQgdGFyZ2V0LCBNbi5SZW5kZXJlci50ZW1wbGF0ZUhlbHBlcnNcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kIHRhcmdldCwgdGVtcGxhdGVIZWxwZXJzXG5cbiAgICAgICMgSW5pdGl6bGl6ZSBjdXN0b20gc2NvbGxiYXJcbiAgICAgIGluaXRDdXN0b21TY3JvbGxCYXI6IChlbCkgLT5cbiAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiB0cnVlXG4gICAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogdHJ1ZVxuXG4gICAgICAgIGVsLnBlcmZlY3RTY3JvbGxiYXIgb3B0aW9uc1xuXG4gICAgICAjIFNldCBlbGVtZW50IGhlaWdodCBhcyB3aW5kb3cgaGVpZ2h0IHdpdGhvdXQgaGVhZGVyXG4gICAgICBzZXRIZWlnaHRBc1dpbmRvdzogKGVsKSAtPlxuICAgICAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIC0+XG4gICAgICAgICAgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgICAgICAgb2Zmc2V0ID0gNjRcblxuICAgICAgICAgIGVsLmNzcyAnaGVpZ2h0Jywgd2luZG93SGVpZ2h0IC0gb2Zmc2V0XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIgJ3Jlc2l6ZSdcblxuICAgICAgIyBWYWxpZGF0aW9uc1xuICAgICAgdmFsaWRhdGlvbkVycm9yOiAobW9kZWwpIC0+XG4gICAgICAgIF8uZWFjaCBtb2RlbC52YWxpZGF0aW9uRXJyb3IsIChlcnJvcikgPT5cbiAgICAgICAgICBAX2FkZEVycm9yIGVycm9yXG5cbiAgICAgIF9hZGRFcnJvcjogKGVycm9yKSAtPlxuICAgICAgICB7YXR0ciwgbXNnfSA9IGVycm9yXG5cbiAgICAgICAgaW5wdXRfZWwgPSBAJChcIltuYW1lPSN7YXR0cn1dXCIpXG4gICAgICAgIGlucHV0X2VsLm9uIFwia2V5dXAgY2hhbmdlXCIsIEBfcmVtb3ZlRXJyb3JcblxuICAgICAgICBwYXJlbnRfZWwgPSBpbnB1dF9lbC5wYXJlbnRzKFwiLmZpZWxkXCIpXG4gICAgICAgIHVubGVzcyBwYXJlbnRfZWwuaGFzQ2xhc3MoXCJlcnJvclwiKVxuICAgICAgICAgIHBhcmVudF9lbC5hZGRDbGFzcyhcImVycm9yXCIpXG5cbiAgICAgIF9yZW1vdmVFcnJvcjogKGUpIC0+XG4gICAgICAgIGlucHV0X2VsID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIGlucHV0X2VsLm9mZiBcImtleXVwIGNoYW5nZVwiXG5cbiAgICAgICAgaW5wdXRfZWxcbiAgICAgICAgICAucGFyZW50cyhcIi5maWVsZFwiKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImVycm9yXCIpXG4iXX0=
