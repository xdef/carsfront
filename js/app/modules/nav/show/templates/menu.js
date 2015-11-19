if (!window.JST) {
  window.JST = {};
}
window.JST["nav/show/templates/menu"] = function (__obj) {
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
      __out.push('<div class="ui container">\n  <a class="item" href="#!/home">\n    <img class="ui small image" src="images/app-logo.png">\n  </a>\n\n  <div class="right labeled menu">\n    <a class="item login" href="#!/home">\n      <i class="home icon"></i>\n      Главная\n    </a>\n    <a class="item login" href="#!/about-us">\n      <i class="comment icon"></i>\n      О Нас\n    </a>\n    <div class="ui dropdown link item">\n      <i class="car icon"></i>\n      Автомобили\n      <div class="menu">\n        <a href="#!/car/create" class="item">\n          Добавить автомобиль\n        </a>\n        <a href="#!/car" class="item">\n          Показать все\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
