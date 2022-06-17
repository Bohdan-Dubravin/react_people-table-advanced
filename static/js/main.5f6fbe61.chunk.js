(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(12),r=n.n(c),a=n(1),s=n.n(a),o=n(6),l=n(2),i=(n(18),n(0)),b=function(){return Object(i.jsx)("h1",{children:"HomePage"})},j=n(13),d=n(10),u=n(5),h=n(3);var O=s.a.createContext({}),m=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(h.a)(n,2),r=c[0],s=c[1],o=Object(a.useMemo)((function(){return{peopleList:r,setPeopleList:s}}),[r]);return Object(a.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(i.jsx)(O.Provider,{value:o,children:t})},x=(n(20),{born:0,died:0,fatherName:"",motherName:"",name:"",sex:"",slug:""}),p={born:"",died:"",name:"",sex:""},f=function(){var e=Object(l.g)(),t=Object(l.h)(),n=Object(a.useContext)(O),c=n.peopleList,r=n.setPeopleList,s=(new Date).getFullYear(),o=Object(a.useState)(x),b=Object(h.a)(o,2),m=b[0],f=b[1],_=Object(a.useState)(p),N=Object(h.a)(_,2),v=N[0],g=N[1],P=c.filter((function(e){return"m"===e.sex&&+e.born>+m.born+18&&+e.died>+m.died})),w=c.filter((function(e){return"f"===e.sex&&+e.born>+m.born+18&&+e.died>+m.died}));function y(e){var t=e.currentTarget,n=t.name,c=t.value;f((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},n,"born"===n||"died"===n?+c:c))})),g(p)}return Object(i.jsx)("div",{className:"NewPerson",children:Object(i.jsxs)("div",{className:"NewPerson__container",children:[Object(i.jsx)("h2",{children:"Add new person"}),Object(i.jsx)("button",{className:"NewPerson__btn",type:"button",onClick:function(){return e("/peoplePage".concat(t))},children:"X"}),Object(i.jsxs)("form",{onSubmit:function(n){n.preventDefault(),m.name.trim().length<5?g((function(e){return Object(u.a)(Object(u.a)({},e),{},{name:"Enter person name!"})})):m.sex?!m.born||+m.born<1400||+m.born>s?g((function(e){return Object(u.a)(Object(u.a)({},e),{},{born:"Type correct date of birth!"})})):!m.died||+m.died<+m.born||+m.died+150<+m.born?g((function(e){return Object(u.a)(Object(u.a)({},e),{},{died:"Type correct date of death max age 150!"})})):(f((function(e){return Object(u.a)(Object(u.a)({},e),{},{slug:"".concat(m.name.toLowerCase(),"-").concat(m.born)})})),r([].concat(Object(j.a)(c),[m])),g(p),f(x),e("/peoplePage".concat(t))):g((function(e){return Object(u.a)(Object(u.a)({},e),{},{sex:"Choose sex!"})}))},className:"NewPerson__form",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name"}),Object(i.jsx)("input",{className:"NewPerson__input",type:"text",id:"name",name:"name",value:m.name,onChange:y}),Object(i.jsx)("span",{className:"NewPerson__error",children:v.name}),Object(i.jsxs)("div",{className:"NewPerson__section NewPerson__section--Sex",children:[Object(i.jsx)("div",{children:"Sex"}),Object(i.jsx)("label",{htmlFor:"female",children:"Female"}),Object(i.jsx)("input",{type:"radio",id:"female",name:"sex",value:"f",onChange:y,checked:"f"===m.sex}),Object(i.jsx)("label",{htmlFor:"male",children:"Male"}),Object(i.jsx)("input",{type:"radio",id:"male",name:"sex",value:"m",onChange:y,checked:"m"===m.sex}),Object(i.jsx)("span",{className:"NewPerson__error",children:v.sex})]}),Object(i.jsxs)("div",{className:"NewPerson__section NewPerson__section--born",children:[Object(i.jsx)("label",{htmlFor:"born",children:"Birth year 1400-".concat(s)}),Object(i.jsx)("input",{className:"NewPerson__input",type:"number",id:"born",name:"born",value:m.born||"",onChange:y}),Object(i.jsx)("span",{className:"NewPerson__error",children:v.born}),Object(i.jsx)("label",{htmlFor:"death",children:"Death year"}),Object(i.jsx)("input",{className:"NewPerson__input",type:"number",id:"death",name:"died",value:m.died||"",onChange:y,disabled:!m.born}),Object(i.jsx)("span",{className:"NewPerson__error",children:v.died})]}),Object(i.jsxs)("div",{className:"NewPerson__section NewPerson__section--parents",children:[Object(i.jsx)("p",{children:"Select parents"}),Object(i.jsxs)("select",{disabled:!m.born,name:"fatherName",value:m.fatherName,onChange:y,children:[Object(i.jsx)("option",{children:"Choose father"}),P.map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},e.slug)}))]}),Object(i.jsxs)("select",{disabled:!m.born,name:"motherName",value:m.motherName,onChange:y,children:[Object(i.jsx)("option",{children:"Choose mother"}),w.map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},e.slug)}))]})]}),Object(i.jsx)("button",{className:"NewPerson__button",type:"submit",children:"Add person"})]})]})})},_=(n(21),n(9)),N=n.n(_),v=s.a.memo((function(e){var t=e.person,n=Object(l.f)();return Object(i.jsx)(o.b,{style:"m"===t.sex?{color:"rgb(0, 71, 171)",textDecoration:"none"}:{color:"rgb(255, 0, 0)",textDecoration:"none"},to:{pathname:"/peoplePage/".concat(t.slug),search:n.search},children:t.name})})),g=function(e){var t=e.person,n=Object(l.i)().personSlug,c=Object(a.useContext)(O).peopleList,r=c.find((function(e){return e.name===t.fatherName})),s=c.find((function(e){return e.name===t.motherName}));return Object(i.jsxs)("tr",{style:t.slug===n?{backgroundColor:"#aed6f1"}:{backgroundColor:"white"},children:[Object(i.jsx)("td",{children:Object(i.jsx)(v,{person:t})}),Object(i.jsx)("td",{children:t.sex}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),Object(i.jsx)("td",{children:r?Object(i.jsx)(v,{person:r}):t.fatherName||"-"}),Object(i.jsx)("td",{children:s?Object(i.jsx)(v,{person:s}):t.motherName||"-"})]})},P=(n(22),function(e){var t=e.people,n=e.setSortParam,c=e.setSortOrder,r=Object(a.useState)("asc"),s=Object(h.a)(r,2),o=s[0],l=s[1],b=Object(a.useState)(""),j=Object(h.a)(b,2),d=j[0],u=j[1];function O(e){l("asc"===o?"desc":"asc"),c(o),u(e),n(e)}return Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("table",{className:"PeopleTable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{onClick:function(){return O("name")},className:N()("Table__sort",{"Table__sort--asc":"name"===d&&"asc"===o,"Table__sort--desc":"name"===d&&"desc"===o}),children:"Name"}),Object(i.jsx)("th",{onClick:function(){return O("sex")},className:N()("Table__sort",{"Table__sort--asc":"sex"===d&&"asc"===o,"Table__sort--desc":"sex"===d&&"desc"===o}),children:"Sex"}),Object(i.jsx)("th",{onClick:function(){return O("born")},className:N()("Table__sort",{"Table__sort--asc":"born"===d&&"asc"===o,"Table__sort--desc":"born"===d&&"desc"===o}),children:"Born"}),Object(i.jsx)("th",{onClick:function(){return O("died")},className:N()("Table__sort",{"Table__sort--asc":"died"===d&&"asc"===o,"Table__sort--desc":"died"===d&&"desc"===o}),children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(g,{person:e},e.slug)}))})]})})}),w=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(o.d)(),s=Object(h.a)(r,2),b=s[0],j=s[1],d=Object(a.useContext)(O).peopleList,u=Object(l.f)(),m=b.get("query")||"",x=b.get("sortBy")||"",p=b.get("sortOrder")||"asc";Object(a.useEffect)((function(){u.search&&c(u.search)}));var f=function(){var e=m.toLocaleLowerCase(),t=x,n=null===d||void 0===d?void 0:d.filter((function(t){return t.name.toLowerCase().includes(e)}));return t?("name"!==t&&"sex"!==t||null===n||void 0===n||n.sort((function(e,n){return"asc"===p?e[t].localeCompare(n[t]):n[t].localeCompare(e[t])})),"born"!==t&&"died"!==t||null===n||void 0===n||n.sort((function(e,n){return"asc"===p?e[t]-n[t]:n[t]-e[t]})),n):n}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"query",children:"Search"}),Object(i.jsx)("input",{value:m,onChange:function(e){b.set("query",e.target.value),j(b),""===e.target.value&&(b.delete("query"),j(b))},type:"text",name:"query",id:"query","data-cy":"filterInput"}),Object(i.jsx)(o.c,{to:"/peoplePage/new",children:Object(i.jsx)("button",{type:"button",children:"Add person"})}),f&&Object(i.jsx)(P,{people:f,setSortParam:function(e){b.set("sortBy",e),j(b),""===e&&(b.delete("sortBy"),j(b))},setSortOrder:function(e){b.set("sortOrder",e),j(b)}}),Object(i.jsx)(l.a,{context:n})]})},y=function(){return Object(i.jsxs)(o.a,{children:[Object(i.jsx)("h1",{children:"People table"}),Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)(o.c,{to:"/",className:function(e){return e.isActive?"navbar__link--active":"navbar__link"},children:"Home Page"}),Object(i.jsx)(o.c,{className:function(e){return e.isActive?"navbar__link--active":"navbar__link"},to:"/peoplePage",children:"People Page"})]}),Object(i.jsx)(m,{children:Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{element:Object(i.jsx)(b,{}),path:"/"}),Object(i.jsx)(l.b,{element:Object(i.jsx)(w,{}),path:"/peoplePage",children:Object(i.jsx)(l.b,{element:Object(i.jsx)(f,{}),path:"new"})}),Object(i.jsx)(l.b,{element:Object(i.jsx)(w,{}),path:"/peoplePage/:personSlug"})]})})]})};r.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5f6fbe61.chunk.js.map