if (!window.JST) {
  window.JST = {};
}
window.JST["pages/home/templates/cars-item"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      if (this.photos.length) {
        __out.push('\n<div class="image">\n  <img src="');
        __out.push(__sanitize(this.photos[0].url));
        __out.push('">\n</div>\n<div class="content">\n  <div class="header">\n    ');
        __out.push(__sanitize(this.model));
        __out.push('\n  </div>\n  <div class="meta">\n    <span class="price">\n      Стоимость:\n      <i class="dollar fitted icon"></i>\n      ');
        __out.push(__sanitize(this.price));
        __out.push('\n    </span>\n  </div>\n</div>\n');
      }
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
