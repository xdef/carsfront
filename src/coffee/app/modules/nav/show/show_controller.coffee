define ['app/app', './show_view'], (App) ->

  App.module "Nav.Show", (Show, App, Backbone, Mn, $, _) ->

    class Show.Controller extends App.Controllers.Base
      initialize: (options) ->
        { @region } = options
        @layout = @getLayoutView()

        @layout.on "before:show", =>
          @getMenuView()
          # @getDescriptionView()

        @region.show @layout

      getLayoutView: ->
        new Show.Layout

      getMenuView: ->
        view = new Show.Menu
        @layout.menuRegion.show view

      getDescriptionView: ->
        view = new Show.Description
        @layout.descriptionRegion.show view

  App.Nav.Show.Controller
