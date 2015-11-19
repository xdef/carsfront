define [
  'backbone'
  'backbone.stickit'
  'pikaday'
  'moment'
], ->
  moment = require('moment')
  Pikaday = require('pikaday')

  Backbone.Stickit.addHandler
    selector: "input.datepicker"

    initialize: ($el, model, options) ->

      defaults = _.extend {}, options.defaultOptions,
        theme: 'semantic_ui'
        field: $el[0]
        format: "LL"
        firstDay: 1
        container: $el.parents("div")[0]
        i18n:
          months: moment.months()
          weekdays: moment.weekdays()
          weekdaysShort: moment.weekdaysShort()

      if defaults.setDefaultDate and defaults.defaultDate
        date = moment(defaults.defaultDate).toISOString()
        attr = options.observe

        model.set attr, date

      @pikaday = new Pikaday defaults

    onSet: (val, options) ->
      moment val, "LL"
        .toISOString()

    onGet: (val, options) ->
      moment val
        .format "LL"

    destroy: ($el, model, options) ->
      @pikaday.destroy()
