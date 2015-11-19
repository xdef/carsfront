define ['app/app', 'base.entities'], (App, Entities) ->

  App.module "Entities", (Entities, App, Backbone, Mn, $, _) ->

    class Entities.ErrorHandler extends Entities.Model


    API =
      initErrorHandler: ->
        @handler ||= new Entities.ErrorHandler

      handlerError: (model, response, textStatus) ->
        switch response.status
          when 400
            @badRequest model, response, textStatus
          when 401
            @unauthorized model, response, textStatus
          when 403
            @forbidden model, response, textStatus
          when 404
            @notFound model, response, textStatus
          when 422
            @unprocessableEntity model, response, textStatus

      badRequest: (model, response, textStatus) ->
        #

      unauthorized: (model, response, textStatus) ->
        # Notify
        title = App.reqres.request(
          'i18n:t', 'frontend.flash.profile.create.error.title')

        msg = @_formatedAuthorizedErrors response

        App.vent.trigger 'flash:create',
          type: 'error', title: title, message: msg

        App.commands.execute 'session:destroy'

      forbidden: (model, response, textStatus) ->
        # Notify
        title = App.reqres.request(
          'i18n:t', 'frontend.flash.profile.create.error.title')

        msg = @_formatedAuthorizedErrors response

        App.vent.trigger 'flash:create',
          type: 'error', title: title, message: msg

        App.commands.execute 'session:destroy'

      unprocessableEntity: (model, response, textStatus) ->
        if errors = response.responseJSON
          # Populate model by errors from server
          for attr, msg of errors
            model.validationError ||= []
            model.validationError.push {attr: attr, msg: msg}

          model.trigger "invalid", model

          msg = @_formatedValidationErrors model
        else
          errors = response.responseText
          msg = errors

        # Notify
        title = App.reqres.request(
          'i18n:t', 'frontend.flash.profile.create.error.title')

        App.vent.trigger 'flash:create',
          type: 'error', title: title, message: msg

      _formatedAuthorizedErrors: (response) ->
        msg = if error = response.responseJSON
          error.error
        else
          response.responseText

        "<div class='item'>#{msg}</div>"

      _formatedValidationErrors: (model) ->
        messages = _.map model.validationError, (error) ->
          { attr, msg } = error
          msg = msg.join(', ') if _.isArray(msg)
          "<div class='item'>#{attr}: #{msg}</div>"

        messages.join('')

    App.on 'before:start', ->
      API.initErrorHandler()

    App.vent.on 'model:error', (args...) ->
      API.handlerError args...

    App.commands.execute 'error:handler:init', ->
      API.initErrorHandler()
