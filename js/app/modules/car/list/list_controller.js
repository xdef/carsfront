var extend=function(e,t){function r(){this.constructor=e}for(var n in t)hasProp.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},hasProp={}.hasOwnProperty;define(["app/app","base.controllers","./list_view"],function(e){return e.module("Car.List",function(e,t,r,n,o,i){return e.Controller=function(r){function n(){return n.__super__.constructor.apply(this,arguments)}return extend(n,r),n.prototype.initialize=function(e){var r,n;return this.region=e.region,this.layout=this.getLayoutView(),n=t.reqres.request("filter:entity"),r=t.reqres.request("car:entities"),this.layout.on("before:show",function(e){return function(){return e.getMenuView(n,r),t.commands.execute("when:fetched",r,function(){return e.getCarsView(r)})}}(this)),this.region.show(this.layout)},n.prototype.getLayoutView=function(){return new e.Layout},n.prototype.getMenuView=function(r,n){var o;return o=new e.Menu({model:r}),r.on("change",function(e){return t.commands.execute("car:entities:refresh",n,e)}),this.layout.showChildView("menuRegion",o)},n.prototype.getCarsView=function(r){var n;return n=new e.Cars({collection:r}),n.on("car:delete",function(e){var r,o;return o=e.model,r=e.collection,n=e.view,t.commands.execute("car:entity:destroy",o)}),this.layout.showChildView("listRegion",n)},n}(t.Controllers.Base)}),e.Car.List.Controller});