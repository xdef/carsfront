define ['app/app', 'base.controllers', './show_view'], (App) ->

  App.module 'Alert.Show', (Show, Backbone, Mn, $, _) ->

    class Show.Controller extends App.Controllers.Base

      initialize: (options) ->
        { alert, @region } = options

        @layout = @getLayoutView alert
        @region.show @layout

      getLayoutView: (alert) ->
        new Show.Layout
          model: alert
