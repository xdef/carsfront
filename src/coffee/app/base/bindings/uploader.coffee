define ['backbone', 'backbone.stickit', 'jquery.file.upload'], ->
  Backbone.Stickit.addHandler
    selector: ".uploader"

    initialize: ($el, model, options) ->

      defaults = _.defaults {}, options.defaultOptions,
        url: model.url()
        type: "POST"
        dataType: "json"
        progressInterval: 100
        bitrateInterval: 100
        dropZone: $el
        formData: {}

      uploader = $el.fileupload _.extend(defaults, options.uploadOptions)

      uploader.bind 'fileuploaddone', (e, data) ->
        model.trigger 'upload:done', data

      uploader.bind 'fileuploadprogressall', (e, data) ->
        progress = parseInt(data.loaded / data.total * 100, 10)
        model.trigger 'upload:progress', progress

      uploader.bind 'fileuploadstart', (e, data) =>
        model.trigger 'upload:start', data

      uploader.bind 'fileuploadstop', (e, data) =>
        model.trigger 'upload:stop', data

      uploader.bind 'fileuploadfail', (e, data) ->
        model.trigger 'upload:error', data

    # destroy: ($el, model, options) ->
    #   $el.fileupload 'destroy'


    updateModel: false

    updateView: false
