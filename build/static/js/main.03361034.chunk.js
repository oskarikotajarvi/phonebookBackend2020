(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(14),l=t(2),i=function(e){var n=e.filter,t=e.filterChange;return r.a.createElement("div",null,r.a.createElement("label",null,"Filter shown with "),r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.message,t=e.error;return null===n?null:r.a.createElement("div",{className:t?"error":"notice"},n)},f=function(e){var n=e.submit,t=e.nameChange,a=e.name,c=e.numberChange,u=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add a new"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,r.a.createElement("label",null,"Name: "),r.a.createElement("input",{value:a,onChange:t})),r.a.createElement("div",null,r.a.createElement("label",null,"Number: "),r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add"))))},s=function(e){var n=e.persons,t=e.remove,a=n.map(function(e){return r.a.createElement("p",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:t(e.id,e.name)},"Delete"))});return r.a.createElement(r.a.Fragment,null,a)},d=t(3),b=t.n(d),h="/api/persons",v=function(){return b.a.get(h).then(function(e){return e.data})},E=function(e){return b.a.post(h,e).then(function(e){return e.data})},p=function(e){var n="".concat(h,"/").concat(e);return b.a.delete(n).then(function(e){return e.data})},g=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data})},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),b=d[0],h=d[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],C=j[1],y=Object(a.useState)(""),S=Object(l.a)(y,2),k=S[0],I=S[1],N=Object(a.useState)(null),A=Object(l.a)(N,2),D=A[0],F=A[1],J=Object(a.useState)(!1),L=Object(l.a)(J,2),x=L[0],B=L[1];Object(a.useEffect)(function(){v().then(function(e){c(e)})},[]);var P=function(e,n){B(n),F(e),setTimeout(function(){F(null)},5e3)},T=""===k?t:t.filter(function(e){return e.name.toLowerCase().includes(k.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{message:D,error:x}),r.a.createElement(i,{filter:k,filterChange:function(e){I(e.target.value)}}),r.a.createElement(f,{submit:function(e){e.preventDefault();var n=!1;if(t.forEach(function(e){b===e.name&&(n=!0)}),n){if(window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))){var a=t.find(function(e){return e.name===b}),r=Object(o.a)({},a,{number:O});g(a.id,r).then(function(e){c(t.map(function(n){return n.id!==r.id?n:e})),P("Changed ".concat(a.name,"'s number to ").concat(O),!1)}).catch(function(){P("Information of ".concat(a.name," has already been removed from the server"),!0)})}}else{var u={name:b,number:O};E(u).then(function(e){c(t.concat(e)),P("Added ".concat(b),!1),h(""),C("")}).catch(function(){P("Information of ".concat(u.name," has already been removed from the server"),!0)})}},nameChange:function(e){h(e.target.value)},numberChange:function(e){C(e.target.value)},name:b,number:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:T,remove:function(e,n){return function(){window.confirm("Delete ".concat(n,"?"))&&p(e).then(function(){c(t.filter(function(n){return n.id!==e})),P("".concat(n," succesfully removed."),!1)}).catch(function(){P("Information of ".concat(n," has already been removed from the server"),!0)})}}}))};t(37);u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.03361034.chunk.js.map