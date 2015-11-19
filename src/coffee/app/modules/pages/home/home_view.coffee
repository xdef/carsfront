define [
  'app/app'
  'base.views'
  './templates/layout'
  './templates/header'
  './templates/cars'
  './templates/cars-item'
  './templates/cars-empty'
], () ->
  App = require 'app/app'
  Views = require 'base.views'

  App.module 'Pages.Home', (Home, App, Backbone, Mn, $, _) ->

    class Home.Layout extends Views.LayoutView
      template: 'pages/home/templates/layout'
      className: 'ui container'

      regions:
        headerRegion: '#header-region'
        carsRegion: '#cars-region'

    class Home.Header extends Views.ItemView
      template: 'pages/home/templates/header'
      className: 'ui vertical segment'

    class Home.CarsEmpty extends Views.ItemView
      template: 'pages/home/templates/cars-empty'
      className: 'ui basic segment container'

      ui:
        populateBtn: 'a.populate'

      triggers:
        'click @ui.populateBtn': 'populate'

    class Home.CarsItem extends Views.ItemView
      template: 'pages/home/templates/cars-item'
      className: 'card'

      triggers:
        'click': 'goto'

    class Home.Cars extends Views.CompositeView
      template: 'pages/home/templates/cars'
      className: 'ui vertical segment'

      childView: Home.CarsItem
      childViewEventPrefix: 'car'
      childViewContainer: '.cards'
      emptyView: Home.CarsEmpty

      serializeData: ->
        data =
          size: @collection.length
          total: @collection.total

        data
