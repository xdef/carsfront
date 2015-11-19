define ['app/app', 'base.entities'], (App, Entities) ->

  App.module "Entities", (Entities, App, Backbone, Mn, $, _) ->

    class Entities.Filter extends Entities.Model

      defaults:
        sort_by: 'createdAt'
        direction: -1
        # query: {chars: 'заголовок'}

      changeDirection: (d) ->
        return unless _.isObject @get('sort')

        sort = @get('sort')
        sort.direction = d

        @set({sort: sort}) && @trigger "change:sort", @

      toParams: ->
        data = {}

        if (f = @get('sort_by')) and (d = @get('direction'))
          _.extend data, sort: { field: f, direction: d }

        if @get('query')
          _.extend data, query: @get('query')

        if @get('filter')
          _.extend data, filter: @get('filter')

        return data

    API =
      getFilter: (attrs = {}) ->
        new Entities.Filter attrs


    App.reqres.setHandler 'filter:entity', (args...) ->
      API.getFilter args...
