"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{526:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,o,u=e(861),i=e(439),s=e(757),p=e.n(s),l=e(791),f=e(689),h=e(323),d=e(14),x=e(168),g=e(444),w=e(87),v=(0,g.ZP)("h1")(r||(r=(0,x.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 40px;\n"]))),m=(0,g.ZP)("div")(a||(a=(0,x.Z)(["\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  background-color: grey;\n"]))),y=(0,g.ZP)("h2")(c||(c=(0,x.Z)(["\n  text-align: center;\n  font-size: 25px;\n  color: white;\n  &:hover {\n    color: #e3811f;\n    text-shadow: 0px 0px 20px 8px black;\n  }\n"]))),b=(0,g.ZP)(w.rU)(o||(o=(0,x.Z)(["\n  width: 400px;\n  background-color: grey;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  text-decoration: none;\n  margin-bottom: 40px;\n  &:hover {\n    scale: calc(1.03);\n    box-shadow: 0px 0px 20px 8px black;\n  }\n  &:nth-last-child(-n + 4) {\n    margin-bottom: 0;\n  }\n"]))),k=e(184),Z=function(){var n=(0,l.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1];(0,l.useEffect)((function(){function n(){return(n=(0,u.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Tg)();case 3:t=n.sent,r(t.results),n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",d.Am.error("Something wrong, try again please"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var a=(0,f.TH)();return(0,k.jsxs)("div",{children:[(0,k.jsx)(v,{children:"Trending today"}),(0,k.jsx)(m,{children:e.map((function(n){var t;return t=n.poster_path?"https://image.tmdb.org/t/p/w400/".concat(n.poster_path):"https://www.wallpaper-box.com/smartphone/wp-content/uploads/2015/01/Abstract-Connected-Lines-3D-Render-iPhone-6-Plus-HD-Wallpaper.jpg",(0,k.jsxs)(b,{to:"movies/".concat(n.id),state:{from:a},children:[(0,k.jsx)("img",{src:t,width:"400",alt:n.title}),(0,k.jsx)(y,{children:n.title})]},n.id)}))}),(0,k.jsx)(d.x7,{toastOptions:{duration:2500}})]})}},323:function(n,t,e){e.d(t,{Hx:function(){return d},Tg:function(){return i},Y5:function(){return p},mv:function(){return g},uV:function(){return f}});var r=e(861),a=e(757),c=e.n(a),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="51114562faac57108ae3113fba230ec4";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=526.edb7e096.chunk.js.map