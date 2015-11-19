define [
  'app/app'
  './list/list_controller'
  './create/create_controller'
  './show/show_controller'
  './edit/edit_controller'
], (App) ->

  API =
    list: (args...) ->
      new App.Car.List.Controller
        region: App.mainRegion

    create: (params = "") ->
      new App.Car.Create.Controller
        region: App.mainRegion

    edit: (id, params = "") ->
      new App.Car.Edit.Controller
        id: id
        region: App.mainRegion

    show: (id, params = "") ->
      new App.Car.Show.Controller
        id: id
        region: App.mainRegion
