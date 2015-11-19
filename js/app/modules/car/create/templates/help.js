if (!window.JST) {
  window.JST = {};
}
window.JST["car/create/templates/help"] = function (__obj) {
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
      __out.push('<div class="item">\n  <i class="asterisk large grey icon"></i>\n  <div class="content">\n    <div class="header">\n      Обязательное поле\n    </div>\n    <div class="description">\n      Поля помеченные звездочкой обязательны к заполнению\n    </div>\n  </div>\n</div>\n\n<div class="item">\n  <i class="money large grey icon"></i>\n  <div class="content">\n    <div class="header">\n      Стоимость\n    </div>\n    <div class="description">\n      Значение стоимости автомобиля может варьировться 0.01 до 999999. Максимальное\n      число знаков после запятой 2\n    </div>\n  </div>\n</div>\n\n<div class="item">\n  <i class="calendar large grey icon"></i>\n  <div class="content">\n    <div class="header">\n      Год выпуска\n    </div>\n    <div class="description">\n      Допустимые значения года выпуска автомобиля от 1900 до ');
    
      __out.push(__sanitize(moment().year()));
    
      __out.push('\n    </div>\n  </div>\n</div>\n\n<div class="item">\n  <i class="picture large grey icon"></i>\n  <div class="content">\n    <div class="header">\n      Фото\n    </div>\n    <div class="description">\n      В качестве фото возможно использовать только внешние ссылки. Количество фотографий не ограничено\n    </div>\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
