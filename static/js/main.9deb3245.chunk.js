(this.webpackJsonpdreamcities=this.webpackJsonpdreamcities||[]).push([[0],{12:function(e,t,i){e.exports={item:"citiesItem_item__19gZf",image:"citiesItem_image__2913h",content:"citiesItem_content__3ezYx",actions:"citiesItem_actions__1hV6X"}},13:function(e,t,i){e.exports={header:"mainNavigation_header__2AgBL",logo:"mainNavigation_logo__dQDGO",active:"mainNavigation_active__3T0MB",badge:"mainNavigation_badge__2O_AL"}},20:function(e,t,i){e.exports={card:"card_card__3hh_T"}},22:function(e,t,i){e.exports={list:"citiesList_list__1D0nP"}},23:function(e,t,i){e.exports={main:"layout_main__2jUWC"}},29:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i(19),r=i.n(n),s=(i(29),i(2)),a=i(20),o=i.n(a),d=i(0),j=function(e){return Object(d.jsx)("div",{className:o.a.card,children:e.children})},l=i(9),b=i.n(l),u=function(e){var t=e.onAddCity,i=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)();return Object(d.jsx)(j,{children:Object(d.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault();var c={tilte:i.current.value,image:n.current.value,address:r.current.value,description:s.current.value};t(c)},children:[Object(d.jsxs)("div",{className:b.a.control,children:[Object(d.jsx)("label",{htmlFor:"title",children:"Add Title"}),Object(d.jsx)("input",{type:"text",required:!0,id:"title",ref:i})]}),Object(d.jsxs)("div",{className:b.a.control,children:[Object(d.jsx)("label",{htmlFor:"image",children:"Add Image"}),Object(d.jsx)("input",{type:"url",required:!0,id:"image",ref:n})]}),Object(d.jsxs)("div",{className:b.a.control,children:[Object(d.jsx)("label",{htmlFor:"address",children:"Add Address"}),Object(d.jsx)("input",{type:"text",required:!0,id:"address",ref:r})]}),Object(d.jsxs)("div",{className:b.a.control,children:[Object(d.jsx)("label",{htmlFor:"description",children:"Add Description"}),Object(d.jsx)("textarea",{type:"text",required:!0,id:"description",ref:s,rows:"5"})]}),Object(d.jsx)("div",{className:b.a.actions,children:Object(d.jsx)("button",{children:"Add City"})})]})})},O=function(){var e=Object(s.f)();return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Add City"}),Object(d.jsx)(u,{onAddCity:function(t){fetch("https://dreamcities-d9a46-default-rtdb.firebaseio.com/cities.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then((function(){e.replace("/")}))}})]})},h=i(24),x=i(11),f=Object(c.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},isFavorite:function(e){}}),m=function(e){var t=e.children,i=Object(c.useState)([]),n=Object(x.a)(i,2),r=n[0],s=n[1],a={favorites:r,totalFavorites:r.length,addFavorite:function(e){s((function(t){return t.concat(e)}))},removeFavorite:function(e){s((function(t){return t.filter((function(t){return e!==t.id}))}))},isFavorite:function(e){return r.some((function(t){return e===t.id}))}};return Object(c.useEffect)((function(){var e=localStorage.getItem("usersFavorites");e&&s(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("usersFavorites",JSON.stringify(r))})),Object(d.jsx)(f.Provider,{value:a,children:t})},v=i(12),_=i.n(v),p=function(e){var t=e.id,i=e.image,n=e.title,r=e.address,s=e.description,a=Object(c.useContext)(f),o=a.isFavorite(t);return Object(d.jsx)("li",{className:_.a.item,children:Object(d.jsxs)(j,{children:[Object(d.jsx)("div",{className:_.a.image,children:Object(d.jsx)("img",{src:i,alt:n})}),Object(d.jsxs)("div",{className:_.a.content,children:[Object(d.jsx)("h3",{children:n}),Object(d.jsx)("address",{children:r}),Object(d.jsx)("p",{children:s})]}),Object(d.jsx)("div",{className:_.a.actions,children:Object(d.jsx)("button",{onClick:function(){o?a.removeFavorite(t):a.addFavorite({id:t,image:i,title:n,address:r,description:s})},children:o?"Remove from Favorites":"To Favorites"})})]})})},g=i(22),y=i.n(g),F=function(e){return Object(d.jsx)("ul",{className:y.a.list,children:e.cities.map((function(e){return Object(d.jsx)(p,{id:e.id,title:e.title,image:e.image,address:e.address,description:e.description},e.id)}))})},N=function(){var e=Object(c.useState)(!0),t=Object(x.a)(e,2),i=t[0],n=t[1],r=Object(c.useState)([]),s=Object(x.a)(r,2),a=s[0],o=s[1];return Object(c.useEffect)((function(){n(!0),fetch("https://dreamcities-d9a46-default-rtdb.firebaseio.com/cities.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var i in e){var c=Object(h.a)({id:i},e[i]);t.push(c)}n(!1),o(t)}))}),[]),i?Object(d.jsx)("p",{children:"LOADING...."}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"All Cities"}),Object(d.jsx)(F,{cities:a})]})},C=function(){var e,t=Object(c.useContext)(f);return e=0===t.totalFavorites?Object(d.jsx)("p",{children:"You do not have favorite city yet"}):Object(d.jsx)(F,{cities:t.favorites}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:"My Favorites"}),e]})},A=(i(36),i(23)),I=i.n(A),S=i(7),w=i(13),D=i.n(w),T=function(){var e=Object(c.useContext)(f);return Object(d.jsxs)("header",{className:D.a.header,children:[Object(d.jsx)(S.b,{to:"/",className:D.a.logo,children:"DreamCities"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(S.b,{to:"/",children:"AllCities"})}),Object(d.jsx)("li",{children:Object(d.jsx)(S.b,{to:"/add-new-city",children:"Add new city"})}),Object(d.jsx)("li",{children:Object(d.jsxs)(S.b,{to:"/favorites",children:["My favorites",Object(d.jsx)("span",{className:D.a.badge,children:e.totalFavorites})]})})]})})]})},J=function(e){var t=e.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)(T,{}),Object(d.jsx)("main",{className:I.a.main,children:t})]})};var R=function(){return Object(d.jsx)(J,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/",exact:!0,children:Object(d.jsx)(N,{})}),Object(d.jsx)(s.a,{path:"/add-new-city",children:Object(d.jsx)(O,{})}),Object(d.jsx)(s.a,{path:"/favorites",children:Object(d.jsx)(C,{})})]})})};r.a.render(Object(d.jsx)(m,{children:Object(d.jsx)(S.a,{children:Object(d.jsx)(R,{})})}),document.getElementById("root"))},9:function(e,t,i){e.exports={form:"newCityForm_form__3Tykv",control:"newCityForm_control__3Xbn1",actions:"newCityForm_actions__354nI"}}},[[37,1,2]]]);
//# sourceMappingURL=main.9deb3245.chunk.js.map