"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{847:function(e,t,n){n.r(t);var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),o=n(689),u=n(87),l=n(323),p=n(184);t.default=function(){var e,t,n=(0,i.useState)({}),s=(0,a.Z)(n,2),d=s[0],h=s[1],f=(0,o.UO)().movieId,v=(0,o.TH)(),x=(0,i.useRef)(null!==(e=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Y)(f);case 2:t=e.sent,console.log(t),console.log(t.title),console.log(t.genres),h(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.rU,{to:x.current,children:"Go back"}),(0,p.jsxs)("h1",{children:[d.title,"(",new Date(d.release_date).getFullYear(),")"]}),(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(d.poster_path),alt:d.title}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*d.vote_average),"%"]}),(0,p.jsxs)("p",{children:["Overview ",(0,p.jsx)("span",{children:d.overview})]}),(0,p.jsx)("h2",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(o.j3,{})})]})}},323:function(e,t,n){n.d(t,{T:function(){return o},Y:function(){return l}});var r=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="51114562faac57108ae3113fba230ec4";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=847.422e171e.chunk.js.map