(this["webpackJsonpvillager-vibes"]=this["webpackJsonpvillager-vibes"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(17),l=c.n(n),a=(c(24),c(8)),r=c(2),j=(c(25),function(){return fetch("https://acnhapi.com/v1a/villagers/").then((function(e){return e.json()}))}),d=(c(26),c(7)),b=c(0),h=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(d.c,{exact:!0,to:"/",className:"nav-home",children:"Home"}),Object(b.jsx)(d.c,{to:"/wishlist",className:"nav-wishlist",children:"Wishlist"})]})},o=(c(36),function(e){var t=e.allVillagers,c=e.setDisplayedVillagers,s=Object(i.useState)("all"),n=Object(a.a)(s,2),l=n[0],r=n[1],j=t.reduce((function(e,t){return e.includes(t.species)||e.push(t.species),e.sort()}),[]).map((function(e){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",className:"radio-bubble",id:"".concat(e),checked:l===e,onChange:function(e){return d(e)}}),"".concat(e)]},e)})),d=function(e){var i=t.filter((function(t){return t.species===e.target.id||"all"===e.target.id}));r(e.target.id),c(i)};return Object(b.jsxs)("section",{className:"filter-container",children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",className:"radio-bubble",id:"all",checked:"all"===l,onChange:function(e){return d(e)}}),"All Villagers"]}),j]})}),u=(c(37),c(38),function(e){var t=e.id,c=e.img,i=e.altText;return Object(b.jsx)(d.b,{to:"/villagers/".concat(t),children:Object(b.jsx)("img",{src:c,id:t,alt:i})})}),O=function(e){var t=e.villagers,c=t.map((function(e){return Object(b.jsx)(u,{id:e.id,img:e.icon_uri,altText:e.name["name-USen"]},e.id)})),i=!t.length&&Object(b.jsx)("h2",{children:"Loading villagers..."});return Object(b.jsxs)("section",{className:"icon-container",children:[i,c]})},x=c(19),g=(c(39),function(e){var t=e.data,c=e.wishlist,s=e.setWishlist,n=Object(i.useState)({}),l=Object(a.a)(n,2),r=l[0],j=l[1],h={backgroundColor:t["bubble-color"],color:t["text-color"]};Object(i.useEffect)((function(){t.id!==r.id&&j(t)}),[r,t]);return Object(b.jsxs)("section",{className:"villager-details",children:[Object(b.jsx)("img",{src:"https://acnhapi.com/v1/images/villagers/".concat(t.id),alt:"",className:"detail-photo"}),Object(b.jsx)("h3",{className:"details-name",style:h,children:t.name["name-USen"]}),Object(b.jsxs)("dl",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("dt",{children:"Species"}),Object(b.jsx)("dd",{children:t.species})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("dt",{children:"Birthday"}),Object(b.jsx)("dd",{children:t["birthday-string"]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("dt",{children:"Gender"}),Object(b.jsx)("dd",{children:t.gender})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("dt",{children:"Hobby"}),Object(b.jsx)("dd",{children:t.hobby})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("dt",{children:"Saying"}),Object(b.jsx)("dd",{children:t.saying})]})]}),Object(b.jsxs)("div",{className:"details-buttons",children:[Object(b.jsx)(d.b,{to:"/",className:"details-back-btn",children:"Ew, NO!"}),Object(b.jsx)(d.b,{to:"/wishlist",className:"add-wishlist-btn",id:t.id,onClick:function(){!c.includes(r)&&c.length<10&&s([r].concat(Object(x.a)(c)))},children:"They're my FAVE!"})]})]})}),f=(c(40),function(e){var t=e.wishlist;return Object(b.jsxs)("section",{className:"wishlist",children:[Object(b.jsx)("h2",{className:"wishlist-title",children:"The Top 10 BEST Villagers:"}),Object(b.jsx)(O,{villagers:t})]})}),m=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),l=Object(a.a)(n,2),d=l[0],u=l[1],x=Object(i.useState)([]),m=Object(a.a)(x,2),v=m[0],p=m[1];return Object(i.useEffect)((function(){j().then((function(e){s(e),u(e)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:"Villager Vibes"}),Object(b.jsx)(h,{})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/villagers/:id",render:function(e){var t=e.match,i=c.find((function(e){return e.id===parseInt(t.params.id)}));return i?Object(b.jsx)(g,{data:i,setWishlist:p,wishlist:v}):Object(b.jsx)("h2",{children:"That villager does not exist!"})}}),Object(b.jsx)(r.a,{path:"/wishlist",children:Object(b.jsx)(f,{wishlist:v})}),Object(b.jsxs)(r.a,{path:"/",children:[Object(b.jsx)(o,{setDisplayedVillagers:u,allVillagers:c}),Object(b.jsx)(O,{villagers:d})]})]})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),i(e),s(e),n(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(m,{})})}),document.getElementById("root")),v()}},[[41,1,2]]]);
//# sourceMappingURL=main.43b46ac8.chunk.js.map