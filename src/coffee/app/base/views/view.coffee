define [
  "app/app",
  "./item_view",
  "./collection_view",
  "./composite_view"
  "./layout_view",
], (App) ->

  App.module "Views", (Views, App, Backbone, Mn, $, _) ->

    _.extend Mn.View::,

      bindings: {}

      ### Global templates helpers ###
      # https://github.com/marionettejs/backbone.marionette/issues/2164
      mixinTemplateHelpers: (target) ->
        target = target || {};
        templateHelpers = @getOption 'templateHelpers'
        templateHelpers = Mn._getValue templateHelpers, @
        target = _.extend target, Mn.Renderer.templateHelpers
        return _.extend target, templateHelpers

      # Initizlize custom scollbar
      initCustomScrollBar: (el) ->
        options =
          suppressScrollX: true
          wheelPropagation: true

        el.perfectScrollbar options

      # Set element height as window height without header
      setHeightAsWindow: (el) ->
        $(window).on 'resize', ->
          windowHeight = $(window).height()
          offset = 64

          el.css 'height', windowHeight - offset

        $(window).trigger 'resize'

      # Validations
      validationError: (model) ->
        _.each model.validationError, (error) =>
          @_addError error

      _addError: (error) ->
        {attr, msg} = error

        input_el = @$("[name=#{attr}]")
        input_el.on "keyup change", @_removeError

        parent_el = input_el.parents(".field")
        unless parent_el.hasClass("error")
          parent_el.addClass("error")

      _removeError: (e) ->
        input_el = $(e.currentTarget)
        input_el.off "keyup change"

        input_el
          .parents(".field")
          .removeClass("error")
