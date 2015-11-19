define ['app/app', 'base.entities'], (App, Entities) ->

  App.module "Entities", (Entities, App, Backbone, Mn, $, _) ->

    class Entities.Alert extends Entities.Model

      defaults:
        icon: 'ban large red icon'
        header: 'Объект будет удален'
        message: 'Вы уверены, что хотите удалить данный объект?'
        actions:
          ok: 'Да'
          cancel: 'Нет'


    API =
      getAlert: (attrs = {}) ->
        new Entities.Alert attrs


    App.reqres.setHandler 'alert:entity', (args...) ->
      API.getAlert args...
