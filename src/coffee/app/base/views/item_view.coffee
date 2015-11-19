define ["app/app"], (App) ->

  App.module "Views", (Views, App, Backbone, Mn, $, _) ->

    class Views.ItemView extends Mn.ItemView

      render: ->
        # Invoke original render function
        result = super

        # Apply stickit, listen errors
        if @model and @model instanceof Backbone.Model
          @stickit()
          @model.on 'invalid', @validationError, @

        # Return render result
        result
