(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),r=a.n(n),i=(a(13),a(0));function o(){return Object(i.jsx)("nav",{className:"green darken-1",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function l(){return Object(i.jsx)("footer",{className:"page-footer green lighten-4",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var h=a(2),j=a(3),d=a(5),p=a(4),b=a(8);function v(e){var t=e.Title,a=e.Year,c=e.imdbID,s=e.Type,n=e.Poster;return Object(i.jsxs)("div",{id:c,className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===n?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x400?text=".concat(t)}):Object(i.jsx)("img",{className:"activator",src:n})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[a," ",Object(i.jsx)("span",{className:"right",children:s})]})]})]})}function u(e){var t=e.movies,a=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(i.jsx)(v,Object(b.a)({},e),e.imdbID)})):Object(i.jsx)("h4",{children:"Nothing found"})})}var m=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movies only"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series Only"})]})]})]})}}]),a}(s.a.Component);function O(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var x="fe520c5e",f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.searchMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/react-movie",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"fe520c5e"})),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(m,{searchMovies:this.searchMovies}),a?Object(i.jsx)(O,{}):Object(i.jsx)(u,{movies:t})]})}}]),a}(s.a.Component);var g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(l,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.27ed2a0e.chunk.js.map