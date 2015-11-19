var slice = [].slice;

define(["app/app", './view'], function(App) {
  return App.module("Views", function(Views, App, Backbone, Mn, $, _) {
    return Mn.Renderer.templateHelpers = {
      t: function() {
        var args, ref;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        return (ref = App.reqres).request.apply(ref, ['i18n:t'].concat(slice.call(args)));
      },
      signed_in: function() {
        return App.reqres.request('user:signed:in?');
      },
      trunc: function(str, n) {
        if (str && str.length > n) {
          return str.substr(0, n - 1) + ' ...';
        } else {
          return str;
        }
      },
      formatedDate: function(date, format) {
        if (format == null) {
          format = 'LLL';
        }
        return moment(date).format(format);
      },
      formatedDuration: function(duration) {
        return moment.duration(duration * 1000).format("mm:ss", {
          forceLength: true,
          trim: false
        });
      },
      formatedCost: function(cost, currency) {
        var icon;
        if (currency == null) {
          currency = 'USD';
        }
        icon = (function() {
          switch (currency.toLowerCase()) {
            case 'usd':
              return '<i class="dollar icon"></i>';
            case 'rub':
              return '<i class="ruble icon"></i>';
          }
        })();
        return "" + cost + icon;
      }
    };
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlL3ZpZXdzL3RlbXBsYXRlX2hlbHBlcnMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsTUFBQSxDQUFPLENBQ0wsU0FESyxFQUVMLFFBRkssQ0FBUCxFQUdHLFNBQUMsR0FBRDtTQUVELEdBQUcsQ0FBQyxNQUFKLENBQVcsT0FBWCxFQUFvQixTQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsUUFBYixFQUF1QixFQUF2QixFQUEyQixDQUEzQixFQUE4QixDQUE5QjtXQUVsQixFQUFFLENBQUMsUUFBUSxDQUFDLGVBQVosR0FFRTtNQUFBLENBQUEsRUFBRyxTQUFBO0FBQ0QsWUFBQTtRQURFO2VBQ0YsT0FBQSxHQUFHLENBQUMsTUFBSixDQUFVLENBQUMsT0FBWCxZQUFtQixDQUFBLFFBQVUsU0FBQSxXQUFBLElBQUEsQ0FBQSxDQUE3QjtNQURDLENBQUg7TUFHQSxTQUFBLEVBQVcsU0FBQTtlQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBWCxDQUFtQixpQkFBbkI7TUFEUyxDQUhYO01BTUEsS0FBQSxFQUFPLFNBQUMsR0FBRCxFQUFNLENBQU47UUFDTCxJQUFHLEdBQUEsSUFBUSxHQUFHLENBQUMsTUFBSixHQUFhLENBQXhCO2lCQUNFLEdBQUcsQ0FBQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQUEsR0FBRSxDQUFoQixDQUFBLEdBQXFCLE9BRHZCO1NBQUEsTUFBQTtpQkFHRSxJQUhGOztNQURLLENBTlA7TUFZQSxZQUFBLEVBQWMsU0FBQyxJQUFELEVBQU8sTUFBUDs7VUFBTyxTQUFPOztlQUMxQixNQUFBLENBQU8sSUFBUCxDQUFZLENBQUMsTUFBYixDQUFvQixNQUFwQjtNQURZLENBWmQ7TUFlQSxnQkFBQSxFQUFrQixTQUFDLFFBQUQ7ZUFDaEIsTUFDRSxDQUFDLFFBREgsQ0FDWSxRQUFBLEdBQVMsSUFEckIsQ0FFRSxDQUFDLE1BRkgsQ0FFVSxPQUZWLEVBRW1CO1VBQUUsV0FBQSxFQUFhLElBQWY7VUFBcUIsSUFBQSxFQUFNLEtBQTNCO1NBRm5CO01BRGdCLENBZmxCO01Bb0JBLFlBQUEsRUFBYyxTQUFDLElBQUQsRUFBTyxRQUFQO0FBQ1osWUFBQTs7VUFEbUIsV0FBVzs7UUFDOUIsSUFBQTtBQUFPLGtCQUFPLFFBQVEsQ0FBQyxXQUFULENBQUEsQ0FBUDtBQUFBLGlCQUNBLEtBREE7cUJBQ1c7QUFEWCxpQkFFQSxLQUZBO3FCQUVXO0FBRlg7O2VBSVAsRUFBQSxHQUFHLElBQUgsR0FBVTtNQUxFLENBcEJkOztFQUpnQixDQUFwQjtBQUZDLENBSEgiLCJmaWxlIjoiYXBwL2Jhc2Uvdmlld3MvdGVtcGxhdGVfaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gIFwiYXBwL2FwcFwiLFxuICAnLi92aWV3J1xuXSwgKEFwcCkgLT5cblxuICBBcHAubW9kdWxlIFwiVmlld3NcIiwgKFZpZXdzLCBBcHAsIEJhY2tib25lLCBNbiwgJCwgXykgLT5cblxuICAgIE1uLlJlbmRlcmVyLnRlbXBsYXRlSGVscGVycyA9XG5cbiAgICAgIHQ6IChhcmdzLi4uKSAtPlxuICAgICAgICBBcHAucmVxcmVzLnJlcXVlc3QgJ2kxOG46dCcsIGFyZ3MuLi5cblxuICAgICAgc2lnbmVkX2luOiAtPlxuICAgICAgICBBcHAucmVxcmVzLnJlcXVlc3QgJ3VzZXI6c2lnbmVkOmluPydcblxuICAgICAgdHJ1bmM6IChzdHIsIG4pIC0+XG4gICAgICAgIGlmIHN0ciBhbmQgc3RyLmxlbmd0aCA+IG5cbiAgICAgICAgICBzdHIuc3Vic3RyKDAsIG4tMSkgKyAnIC4uLidcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHN0clxuXG4gICAgICBmb3JtYXRlZERhdGU6IChkYXRlLCBmb3JtYXQ9J0xMTCcpIC0+XG4gICAgICAgIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KVxuXG4gICAgICBmb3JtYXRlZER1cmF0aW9uOiAoZHVyYXRpb24pIC0+XG4gICAgICAgIG1vbWVudFxuICAgICAgICAgIC5kdXJhdGlvbihkdXJhdGlvbioxMDAwKVxuICAgICAgICAgIC5mb3JtYXQoXCJtbTpzc1wiLCB7IGZvcmNlTGVuZ3RoOiB0cnVlLCB0cmltOiBmYWxzZSB9KVxuXG4gICAgICBmb3JtYXRlZENvc3Q6IChjb3N0LCBjdXJyZW5jeSA9ICdVU0QnKSAtPlxuICAgICAgICBpY29uID0gc3dpdGNoIGN1cnJlbmN5LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICB3aGVuICd1c2QnIHRoZW4gJzxpIGNsYXNzPVwiZG9sbGFyIGljb25cIj48L2k+J1xuICAgICAgICAgIHdoZW4gJ3J1YicgdGhlbiAnPGkgY2xhc3M9XCJydWJsZSBpY29uXCI+PC9pPidcblxuICAgICAgICBcIiN7Y29zdH0je2ljb259XCJcbiJdfQ==
