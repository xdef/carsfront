window.JST||(window.JST={}),window.JST["car/show/templates/header"]=function(e){e||(e={});var n,i=[],a=function(e){return e&&e.ecoSafe?e:"undefined"!=typeof e&&null!=e?t(e):""},s=e.safe,t=e.escape;return n=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var n=new String(e);return n.ecoSafe=!0,n},t||(t=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){i.push('<h1 class="ui dividing header">\n  '),i.push(a(this.model)),i.push(" ("),i.push(a(this.year)),i.push(' г.)\n  <div class="sub header">\n    <div class="ui link horizontal list">\n      <a href="/#!/car/'),i.push(a(this.id)),i.push('/edit" class="item">\n        <i class="edit icon"></i>\n        Редактировать\n      </a>\n      <a href="javascript:void(null);" class="delete item">\n        <i class="trash icon"></i>\n        Удалить\n      </a>\n    </div>\n  </div>\n</h1>\n')}).call(this)}.call(e),e.safe=s,e.escape=t,i.join("")};