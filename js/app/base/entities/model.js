var extend=function(t,n){function r(){this.constructor=t}for(var e in n)hasProp.call(n,e)&&(t[e]=n[e]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},hasProp={}.hasOwnProperty;define(["app/app"],function(t){return t.module("Entities",function(t,n,r,e,o,u){return t.Model=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return extend(n,t),n}(r.Model),t.RelationalModel=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return extend(n,t),n}(r.NestedAttributesModel)})});