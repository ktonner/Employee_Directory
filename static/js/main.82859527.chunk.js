(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(41)},2:function(e,t,a){},4:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l);a(4),a(2);var o=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Search through all your employees below.")))},s=a(14),i=a(15),m=a(18),u=a(17),d=a(16),h=a.n(d),p=function(){return h.a.get("https://randomuser.me/api/?results=100&seed=abc")};var E=function(e){return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",id:"search",name:"search",value:e.search,placeholder:"Employee Name","aria-label":"Recipient's username","aria-describedby":"button-addon2",onChange:e.onChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"Search")))};var f=function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Picture"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Age"),r.a.createElement("th",{scope:"col"},"Email"))),r.a.createElement("tbody",null,e.results.map((function(e,t){return r.a.createElement("tr",{key:t+1},r.a.createElement("td",null,t+1),r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.large,alt:e.name.first})),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.dob.age),r.a.createElement("td",null,e.email))}))))};var g=function(){return r.a.createElement("div",{class:"alert alert-primary",role:"alert"},"No results found, try again")},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],filtered:[],search:""},e.handleInputChange=function(t){e.setState({search:t.target.value});var a=e.state.search.toLowerCase(),n=e.state.employees.filter((function(e){return e.name.first.toLowerCase().includes(a)||e.name.last.toLowerCase().includes(a)}));if(e.setState({filtered:n}),console.log(n),e.state.filtered.length<1){var r=e.state.employees;e.setState({filtered:r}),e.render()}},e.renderPage=function(){return e.state.filtered.length>0?r.a.createElement("div",{className:"container"},r.a.createElement(E,{search:e.state.search,handleFormSubmit:e.handleFormSubmit,onChange:e.handleInputChange,onClick:e.handleInputChange}),r.a.createElement(f,{results:e.state.filtered})):r.a.createElement("div",{className:"container"},r.a.createElement(E,{search:e.state.search,handleFormSubmit:e.handleFormSubmit,onChange:e.handleInputChange,onClick:e.handleInputChange}),r.a.createElement(g,null),r.a.createElement(f,{results:e.state.filtered}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employees:t.data.results}),e.setState({filtered:t.data.results}),console.log(e.state.employees)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderPage())}}]),a}(n.Component);var y=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.82859527.chunk.js.map