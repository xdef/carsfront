define ["app/app"], (App) ->

  App.module "Views", (Views, App, Backbone, Mn, $, _) ->

    class Views.CompositeView extends Mn.CompositeView

      render: ->
        # Invoke original render function
        result = super

        # Apply stickit, listen errors
        if @model and @model instanceof Backbone.Model
          @stickit()
          @model.on 'invalid', @validationError, @

        if @collection? and @collection instanceof Backbone.Collection
          if @$el.hasClass('loading')
            @collection.on 'sync:stop', =>
              @$el.removeClass('loading')

        # Return render result
        result
