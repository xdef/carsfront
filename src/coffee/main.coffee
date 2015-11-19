requirejs.config
  urlArgs: "rev=1.0.0"
  baseUrl: 'js'

  shim:
    'semantic-ui-transition': { deps: ['jquery'],  exports: '$' }
    'semantic-ui-dropown': { deps: ['jquery'],  exports: '$' }
    'semantic-ui-dimmer': { deps: ['jquery'],  exports: '$' }
    'semantic-ui-sidebar': { deps: ['jquery'],  exports: '$' }
    'semantic-ui-popup': { deps: ['jquery'],  exports: '$' }
    'semantic-ui-modal': { deps: ['jquery'],  exports: '$' }
    'semantic-ui-tab': { deps: ['jquery'],  exports: '$' }
    'semantic-ui-api': { deps: ['jquery'],  exports: '$' }

    'modernizr':
      exports: 'Modernizr'

    'underscore':
      exports: '_'

    'backbone':
      deps: ['underscore', 'jquery']
      exports: 'Backbone'

    'backbone.nested-attributes':
      deps: ['backbone']
      exports: 'Backbone'

  paths:
    'underscore': '../components/underscore/underscore'
    'backbone': '../components/backbone/backbone'
    'backbone.marionette': '../components/backbone.marionette/lib/backbone.marionette'
    'backbone.stickit': '../components/backbone.stickit/backbone.stickit'
    'backbone.localStorage': '../components/backbone.localStorage/backbone.localStorage'
    'backbone.nested-attributes': 'lib/backbone/backbone-nested-attributes'
    'jquery': '../components/jquery/dist/jquery'

    'moment': '../components/moment/moment'
    'moment.ru': '../components/moment/locale/ru'

    'jquery.inputmask': '../components/jquery.inputmask/dist/jquery.inputmask.bundle'

    'pikaday': '../components/pikaday/pikaday'

    'jquery.file.upload': '../components/blueimp-file-upload/js/jquery.fileupload'
    'jquery.ui.widget': '../components/blueimp-file-upload/js/vendor/jquery.ui.widget'

    'semantic-ui-accordion': '../components/semantic/dist/components/accordion'
    'semantic-ui-ad': '../components/semantic/dist/components/ad'
    'semantic-ui-checkbox': '../components/semantic/dist/components/checkbox'
    'semantic-ui-colorize': '../components/semantic/dist/components/colorize'
    'semantic-ui-embed': '../components/semantic/dist/components/embed'
    'semantic-ui-form': '../components/semantic/dist/components/form'
    'semantic-ui-nag': '../components/semantic/dist/components/nag'
    'semantic-ui-progress': '../components/semantic/dist/components/progress'
    'semantic-ui-rating': '../components/semantic/dist/components/rating'
    'semantic-ui-search': '../components/semantic/dist/components/search'
    'semantic-ui-shape': '../components/semantic/dist/components/shape'
    'semantic-ui-state': '../components/semantic/dist/components/state'
    'semantic-ui-sticky': '../components/semantic/dist/components/sticky'
    'semantic-ui-tab': '../components/semantic/dist/components/tab'
    'semantic-ui-visibility': '../components/semantic/dist/components/visibility'
    'semantic-ui-visit': '../components/semantic/dist/components/visit'
    'semantic-ui-video': '../components/semantic/dist/components/video'
    'semantic-ui-dropown': '../components/semantic/dist/components/dropdown'
    'semantic-ui-dimmer': '../components/semantic/dist/components/dimmer'
    'semantic-ui-sidebar': '../components/semantic/dist/components/sidebar'
    'semantic-ui-popup': '../components/semantic/dist/components/popup'
    'semantic-ui-modal': '../components/semantic/dist/components/modal'
    'semantic-ui-api': '../components/semantic/dist/components/api'
    'semantic-ui-transition': '../components/semantic/dist/components/transition'

    'bindings.uploader': 'app/base/bindings/uploader'
    'bindings.inputmask': 'app/base/bindings/inputmask'
    'bindings.datepicker': 'app/base/bindings/datepicker'

  packages: [
    'base.entities', { name: 'base.entities', location: 'app/base/entities' }
    'base.controllers', { name: 'base.controllers', location: 'app/base/controllers' }
    'base.views', { name: 'base.views', location: 'app/base/views' }
    'entities', { name: 'entities', location: 'app/entities'}
    'alert', { name: 'alert', location: 'app/modules/alert' }
    'pages', { name: 'pages', location: 'app/modules/pages' }
    'nav', { name: 'nav', location: 'app/modules/nav' }
    'car', { name: 'car', location: 'app/modules/car' }
  ]

  modules: [
    {
      name: 'app/modules/pages/pages_api'
      exclude: [
        'app/app'
        'app/vendors'
        'base.entities'
        'base.views'
        'base.controllers'
      ]
    }, {
      name: 'app/modules/car/car_api'
      exclude: [
        'app/app'
        'app/vendors'
        'base.entities'
        'base.views'
        'base.controllers'
      ]
    }, {
      name: 'main'
      include: [
        'app/vendors'
        'app/app'
        'base.entities'
        'base.views'
        'base.controllers'
        'entities'
        'alert'
        'nav'
        'pages'
        'car'
      ]
      exclude: [
        'app/modules/pages/pages_api'
        'app/modules/car/car_api'
      ]
    }
  ]

require ['app/vendors'], ->

  require [
    'app/app'
    'base.entities'
    'base.views'
    'base.controllers'
    'entities'
    'alert'
    'nav'
    'pages'
    'car'
  ], ->

    $(document).ready ->
      # Start main application
      require('app/app').start()
