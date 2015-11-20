var extend=function(e,t){function r(){this.constructor=e}for(var n in t)hasProp.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},hasProp={}.hasOwnProperty,slice=[].slice;define(["app/app","base.entities","./photo"],function(e,t){return e.module("Entities",function(e,t,r,n,o,a){var s;return e.Car=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return extend(n,t),n.prototype.localStorage=new r.LocalStorage("Cars"),n.prototype.defaults={createdAt:moment().toISOString()},n.prototype.relations=[{key:"photos",relatedModel:function(){return e.Photo},collectionType:function(){return e.PhotosCollection}}],n.prototype.validate=function(e,t){var r,n;return null==t&&(t={}),r=[],a.isEmpty(e.model)&&r.push({attr:"model",msg:["Модель"]}),a.isEmpty(e.price)&&r.push({attr:"price",msg:["Стоимость"]}),a.isEmpty(e.year)&&r.push({attr:"year",msg:["Год выпуска"]}),a.isEmpty(e.description)&&r.push({attr:"description",msg:["Описание"]}),n=r.length?r:void 0},n}(e.RelationalModel),e.CarsCollection=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return extend(n,t),n.prototype.model=e.Car,n.prototype.localStorage=new r.LocalStorage("Cars"),n.prototype.comparator=function(e){return this._sortByReverse_createdAt(e)},n.prototype._sortBy_createdAt=function(e){return new Date(e.get("createdAt"))},n.prototype._sortByReverse_createdAt=function(e){return-new Date(e.get("createdAt"))},n.prototype._sortBy_price=function(e){return new Number(e.get("price"))},n.prototype._sortByReverse_price=function(e){return-new Number(e.get("price"))},n.prototype.filterByModel=function(e){var t;return a.isEmpty(e)?this.models:(t=new RegExp(e,"gi"),this.filter(function(e){return t.test(e.get("model"))}))},n}(e.Collection),s={newCar:function(t){return null==t&&(t={}),new e.Car(t)},getCars:function(t){var r,n;return null==t&&(t={}),this.cars||(this.cars=new e.CarsCollection),this.cars.fetch(),(n=t.size)?(r=new e.CarsCollection(this.cars.models.slice(0,n)),r.total=this.cars.length,r):this.cars},getCar:function(e,r){return null==r&&(r={}),this.cars||(this.cars=t.reqres.request("car:entities")),this.cars.get(e)},createCar:function(e,r){return null==r&&(r={}),e.isValid()?(r=a.defaults(r,{success:function(e,r,n){return t.navigate("/car",{trigger:!0})},error:function(e,t,r){return console.log("error")}}),e.save({},r)):void 0},destroyCar:function(e,r){var n;return null==r&&(r={}),r=a.defaults(r,{success:function(e,r,n){return t.navigate("/car",{trigger:!0})},error:function(e,t,r){}}),n=t.reqres.request("alert:window",{header:"Удалить автомобиль",message:"Вы уверены, что хотите удалить автомобиль из локальной базы данных Вашего браузера?"}),n.on("approve",function(){return e.destroy(r)}),n.on("deny",function(){})},refreshCars:function(e,r){var n,o,s,i,c;if(i=r.get("query"),s=t.reqres.request("car:entities").filterByModel(i),e.reset(s),c=r.get("direction")>0?"":"Reverse",n=r.get("sort_by"),o="_sortBy"+c+"_"+n,!a.isFunction(e[o]))throw"Comparator function should be exist in CarsCollection: "+o;return e.comparator=e[o],e.sort()},populateCars:function(e){return require(["app/entities/car/data"],function(r){return e||(e=t.reqres.request("car:entities")),a.each(r,function(t){return e.create(t)}),window.location.reload()})}},t.reqres.setHandler("car:entities",function(){var e;return e=1<=arguments.length?slice.call(arguments,0):[],s.getCars.apply(s,e)}),t.reqres.setHandler("car:entity",function(){var e;return e=1<=arguments.length?slice.call(arguments,0):[],s.getCar.apply(s,e)}),t.reqres.setHandler("car:entity:new",function(){var e;return e=1<=arguments.length?slice.call(arguments,0):[],s.newCar.apply(s,e)}),t.commands.setHandler("car:entity:create",function(){var e;return e=1<=arguments.length?slice.call(arguments,0):[],s.createCar.apply(s,e)}),t.commands.setHandler("car:entity:destroy",function(){var e;return e=1<=arguments.length?slice.call(arguments,0):[],s.destroyCar.apply(s,e)}),t.commands.setHandler("car:entities:refresh",function(){var e;return e=1<=arguments.length?slice.call(arguments,0):[],s.refreshCars.apply(s,e)}),t.commands.setHandler("car:entities:populate",function(){var e;return e=1<=arguments.length?slice.call(arguments,0):[],s.populateCars.apply(s,e)})})});