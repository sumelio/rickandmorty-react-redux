(this["webpackJsonprickandmorty-react"]=this["webpackJsonprickandmorty-react"]||[]).push([[4],{57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(81),s=a(33),o=a(35),i=a.n(o),u=a(36),l=a(39),m=a(11),f=function(e){return e.characters},d=function(e){return e.charactersNumber},p=function(e){return e.locations},b=function(e){return e.episodes},h=function(e){return e.isLoading},v=a(2),E=a(84),g="https://rickandmortyapi.com/api",j=a(44),N=function(e,t){return Object(u.a)(i.a.mark((function a(){var n,r,c,s,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(g).concat("/character").concat(e?"?".concat(j.stringify(e)):""),{signal:t.signal,method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 3:if(n=a.sent,r=n.ok,c=n.status,r){a.next=15;break}return a.next=8,n.json();case 8:s=a.sent,console.error(s),a.t0=c,a.next=404===a.t0?13:14;break;case 13:return a.abrupt("return",{message:"No encontramos personajes."});case 14:return a.abrupt("return",{message:"Algo sali\xf3 mal, int\xe9ntelo de nuevo."});case 15:return a.next=17,n.json();case 17:return o=a.sent,a.abrupt("return",o);case 21:if(a.prev=21,a.t1=a.catch(0),"AbortError"===a.t1.name){a.next=25;break}throw a.t1;case 25:case"end":return a.stop()}}),a,null,[[0,21]])})))},O=function(e,t){return e?{name:e,page:t}:void 0},k=Object(E.a)(v.a,(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return N(O(e,a),t)()})),x=Object(E.a)(v.b,(function(e,t){return N(O(e),t)()})),w=Object(E.a)(v.d,(function(e,t){return function(e,t){return Object(u.a)(i.a.mark((function a(){var n,r,c,s,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(g).concat("/location").concat(e?"?".concat(j.stringify(e)):""),{signal:t.signal,method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 3:if(n=a.sent,r=n.ok,c=n.status,r){a.next=15;break}return a.next=8,n.json();case 8:s=a.sent,console.error(s),a.t0=c,a.next=404===a.t0?13:14;break;case 13:return a.abrupt("return",{message:"No encontramos locations."});case 14:return a.abrupt("return",{message:"Algo sali\xf3 mal, int\xe9ntelo de nuevo."});case 15:return a.next=17,n.json();case 17:return o=a.sent,a.abrupt("return",o);case 21:if(a.prev=21,a.t1=a.catch(0),"AbortError"===a.t1.name){a.next=25;break}throw a.t1;case 25:case"end":return a.stop()}}),a,null,[[0,21]])})))}(O(e),t)()})),C=Object(E.a)(v.c,(function(e,t){return function(e,t){return Object(u.a)(i.a.mark((function a(){var n,r,c,s,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("".concat(g).concat("/episode").concat(e?"?".concat(j.stringify(e)):""),{signal:t.signal,method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json"}});case 3:if(n=a.sent,r=n.ok,c=n.status,r){a.next=15;break}return a.next=8,n.json();case 8:s=a.sent,console.error(s),a.t0=c,a.next=404===a.t0?13:14;break;case 13:return a.abrupt("return",{message:"No encontramos episodios."});case 14:return a.abrupt("return",{message:"Algo sali\xf3 mal, int\xe9ntelo de nuevo."});case 15:return a.next=17,n.json();case 17:return o=a.sent,a.abrupt("return",o);case 21:if(a.prev=21,a.t1=a.catch(0),"AbortError"===a.t1.name){a.next=25;break}throw a.t1;case 25:case"end":return a.stop()}}),a,null,[[0,21]])})))}(O(e),t)()})),y=Object(E.a)(v.e,(function(e){return e})),L=(a(57),function(e){var t=e.text;return r.a.createElement("div",{className:"conatainerMessage"},t)});L.defaultProps={text:""};var P=L,S=(a(58),function(e){var t=e.type,a=void 0===t?"submit":t,n=e.size,c=e.alt,s=void 0===c?"":c,o=e.content,i=void 0===o?"":o,u=e.onClick;return r.a.createElement("button",{onClick:u,className:"mainButton ".concat(n||""),type:a,alt:s},i)});a(59);function z(e){var t=e.status;return r.a.createElement("span",{className:"dot ".concat(t)})}a(60);var A=function(e){var t=e.character,a=e.setCharacter,c=t.image,s=t.name,o=t.status,i=t.species,u=Object(n.useCallback)((function(e){e.preventDefault(),a(t)}),[a,t]);return r.a.createElement("div",{className:"containerCard"},r.a.createElement("img",{className:"containerCard-picture",src:c,alt:t.name}),r.a.createElement("div",{className:"containerCard-detail"},r.a.createElement("div",{className:"containerCard-detail-name"},s),r.a.createElement("div",{className:"containerCard-detail-status"},r.a.createElement(z,{status:o}),r.a.createElement("span",{className:"containerCard-detail-status-text"},o)),r.a.createElement("div",{className:"containerCard-detail-species"},i),r.a.createElement("div",{className:"containerCard-detail-button"},r.a.createElement(S,{size:"small",content:"Detalle",type:"none",onClick:u}))))};A.defaultProps={character:{}};var D=A,T=(a(61),function(e){var t=e.character,a=t.origin,n=t.location,c=t.name,s=t.image,o=t.episode,i=t.gender;return r.a.createElement("div",{className:"containerDetail"},t&&Object.keys(t).length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"containerDetail-title"},"Detalle"),r.a.createElement("img",{className:"containerDetail-picture",src:s,alt:c}),r.a.createElement("div",{className:"containerDetail-name"}," ",t&&t.name," "),r.a.createElement("ul",{className:"containerDetail-list"},r.a.createElement("li",null,i),r.a.createElement("li",null,a&&a.name),r.a.createElement("li",null,n&&n.name),r.a.createElement("li",null,"Number of episodes: ",o&&o.length))))});T.defaultProps={character:{}};var B=T,F=(a(62),function(e){var t=e.charactersNumber,a=e.locationsNumber,c=e.episodesNumber,s=e.fetchCharactersNumber,o=e.fetchEpisode,m=e.fetchLocations,f=Object(n.useState)(),d=Object(l.a)(f,2),p=d[0],b=d[1],h=Object(n.useMemo)((function(){return new window.AbortController}),[]);Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,Promise.all([s("",h),m("",h),o("",h)]);case 3:return e.next=5,b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h,s,o,m]),Object(n.useEffect)((function(){}),[t,a,c]);var v=function(e){return e&&e.info?e.info.count:""};return r.a.createElement("div",{className:"containerNumbers"},!p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"containerNumbers-text"},"La serie en n\xfameros:"),r.a.createElement("div",{className:"containerNumbers-text"},v(c)," N\xfamero de episodios"),r.a.createElement("div",{className:"containerNumbers-text"},v(a)," N\xfamero de locations"),r.a.createElement("div",{className:"containerNumbers-text"},v(t)," N\xfamero de personajes")))});F.defaultProps={charactersNumbe:{},locationsNumber:{},episodesNumber:{}};var G=Object(m.b)((function(e){return{charactersNumber:d(e),locationsNumber:p(e),episodesNumber:b(e)}}),{fetchCharactersNumber:x,fetchEpisode:C,fetchLocations:w})(Object(n.memo)(F));a(63);function M(e){var t=e.page,a=e.pagination,n=e.setPage;return r.a.createElement("div",{className:"containerPagination"},r.a.createElement(S,{size:"".concat(1===t?"small_disable":""),content:"Anterior",type:"none",onClick:function(){return a.prev&&n(t-1)}}),r.a.createElement("span",{className:"containerPagination-page"}," ",t," de ",a&&a.pages," "),r.a.createElement(S,{size:"".concat(t===(a&&a.pages)?"small_disable":""),content:"Siguiente",type:"none",onClick:function(){return a.next&&n(t+1)}}))}a(64);var R=function(e){var t=e.characters,a=e.fetchCharacters,c=e.loading,s=e.location,o=e.isLoading,m=new URLSearchParams(s.search).get("search"),f=Object(n.useMemo)((function(){return new window.AbortController}),[]),d=Object(n.useState)(t&&t.results),p=Object(l.a)(d,2),b=p[0],h=p[1],v=Object(n.useState)(),E=Object(l.a)(v,2),g=E[0],j=E[1],N=Object(n.useState)(),O=Object(l.a)(N,2),k=O[0],x=O[1],w=Object(n.useState)(),C=Object(l.a)(w,2),y=C[0],L=C[1],S=Object(n.useState)(1),z=Object(l.a)(S,2),A=z[0],T=z[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,a(m,f,A);case 3:return e.next=5,c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m,c,f,a,A]),Object(n.useEffect)((function(){T(1)}),[m]),Object(n.useEffect)((function(){t&&t.results?(h(t.results),L(t.info)):(h([]),x(t.message))}),[h,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("div",{className:"containerCharacters"},r.a.createElement("div",{className:"listCharacters"},b&&b.length?b.map((function(e,t){return r.a.createElement(D,{key:t,setCharacter:j,character:e})})):r.a.createElement(P,{show:!o,text:k}),r.a.createElement(M,{page:A,setPage:T,pagination:y})),r.a.createElement(B,{character:g})))};R.defaultProps={characters:[],isLoading:!1};var V,J=Object(m.b)((function(e){return{characters:f(e),isLoading:h(e)}}),{loading:y,fetchCharacters:k})(Object(n.memo)(R)),U=(a(65),a(66),function(e){var t=e.reference,a=void 0===t?"":t,n=e.defaultValue,c=void 0===n?"":n,s=e.placeholder,o=void 0===s?"":s,i=e.type,u=void 0===i?"":i;return r.a.createElement("input",{className:"inputText",ref:a,defaultValue:c,placeholder:o,type:u})}),_=a(67),H=a(68).a.div(V||(V=Object(_.a)(["\n  margin: auto;\n\n  width: ",";\n  height: ",";\n  margin: auto;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1s infinite ease-in-out;\n  animation: sk-scaleout 1s infinite ease-in-out;\n\n  @-webkit-keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      opacity: 0;\n    }\n  }\n\n  @keyframes sk-scaleout {\n    0% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 0;\n    }\n  }\n"])),(function(e){return"".concat(e.size,"px")}),(function(e){return"".concat(e.size,"px")})),q=function(e){var t=e.size;return r.a.createElement(H,{size:t})},I=Object(m.b)((function(e){return{isLoading:h(e)}}),{})(Object(s.f)((function(e){var t=Object(n.useRef)(""),a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],o=c[1],i=new URLSearchParams(e.location.search).get("search"),u=Object(n.useCallback)((function(t){t.preventDefault();var a=Object(l.a)(t.target.children,1)[0];e.history.push({pathname:"/",search:"search=".concat(a.value),state:a.value})}),[e.history]);return Object(n.useEffect)((function(){o(i),t.current.focus()}),[i]),r.a.createElement("form",{className:"searchBarContainer",onSubmit:u},r.a.createElement(U,{defaultValue:s&&""!==s?s:"",reference:t,placeholder:"",type:"text"}),r.a.createElement(S,{type:"submit",alt:"Buscar",content:e.isLoading?r.a.createElement(q,{size:20}):"Buscar"}))})));a(79);function K(){return r.a.createElement("div",{className:"container-header"},"Header..")}a(80);var Q=function(e){return r.a.createElement("div",{className:"mainLayoutContainer"},r.a.createElement(K,null),r.a.createElement("div",{className:"content"},r.a.createElement(I,null),r.a.createElement("div",{className:"children"},e.children)))};t.default=Object(n.memo)((function(){return r.a.createElement(c.a,null,r.a.createElement(Q,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:J}))))}))}}]);
//# sourceMappingURL=4.9b1ed0e5.chunk.js.map