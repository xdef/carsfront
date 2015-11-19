if (!window.JST) {
  window.JST = {};
}
window.JST["nav/show/templates/description"] = function (__obj) {
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
      __out.push('<div class="ui basic segment">\n  <h1 class="ui dividing header">\n    Cars maker\n    <div class="sub header">Добавляйте автомобили в локальную память вашего браузера</div>\n  </h1>\n\n  <p class="text-justified">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa\n    qui officia deserunt mollit anim id est laborum.\n  </p>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
