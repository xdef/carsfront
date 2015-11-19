define [
  'app/app'
  'base.views'
  './templates/layout'
], () ->
  App = require 'app/app'
  Views = require 'base.views'

  App.module 'Pages.About', (About, App, Backbone, Mn, $, _) ->

    class About.Layout extends Views.LayoutView
      template: 'pages/about/templates/layout'
      className: 'ui container'
