define ['app/app'], (App) ->
  App.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

    class Entities.Collection extends Backbone.Collection

    class Entities.PaginatedCollection extends Backbone.Collection

      # Total pages
      total: 0

      # Current page
      number: 1

      # Items per page
      size: 24

      parse: (response, options) ->
        if response.meta
          { @number, @total, @count } = response.meta

        response.data

      isLastPage: ->
        @number >= @total

      more: (options = {}) ->
        @number++

        options = _.defaults options,
          merge: false
          remove: false

        @fetch options

      fetch: (options = {}) ->
        options.data ||= {}
        _.defaults options.data,
          page: { number: @number, size: @size }

        Backbone.Collection.prototype.fetch.call(@, options)
