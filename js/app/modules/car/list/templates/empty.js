window.JST||(window.JST={}),window.JST["car/list/templates/empty"]=function(e){e||(e={});var n,a=[],c=e.safe,t=e.escape;return n=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var n=new String(e);return n.ecoSafe=!0,n},t||(t=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){a.push('<i class="frown icon"></i>\n<div class="content">\n  <div class="header">\n    База автомобилей пуста\n  </div>\n  <p>\n    В локальном хранилище пока нет автомобилей.\n    Но вы можете их <a href="#!/car/create">создать</a>\n  </p>\n</div>\n')}).call(this)}.call(e),e.safe=c,e.escape=t,a.join("")};