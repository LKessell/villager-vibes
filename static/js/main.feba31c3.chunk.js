(this["webpackJsonpvillager-vibes"]=this["webpackJsonpvillager-vibes"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(17),l=c.n(n),a=(c(24),c(11)),r=c(2),j=(c(25),function(){return fetch("https://acnhapi.com/v1a/villagers/").then((function(e){return e.json()}))}),d=(c(26),c(27),c(7)),h=c(0),b=function(e){var t=e.id,c=e.img,i=e.altText;return Object(h.jsx)(d.b,{to:"/villagers/".concat(t),children:Object(h.jsx)("img",{src:c,id:t,alt:i})})},o=function(e){var t=e.allVillagers.map((function(e){return Object(h.jsx)(b,{id:e.id,img:e.icon_uri,altText:e.name["name-USen"]},e.id)}));return Object(h.jsx)("section",{className:"icon-container",children:t})},O=c(19),u=(c(37),function(e){var t=e.data,c=e.wishlist,s=e.setWishlist,n=Object(i.useState)({}),l=Object(a.a)(n,2),r=l[0],j=l[1],b={backgroundColor:t["bubble-color"],color:t["text-color"]};Object(i.useEffect)((function(){t.id!==r.id&&j(t)}),[r,t]);return Object(h.jsxs)("section",{className:"villager-details",children:[Object(h.jsx)("img",{src:"https://acnhapi.com/v1/images/villagers/".concat(t.id),alt:"",className:"detail-photo"}),Object(h.jsx)("h3",{className:"details-name",style:b,children:t.name["name-USen"]}),Object(h.jsxs)("dl",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("dt",{children:"Species"}),Object(h.jsx)("dd",{children:t.species})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("dt",{children:"Birthday"}),Object(h.jsx)("dd",{children:t["birthday-string"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("dt",{children:"Gender"}),Object(h.jsx)("dd",{children:t.gender})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("dt",{children:"Hobby"}),Object(h.jsx)("dd",{children:t.hobby})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("dt",{children:"Saying"}),Object(h.jsx)("dd",{children:t.saying})]})]}),Object(h.jsxs)("div",{className:"details-buttons",children:[Object(h.jsx)(d.b,{to:"/",className:"details-back-btn",children:"Ew, NO!"}),Object(h.jsx)(d.b,{to:"/wishlist",className:"add-wishlist-btn",id:t.id,onClick:function(){!c.includes(r)&&c.length<10&&s([r].concat(Object(O.a)(c)))},children:"They're my FAVE!"})]})]})}),x=(c(38),function(e){var t=e.wishlist;return Object(h.jsxs)("section",{className:"wishlist",children:[Object(h.jsx)("h2",{className:"wishlist-title",children:"The Top 10 BEST Villagers:"}),Object(h.jsx)(o,{allVillagers:t})]})}),f=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),l=Object(a.a)(n,2),d=l[0],b=l[1];return Object(i.useEffect)((function(){j().then((function(e){return s(e)}))}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("h1",{children:"Villager Vibes"})}),Object(h.jsx)("main",{children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{path:"/villagers/:id",render:function(e){var t=e.match,i=c.find((function(e){return e.id===parseInt(t.params.id)}));return i?Object(h.jsx)(u,{data:i,setWishlist:b,wishlist:d}):Object(h.jsx)("h2",{children:"That villager does not exist!"})}}),Object(h.jsx)(r.a,{path:"/wishlist",children:Object(h.jsx)(x,{wishlist:d})}),Object(h.jsx)(r.a,{path:"/",children:Object(h.jsx)(o,{allVillagers:c})})]})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),i(e),s(e),n(e),l(e)}))};l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(d.a,{children:Object(h.jsx)(f,{})})}),document.getElementById("root")),g()}},[[39,1,2]]]);
//# sourceMappingURL=main.feba31c3.chunk.js.map