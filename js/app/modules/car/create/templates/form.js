if (!window.JST) {
  window.JST = {};
}
window.JST["car/create/templates/form"] = function (__obj) {
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
      __out.push('<div class="required field">\n  <label for="model">Модель автомобиля</label>\n  <div class="ui input">\n    <input type="text" id="model" name="model"\n      placeholder="Пример: ВАЗ">\n  </div>\n</div>\n\n<div class="fields">\n  <div class="required eight wide field">\n    <label for="price">Стоимость автомобиля</label>\n    <div class="ui labeled input">\n      <div class="ui left icon input">\n        <input type="text" id="price" name="price"\n          placeholder="0.00"\n          data-inputmask="\'numeric\': true, \'digits\': 2, \'min\': 0, \'max\': 100000, \'allowPlus\': false, \'allowMinus\': false">\n        <i class="dollar icon"></i>\n      </div>\n    </div>\n  </div>\n  <div class="required eight wide field">\n    <label for="year">Год выпуска</label>\n    <div class="ui left icon input">\n      <input type="text" id="year" name="year"\n        placeholder="Пример: 2001"\n        data-inputmask="\'alias\': \'numeric\', \'digits\': 0, \'min\': 1900, \'max\': ');
    
      __out.push(__sanitize(moment().year()));
    
      __out.push(', \'allowPlus\': false, \'allowMinus\': false">\n      <i class="clock icon"></i>\n    </div>\n  </div>\n</div>\n\n<div class="required field">\n  <label for="description">Описание</label>\n  <textarea id="description" name="description" rows="6"\n    placeholder="Пример: состояние отличное, не бит, не крашен"></textarea>\n</div>\n\n<div class="field">\n  <label for="photo">Фотографии</label>\n  <div class="ui special four cards"></div>\n  <div class="ui hidden divider"></div>\n  <div class="ui action fluid input">\n    <input type="text" id="photo" name="photo" placeholder="Пример: http://placehold.it/128x128.png">\n    <a href="javascript:void(null);" class="add-photo ui icon red button">\n      <i class="plus icon"></i>\n    </a>\n  </div>\n</div>\n\n<!-- Form submit -->\n<div class="ui basic segment center aligned field">\n  <a href="javascript:void(null);" class="ui cancel button">Отмена</a>\n  <button type="submit" class="ui submit red button">Сохранить</button>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
