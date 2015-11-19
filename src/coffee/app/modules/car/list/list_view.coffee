define [
  'app/app'
  'base.views'
  './templates/layout'
  './templates/menu'
  './templates/item'
  './templates/empty'
], () ->
  App = require 'app/app'
  Views = require 'base.views'

  App.module 'Car.List', (List, App, Backbone, Mn, $, _) ->

    class List.Layout extends Views.LayoutView
      template: 'car/list/templates/layout'
      className: 'ui container'

      regions:
        menuRegion: '#menu-region'
        listRegion: '#list-region'
        moreRegion: '#more-region'

    class List.Menu extends Views.ItemView
      template: 'car/list/templates/menu'
      className: 'ui icon menu'

      ui:
        dropdownBtn: '.ui.dropdown'
        directionBtn: '.direction'

      triggers:
        'submit form': 'submit'

      events:
        'click @ui.directionBtn': 'toggleDirection'

      bindings:
        '[name=query]':
          observe: 'query'

        '[data-direction]':
          observe: 'direction'
          updateMethod: 'html'

          onGet: (val, options) ->
            switch Number(val)
              when -1
                '<i class="sort content descending large icon"></i>'
              when 1
                '<i class="sort content ascending large icon"></i>'

      initSortBy: ($el) ->
        options =
          onChange: (value, text, $choice) =>
            @model.set sort_by: $choice.data('attr')

        $el.dropdown(options)

      toggleDirection: (e) ->
        e.preventDefault()
        e.stopPropagation()

        value = - Number @model.get("direction")
        @model.set direction: value

      onRender: ->
        @initSortBy @ui.dropdownBtn


    class List.Empty extends Views.ItemView
      template: 'car/list/templates/empty'
      className: 'ui icon message'

    class List.Item extends Views.ItemView
      template: 'car/list/templates/item'
      className: 'item'

      ui:
        destroyBtn: 'a.delete'

      triggers:
        'click @ui.destroyBtn': 'delete'


    class List.Cars extends Views.CollectionView
      className: 'ui very relaxed divided items'

      childView: List.Item
      childViewEventPrefix: 'car'
      emptyView: List.Empty
