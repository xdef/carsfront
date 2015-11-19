define ['app/app', 'base.entities', './car'], (App, Entities) ->

  App.module "Entities", (Entities, App, Backbone, Mn, $, _) ->

    class Entities.Photo extends Entities.RelationalModel
      localStorage: new Backbone.LocalStorage("Photos")

      relations: [
        {
          type: 'one'
          key: 'car'
          relatedModel: -> Entities.Car
        }
      ]

    class Entities.PhotosCollection extends Entities.Collection
      model: Entities.Photo
      localStorage: new Backbone.LocalStorage("Photos")
