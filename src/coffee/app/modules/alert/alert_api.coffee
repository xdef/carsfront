define [
  'app/app'
  './show/show_controller'
], (App) ->

  API =
    show: (alert) ->
      new App.Alert.Show.Controller
        alert: alert
        region: App.modalRegion
