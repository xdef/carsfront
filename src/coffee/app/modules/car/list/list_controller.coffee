define ["app/app", "base.controllers", "./list_view"], (App)->

  App.module "Car.List", (List, App, Backbone, Mn, $, _) ->

    class List.Controller extends App.Controllers.Base
      initialize: (options) ->
        { @region } = options
        @layout = @getLayoutView()

        filter = App.reqres.request 'filter:entity'
        cars = App.reqres.request 'car:entities'

        @layout.on "before:show", =>
          @getMenuView filter, cars

          App.commands.execute 'when:fetched', cars, =>
            @getCarsView cars

        @region.show @layout

      getLayoutView: ->
        new List.Layout

      getMenuView: (filter, cars) ->
        view = new List.Menu
          model: filter

        filter.on 'change', (model) ->
          App.commands.execute "car:entities:refresh", cars, model

        @layout.showChildView 'menuRegion', view

      getCarsView: (cars) ->
        view = new List.Cars
          collection: cars

        view.on 'car:delete', (args) ->
          { model, collection, view } = args
          App.commands.execute 'car:entity:destroy', model

        @layout.showChildView 'listRegion', view

  App.Car.List.Controller
