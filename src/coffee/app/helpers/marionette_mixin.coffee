define ['backbone.marionette'], ->

  _.extend Mn.Renderer,

    render: (template, data) ->
      path = JST[template]

      unless path
        throw "Template #{template} not found!"
      path(data)

  _.extend Mn.Application::,

    navigate: (route, options = {}) ->
      route = route.replace /\/api\/v./, ""
      route = "#!" + route if route.charAt(0) is "/"

      Backbone.history.navigate route, options

    getCurrentRoute: ->
      frag = Backbone.history.fragment
      if _.isEmpty(frag) then null else frag

    startHistory: (options) ->
      if Backbone.history
        Backbone.history.start options
