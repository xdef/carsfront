define ["app/app", "base.controllers", "./create_view"], (App)->

  App.module "Car.Create", (Create, App, Backbone, Mn, $, _) ->

    class Create.Controller extends App.Controllers.Base
      initialize: (options) ->
        { @region } = options
        @layout = @getLayoutView()

        car = App.reqres.request 'car:entity:new'

        @layout.on "before:show", =>
          @getHeaderView()
          @getHelpView()
          @getFormView car

        @region.show @layout

      getLayoutView: ->
        new Create.Layout

      getHeaderView: ->
        view = new Create.Header
        @layout.showChildView 'headerRegion', view

      getHelpView: ->
        view = new Create.Help
        @layout.showChildView 'helpRegion', view

      getFormView: (car) ->
        view = new Create.Form
          model: car
          collection: car.get('photos')

        view.on 'submit', (args) ->
          { view, model, collection } = args
          App.commands.execute 'car:entity:create', model

        view.on 'cancel', (args) ->
          { model, collection, view } = args
          window.history.back()

        view.on 'car:photo:remove', (view, args) ->
          { view, model, collection } = args
          car.get("photos").remove model

        @layout.showChildView 'formRegion', view

  App.Car.Create.Controller
