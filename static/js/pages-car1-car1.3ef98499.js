(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-car1-car1"],{"0b93":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".content[data-v-0f0e7e6e]{width:100%;max-width:%?750?%;height:100vh;position:relative;overflow-x:hidden;background-color:#000}.car1-top[data-v-0f0e7e6e]{position:relative;width:%?750?%;height:%?832?%}.car1-top .light-logo[data-v-0f0e7e6e]{position:absolute;top:0;left:0;display:block;width:%?750?%;z-index:100}@-webkit-keyframes scrolling-data-v-0f0e7e6e{0%{left:0}100%{left:%?-600?%}}@keyframes scrolling-data-v-0f0e7e6e{0%{left:0}100%{left:%?-600?%}}.car1-top .bg[data-v-0f0e7e6e]{position:absolute;height:%?845?%;top:0;left:0;display:block;-webkit-animation:scrolling-data-v-0f0e7e6e 15s linear forwards;animation:scrolling-data-v-0f0e7e6e 15s linear forwards}.car1-top .mask[data-v-0f0e7e6e]{width:100%;height:100%;background-color:rgba(0,0,0,.8);position:absolute;top:0;left:0}.car1-light[data-v-0f0e7e6e]{display:block;position:absolute;left:0;bottom:%?130?%;width:%?750?%}.car1-car[data-v-0f0e7e6e]{display:block;position:absolute;left:%?155?%;bottom:0;width:%?440?%}.car1-slogan[data-v-0f0e7e6e]{display:block;position:absolute;bottom:%?430?%;width:%?440?%}",""]),t.exports=a},"16cc":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{mask_opacity:1,light_opacity:0,slogan_right:-200,slogan_opacity:0,light_timer:0,slogan_timer:0,top_logo_light_src:"",car1_bg_src:"",car1_light_src:"",car1_car_src:"",car1_slogan_src:""}},onLoad:function(){document.title="追逐梵高 — 2020奥迪青少年艺术节",this.top_logo_light_src=uni.getStorageSync("filePath0"),this.car1_bg_src=uni.getStorageSync("filePath1"),this.car1_light_src=uni.getStorageSync("filePath2"),this.car1_car_src=uni.getStorageSync("filePath3"),this.car1_slogan_src=uni.getStorageSync("filePath4")},onShow:function(){var t=this;document.title="追逐梵高 — 2020奥迪青少年艺术节",this.light_timer=setInterval((function(){t.mask_opacity<=0?clearInterval(t.light_timer):(t.mask_opacity-=.01,t.light_opacity+=.01)}),50),this.slogan_timer=setInterval((function(){t.slogan_opacity>=1?clearInterval(t.slogan_timer):(t.slogan_right+=30,t.slogan_opacity+=.12)}),50)},methods:{gotoNext:function(){this.slogan_opacity>=1&&uni.navigateTo({url:"../car2/car2"})}}};a.default=e},"3c0e":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return o})),i.d(a,"c",(function(){return c})),i.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoNext.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"car1-top"},[i("v-uni-image",{staticClass:"light-logo",attrs:{src:t.top_logo_light_src,mode:"widthFix"}}),i("v-uni-image",{staticClass:"bg",attrs:{src:t.car1_bg_src,mode:"heightFix"}}),i("v-uni-view",{staticClass:"mask",style:{opacity:t.mask_opacity}})],1),i("v-uni-image",{staticClass:"car1-light",style:{opacity:t.light_opacity},attrs:{src:t.car1_light_src,mode:"widthFix"}}),i("v-uni-image",{staticClass:"car1-car",attrs:{src:t.car1_car_src,mode:"widthFix"}}),i("v-uni-image",{staticClass:"car1-slogan",style:{right:t.slogan_right+"rpx",opacity:t.slogan_opacity},attrs:{src:t.car1_slogan_src,mode:"widthFix"}})],1)},c=[]},"426e":function(t,a,i){"use strict";var e=i("a2f5"),o=i.n(e);o.a},"770e":function(t,a,i){"use strict";i.r(a);var e=i("16cc"),o=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(a,t,(function(){return e[t]}))}(c);a["default"]=o.a},a2f5:function(t,a,i){var e=i("0b93");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("01a9e82a",e,!0,{sourceMap:!1,shadowMode:!1})},b0f7:function(t,a,i){"use strict";i.r(a);var e=i("3c0e"),o=i("770e");for(var c in o)"default"!==c&&function(t){i.d(a,t,(function(){return o[t]}))}(c);i("426e");var r,s=i("f0c5"),n=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"0f0e7e6e",null,!1,e["a"],r);a["default"]=n.exports}}]);