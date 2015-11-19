define ['app/app', './show/show_controller'], (App, ShowController) ->
  API =
    show: ->
      new ShowController
        region: App.navRegion
