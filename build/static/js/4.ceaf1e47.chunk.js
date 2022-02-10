(this["webpackJsonprickandmorty-react"]=this["webpackJsonprickandmorty-react"]||[]).push([[4],{57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(81),s=n(33),o=n(35),i=n.n(o),u=n(36),l=n(39),m=n(11),f=function(e){return e.characters},d=function(e){return e.charactersNumber},p=function(e){return e.locations},b=function(e){return e.episodes},h=function(e){return e.isLoading},v=n(2),E=n(84),g="https://rickandmortyapi.com/api",j=n(44),N=function(e,t){return Object(u.a)(i.a.mark((function n(){var a,r,c,s,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(g).concat("/character").concat(e?"?".concat(j.stringify(e)):""),{signal:t.signal,method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 3:if(a=n.sent,r=a.ok,c=a.status,r){n.next=15;break}return n.next=8,a.json();case 8:s=n.sent,console.error(s),n.t0=c,n.next=404===n.t0?13:14;break;case 13:return n.abrupt("return",{message:"No encontramos personajes."});case 14:return n.abrupt("return",{message:"Algo sali\xf3 mal, int\xe9ntelo de nuevo."});case 15:return n.next=17,a.json();case 17:return o=n.sent,n.abrupt("return",o);case 21:if(n.prev=21,n.t1=n.catch(0),"AbortError"===n.t1.name){n.next=25;break}throw n.t1;case 25:case"end":return n.stop()}}),n,null,[[0,21]])})))},O=function(e,t){return e?{name:e,page:t}:void 0},k=Object(E.a)(v.a,(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return N(O(e,n),t)()})),x=Object(E.a)(v.b,(function(e,t){return N(O(e),t)()})),w=Object(E.a)(v.d,(function(e,t){return function(e,t){return Object(u.a)(i.a.mark((function n(){var a,r,c,s,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(g).concat("/location").concat(e?"?".concat(j.stringify(e)):""),{signal:t.signal,method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 3:if(a=n.sent,r=a.ok,c=a.status,r){n.next=15;break}return n.next=8,a.json();case 8:s=n.sent,console.error(s),n.t0=c,n.next=404===n.t0?13:14;break;case 13:return n.abrupt("return",{message:"No encontramos locations."});case 14:return n.abrupt("return",{message:"Algo sali\xf3 mal, int\xe9ntelo de nuevo."});case 15:return n.next=17,a.json();case 17:return o=n.sent,n.abrupt("return",o);case 21:if(n.prev=21,n.t1=n.catch(0),"AbortError"===n.t1.name){n.next=25;break}throw n.t1;case 25:case"end":return n.stop()}}),n,null,[[0,21]])})))}(O(e),t)()})),y=Object(E.a)(v.c,(function(e,t){return function(e,t){return Object(u.a)(i.a.mark((function n(){var a,r,c,s,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(g).concat("/episode").concat(e?"?".concat(j.stringify(e)):""),{signal:t.signal,method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 3:if(a=n.sent,r=a.ok,c=a.status,r){n.next=15;break}return n.next=8,a.json();case 8:s=n.sent,console.error(s),n.t0=c,n.next=404===n.t0?13:14;break;case 13:return n.abrupt("return",{message:"No encontramos episodios."});case 14:return n.abrupt("return",{message:"Algo sali\xf3 mal, int\xe9ntelo de nuevo."});case 15:return n.next=17,a.json();case 17:return o=n.sent,n.abrupt("return",o);case 21:if(n.prev=21,n.t1=n.catch(0),"AbortError"===n.t1.name){n.next=25;break}throw n.t1;case 25:case"end":return n.stop()}}),n,null,[[0,21]])})))}(O(e),t)()})),C=Object(E.a)(v.e,(function(e){return e})),L=(n(57),function(e){var t=e.text;return r.a.createElement("div",{className:"conatainerMessage"},t)});L.defaultProps={text:""};var P=L,S=(n(58),function(e){var t=e.type,n=void 0===t?"submit":t,a=e.size,c=e.alt,s=void 0===c?"":c,o=e.content,i=void 0===o?"":o,u=e.onClick;return r.a.createElement("button",{onClick:u,className:"mainButton ".concat(a||""),type:n,alt:s},i)});n(59);function z(e){var t=e.status;return r.a.createElement("span",{className:"dot ".concat(t)})}n(60);var A=function(e){var t=e.character,n=e.setCharacter,c=t.image,s=t.name,o=t.status,i=t.species,u=Object(a.useCallback)((function(e){e.preventDefault(),n(t)}),[n,t]);return r.a.createElement("div",{className:"containerCard"},r.a.createElement("img",{className:"containerCard-picture",src:c,alt:t.name}),r.a.createElement("div",{className:"containerCard-detail"},r.a.createElement("div",{className:"containerCard-detail-name"},s),r.a.createElement("div",{className:"containerCard-detail-status"},r.a.createElement(z,{status:o}),r.a.createElement("span",{className:"containerCard-detail-status-text"},o)),r.a.createElement("div",{className:"containerCard-detail-species"},i),r.a.createElement("div",{className:"containerCard-detail-button"},r.a.createElement(S,{size:"small",content:"Detalle",type:"none",onClick:u}))))};A.defaultProps={character:{}};var D=A,T=(n(61),function(e){var t=e.character,n=t.origin,a=t.location,c=t.name,s=t.image,o=t.episode,i=t.gender;return r.a.createElement("div",{className:"containerDetail"},t&&Object.keys(t).length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"containerDetail-title"},"Detalle"),r.a.createElement("img",{className:"containerDetail-picture",src:s,alt:c}),r.a.createElement("div",{className:"containerDetail-name"}," ",t&&t.name," "),r.a.createElement("ul",{className:"containerDetail-list"},r.a.createElement("li",null,i),r.a.createElement("li",null,n&&n.name),r.a.createElement("li",null,a&&a.name),r.a.createElement("li",null,"Number of episodes: ",o&&o.length))))});T.defaultProps={character:{}};var B=T,F=(n(62),function(e){var t=e.charactersNumber,n=e.locationsNumber,c=e.episodesNumber,s=e.fetchCharactersNumber,o=e.fetchEpisode,m=e.fetchLocations,f=Object(a.useState)(),d=Object(l.a)(f,2),p=d[0],b=d[1],h=Object(a.useMemo)((function(){return new window.AbortController}),[]);Object(a.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,Promise.all([s("",h),m("",h),o("",h)]);case 3:return e.next=5,b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h,s,o,m]),Object(a.useEffect)((function(){}),[t,n,c]);var v=function(e){return e&&e.info?e.info.count:""};return r.a.createElement("div",{className:"containerNumbers"},!p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"containerNumbers-text"},"La serie en n\xfameros:"),r.a.createElement("div",{className:"containerNumbers-text"},v(c)," N\xfamero de episodios"),r.a.createElement("div",{className:"containerNumbers-text"},v(n)," N\xfamero de locations"),r.a.createElement("div",{className:"containerNumbers-text"},v(t)," N\xfamero de personajes")))});F.defaultProps={charactersNumbe:{},locationsNumber:{},episodesNumber:{}};var G=Object(m.b)((function(e){return{charactersNumber:d(e),locationsNumber:p(e),episodesNumber:b(e)}}),{fetchCharactersNumber:x,fetchEpisode:y,fetchLocations:w})(Object(a.memo)(F));n(63);function M(e){var t=e.page,n=e.pagination,a=e.setPage,c=function(){return t===(n&&n.pages)};return r.a.createElement("div",{className:"containerPagination"},r.a.createElement(S,{size:"".concat(1===t?"small_disable":""),content:"Anterior",type:"none",onClick:function(){return t>1&&a(t-1)}}),r.a.createElement("span",{className:"containerPagination-page"}," ",t," de ",n&&n.pages," "),r.a.createElement(S,{size:"".concat(c()?"small_disable":""),content:"Siguiente",type:"none",onClick:function(){return!c()&&a(t+1)}}))}n(64);var R=function(e){var t=e.characters,n=e.fetchCharacters,c=e.loading,s=e.location,o=e.isLoading,m=new URLSearchParams(s.search).get("search"),f=Object(a.useMemo)((function(){return new window.AbortController}),[]),d=Object(a.useState)(t&&t.results),p=Object(l.a)(d,2),b=p[0],h=p[1],v=Object(a.useState)(),E=Object(l.a)(v,2),g=E[0],j=E[1],N=Object(a.useState)(),O=Object(l.a)(N,2),k=O[0],x=O[1],w=Object(a.useState)(),y=Object(l.a)(w,2),C=y[0],L=y[1],S=Object(a.useState)(1),z=Object(l.a)(S,2),A=z[0],T=z[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,n(m,f,1);case 3:return e.next=5,c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m,c,f,n]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,n(m,f,A);case 3:return e.next=5,c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A]),Object(a.useEffect)((function(){t&&t.results?(h(t.results),L(t.info)):(h([]),x(t.message))}),[h,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("div",{className:"containerCharacters"},r.a.createElement("div",{className:"listCharacters"},b&&b.length?b.map((function(e,t){return r.a.createElement(D,{key:t,setCharacter:j,character:e})})):r.a.createElement(P,{show:!o,text:k}),r.a.createElement(M,{page:A,setPage:T,pagination:C})),r.a.createElement(B,{character:g})))};R.defaultProps={characters:[],isLoading:!1};var V,J=Object(m.b)((function(e){return{characters:f(e),isLoading:h(e)}}),{loading:C,fetchCharacters:k})(Object(a.memo)(R)),U=(n(65),n(66),function(e){var t=e.reference,n=void 0===t?"":t,a=e.defaultValue,c=void 0===a?"":a,s=e.placeholder,o=void 0===s?"":s,i=e.type,u=void 0===i?"":i;return r.a.createElement("input",{className:"inputText",ref:n,defaultValue:c,placeholder:o,type:u})}),_=n(67),H=n(68).a.div(V||(V=Object(_.a)(["\n  margin: auto;\n\n  width: ",";\n  height: ",";\n  margin: auto;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1s infinite ease-in-out;\n  animation: sk-scaleout 1s infinite ease-in-out;\n\n  @-webkit-keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      opacity: 0;\n    }\n  }\n\n  @keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 0;\n    }\n  }\n"])),(function(e){return"".concat(e.size,"px")}),(function(e){return"".concat(e.size,"px")})),q=function(e){var t=e.size;return r.a.createElement(H,{size:t})},I=Object(m.b)((function(e){return{isLoading:h(e)}}),{})(Object(s.f)((function(e){var t=Object(a.useRef)(""),n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],i=new URLSearchParams(e.location.search).get("search"),u=Object(a.useCallback)((function(t){t.preventDefault();var n=Object(l.a)(t.target.children,1)[0];e.history.push({pathname:"/",search:"search=".concat(n.value),state:n.value})}),[e.history]);return Object(a.useEffect)((function(){o(i),t.current.focus()}),[i]),r.a.createElement("form",{className:"searchBarContainer",onSubmit:u},r.a.createElement(U,{defaultValue:s&&""!==s?s:"",reference:t,placeholder:"",type:"text"}),r.a.createElement(S,{type:"submit",alt:"Buscar",content:e.isLoading?r.a.createElement(q,{size:20}):"Buscar"}))})));n(79);function K(){return r.a.createElement("div",{className:"container-header"},"Header..")}n(80);var Q=function(e){return r.a.createElement("div",{className:"mainLayoutContainer"},r.a.createElement(K,null),r.a.createElement("div",{className:"content"},r.a.createElement(I,null),r.a.createElement("div",{className:"children"},e.children)))};t.default=Object(a.memo)((function(){return r.a.createElement(c.a,null,r.a.createElement(Q,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:J}))))}))}}]);
//# sourceMappingURL=4.ceaf1e47.chunk.js.map