webpackJsonp([1],{"/Xw4":function(t,e){},"1m8X":function(t,e){},"2PEK":function(t,e){},"9ewA":function(t,e){},"9n10":function(t,e){},EmZp:function(t,e){},FCgB:function(t,e){},IsUK:function(t,e){},JNya:function(t,e){},LkST:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=s("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},n,!1,function(t){s("h5Cy")},null,null).exports,r=s("/ocq"),o={name:"HomeHeader",props:{city:String},methods:{getCurCity:function(){return this.$store.state.curCity}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"header-right"},[s("router-link",{staticStyle:{color:"#fff"},attrs:{to:"/city"}},[t._v("\n            "+t._s(t.getCurCity())+"\n        ")]),t._v(" "),s("i",{staticClass:"iconfont"},[t._v("")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("i",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("i",{staticClass:"iconfont"},[this._v("")]),this._v("\n        输入城市/景点/游玩主题    \n    ")])}]};var l=s("VU/8")(o,c,!1,function(t){s("T8WM")},"data-v-6c61fb74",null).exports,u={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length},close:close}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{attrs:{src:t.imgUrl,alt:t.alt}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var d=s("VU/8")(u,p,!1,function(t){s("XEbq")},"data-v-27bc9460",null).exports,h={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,s){var i=Math.floor(s/8);t[i]||(t[i]=[]),t[i].push(e)}),t},showSwiper:function(){return this.list.length}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t.showSwiper?s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,i){return s("swiper-slide",{key:i},t._l(e,function(e){return s("div",{key:e.id,staticClass:"icon"},[s("img",{attrs:{src:e.imgUrl}}),t._v(" "),s("p",[t._v(t._s(e.tag))])])}))}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},staticRenderFns:[]};var m=s("VU/8")(h,v,!1,function(t){s("NRGO")},"data-v-671f07e3",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"tools-wrapper"},[e("li",{staticClass:"tool"},[e("i",{staticClass:"iconfont"},[this._v("")]),this._v(" "),e("span",[this._v("定位失败")])]),this._v(" "),e("li",{staticClass:"tool"},[e("i",{staticClass:"iconfont"},[this._v("")]),this._v(" "),e("span",[this._v("玩水季")])])])}]};var _=s("VU/8")({name:"HomeRecommend"},f,!1,function(t){s("EmZp")},"data-v-f5e53b84",null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"activities-wrapper"},t._l(t.list,function(e){return s("li",{key:e.id,staticClass:"activity",style:{backgroundImage:t.getImageUrl(e.imgUrl)}})}))},staticRenderFns:[]};var w=s("VU/8")({name:"HomeActivities",data:function(){return{list:[{id:"0001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png"},{id:"0002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1809/b7/00000ce26b312902.png"}]}},methods:{getImageUrl:function(t){return"url("+t+")"}}},C,!1,function(t){s("vsin")},"data-v-8afd0110",null).exports,g={name:"HomeHotmenu",props:{list:Array},data:function(){return{tops:["http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png","http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png","http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"]}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hotmenu-wrapper"},[t._m(0),t._v(" "),s("ul",{staticClass:"list-wrapper"},t._l(t.list,function(e,i){return s("li",{key:e.id,staticClass:"item"},[s("div",{staticClass:"img-wrapper"},[i<3?s("div",{staticClass:"top-wrapper"},[s("img",{staticClass:"top",attrs:{src:t.tops[i]}})]):t._e(),t._v(" "),s("img",{staticClass:"pic",attrs:{src:e.imgUrl}})]),t._v(" "),s("p",{staticClass:"address"},[t._v(t._s(e.address))]),t._v(" "),s("p",{staticClass:"price-wrapper"},[s("span",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),t._v("\n                 起\n             ")])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("i",{staticClass:"iconfont icon"},[this._v("")]),this._v("\n         本周热门榜单\n         "),e("span",{staticClass:"see-all"},[this._v("\n             全部榜单\n             "),e("i",{staticClass:"iconfont"},[this._v("")])])])}]};var b=s("VU/8")(g,y,!1,function(t){s("amub")},"data-v-3a8d0670",null).exports,k={name:"HomeRecommend",props:{lists:Array},data:function(){return{tags:[{imgUrl:"https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png",text:"随买随用"},{imgUrl:"https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png",text:"可订明日"},{imgUrl:"https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png",text:"可定今日"}]}},methods:{getTagUrl:function(t){return"url("+this.tags[t].imgUrl+")"},getTagText:function(t){return this.tags[t].text},toDeailPage:function(t){this.$router.push({name:"Detail",params:{detailId:t}})}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend-wrapper"},[t._m(0),t._v(" "),s("ul",{staticClass:"recommend-list-wrapper"},t._l(t.lists,function(e,i){return s("li",{key:i,staticClass:"recommend-list"},[s("ul",{staticClass:"recommend-item-wrapper"},[t._l(e,function(e){return s("li",{key:e.id,staticClass:"recommend-item clearfix",on:{click:function(s){t.toDeailPage(e.id)}}},[s("div",{staticClass:"img-wrapper"},[e.tagKind>=0?s("div",{staticClass:"tag",style:{backgroundImage:t.getTagUrl(e.tagKind)}},[t._v("\n                            "+t._s(t.getTagText(e.tagKind))+"\n                        ")]):t._e(),t._v(" "),s("img",{attrs:{src:e.imgUrl}})]),t._v(" "),s("div",{staticClass:"info"},[s("p",{staticClass:"address"},[t._v(t._s(e.address))]),t._v(" "),t._m(1,!0),t._v(" "),s("p",{staticClass:"price-wrapper"},[s("span",{staticClass:"price"},[t._v("\n                                ￥"+t._s(e.price)+"\n                            ")]),t._v("\n                            起\n                            "),s("span",{staticClass:"area"},[t._v("\n                                "+t._s(e.area)+"\n                            ")])])])])}),t._v(" "),s("p",{staticClass:"summary"},[t._v("🔥好评如潮，小伙伴热推景点~")])],2)])})),t._v(" "),s("a",{staticClass:"see-all"},[t._v("查看所有商品")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("i",{staticClass:"iconfont icon"},[this._v("")]),this._v("\n        猜你喜欢\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comment"},[e("p",{staticClass:"star-wrapper"},[e("span",{staticClass:"iconfont star comment-star"},[this._v("")]),this._v(" "),e("span",{staticClass:"iconfont star bg-start"},[this._v("")])]),this._v(" "),e("span",{staticClass:"comment-number"},[this._v("711条评论")])])}]};var x=s("VU/8")(k,$,!1,function(t){s("FCgB")},"data-v-fa36109a",null).exports,E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-wrapper"},[s("div",{class:["icon-nav-wrapper",{seeMore:t.isSeeMore}]},[s("ul",{staticClass:"icon-nav"},[t._l(t.icons,function(e){return s("li",{staticClass:"icon-nav-item"},[s("a",[s("i",{staticClass:"icon",style:{backgroundPosition:t.getBgPos(e.pos)}}),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(e.title))])])])}),t._v(" "),s("div",{class:["see-more-wrapper",{active:t.isSeeMore}]},[s("a",{staticClass:"see-more",on:{click:t.handleSeeMoreClick}},[s("i",{staticClass:"iconfont see-more-icon",domProps:{innerHTML:t._s(t.getSeeMoreIcon())}}),t._v("\n                    更多\n                ")])])],2)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"footer-nav"},[e("li",{staticClass:"footer-nav-item"},[e("a",[this._v("登录")])]),this._v(" "),e("li",{staticClass:"footer-nav-item"},[e("a",[this._v("我的订单")])]),this._v(" "),e("li",{staticClass:"footer-nav-item"},[e("a",[this._v("最近浏览")])]),this._v(" "),e("li",{staticClass:"footer-nav-item"},[e("a",[this._v("关于我们")])])])}]};var U=s("VU/8")({name:"HomeFooter",data:function(){return{icons:[{pos:[0,0],title:"机票"},{pos:[-25,0],title:"酒店"},{pos:[-150,0],title:"公寓"},{pos:[-50,0],title:"团购"},{pos:[-50,-25],title:"火车票"},{pos:[-75,0],title:"景点"},{pos:[-100,0],title:"接送机"},{pos:[0,-25],title:"度假"},{pos:[-75,-25],title:"攻略"},{pos:[-100,-25],title:"旅图"},{pos:[-125,0],title:"车车"},{pos:[-125,-25],title:"当地人"}],seeMore:{},isSeeMore:!1}},methods:{getBgPos:function(t){return t[0]+"px "+t[1]+"px"},handleSeeMoreClick:function(){this.isSeeMore=!this.isSeeMore},getSeeMoreIcon:function(){return this.isSeeMore?"&#xe69b;":"&#xe601"}}},E,!1,function(t){s("IsUK")},"data-v-97a22a16",null).exports,H={name:"HomeWeekend",props:{list:Array}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weekend-wrapper"},[s("h3",{staticClass:"weekend-title"},[t._v("周末去哪儿")]),t._v(" "),t._l(t.list,function(e){return s("div",{staticClass:"scence-wrapper"},[s("img",{staticClass:"scence-img",attrs:{src:e.imgUrl}}),t._v(" "),s("strong",{staticClass:"scence-name"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"scence-desc"},[t._v(t._s(e.desc))])])}),t._v(" "),t._m(0)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"warning"},[e("i",{staticClass:"iconfont warning-icon"},[this._v("")]),this._v("\n        票面价是指通过景区指定窗口售卖的纸质门票上标注的价格\n    ")])}]};var T=s("VU/8")(H,S,!1,function(t){s("sXA2")},"data-v-1e00674b",null).exports,L=s("mtWM"),F=s.n(L),M={name:"home",components:{HomeHeader:l,HomeSwiper:d,HomeIcons:m,HomeTools:_,HomeActivities:w,HomeHotmenu:b,HomeRecommend:x,HomeFooter:U,HomeWeekend:T},data:function(){return{city:"",swiperList:[],iconList:[],hotmenuList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){var t=this;F.a.get("/api/index.json").then(function(e){var s=(e=e.data).data;"success"===e.ret&&s&&(t.city=s.city,t.swiperList=s.swiperList,t.iconList=s.iconList,t.hotmenuList=s.hotmenuList,t.recommendList=s.recommendList,t.weekendList=s.weekendList)})}},mounted:function(){this.getHomeInfo()}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("home-header",{attrs:{city:t.city}}),t._v(" "),s("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),s("home-icons",{attrs:{list:t.iconList}}),t._v(" "),s("home-tools"),t._v(" "),s("home-activities"),t._v(" "),s("home-hotmenu",{attrs:{list:t.hotmenuList}}),t._v(" "),s("home-recommend",{attrs:{lists:t.recommendList}}),t._v(" "),s("home-weekend",{attrs:{list:t.weekendList}}),t._v(" "),s("home-footer")],1)},staticRenderFns:[]};var z=s("VU/8")(M,R,!1,function(t){s("LkST")},"data-v-79661a5a",null).exports,V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"city-header"},[s("h2",{staticClass:"title"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"iconfont icon"},[t._v("")])]),t._v(" "),s("span",{staticClass:"select-city"},[t._v("城市选择")])],1),t._v(" "),s("div",{staticClass:"switch-area-wrapper"},[s("div",{staticClass:"switch-area clearfix"},t._l(t.tabs,function(e,i){return s("a",{key:i,class:["area-optns",{active:t.currentTab===e}],on:{click:function(s){t.activeTab(e)}}},[t._v("\n                "+t._s(e)+"\n            ")])}))])])},staticRenderFns:[]};var P=s("VU/8")({name:"CityHeader",data:function(){return{currentTab:"境内",tabs:["境内","境外·港澳台"]}},methods:{activeTab:function(t){this.currentTab=t}}},V,!1,function(t){s("rofZ")},"data-v-a4968824",null).exports,A={name:"MenuPanel",props:{col:Number,list:Array},computed:{rowList:function(){var t=this.col,e=this.list,s=[];if(void 0!==e){e.forEach(function(e,i){var n=Math.floor(i/t);s[n]||(s[n]=[]),s[n].push(e)});var i=s.length,n=s[i-1].length;if(n<t)for(var a=0;a<t-n;a++)s[i-1].push({id:"pass"+a,name:void 0});return s}}},methods:{selectCity:function(t){this.$store.dispatch({type:"selectCity",value:t}),this.$router.push("/")}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-panel-wrapper"},t._l(t.rowList,function(e,i){return s("div",{staticClass:"menu-panel"},t._l(e,function(e){return s("a",{key:e.id,staticClass:"menu-panel-optn",on:{click:function(s){t.selectCity(e.name)}}},[t._v("\n            "+t._s(e.name)+"\n        ")])}))}))},staticRenderFns:[]};var I=s("VU/8")(A,B,!1,function(t){s("dl38")},"data-v-a5011334",null).exports,O={name:"CharMenuPanel",props:{list:Array},data:function(){return{col:6}},computed:{rowList:function(){var t=this.col,e=this.list,s=[];if(void 0!==e){e.forEach(function(e,i){var n=Math.floor(i/t);s[n]||(s[n]=[]),s[n].push(e)});var i=s.length,n=s[i-1].length;if(n<t)for(var a=0;a<t-n;a++)s[i-1].push({id:"pass"+a,name:void 0});return s}}},methods:{handleClick:function(t){console.log(1),this.$emit("scrollToChar",t)}}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-panel-wrapper"},t._l(t.rowList,function(e,i){return s("div",{staticClass:"menu-panel"},t._l(e,function(e,n){return s("a",{key:e.id,staticClass:"menu-panel-optn",on:{click:function(e){t.handleClick(i*t.col+n)}}},[t._v("\n            "+t._s(e.name)+"\n        ")])}))}))},staticRenderFns:[]};var q=s("VU/8")(O,G,!1,function(t){s("JNya")},"data-v-e583784e",null).exports,N=s("GQaK"),j={name:"CityPanel",props:{hotCities:Array,cities:Object},computed:{character:function(){var t=[];for(var e in this.cities)t.push({id:e,name:e});return t}},components:{MenuPanel:I,CharMenuPanel:q},updated:function(){var t=this.$refs.wrapper;this.scroll=new N.a(t)},methods:{handleScrollClick:function(t){console.log(t);var e=this.$refs.char[t];console.log(e),this.scroll.scrollToElement(e)}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"wrapper",staticClass:"city-panel"},[s("ul",{staticClass:"city-menu"},[s("li",{staticClass:"menu-item"},[s("h4",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),s("menu-panel",{attrs:{list:t.hotCities,col:3}})],1),t._v(" "),s("li",{staticClass:"menu-item"},[s("h4",{staticClass:"title"},[t._v("字母排序")]),t._v(" "),t.character.length>0?s("char-menu-panel",{staticClass:"character",attrs:{list:t.character},on:{scrollToChar:t.handleScrollClick}}):t._e()],1),t._v(" "),t._l(t.cities,function(e,i){return s("li",{key:i,ref:"char",refInFor:!0,staticClass:"menu-item"},[s("h4",{staticClass:"title"},[t._v(t._s(i))]),t._v(" "),s("menu-panel",{attrs:{list:e,col:4}})],1)})],2)])},staticRenderFns:[]};var X={name:"City",components:{CityHeader:P,CityPanel:s("VU/8")(j,D,!1,function(t){s("iTy7")},"data-v-3c9d4862",null).exports},data:function(){return{panel:[]}},mounted:function(){var t=this;F.a.get("/api/city.json").then(function(e){if((e=e.data).ret){var s=e.data;t.panel=s}})}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"city-wrapper"},[e("city-header"),this._v(" "),e("city-panel",this._b({},"city-panel",this.panel,!1))],1)},staticRenderFns:[]};var W=s("VU/8")(X,K,!1,function(t){s("1m8X")},"data-v-5fc47d71",null).exports,Y={name:"CommonGallery",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",loop:!0,observeParents:!0,observer:!0}}},methods:{handleClick:function(){this.$emit("closeGallery")}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery-container"},[e("div",{staticClass:"bg",on:{click:this.handleClick}}),this._v(" "),e("div",{staticClass:"gallery-wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t){return e("swiper-slide",{key:t},[e("img",{staticClass:"gallery-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var J={name:"DetailBanner",data:function(){return{showGallery:!1,galleryImgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg","http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]}},components:{CommonGallery:s("VU/8")(Y,Z,!1,function(t){s("TY/Y")},"data-v-3fe7a010",null).exports},methods:{handleShowGallery:function(){this.showGallery=!0},handleCloseGallery:function(){this.showGallery=!1}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner-wrapper"},[s("img",{staticClass:"banner-img",attrs:{src:"//img1.qunarzz.com/sight/p0/201212/19/3320e43ab4b9cb0493835fbb.jpg_600x330_984516bb.jpg"}}),t._v(" "),s("div",{staticClass:"swiper-num-wrapper",on:{click:t.handleShowGallery}},[s("i",{staticClass:"swiper-num-icon iconfont"},[t._v("")]),t._v(" "),s("span",{staticClass:"swiper-num"},[t._v("8")])]),t._v(" "),t._m(0),t._v(" "),s("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{imgs:t.galleryImgs},on:{closeGallery:t.handleCloseGallery}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-title-wrapper"},[e("h1",{staticClass:"banner-title"},[this._v("\n             特呈渔岛度假村\n         ")])])}]};var tt={name:"DetailHeader",data:function(){return{showBackBtn:!0,headerOpacity:{opacity:0}}},methods:{showHeader:function(t){this.showBackBtn=t},scrollEvent:function(){var t=document.documentElement.scrollTop;if(t>0){var e=t/160;e=e>1?1:e,this.$set(this.headerOpacity,"opacity",e),this.showHeader(!1)}else this.showHeader(!0)}},activated:function(){window.addEventListener("scroll",this.scrollEvent,!1)},deactivated:function(){window.removeEventListener("scroll",this.scrollEvent,!1)}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return this.showBackBtn?e("div",{staticClass:"header-wrapper backBtn-wrapper"},[e("router-link",{staticClass:"backBtn",attrs:{to:"/"}},[e("span",{staticClass:"backBtn-bg"}),this._v(" "),e("i",{staticClass:"backBtn-arrow iconfont"},[this._v("")])])],1):e("div",{staticClass:"header-wrapper",style:this.headerOpacity},[e("router-link",{staticClass:"back iconfont",attrs:{to:"/"}},[this._v("\n         \n     ")]),this._v(" "),e("h1",{staticClass:"title"},[this._v("特呈渔岛度假村")])],1)},staticRenderFns:[]};var st={name:"Detail",components:{DetailBanner:s("VU/8")(J,Q,!1,function(t){s("2PEK")},"data-v-f83d0e4c",null).exports,DetailHeader:s("VU/8")(tt,et,!1,function(t){s("/Xw4")},"data-v-338b00d8",null).exports},mounted:function(){console.log(this.$route.params.detailId)}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-wrapper"},[e("detail-banner"),this._v(" "),e("keep-alive",[e("detail-header")],1)],1)},staticRenderFns:[]};var nt=s("VU/8")(st,it,!1,function(t){s("9ewA")},"data-v-5bd41219",null).exports;i.a.use(r.a);var at=new r.a({routes:[{path:"/",name:"Home",component:z},{path:"/city",name:"City",component:W},{path:"/detail",name:"Detail",component:nt}],scrollBehavior:function(t,e,s){return{x:0,y:0}}}),rt=s("NYxO");i.a.use(rt.a);var ot=new rt.a.Store({state:{curCity:"湛江"},actions:{selectCity:function(t,e){t.commit("selectCity",e.value)}},mutations:{selectCity:function(t,e){t.curCity=e}}}),ct=s("v5o6"),lt=s.n(ct),ut=s("F3EI"),pt=s.n(ut);s("M6Sr"),s("9n10"),s("TzC8"),s("slWF"),s("v2ns");i.a.config.productionTip=!1,lt.a.attach(document.body),i.a.use(pt.a),new i.a({el:"#app",store:ot,router:at,components:{App:a},template:"<App/>"})},NRGO:function(t,e){},T8WM:function(t,e){},"TY/Y":function(t,e){},TzC8:function(t,e){},XEbq:function(t,e){},amub:function(t,e){},dl38:function(t,e){},h5Cy:function(t,e){},iTy7:function(t,e){},pYmz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=s("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=s("VU/8")(n,a,!1,null,null,null);e.default=r.exports},rofZ:function(t,e){},sXA2:function(t,e){},slWF:function(t,e){},v2ns:function(t,e){},vsin:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4cf071d65483e42e4429.js.map