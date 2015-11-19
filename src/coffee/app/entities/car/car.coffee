define ['app/app', 'base.entities', './photo'], (App, Entities) ->

  App.module "Entities", (Entities, App, Backbone, Mn, $, _) ->

    class Entities.Car extends Entities.RelationalModel
      localStorage: new Backbone.LocalStorage("Cars")
      defaults:
        createdAt: moment().toISOString()

      relations: [
        {
          key: 'photos'
          relatedModel: -> Entities.Photo
          collectionType: -> Entities.PhotosCollection
        }
      ]

      validate: (attrs, options = {}) ->
        errors = []

        if _.isEmpty attrs.model
          errors.push
            attr: "model"
            msg: ["Модель"]

        if _.isEmpty attrs.price
          errors.push
            attr: "price"
            msg: ["Стоимость"]

        if _.isEmpty attrs.year
          errors.push
            attr: "year"
            msg: ["Год выпуска"]

        if _.isEmpty attrs.description
          errors.push
            attr: "description"
            msg: ["Описание"]

        result = if errors.length then errors else undefined
        return result

    class Entities.CarsCollection extends Entities.Collection
      model: Entities.Car
      localStorage: new Backbone.LocalStorage("Cars")

      comparator: (model) ->
        @_sortByReverse_createdAt(model)

      _sortBy_createdAt: (model) ->
        new Date model.get("createdAt")

      _sortByReverse_createdAt: (model) ->
        - new Date model.get("createdAt")

      _sortBy_price: (model) ->
        new Number model.get("price")

      _sortByReverse_price: (model) ->
        - new Number model.get("price")

      filterByModel: (chars) ->
        return @models if _.isEmpty chars

        pattern = new RegExp chars, "gi"
        @filter (car) ->
          pattern.test car.get("model")


    API =
      newCar: (args = {}) ->
        new Entities.Car args

      getCars: (options = {}) ->
        @cars ||= new Entities.CarsCollection
        @cars.fetch()

        if size = options.size
          cars = new Entities.CarsCollection @cars.models[0 ... size]
          cars.total = @cars.length
          cars
        else
          @cars

      getCar: (id, options = {}) ->
        @cars ||= App.reqres.request 'car:entities'
        @cars.get id

      createCar: (model, options = {}) ->
        return unless model.isValid()

        options = _.defaults options,
          success: (model, response, options) ->
            App.navigate '/car', {trigger: true}

          error: (model, response, options) ->
            console.log 'error'

        model.save {}, options

      destroyCar: (car, options = {}) ->
        options = _.defaults options,
          success: (model, response, options) ->
            App.navigate '/car', {trigger: true}

          error: (model, response, options) ->
            #

        alert = App.reqres.request 'alert:window',
          header: 'Удалить автомобиль'
          message: '''
            Вы уверены, что хотите удалить автомобиль из локальной базы данных Вашего браузера?
          '''

        alert.on 'approve', ->
          car.destroy options

        alert.on 'deny', ->
          #

      refreshCars: (cars, filter) ->
        # Filtering
        query = filter.get('query')
        models = App.reqres.request('car:entities')
          .filterByModel(query)
        cars.reset models

        # Sorting
        reverse = if filter.get("direction") > 0 then "" else "Reverse"
        attr = filter.get('sort_by')
        funcName = "_sortBy#{reverse}_#{attr}"

        unless _.isFunction cars[funcName]
          throw "Comparator function should be exist in CarsCollection: #{funcName}"

        cars.comparator = cars[funcName]
        cars.sort()


      populateCars: (cars) ->
        require ['app/entities/car/data'], (data) ->
          cars ||= App.reqres.request 'car:entities'
          _.each data, (model) ->
            cars.create model

          window.location.reload()


    App.reqres.setHandler 'car:entities', (args...) ->
      API.getCars args...

    App.reqres.setHandler 'car:entity', (args...) ->
      API.getCar args...

    App.reqres.setHandler 'car:entity:new', (args...) ->
      API.newCar args...

    App.commands.setHandler 'car:entity:create', (args...) ->
      API.createCar args...

    App.commands.setHandler 'car:entity:destroy', (args...) ->
      API.destroyCar args...

    App.commands.setHandler 'car:entities:refresh', (args...) ->
      API.refreshCars args...

    App.commands.setHandler 'car:entities:populate', (args...) ->
      API.populateCars args...
