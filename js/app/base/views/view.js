define(["app/app","./item_view","./collection_view","./composite_view","./layout_view"],function(e){return e.module("Views",function(e,r,t,n,i,o){return o.extend(n.View.prototype,{bindings:{},mixinTemplateHelpers:function(e){var r;return e=e||{},r=this.getOption("templateHelpers"),r=n._getValue(r,this),e=o.extend(e,n.Renderer.templateHelpers),o.extend(e,r)},initCustomScrollBar:function(e){var r;return r={suppressScrollX:!0,wheelPropagation:!0},e.perfectScrollbar(r)},setHeightAsWindow:function(e){return i(window).on("resize",function(){var r,t;return t=i(window).height(),r=64,e.css("height",t-r)}),i(window).trigger("resize")},validationError:function(e){return o.each(e.validationError,function(e){return function(r){return e._addError(r)}}(this))},_addError:function(e){var r,t,n,i;return r=e.attr,n=e.msg,t=this.$("[name="+r+"]"),t.on("keyup change",this._removeError),i=t.parents(".field"),i.hasClass("error")?void 0:i.addClass("error")},_removeError:function(e){var r;return r=i(e.currentTarget),r.off("keyup change"),r.parents(".field").removeClass("error")}})})});