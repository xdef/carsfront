define ["app/app", "base.controllers", "./edit_view"], (App)->

  App.module "Car.Edit", (Edit, App, Backbone, Mn, $, _) ->

    class Edit.Controller extends App.Controllers.Base
      initialize: (options) ->
        { id, @region } = options
        @layout = @getLayoutView()

        car = App.reqres.request 'car:entity', id

        @layout.on "before:show", =>
          @getHeaderView()
          @getHelpView()
          @getFormView car

        @region.show @layout

      getLayoutView: ->
        new Edit.Layout

      getHeaderView: ->
        view = new Edit.Header
        @layout.showChildView 'headerRegion', view

      getHelpView: ->
        view = new Edit.Help
        @layout.showChildView 'helpRegion', view

      getFormView: (car) ->
        view = new Edit.Form
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

  App.Car.Edit.Controller
