define ["app/app"], (App) ->

  App.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

    class Entities.Model extends Backbone.Model

    class Entities.RelationalModel extends Backbone.NestedAttributesModel
