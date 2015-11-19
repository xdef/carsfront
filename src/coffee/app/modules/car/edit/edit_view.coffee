define [
  'app/app'
  'base.views'
  'bindings.inputmask'
  './templates/layout'
  './templates/header'
  './templates/help'
  './templates/form'
  './templates/photo'
], () ->
  App = require 'app/app'
  Views = require 'base.views'

  App.module 'Car.Edit', (Edit, App, Backbone, Mn, $, _) ->

    class Edit.Layout extends Views.LayoutView
      template: 'car/edit/templates/layout'
      className: 'ui container'

      regions:
        headerRegion: '#header-region'
        helpRegion: '#help-region'
        formRegion: '#form-region'

    class Edit.Header extends Views.ItemView
      template: 'car/edit/templates/header'
      className: 'column'

    class Edit.Help extends Views.ItemView
      template: 'car/edit/templates/help'
      className: 'ui very relaxed list'

    class Edit.Photo extends Views.ItemView
      template: 'car/edit/templates/photo'
      className: 'card'

      ui:
        removeBtn: 'a.remove'

      triggers:
        'click @ui.removeBtn': 'remove'

      onShow: ->
        @$('.image').dimmer on: 'hover'

    class Edit.Form extends Views.CompositeView
      template: 'car/edit/templates/form'
      tagName: 'form'
      className: 'ui form'

      ui:
        inputPhotoUrl: '[name=photo]'
        addPhotoBtn: 'a.add-photo'
        cancelBtn: 'a.cancel'

      childView: Edit.Photo
      childViewEventPrefix: 'car:photo'
      childViewContainer: '.cards'

      triggers:
        'submit': 'submit'
        'click @ui.cancelBtn': 'cancel'

      events:
        'click @ui.addPhotoBtn': 'addPhoto'

      bindings:
        '[name=model]':
          observe: 'model'

        '[name=price]':
          observe: 'price'
          inputFilter: 'numeric' # https://github.com/RobinHerbots/jquery.inputmask/issues/1113

        '[name=year]':
          observe: 'year'
          inputFilter: 'numeric' # https://github.com/RobinHerbots/jquery.inputmask/issues/1113

        '[name=description]':
          observe: 'description'

      addPhoto: (e) ->
        e.preventDefault()
        e.stopPropagation()

        if url = @ui.inputPhotoUrl.val()
          @model.get('photos').add
            url: url

          @ui.inputPhotoUrl.val("")
