define ['app/app'], (App, API) ->

  App.module "Pages", (Pages, App, Backbone, Mn, $, _) ->

    class Pages.Router extends Mn.AppRouter
      appRoutes:
        "!/": "home"
        "!/home": "home"
        "!/about-us": "about"

    API =
      home: (args...) ->
        require ['app/modules/pages/pages_api'], (Actions) ->
          Actions.home(args...)

      about: (args...) ->
        require ['app/modules/pages/pages_api'], (Actions) ->
          Actions.about(args...)

    Pages.on "start", (options = {}) ->
      new Pages.Router
        controller: API
