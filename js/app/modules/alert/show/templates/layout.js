if (!window.JST) {
  window.JST = {};
}
window.JST["alert/show/templates/layout"] = function (__obj) {
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
      __out.push('<div class="ui icon header">\n  <i class="');
    
      __out.push(__sanitize(this.icon));
    
      __out.push('"></i>\n  ');
    
      __out.push(__sanitize(this.header));
    
      __out.push('\n</div>\n\n<div class="image content">\n  <div class="description">\n    <p class="text-center">');
    
      __out.push(this.message);
    
      __out.push('</p>\n  </div>\n</div>\n\n<div class="actions">\n  <div class="ui cancel red basic inverted button">\n    <i class="remove icon"></i>\n    ');
    
      __out.push(__sanitize(this.actions.cancel));
    
      __out.push('\n  </div>\n  <div class="ui ok green basic inverted button">\n    <i class="checkmark icon"></i>\n    ');
    
      __out.push(__sanitize(this.actions.ok));
    
      __out.push('\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
