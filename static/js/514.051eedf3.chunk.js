"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{514:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,c,o,i,s,u,p,l,d,x,h,f,g,v=t(861),Z=t(439),b=t(757),w=t.n(b),k=t(791),m=t(689),y=t(323),j=t(585),P=t(168),_=t(444),z=(0,_.ZP)("div")(r||(r=(0,P.Z)(["\n  display: flex;\n  padding: 20px;\n  gap: 50px;\n  justify-content: center;\n  background-color: grey;\n"]))),S=(0,_.ZP)("img")(a||(a=(0,P.Z)(["\n  display: block;\n"]))),U=(0,_.ZP)("div")(c||(c=(0,P.Z)(["\n  padding: 20px;\n  border: 2px solid black;\n  width: 600px;\n  background-color: white;\n"]))),C=(0,_.ZP)("h1")(o||(o=(0,P.Z)(["\n  text-align: center;\n  font-size: 35px;\n"]))),R=(0,_.ZP)("p")(i||(i=(0,P.Z)(["\n  font-size: 25px;\n"]))),D=(0,_.ZP)("h2")(s||(s=(0,P.Z)(["\n  font-size: 25px;\n"]))),F=(0,_.ZP)("p")(u||(u=(0,P.Z)(["\n  font-size: 20px;\n"]))),H=(0,_.ZP)("h2")(p||(p=(0,P.Z)(["\n  font-size: 25px;\n"]))),O=(0,_.ZP)("p")(l||(l=(0,P.Z)(["\n  font-size: 20px;\n"]))),Y=t(184),A=function(n){var e,t=n.movie;return e=t.poster_path?"https://image.tmdb.org/t/p/w400/".concat(t.poster_path):"https://www.wallpaper-box.com/smartphone/wp-content/uploads/2015/01/Abstract-Connected-Lines-3D-Render-iPhone-6-Plus-HD-Wallpaper.jpg",(0,Y.jsxs)(z,{children:[(0,Y.jsx)(S,{src:e,width:"400",alt:t.title}),(0,Y.jsxs)(U,{children:[(0,Y.jsxs)(C,{children:[t.title,"(",new Date(t.release_date).getFullYear(),")"]}),(0,Y.jsxs)(R,{children:["User Score: ",Math.round(10*t.vote_average),"%"]}),(0,Y.jsx)(D,{children:"Overview"}),(0,Y.jsx)(F,{children:t.overview}),(0,Y.jsx)(H,{children:"Gengres"}),(0,Y.jsx)(O,{children:t.genres.map((function(n){return n.name})).join(", ")})]})]})},G=t(87),L=(0,_.ZP)("div")(d||(d=(0,P.Z)(["\n  padding: 20px;\n"]))),T=(0,_.ZP)(G.rU)(x||(x=(0,P.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  border: 2px solid black;\n  background-color: grey;\n  &:hover,\n  :focus {\n    background-color: white;\n    color: black;\n    scale: calc(1.03);\n    box-shadow: 0px 0px 15px 6px black;\n  }\n"]))),q=(0,_.ZP)("div")(h||(h=(0,P.Z)(["\n  padding: 50px;\n"]))),E=(0,_.ZP)("h2")(f||(f=(0,P.Z)(["\n  margin-top: 0;\n  font-size: 25px;\n"]))),I=(0,_.ZP)(G.rU)(g||(g=(0,P.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n  &:focus,\n  :hover {\n    color: white;\n    background-color: grey;\n    scale: calc(1.03);\n    box-shadow: 0px 0px 15px 6px black;\n  }\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n"]))),M=function(){var n,e,t=(0,k.useState)({}),r=(0,Z.Z)(t,2),a=r[0],c=r[1],o=(0,k.useState)(null),i=(0,Z.Z)(o,2),s=i[0],u=i[1],p=(0,m.UO)().movieId,l=(0,m.TH)(),d=(0,k.useRef)(null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,k.useEffect)((function(){function n(){return(n=(0,v.Z)(w().mark((function n(){var e;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.Y5)(p);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p]);var x=Object.keys(a).length;return(0,Y.jsxs)(Y.Fragment,{children:[s&&(0,Y.jsx)("div",{children:"Something wrong"}),x&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(L,{children:(0,Y.jsx)(T,{to:d.current,children:"Go back"})}),(0,Y.jsx)(A,{movie:a}),(0,Y.jsxs)(q,{children:[(0,Y.jsx)(E,{children:"Additional information"}),(0,Y.jsx)(I,{to:"cast",children:"Cast"}),(0,Y.jsx)(I,{to:"reviews",children:"Reviews"})]})]}),(0,Y.jsx)(k.Suspense,{fallback:(0,Y.jsx)(j.a,{}),children:(0,Y.jsx)(m.j3,{})})]})}},323:function(n,e,t){t.d(e,{Hx:function(){return h},Tg:function(){return s},Y5:function(){return p},mv:function(){return g},uV:function(){return d}});var r=t(861),a=t(757),c=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="51114562faac57108ae3113fba230ec4";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=514.051eedf3.chunk.js.map