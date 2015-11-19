if (!window.JST) {
  window.JST = {};
}
window.JST["car/list/templates/item"] = function (__obj) {
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
      __out.push('<div class="image">\n  ');
    
      if (this.photos.length) {
        __out.push('\n  <img src="');
        __out.push(__sanitize(this.photos[0].url));
        __out.push('">\n  ');
      }
    
      __out.push('\n</div>\n<div class="content">\n  <a href="#!/car/');
    
      __out.push(__sanitize(this.id));
    
      __out.push('" class="header">\n    ');
    
      __out.push(__sanitize(this.model));
    
      __out.push(' (');
    
      __out.push(__sanitize(this.year));
    
      __out.push(' г.)\n  </a>\n  <div class="meta">\n    <a href="#!/car/');
    
      __out.push(__sanitize(this.id));
    
      __out.push('/edit">\n      <i class="edit icon"></i>\n      Редактировать\n    </a>\n    <a href="javascript:void(null);" class="delete">\n      <i class="trash icon"></i>\n      Удалить\n    </a>\n  </div>\n  <div class="description">\n    <p>');
    
      __out.push(__sanitize(this.description));
    
      __out.push('</p>\n  </div>\n  <div class="extra">\n    <span>\n      <i class="calendar icon"></i>\n      ');
    
      __out.push(__sanitize(this.formatedDate(this.createdAt)));
    
      __out.push('\n    </span>\n    &nbsp;\n    <span>\n      <i class="dollar fitted icon"></i>\n      ');
    
      __out.push(__sanitize(this.price));
    
      __out.push('\n    </span>\n  </div>\n</div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
