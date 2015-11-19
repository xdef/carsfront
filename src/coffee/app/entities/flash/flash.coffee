define ['app/app', 'base.entities'], (App, Entities) ->

  App.module "Entities", (Entities, App, Backbone, Mn, $, _) ->

    class Entities.Flash extends Entities.Model

      localStorage: new Backbone.LocalStorage("Flashes")
      defaults:
        timer: 5000
        type: undefined
        title: undefined
        message: undefined

    class Entities.FlashesCollection extends Entities.Collection
      model: Entities.Flash
      localStorage: new Backbone.LocalStorage("Flashes")

    API =
      getFlashMessages: ->
        @messages ||= new Entities.FlashesCollection
        @messages.fetch()
        @messages

      createFlashMessage: (attrs, options = {}) ->
        messages = App.reqres.request 'flash:entities'
        App.commands.execute 'when:fetched', messages, ->
          messages.create attrs, options


    App.reqres.setHandler 'flash:entities', (args...) ->
      API.getFlashMessages args...

    App.vent.on 'flash:create', (args...) ->
      API.createFlashMessage args...
