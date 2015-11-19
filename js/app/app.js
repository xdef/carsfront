define(['backbone.marionette', 'app/helpers/marionette_mixin'], function() {
  var App;
  App = new Mn.Application;
  App.rootRoute = "/home";
  App.locale = "RU";
  App.addRegions({
    navRegion: "#nav-region",
    flashRegion: "#flash-region",
    modalRegion: '#modal-region',
    mainRegion: "#main-region",
    footerRegion: "#footer-region"
  });
  App.on("start", function(options) {
    if (options == null) {
      options = {};
    }
    console.log("start application");
    this.startHistory();
    if (!this.getCurrentRoute()) {
      return this.navigate(this.rootRoute, {
        trigger: true
      });
    }
  });
  return App;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQUEsQ0FBTyxDQUNMLHFCQURLLEVBRUwsOEJBRkssQ0FBUCxFQUdHLFNBQUE7QUFDRCxNQUFBO0VBQUEsR0FBQSxHQUFNLElBQUksRUFBRSxDQUFDO0VBRWIsR0FBRyxDQUFDLFNBQUosR0FBZ0I7RUFHaEIsR0FBRyxDQUFDLE1BQUosR0FBYTtFQUViLEdBQUcsQ0FBQyxVQUFKLENBQ0U7SUFBQSxTQUFBLEVBQVcsYUFBWDtJQUNBLFdBQUEsRUFBYSxlQURiO0lBRUEsV0FBQSxFQUFhLGVBRmI7SUFHQSxVQUFBLEVBQVksY0FIWjtJQUlBLFlBQUEsRUFBYyxnQkFKZDtHQURGO0VBT0EsR0FBRyxDQUFDLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFNBQUMsT0FBRDs7TUFBQyxVQUFVOztJQUN6QixPQUFPLENBQUMsR0FBUixDQUFZLG1CQUFaO0lBQ0EsSUFBQyxDQUFBLFlBQUQsQ0FBQTtJQUVBLElBQUEsQ0FBTyxJQUFDLENBQUEsZUFBRCxDQUFBLENBQVA7YUFDRSxJQUFDLENBQUEsUUFBRCxDQUFVLElBQUMsQ0FBQSxTQUFYLEVBQXNCO1FBQUEsT0FBQSxFQUFTLElBQVQ7T0FBdEIsRUFERjs7RUFKYyxDQUFoQjtTQU9BO0FBdEJDLENBSEgiLCJmaWxlIjoiYXBwL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZSBbXG4gICdiYWNrYm9uZS5tYXJpb25ldHRlJ1xuICAnYXBwL2hlbHBlcnMvbWFyaW9uZXR0ZV9taXhpbidcbl0sIC0+XG4gIEFwcCA9IG5ldyBNbi5BcHBsaWNhdGlvblxuXG4gIEFwcC5yb290Um91dGUgPSBcIi9ob21lXCJcblxuICAjIERlZmF1bHQgbG9jYWxlXG4gIEFwcC5sb2NhbGUgPSBcIlJVXCJcblxuICBBcHAuYWRkUmVnaW9uc1xuICAgIG5hdlJlZ2lvbjogXCIjbmF2LXJlZ2lvblwiXG4gICAgZmxhc2hSZWdpb246IFwiI2ZsYXNoLXJlZ2lvblwiXG4gICAgbW9kYWxSZWdpb246ICcjbW9kYWwtcmVnaW9uJ1xuICAgIG1haW5SZWdpb246IFwiI21haW4tcmVnaW9uXCJcbiAgICBmb290ZXJSZWdpb246IFwiI2Zvb3Rlci1yZWdpb25cIlxuXG4gIEFwcC5vbiBcInN0YXJ0XCIsIChvcHRpb25zID0ge30pIC0+XG4gICAgY29uc29sZS5sb2cgXCJzdGFydCBhcHBsaWNhdGlvblwiXG4gICAgQHN0YXJ0SGlzdG9yeSgpXG5cbiAgICB1bmxlc3MgQGdldEN1cnJlbnRSb3V0ZSgpXG4gICAgICBAbmF2aWdhdGUgQHJvb3RSb3V0ZSwgdHJpZ2dlcjogdHJ1ZVxuXG4gIEFwcFxuIl19
