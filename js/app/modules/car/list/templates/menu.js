if (!window.JST) {
  window.JST = {};
}
window.JST["car/list/templates/menu"] = function (__obj) {
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
      __out.push('<a\n  data-direction\n  class="direction item"\n  data-popup\n  data-content="Направление сортировки"\n  data-position="bottom left">\n  <i class="sort content large icon"></i>\n</a>\n\n<div class="ui dropdown item">\n  <input type="hidden" name="sortBy" value="1">\n  <div class="default text">\n    ...\n  </div>\n  <i class="dropdown icon"></i>\n  <div class="menu">\n    <div class="header">\n      <i class="sort icon"></i>\n      Сортировать по\n    </div>\n    <div class="item"\n      data-value="1"\n      data-text="Сортировать по дате создания"\n      data-attr=\'createdAt\'>\n      Дата создания\n    </div>\n\n    <div class="item"\n      data-value="2"\n      data-text="Сортировать по стоимости"\n      data-attr=\'price\'>\n      Стоимость\n    </div>\n\n    <!-- <div class="item" data-value="5" data-text="Сортировать по популярности">Популярность</div> -->\n  </div>\n</div>\n\n<div class="right menu">\n  <div class="ui category search item">\n    <form class="ui transparent icon input">\n      <input class="prompt" type="text" name="chars"\n        placeholder="Поиск по модели">\n      <i class="search link icon"></i>\n    </form>\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
