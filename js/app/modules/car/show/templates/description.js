window.JST||(window.JST={}),window.JST["car/show/templates/description"]=function(n){n||(n={});var i,s=[],e=function(n){return n&&n.ecoSafe?n:"undefined"!=typeof n&&null!=n?c(n):""},a=n.safe,c=n.escape;return i=n.safe=function(n){if(n&&n.ecoSafe)return n;("undefined"==typeof n||null==n)&&(n="");var i=new String(n);return i.ecoSafe=!0,i},c||(c=n.escape=function(n){return(""+n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){var n,i,a,c;for(s.push('<div class="ui small statistics">\n  <div class="statistic">\n    <div class="value">\n      '),s.push(e(this.year)),s.push('\n    </div>\n    <div class="label">\n      Год выпуска\n    </div>\n  </div>\n\n  <div class="statistic">\n    <div class="value">\n      <i class="dollar icon"></i> '),s.push(e(this.price)),s.push('\n    </div>\n    <div class="label">\n      Стоимость\n    </div>\n  </div>\n</div>\n\n<div class="ui hidden divider"></div>\n\n<p>\n  '),s.push(e(this.description)),s.push('\n</p>\n\n<div class="ui four cards">\n  '),c=this.photos,n=0,i=c.length;i>n;n++)a=c[n],s.push('\n  <div class="card">\n    <div class="image">\n      <img src="'),s.push(e(a.url)),s.push('" alt="">\n    </div>\n  </div>\n  ');s.push("\n</div>\n")}).call(this)}.call(n),n.safe=a,n.escape=c,s.join("")};