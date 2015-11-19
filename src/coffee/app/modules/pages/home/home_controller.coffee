define ["app/app", "base.controllers", "./home_view"], (App)->

  App.module "Pages.Home", (Home, App, Backbone, Mn, $, _) ->

    class Home.Controller extends App.Controllers.Base
      initialize: (options) ->
        { @region } = options
        @layout = @getLayoutView()

        cars = App.reqres.request 'car:entities', size: 4

        @layout.on "before:show", =>
          @getHeaderView()

          App.commands.execute 'when:fetched', cars, =>
            @getCarsView cars

        @region.show @layout

      getLayoutView: ->
        new Home.Layout

      getHeaderView: ->
        view = new Home.Header
        @layout.showChildView 'headerRegion', view

      getCarsView: (cars) ->
        view = new Home.Cars
          collection: cars

        view.on 'car:goto', (args) ->
          { model, collection, view } = args
          App.navigate "/car/#{model.id}", { trigger: true }

        view.on 'car:populate', (args) ->
          { model, collection, view } = args
          App.commands.execute 'car:entities:populate'

        @layout.showChildView 'carsRegion', view

  App.Pages.Home.Controller
