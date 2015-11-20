var extend=function(r,e){function t(){this.constructor=r}for(var n in e)hasProp.call(e,n)&&(r[n]=e[n]);return t.prototype=e.prototype,r.prototype=new t,r.__super__=e.prototype,r},hasProp={}.hasOwnProperty,slice=[].slice;define(["app/app","base.entities"],function(r,e){return r.module("Entities",function(r,e,t,n,o,i){var s;return r.ErrorHandler=function(r){function e(){return e.__super__.constructor.apply(this,arguments)}return extend(e,r),e}(r.Model),s={initErrorHandler:function(){return this.handler||(this.handler=new r.ErrorHandler)},handlerError:function(r,e,t){switch(e.status){case 400:return this.badRequest(r,e,t);case 401:return this.unauthorized(r,e,t);case 403:return this.forbidden(r,e,t);case 404:return this.notFound(r,e,t);case 422:return this.unprocessableEntity(r,e,t)}},badRequest:function(r,e,t){},unauthorized:function(r,t,n){var o,i;return i=e.reqres.request("i18n:t","frontend.flash.profile.create.error.title"),o=this._formatedAuthorizedErrors(t),e.vent.trigger("flash:create",{type:"error",title:i,message:o}),e.commands.execute("session:destroy")},forbidden:function(r,t,n){var o,i;return i=e.reqres.request("i18n:t","frontend.flash.profile.create.error.title"),o=this._formatedAuthorizedErrors(t),e.vent.trigger("flash:create",{type:"error",title:i,message:o}),e.commands.execute("session:destroy")},unprocessableEntity:function(r,t,n){var o,i,s,a;if(i=t.responseJSON){for(o in i)s=i[o],r.validationError||(r.validationError=[]),r.validationError.push({attr:o,msg:s});r.trigger("invalid",r),s=this._formatedValidationErrors(r)}else i=t.responseText,s=i;return a=e.reqres.request("i18n:t","frontend.flash.profile.create.error.title"),e.vent.trigger("flash:create",{type:"error",title:a,message:s})},_formatedAuthorizedErrors:function(r){var e,t;return t=(e=r.responseJSON)?e.error:r.responseText,"<div class='item'>"+t+"</div>"},_formatedValidationErrors:function(r){var e;return e=i.map(r.validationError,function(r){var e,t;return e=r.attr,t=r.msg,i.isArray(t)&&(t=t.join(", ")),"<div class='item'>"+e+": "+t+"</div>"}),e.join("")}},e.on("before:start",function(){return s.initErrorHandler()}),e.vent.on("model:error",function(){var r;return r=1<=arguments.length?slice.call(arguments,0):[],s.handlerError.apply(s,r)}),e.commands.execute("error:handler:init",function(){return s.initErrorHandler()})})});