var extend=function(t,o){function r(){this.constructor=t}for(var n in o)hasProp.call(o,n)&&(t[n]=o[n]);return r.prototype=o.prototype,t.prototype=new r,t.__super__=o.prototype,t},hasProp={}.hasOwnProperty;define(["app/app","base.controllers","./about_view"],function(t){return t.module("Pages.About",function(t,o,r,n,e,u){return t.Controller=function(o){function r(){return r.__super__.constructor.apply(this,arguments)}return extend(r,o),r.prototype.initialize=function(t){return this.region=t.region,this.layout=this.getLayoutView(),this.layout.on("before:show",function(t){return function(){}}(this)),this.region.show(this.layout)},r.prototype.getLayoutView=function(){return new t.Layout},r}(o.Controllers.Base)}),t.Pages.About.Controller});