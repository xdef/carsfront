if (!window.JST) {
  window.JST = {};
}
window.JST["car/show/templates/description"] = function (__obj) {
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
      var i, len, photo, ref;
    
      __out.push('<div class="ui small statistics">\n  <div class="statistic">\n    <div class="value">\n      ');
    
      __out.push(__sanitize(this.year));
    
      __out.push('\n    </div>\n    <div class="label">\n      Год выпуска\n    </div>\n  </div>\n\n  <div class="statistic">\n    <div class="value">\n      <i class="dollar icon"></i> ');
    
      __out.push(__sanitize(this.price));
    
      __out.push('\n    </div>\n    <div class="label">\n      Стоимость\n    </div>\n  </div>\n</div>\n\n<div class="ui hidden divider"></div>\n\n<p>\n  ');
    
      __out.push(__sanitize(this.description));
    
      __out.push('\n</p>\n\n<div class="ui four cards">\n  ');
    
      ref = this.photos;
      for (i = 0, len = ref.length; i < len; i++) {
        photo = ref[i];
        __out.push('\n  <div class="card">\n    <div class="image">\n      <img src="');
        __out.push(__sanitize(photo.url));
        __out.push('" alt="">\n    </div>\n  </div>\n  ');
      }
    
      __out.push('\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
