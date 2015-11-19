var extend=function(e,t){function o(){this.constructor=e}for(var r in t)hasProp.call(t,r)&&(e[r]=t[r]);return o.prototype=t.prototype,e.prototype=new o,e.__super__=t.prototype,e},hasProp={}.hasOwnProperty;define(["app/app","base.controllers","./edit_view"],function(e){return e.module("Car.Edit",function(e,t,o,r,n,i){return e.Controller=function(o){function r(){return r.__super__.constructor.apply(this,arguments)}return extend(r,o),r.prototype.initialize=function(e){var o,r;return r=e.id,this.region=e.region,this.layout=this.getLayoutView(),o=t.reqres.request("car:entity",r),this.layout.on("before:show",function(e){return function(){return e.getHeaderView(),e.getHelpView(),e.getFormView(o)}}(this)),this.region.show(this.layout)},r.prototype.getLayoutView=function(){return new e.Layout},r.prototype.getHeaderView=function(){var t;return t=new e.Header,this.layout.showChildView("headerRegion",t)},r.prototype.getHelpView=function(){var t;return t=new e.Help,this.layout.showChildView("helpRegion",t)},r.prototype.getFormView=function(o){var r;return r=new e.Form({model:o,collection:o.get("photos")}),r.on("submit",function(e){var o,n;return r=e.view,n=e.model,o=e.collection,t.commands.execute("car:entity:create",n)}),r.on("cancel",function(e){var t,o;return o=e.model,t=e.collection,r=e.view,window.history.back()}),r.on("car:photo:remove",function(e,t){var r,n;return e=t.view,n=t.model,r=t.collection,o.get("photos").remove(n)}),this.layout.showChildView("formRegion",r)},r}(t.Controllers.Base)}),e.Car.Edit.Controller});