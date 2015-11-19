define([], function() {
  var data, description, randomDate;
  randomDate = function(start, end) {
    if (start == null) {
      start = new Date(2012, 0, 1);
    }
    if (end == null) {
      end = new Date();
    }
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\nut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\nvoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\nnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  data = [
    {
      model: 'Audi A6 III (C6) Рестайлинг',
      year: "2009",
      description: description,
      price: "11000",
      createdAt: randomDate(),
      photos: [
        {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/37290/413aa147d1b3812166e5a54b8265413e/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/68164/108ab691f29ea6ad15facfdb2aca1bd1/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/27462/08f952f289fb508adc35abc872237ee2/1200x900'
        }
      ]
    }, {
      model: 'Ford Focus II Рестайлинг',
      year: "2011",
      description: description,
      price: "9500",
      createdAt: randomDate(),
      photos: [
        {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/53034/57f0608824111634742d5bf0ccff1670/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/45875/1d6bbebfd963b384460b2c904003450a/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/44691/f448883aec0468dc6b34d656e0dcafb7/1200x900'
        }
      ]
    }, {
      model: 'Mercedes-Benz E-klasse AMG IV',
      year: "2014",
      description: description,
      price: "35000",
      createdAt: randomDate(),
      photos: [
        {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/58923/2342a95339688efc9c6953d7af4a5504/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/49812/52312afa2b4c8323e2146f85fcbf775a/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/39357/f7e76f84ce30218334f33fe1cf5a114d/1200x900'
        }
      ]
    }, {
      model: 'Mercedes-Benz V-klasse I',
      year: "1998",
      description: description,
      price: "7100",
      createdAt: randomDate(),
      photos: [
        {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/50596/1a57ad1feda2dceb58222205d0955d51/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/50596/a199343604a18000fba1d300f5380480/1200x900'
        }, {
          url: 'http://avatars.mds.yandex.net/get-autoru-all/29040/5d2adcecc5be5af1e152f8a74a66eaef/1200x900'
        }
      ]
    }, {
      model: 'Volkswagen Jetta VI',
      year: "2013",
      description: description,
      price: "11600",
      createdAt: randomDate(),
      photos: [
        {
          url: 'https://avatars.mds.yandex.net/get-autoru-all/40658/751598b09681ebfd0660be53e4bc4f68/1200x900'
        }, {
          url: 'https://avatars.mds.yandex.net/get-autoru-all/37899/ac6f55aa6adb25db5a27aeab5e06ec79/1200x900'
        }, {
          url: 'https://avatars.mds.yandex.net/get-autoru-all/33204/ffc33254cc2734c673f355219dd06d3e/1200x900'
        }
      ]
    }
  ];
  return data;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbnRpdGllcy9jYXIvZGF0YS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBQSxDQUFPLEVBQVAsRUFBVyxTQUFBO0FBQ1QsTUFBQTtFQUFBLFVBQUEsR0FBYSxTQUFDLEtBQUQsRUFBK0IsR0FBL0I7O01BQUMsUUFBWSxJQUFBLElBQUEsQ0FBSyxJQUFMLEVBQVcsQ0FBWCxFQUFjLENBQWQ7OztNQUFrQixNQUFVLElBQUEsSUFBQSxDQUFBOztBQUNwRCxXQUFXLElBQUEsSUFBQSxDQUFLLEtBQUssQ0FBQyxPQUFOLENBQUEsQ0FBQSxHQUFrQixJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBSixDQUFBLENBQUEsR0FBZ0IsS0FBSyxDQUFDLE9BQU4sQ0FBQSxDQUFqQixDQUF2QztFQURBO0VBR2IsV0FBQSxHQUFjO0VBUWQsSUFBQSxHQUFPO0lBQ0w7TUFDRSxLQUFBLEVBQU8sNkJBRFQ7TUFDd0MsSUFBQSxFQUFNLE1BRDlDO01BQ3NELFdBQUEsRUFBYSxXQURuRTtNQUNnRixLQUFBLEVBQU8sT0FEdkY7TUFDZ0csU0FBQSxFQUFXLFVBQUEsQ0FBQSxDQUQzRztNQUVFLE1BQUEsRUFBUTtRQUNOO1VBQUMsR0FBQSxFQUFLLDhGQUFOO1NBRE0sRUFFTjtVQUFDLEdBQUEsRUFBSyw4RkFBTjtTQUZNLEVBR047VUFBQyxHQUFBLEVBQUssOEZBQU47U0FITTtPQUZWO0tBREssRUFRRjtNQUNELEtBQUEsRUFBTywwQkFETjtNQUNrQyxJQUFBLEVBQU0sTUFEeEM7TUFDZ0QsV0FBQSxFQUFhLFdBRDdEO01BQzBFLEtBQUEsRUFBTyxNQURqRjtNQUN5RixTQUFBLEVBQVcsVUFBQSxDQUFBLENBRHBHO01BRUQsTUFBQSxFQUFRO1FBQ047VUFBQyxHQUFBLEVBQUssOEZBQU47U0FETSxFQUVOO1VBQUMsR0FBQSxFQUFLLDhGQUFOO1NBRk0sRUFHTjtVQUFDLEdBQUEsRUFBSyw4RkFBTjtTQUhNO09BRlA7S0FSRSxFQWVGO01BQ0QsS0FBQSxFQUFPLCtCQUROO01BQ3VDLElBQUEsRUFBTSxNQUQ3QztNQUNxRCxXQUFBLEVBQWEsV0FEbEU7TUFDK0UsS0FBQSxFQUFPLE9BRHRGO01BQytGLFNBQUEsRUFBVyxVQUFBLENBQUEsQ0FEMUc7TUFFRCxNQUFBLEVBQVE7UUFDTjtVQUFDLEdBQUEsRUFBSyw4RkFBTjtTQURNLEVBRU47VUFBQyxHQUFBLEVBQUssOEZBQU47U0FGTSxFQUdOO1VBQUMsR0FBQSxFQUFLLDhGQUFOO1NBSE07T0FGUDtLQWZFLEVBc0JGO01BQ0QsS0FBQSxFQUFPLDBCQUROO01BQ2tDLElBQUEsRUFBTSxNQUR4QztNQUNnRCxXQUFBLEVBQWEsV0FEN0Q7TUFDMEUsS0FBQSxFQUFPLE1BRGpGO01BQ3lGLFNBQUEsRUFBVyxVQUFBLENBQUEsQ0FEcEc7TUFFRCxNQUFBLEVBQVE7UUFDTjtVQUFDLEdBQUEsRUFBSyw4RkFBTjtTQURNLEVBRU47VUFBQyxHQUFBLEVBQUssOEZBQU47U0FGTSxFQUdOO1VBQUMsR0FBQSxFQUFLLDhGQUFOO1NBSE07T0FGUDtLQXRCRSxFQTZCRjtNQUNELEtBQUEsRUFBTyxxQkFETjtNQUM2QixJQUFBLEVBQU0sTUFEbkM7TUFDMkMsV0FBQSxFQUFhLFdBRHhEO01BQ3FFLEtBQUEsRUFBTyxPQUQ1RTtNQUNxRixTQUFBLEVBQVcsVUFBQSxDQUFBLENBRGhHO01BRUQsTUFBQSxFQUFRO1FBQ047VUFBQyxHQUFBLEVBQUssK0ZBQU47U0FETSxFQUVOO1VBQUMsR0FBQSxFQUFLLCtGQUFOO1NBRk0sRUFHTjtVQUFDLEdBQUEsRUFBSywrRkFBTjtTQUhNO09BRlA7S0E3QkU7O1NBdUNQO0FBbkRTLENBQVgiLCJmaWxlIjoiYXBwL2VudGl0aWVzL2Nhci9kYXRhLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVmaW5lIFtdLCAtPlxuICByYW5kb21EYXRlID0gKHN0YXJ0ID0gbmV3IERhdGUoMjAxMiwgMCwgMSksIGVuZCA9IG5ldyBEYXRlKCkpIC0+XG4gICAgcmV0dXJuIG5ldyBEYXRlIHN0YXJ0LmdldFRpbWUoKSArIE1hdGgucmFuZG9tKCkgKiAoZW5kLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKSlcblxuICBkZXNjcmlwdGlvbiA9ICcnJ1xuICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudFxuICB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xuICBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdFxuICBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICcnJ1xuXG4gIGRhdGEgPSBbXG4gICAge1xuICAgICAgbW9kZWw6ICdBdWRpIEE2IElJSSAoQzYpINCg0LXRgdGC0LDQudC70LjQvdCzJywgeWVhcjogXCIyMDA5XCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgcHJpY2U6IFwiMTEwMDBcIiwgY3JlYXRlZEF0OiByYW5kb21EYXRlKClcbiAgICAgIHBob3RvczogW1xuICAgICAgICB7dXJsOiAnaHR0cDovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvZ2V0LWF1dG9ydS1hbGwvMzcyOTAvNDEzYWExNDdkMWIzODEyMTY2ZTVhNTRiODI2NTQxM2UvMTIwMHg5MDAnfVxuICAgICAgICB7dXJsOiAnaHR0cDovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvZ2V0LWF1dG9ydS1hbGwvNjgxNjQvMTA4YWI2OTFmMjllYTZhZDE1ZmFjZmRiMmFjYTFiZDEvMTIwMHg5MDAnfVxuICAgICAgICB7dXJsOiAnaHR0cDovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvZ2V0LWF1dG9ydS1hbGwvMjc0NjIvMDhmOTUyZjI4OWZiNTA4YWRjMzVhYmM4NzIyMzdlZTIvMTIwMHg5MDAnfVxuICAgICAgXVxuICAgIH0sIHtcbiAgICAgIG1vZGVsOiAnRm9yZCBGb2N1cyBJSSDQoNC10YHRgtCw0LnQu9C40L3QsycsIHllYXI6IFwiMjAxMVwiLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIHByaWNlOiBcIjk1MDBcIiwgY3JlYXRlZEF0OiByYW5kb21EYXRlKClcbiAgICAgIHBob3RvczogW1xuICAgICAgICB7dXJsOiAnaHR0cDovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvZ2V0LWF1dG9ydS1hbGwvNTMwMzQvNTdmMDYwODgyNDExMTYzNDc0MmQ1YmYwY2NmZjE2NzAvMTIwMHg5MDAnfVxuICAgICAgICB7dXJsOiAnaHR0cDovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvZ2V0LWF1dG9ydS1hbGwvNDU4NzUvMWQ2YmJlYmZkOTYzYjM4NDQ2MGIyYzkwNDAwMzQ1MGEvMTIwMHg5MDAnfVxuICAgICAgICB7dXJsOiAnaHR0cDovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvZ2V0LWF1dG9ydS1hbGwvNDQ2OTEvZjQ0ODg4M2FlYzA0NjhkYzZiMzRkNjU2ZTBkY2FmYjcvMTIwMHg5MDAnfVxuICAgICAgXVxuICAgIH0sIHtcbiAgICAgIG1vZGVsOiAnTWVyY2VkZXMtQmVueiBFLWtsYXNzZSBBTUcgSVYnLCB5ZWFyOiBcIjIwMTRcIiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBwcmljZTogXCIzNTAwMFwiLCBjcmVhdGVkQXQ6IHJhbmRvbURhdGUoKVxuICAgICAgcGhvdG9zOiBbXG4gICAgICAgIHt1cmw6ICdodHRwOi8vYXZhdGFycy5tZHMueWFuZGV4Lm5ldC9nZXQtYXV0b3J1LWFsbC81ODkyMy8yMzQyYTk1MzM5Njg4ZWZjOWM2OTUzZDdhZjRhNTUwNC8xMjAweDkwMCd9XG4gICAgICAgIHt1cmw6ICdodHRwOi8vYXZhdGFycy5tZHMueWFuZGV4Lm5ldC9nZXQtYXV0b3J1LWFsbC80OTgxMi81MjMxMmFmYTJiNGM4MzIzZTIxNDZmODVmY2JmNzc1YS8xMjAweDkwMCd9XG4gICAgICAgIHt1cmw6ICdodHRwOi8vYXZhdGFycy5tZHMueWFuZGV4Lm5ldC9nZXQtYXV0b3J1LWFsbC8zOTM1Ny9mN2U3NmY4NGNlMzAyMTgzMzRmMzNmZTFjZjVhMTE0ZC8xMjAweDkwMCd9XG4gICAgICBdXG4gICAgfSwge1xuICAgICAgbW9kZWw6ICdNZXJjZWRlcy1CZW56IFYta2xhc3NlIEknLCB5ZWFyOiBcIjE5OThcIiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBwcmljZTogXCI3MTAwXCIsIGNyZWF0ZWRBdDogcmFuZG9tRGF0ZSgpXG4gICAgICBwaG90b3M6IFtcbiAgICAgICAge3VybDogJ2h0dHA6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2dldC1hdXRvcnUtYWxsLzUwNTk2LzFhNTdhZDFmZWRhMmRjZWI1ODIyMjIwNWQwOTU1ZDUxLzEyMDB4OTAwJ31cbiAgICAgICAge3VybDogJ2h0dHA6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2dldC1hdXRvcnUtYWxsLzUwNTk2L2ExOTkzNDM2MDRhMTgwMDBmYmExZDMwMGY1MzgwNDgwLzEyMDB4OTAwJ31cbiAgICAgICAge3VybDogJ2h0dHA6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2dldC1hdXRvcnUtYWxsLzI5MDQwLzVkMmFkY2VjYzViZTVhZjFlMTUyZjhhNzRhNjZlYWVmLzEyMDB4OTAwJ31cbiAgICAgIF1cbiAgICB9LCB7XG4gICAgICBtb2RlbDogJ1ZvbGtzd2FnZW4gSmV0dGEgVkknLCB5ZWFyOiBcIjIwMTNcIiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBwcmljZTogXCIxMTYwMFwiLCBjcmVhdGVkQXQ6IHJhbmRvbURhdGUoKVxuICAgICAgcGhvdG9zOiBbXG4gICAgICAgIHt1cmw6ICdodHRwczovL2F2YXRhcnMubWRzLnlhbmRleC5uZXQvZ2V0LWF1dG9ydS1hbGwvNDA2NTgvNzUxNTk4YjA5NjgxZWJmZDA2NjBiZTUzZTRiYzRmNjgvMTIwMHg5MDAnfVxuICAgICAgICB7dXJsOiAnaHR0cHM6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2dldC1hdXRvcnUtYWxsLzM3ODk5L2FjNmY1NWFhNmFkYjI1ZGI1YTI3YWVhYjVlMDZlYzc5LzEyMDB4OTAwJ31cbiAgICAgICAge3VybDogJ2h0dHBzOi8vYXZhdGFycy5tZHMueWFuZGV4Lm5ldC9nZXQtYXV0b3J1LWFsbC8zMzIwNC9mZmMzMzI1NGNjMjczNGM2NzNmMzU1MjE5ZGQwNmQzZS8xMjAweDkwMCd9XG4gICAgICBdXG4gICAgfVxuICBdXG5cbiAgZGF0YVxuIl19
