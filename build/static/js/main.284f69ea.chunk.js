(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),r=a.n(c);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"home"},l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",{className:"tutorials"},l.a.createElement("a",{className:"active",href:"#"},"Tutorials")),l.a.createElement("li",{className:"about"},l.a.createElement("a",{href:"#"},"About")),l.a.createElement("li",{className:"news"},l.a.createElement("a",{href:"#"},"Newsletter")),l.a.createElement("li",{className:"contact"},l.a.createElement("a",{href:"#"},"Contact")))))},i=a(3),m=a(4),s=a(6),u=a(5),h=a(7);var p=function(e){return l.a.createElement("div",{className:"todo-item"},l.a.createElement("input",{type:"checkbox",checked:e.item.completed}),l.a.createElement("p",null,e.item.text))},d=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean Keemun's litterbox",completed:!1},{id:4,text:"Stir compost",completed:!0},{id:5,text:"Catch up on Stargate SG-1",completed:!1}],E=[{id:1,name:"Mr. Whiskerson",imgUrl:"http://placekitten.com/300/200",altText:"chill white kitten with gray markings",phone:"(212) 555-1234",email:"mr.whiskaz@catnap.meow"},{id:2,name:"Fluffykins",imgUrl:"http://placekitten.com/400/200",altText:"inquisitive dark grey and brown tabby kitten",phone:"(212) 555-2345",email:"fluff@me.com"},{id:3,name:"Destroyer",imgUrl:"http://placekitten.com/400/300",altText:"chill grey kitten with white markings",phone:"(212) 555-3456",email:"ofworlds@yahoo.com"},{id:4,name:"Meowler",imgUrl:"http://placekitten.com/200/100",altText:"shy light brown tabby",phone:"(212) 555-4567",email:"thecat@hotmail.com"}];var f=function(e){return l.a.createElement("div",{className:"contact-card"},l.a.createElement("img",{src:e.contact.imgUrl,alt:e.contact.alt}),l.a.createElement("h3",null,e.contact.name),l.a.createElement("p",null,"Phone: ",e.contact.phone),l.a.createElement("p",null,"Email: ",e.contact.email))},v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={todos:d,contacts:E},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=(new Date).getHours();e=t<12?"morning":t>=12&&t<17?"afternoon":t>=15&&t<21?"evening":"night";var a=this.state.todos.map((function(e){return l.a.createElement(p,{key:e.id,item:e})})),n=this.state.contacts.map((function(e){return l.a.createElement(f,{key:e.id,contact:e})}));return l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"#000",padding:25,fontSize:50}},"Good ",e,"!"),l.a.createElement("div",{className:"todo-list"},a),l.a.createElement("div",{className:"contacts"},n))}}]),t}(l.a.Component);var g=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("h5",null,"Return to Annalisa's ",l.a.createElement("a",{href:"https://annalisawells.github.io/portfolio#portfolio"},"Portfolio")))};var k=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(v,null),l.a.createElement(g,null))};r.a.render(l.a.createElement((function(){return k()}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.284f69ea.chunk.js.map