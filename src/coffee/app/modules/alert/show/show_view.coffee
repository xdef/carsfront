define [
  'app/app'
  'base.views'
  './templates/layout'
], (App, Views) ->

  App.module "Alert.Show", (Show, App, Backbone, Mn, $, _) ->

    class Show.Layout extends Views.LayoutView
      template: 'alert/show/templates/layout'
      className: 'ui basic small modal'

      onRender: ->
        @$el
          .modal
            onDeny: =>
              @model.trigger 'deny'

            onApprove: =>
              @model.trigger 'approve'

          .modal 'show'
