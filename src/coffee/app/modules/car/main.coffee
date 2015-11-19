define ['app/app'], (App) ->

  App.module "Car", (Car, App, Backbone, Mn, $, _) ->

    class Car.Router extends Mn.AppRouter
      appRoutes:
        "!/car": "list"
        "!/car/create": "create"
        "!/car/:id": "show"
        "!/car/:id/edit": "edit"
        "!/car/.*": "list"

    API =
      list: (args...) ->
        require ['app/modules/car/car_api'], (Actions) ->
          Actions.list(args...)

      show: (args...) ->
        require ['app/modules/car/car_api'], (Actions) ->
          Actions.show(args...)

      create: (args...) ->
        require ['app/modules/car/car_api'], (Actions) ->
          Actions.create(args...)

      edit: (args...) ->
        require ['app/modules/car/car_api'], (Actions) ->
          Actions.edit(args...)

    Car.on "start", (options = {}) ->
      new Car.Router
        controller: API
