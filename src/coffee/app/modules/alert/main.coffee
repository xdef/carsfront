define ['app/app', "./alert_api"], (App, API) ->

  App.module "Alert", (Alert, App, Backbone, Mn, $, _) ->

    App.reqres.setHandler 'alert:window', (args = {}) ->
      if alert = App.reqres.request 'alert:entity', args
        API.show alert

      alert
