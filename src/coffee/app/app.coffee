define [
  'backbone.marionette'
  'app/helpers/marionette_mixin'
], ->
  App = new Mn.Application

  App.rootRoute = "/home"

  # Default locale
  App.locale = "RU"

  App.addRegions
    navRegion: "#nav-region"
    flashRegion: "#flash-region"
    modalRegion: '#modal-region'
    mainRegion: "#main-region"
    footerRegion: "#footer-region"

  App.on "start", (options = {}) ->
    console.log "start application"
    @startHistory()

    unless @getCurrentRoute()
      @navigate @rootRoute, trigger: true

  App
