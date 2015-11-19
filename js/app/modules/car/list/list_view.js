var extend=function(t,e){function r(){this.constructor=t}for(var o in e)hasProp.call(e,o)&&(t[o]=e[o]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},hasProp={}.hasOwnProperty;define(["app/app","base.views","./templates/layout","./templates/menu","./templates/item","./templates/empty"],function(){var t,e;return t=require("app/app"),e=require("base.views"),t.module("Car.List",function(t,r,o,n,i,p){return t.Layout=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return extend(e,t),e.prototype.template="car/list/templates/layout",e.prototype.className="ui container",e.prototype.regions={menuRegion:"#menu-region",listRegion:"#list-region",moreRegion:"#more-region"},e}(e.LayoutView),t.Menu=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return extend(e,t),e.prototype.template="car/list/templates/menu",e.prototype.className="ui icon menu",e.prototype.ui={dropdownBtn:".ui.dropdown",directionBtn:".direction"},e.prototype.triggers={"submit form":"submit"},e.prototype.events={"click @ui.directionBtn":"toggleDirection"},e.prototype.bindings={"[name=chars]":{observe:"query",onSet:function(t){return{chars:t}},onGet:function(t){return t?t.chars:void 0}},"[data-direction]":{observe:"direction",updateMethod:"html",onGet:function(t,e){switch(Number(t)){case-1:return'<i class="sort content descending large icon"></i>';case 1:return'<i class="sort content ascending large icon"></i>'}}}},e.prototype.initSortBy=function(t){var e;return e={onChange:function(t){return function(e,r,o){return t.model.set({sort_by:o.data("attr")})}}(this)},t.dropdown(e)},e.prototype.toggleDirection=function(t){var e;return t.preventDefault(),t.stopPropagation(),e=-Number(this.model.get("direction")),this.model.set({direction:e})},e.prototype.onRender=function(){return this.initSortBy(this.ui.dropdownBtn)},e}(e.ItemView),t.Empty=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return extend(e,t),e.prototype.template="car/list/templates/empty",e.prototype.className="ui icon message",e}(e.ItemView),t.Item=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return extend(e,t),e.prototype.template="car/list/templates/item",e.prototype.className="item",e.prototype.ui={destroyBtn:"a.delete"},e.prototype.triggers={"click @ui.destroyBtn":"delete"},e}(e.ItemView),t.Cars=function(e){function r(){return r.__super__.constructor.apply(this,arguments)}return extend(r,e),r.prototype.className="ui very relaxed divided items",r.prototype.childView=t.Item,r.prototype.childViewEventPrefix="car",r.prototype.emptyView=t.Empty,r}(e.CollectionView)})});