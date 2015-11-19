define [
  'app/app'
  './home/home_controller'
  './about/about_controller'
], (App) ->

  API =
    home: (args...) ->
      new App.Pages.Home.Controller
        region: App.mainRegion

    about: (args...) ->
      new App.Pages.About.Controller
        region: App.mainRegion
