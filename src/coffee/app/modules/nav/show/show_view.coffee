define [
  'app/app', 'base.views',
  './templates/layout'
  './templates/menu'
  './templates/description'
], ->

  App = require 'app/app'
  Views = require 'base.views'

  App.module "Nav.Show", (Show, App, Backbone, Mn, $, _) ->
    class Show.Layout extends Views.LayoutView
      template: 'nav/show/templates/layout'
      className: 'home-layout'

      regions:
        menuRegion: '#menu-region'
        descriptionRegion: '#description-region'

    class Show.Menu extends Views.ItemView
      template: 'nav/show/templates/menu'
      tagName: 'nav'
      className: 'ui menu labeled icon borderless top'

      onShow: ->
        options =
          on: 'hover'
          delay:
            show: 50
            hide: 100

        @$('.ui.dropdown').dropdown(options)

    class Show.Description extends Views.ItemView
      template: 'nav/show/templates/description'
      className: 'ui container'
