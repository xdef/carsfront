define [
  'app/app'
  'base.views'
  './templates/layout'
  './templates/header'
  './templates/description'
], () ->
  App = require 'app/app'
  Views = require 'base.views'

  App.module 'Car.Show', (Show, App, Backbone, Mn, $, _) ->

    class Show.Layout extends Views.LayoutView
      template: 'car/show/templates/layout'
      className: 'ui container'

      regions:
        headerRegion: '#header-region'
        descriptionRegion: '#description-region'

    class Show.Header extends Views.ItemView
      template: 'car/show/templates/header'
      className: 'ui basic segment'

      ui:
        destroyBtn: 'a.delete'

      triggers:
        'click @ui.destroyBtn': 'car:delete'

    class Show.Description extends Views.ItemView
      template: 'car/show/templates/description'
      className: 'ui basic segment'
