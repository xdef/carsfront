define ['app/app'], (App) ->
  #
  # Replace sync method
  #
  _sync = Backbone.sync

  Backbone.sync = (method, model, options = {}) ->

    # Add before and complete actions
    _.defaults options,
      beforeSend: _.bind(methods.beforeSend,  model)
      complete:   _.bind(methods.complete,    model)

    # Extend defaults errors
    _error = options.error
    options.error = (args...) ->
      _error(args...) if _error
      App.vent.trigger 'model:error', model, args...

    # Wrap model data to paramRoot if needed
    if options.data is null and model and (method is 'create' || method is 'update' || method is 'patch')

      options.contentType = 'application/json'
      if model.paramRoot
        data = {}
        data[model.paramRoot] = model.toJSON(options)

      data ||= model.toJSON(options)
      options.data = JSON.stringify(data)

    # Extend standart sync method
    sync = _sync(method, model, options)
    if !model._fetch
      model._fetch = sync.promise()

  methods =
    beforeSend: ->
      @trigger "sync:start", @

    complete: ->
      @trigger "sync:stop", @

  #
  # Register global commands
  #
  App.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

    App.commands.setHandler "when:fetched", (entities, callback) ->
      xhrs = _.chain([entities]).flatten().pluck("_fetch").value()

      $.when(xhrs...).done ->
        callback()
