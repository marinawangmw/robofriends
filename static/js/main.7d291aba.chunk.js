(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o);n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(3),i=n(4),l=n(7),u=n(6),h=n(5),d=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa2 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},m=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},p=(n(27),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null," Ooooops, that is not good "):this.props.children}}]),n}(r.Component)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",{className:"tc f1"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1 "},"RobotFriends"),a.a.createElement(m,{searchChange:n}),a.a.createElement(E,null,a.a.createElement(p,null,a.a.createElement(b,{robots:c}))))}}]),n}(r.Component),g=Object(h.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(f),v=n(14),O=n(1),R={searchField:""},y={robots:[],error:"",isPending:!1},S=(n(28),n(15)),j=Object(O.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(v.createLogger)(),w=Object(O.d)(j,Object(O.a)(S.a,C));c.a.render(a.a.createElement(h.a,{store:w},a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.7d291aba.chunk.js.map