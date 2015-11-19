define ["app/app", "base.controllers", "./show_view"], (App)->

  App.module "Car.Show", (Show, App, Backbone, Mn, $, _) ->

    class Show.Controller extends App.Controllers.Base
      initialize: (options) ->
        { id, @region } = options
        @layout = @getLayoutView()

        car = App.reqres.request 'car:entity', id

        @layout.on "before:show", =>
          @getHeaderView car
          @getDescriptionView car

        @region.show @layout

      getLayoutView: ->
        new Show.Layout

      getHeaderView: (car) ->
        view = new Show.Header
          model: car

        view.on 'car:delete', (args) ->
          { model, collection, view } = args
          App.commands.execute 'car:entity:destroy', model

        @layout.showChildView 'headerRegion', view

      getDescriptionView: (car) ->
        view = new Show.Description
          model: car

        @layout.showChildView 'descriptionRegion', view

  App.Car.Show.Controller
