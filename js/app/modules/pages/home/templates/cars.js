if (!window.JST) {
  window.JST = {};
}
window.JST["pages/home/templates/cars"] = function (__obj) {
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
      __out.push('<h2 class="ui dividing header">\n  Последние добавленные автомобили\n  <div class="sub header">\n    Всего: ');
    
      __out.push(__sanitize(this.total));
    
      __out.push('\n  </div>\n</h2>\n\n<div class="ui four link cards"></div>\n\n');
    
      if (this.total > this.size) {
        __out.push('\n<div class="ui basic center aligned segment">\n  <a href="#!/car" class="ui huge red inverted button">\n    Показать все\n  </a>\n</div>\n');
      }
    
      __out.push('\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
