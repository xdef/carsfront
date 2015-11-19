define ["app/app", "base.controllers", "./about_view"], (App)->

  App.module "Pages.About", (About, App, Backbone, Mn, $, _) ->

    class About.Controller extends App.Controllers.Base
      initialize: (options) ->
        { @region } = options
        @layout = @getLayoutView()

        @layout.on "before:show", =>
          #

        @region.show @layout

      getLayoutView: ->
        new About.Layout

  App.Pages.About.Controller
