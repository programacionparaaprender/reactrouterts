(this.webpackJsonpreactrouterts=this.webpackJsonpreactrouterts||[]).push([[0],{50:function(e,t,n){e.exports=n(88)},63:function(e,t,n){},71:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(51);var a=n(42),r=n(0),l=n(20),c=n(7),o=n(27),i=n(11),s=n(44),u=n(36),d=n(45),m=n.n(d),p=n(18),h=n(46),E=n(37),b={requestWeatherForecasts:function(e){return function(t,n){var a=n();a&&a.weatherForecasts&&e!==a.weatherForecasts.startDateIndex&&(fetch("weatherforecast").then((function(e){return e.json()})).then((function(n){t({type:"RECEIVE_WEATHER_FORECASTS",startDateIndex:e,forecasts:n})})),t({type:"REQUEST_WEATHER_FORECASTS",startDateIndex:e}))}}},f={forecasts:[],isLoading:!1},g={counter:function(e,t){if(void 0===e)return{count:0};switch(console.log("incomingAction: "+JSON.stringify(t)),t.type){case"INCREMENT_COUNT":return{count:e.count+1};case"DECREMENT_COUNT":return{count:e.count-1};default:return e}},products:function(e,t){if(void 0===e){return{products:[{id:"1",name:"Product One",description:"This is product one",price:"29.99"},{id:"2",name:"Product Two",description:"This is product two",price:"39.99"},{id:"3",name:"Product Three",description:"This is product three",price:"59.99"}]}}console.log("incomingAction: "+JSON.stringify(t));var n=t;switch(n.type){case"DELETE_PRODUCT":n=t;var a=[];for(var r in e.products)String(e.products[r].id)!==String(n.id)&&a.push(e.products[r]);return{products:a};case"ADD_TO_CART":n=t;var l=[];for(var c in e.products)l.push(e.products[c]);return l.push({id:n.payload.id,name:n.payload.name,description:n.payload.description,price:n.payload.price}),{products:l};default:return e}},weatherForecasts:function(e,t){if(void 0===e)return f;var n=t;switch(n.type){case"REQUEST_WEATHER_FORECASTS":return{startDateIndex:n.startDateIndex,forecasts:e.forecasts,isLoading:!0};case"RECEIVE_WEATHER_FORECASTS":if(n.startDateIndex===e.startDateIndex)return{startDateIndex:n.startDateIndex,forecasts:n.forecasts,isLoading:!1}}return e},vieja:function(e,t){return void 0===e?{vieja:{history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0}}:(console.log("incomingAction: "+JSON.stringify(t)),t.type,e)},googlemaps:function(e,t){if(void 0===e){return{markers:[]}}console.log("incomingAction: "+JSON.stringify(t));var n=t;switch(n.type){case"DELETE_COORDENADA":return n=t,{markers:[]};case"ADD_TO_COORDENADA":n=t;var a=[];for(var r in e.markers)a.push(e.markers[r]);return a.push({lat:n.payload.lat,lng:n.payload.lng}),{markers:a};default:return e}}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var v=n(5),O=n(90),N=n(12),C=n(13),j=n(15),k=n(14),w=n(16),T=n(89),x=n(91),D=n(92),S=n(95),I=n(93),P=n(94),_=n(19),R=(n(63),function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.toggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.createElement("header",null,r.createElement(T.a,{className:"navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3",light:!0},r.createElement(O.a,null,r.createElement(x.a,{tag:_.a,to:"/"},"ReactRedux"),r.createElement(D.a,{onClick:this.toggle,className:"mr-2"}),r.createElement(S.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:this.state.isOpen,navbar:!0},r.createElement("ul",{className:"navbar-nav flex-grow"},r.createElement(I.a,null,r.createElement(P.a,{tag:_.a,className:"text-dark",to:"/"},"Home")),r.createElement(I.a,null,r.createElement(P.a,{tag:_.a,className:"text-dark",to:"/vieja"},"Vieja")),r.createElement(I.a,null,r.createElement(P.a,{tag:_.a,className:"text-dark",to:"/googlemaps"},"Google maps")),r.createElement(I.a,null,r.createElement(P.a,{tag:_.a,className:"text-dark",to:"/counter"},"Counter")),r.createElement(I.a,null,r.createElement(P.a,{tag:_.a,className:"text-dark",to:"/fetch-data"},"Fetch data")),r.createElement(I.a,null,r.createElement(P.a,{tag:_.a,className:"text-dark",to:"/product"},"Productos")))))))}}]),t}(r.PureComponent)),A=function(e){return r.createElement(r.Fragment,null,r.createElement(R,null),r.createElement(O.a,null,e.children))},q=Object(c.c)()((function(){return r.createElement("div",null,r.createElement("h1",null,"Hello, world!"),r.createElement("p",null,"Welcome to your new single-page application, built with:"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://get.asp.net/"},"ASP.NET Core")," and ",r.createElement("a",{href:"https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"},"C#")," for cross-platform server-side code"),r.createElement("li",null,r.createElement("a",{href:"https://facebook.github.io/react/"},"React")," and ",r.createElement("a",{href:"https://redux.js.org/"},"Redux")," for client-side code"),r.createElement("li",null,r.createElement("a",{href:"http://getbootstrap.com/"},"Bootstrap")," for layout and styling")),r.createElement("p",null,"To help you get started, we've also set up:"),r.createElement("ul",null,r.createElement("li",null,r.createElement("strong",null,"Client-side navigation"),". For example, click ",r.createElement("em",null,"Counter")," then ",r.createElement("em",null,"Back")," to return here."),r.createElement("li",null,r.createElement("strong",null,"Development server integration"),". In development mode, the development server from ",r.createElement("code",null,"create-react-app")," runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file."),r.createElement("li",null,r.createElement("strong",null,"Efficient production builds"),". In production mode, development-time features are disabled, and your ",r.createElement("code",null,"dotnet publish")," configuration produces minified, efficiently bundled JavaScript files.")),r.createElement("p",null,"The ",r.createElement("code",null,"ClientApp")," subdirectory is a standard React application based on the ",r.createElement("code",null,"create-react-app")," template. If you open a command prompt in that directory, you can run ",r.createElement("code",null,"npm")," commands such as ",r.createElement("code",null,"npm test")," or ",r.createElement("code",null,"npm install"),"."))})),L=function(e){function t(){return Object(N.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement("h1",null,"Counter"),r.createElement("p",null,"This is a simple example of a React component."),r.createElement("p",{"aria-live":"polite"},"Current count: ",r.createElement("strong",null,this.props.count)),r.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.createElement("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){e.props.increment()}},"Increment"),r.createElement("button",{type:"button",className:"btn btn-danger btn-lg",onClick:function(){e.props.decrement()}},"Decrement")))}}]),t}(r.PureComponent),F=Object(c.c)((function(e){return e.counter}),{increment:function(){return{payload:"data",type:"INCREMENT_COUNT"}},decrement:function(){return{type:"DECREMENT_COUNT"}}})(L),U=n(8),M=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={id:"1",name:"Product 1",description:"Description product 1",price:"20.00"},n.handleChange1=n.handleChange1.bind(Object(U.a)(n)),n.handleChange2=n.handleChange2.bind(Object(U.a)(n)),n.handleChange3=n.handleChange3.bind(Object(U.a)(n)),n.handleChange4=n.handleChange4.bind(Object(U.a)(n)),n.a\u00f1adirProducto=n.a\u00f1adirProducto.bind(Object(U.a)(n)),n.editarProducto=n.editarProducto.bind(Object(U.a)(n)),n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"editarProducto",value:function(e){this.setState({id:e.id,name:e.name,description:e.description,price:e.price})}},{key:"a\xf1adirProducto",value:function(){var e;e={id:this.state.id,name:this.state.name,description:this.state.description,price:this.state.price},this.props.addToCart(e)}},{key:"handleChange1",value:function(e){this.setState({id:String(e.target.value)})}},{key:"handleChange2",value:function(e){this.setState({name:String(e.target.value)})}},{key:"handleChange3",value:function(e){this.setState({description:String(e.target.value)})}},{key:"handleChange4",value:function(e){this.setState({price:String(e.target.value)})}},{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement("h1",null,"Ejemplo de productos usando estados persistentes."),r.createElement("form",null,r.createElement("div",{className:"form-group"},r.createElement("label",null,"C\xf3digo producto:"),r.createElement("input",{onChange:this.handleChange1,value:this.state.id,type:"number",id:"Iid",name:"id",placeholder:"Ingrese c\xf3digo",className:"form-control"})),r.createElement("div",{className:"form-group"},r.createElement("label",null,"Nombre:"),r.createElement("input",{onChange:this.handleChange2,value:this.state.name,type:"text",id:"Inombre",name:"nombre",placeholder:"Ingrese nombre",className:"form-control"})),r.createElement("div",{className:"form-group"},r.createElement("label",null,"Descripcion:"),r.createElement("input",{onChange:this.handleChange3,value:this.state.description,type:"text",id:"Idescripcion",name:"descripcion",placeholder:"Ingrese descripcion",className:"form-control"})),r.createElement("div",{className:"form-group"},r.createElement("label",null,"Precio:"),r.createElement("input",{onChange:this.handleChange4,value:this.state.price,title:"Ingrese precio",type:"number",id:"Idescripcion",name:"descripcion",placeholder:"Ingrese precio",className:"form-control"})),r.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.createElement("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){e.a\u00f1adirProducto()}},"addToCard"),r.createElement("button",{type:"button",className:"btn btn-success"},"Editar"),r.createElement("button",{type:"reset",className:"btn btn-warning btn-lg"},"Reset"),r.createElement("button",{type:"button",className:"btn btn-danger btn-lg"},"Salir"))),r.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Id"),r.createElement("th",null,"Name"),r.createElement("th",null,"Descripcion"),r.createElement("th",null,"Acciones"))),r.createElement("tbody",null,this.props.products.map((function(t){return r.createElement("tr",{key:t.id},r.createElement("td",null,t.id),r.createElement("td",null,t.name),r.createElement("td",null,t.description),r.createElement("td",null,r.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},r.createElement("button",{onClick:function(){e.editarProducto(t)},type:"button",className:"btn btn-success"},"Editar"),r.createElement("button",{type:"button",onClick:function(){e.props.deleteProduct(t.id)},className:"btn btn-danger"},"Eliminar"))))})))))}}]),t}(r.PureComponent),W=Object(c.c)((function(e){return e.products}),{increment:function(){return{payload:"data",type:"INCREMENT_COUNT"}},decrement:function(){return{type:"DECREMENT_COUNT"}},addToCart:function(e){return{payload:e,type:"ADD_TO_CART"}},deleteProduct:function(e){return{id:e,type:"DELETE_PRODUCT"}}})(M),B=function(e){function t(){return Object(N.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.ensureDataFetched()}},{key:"componentDidUpdate",value:function(){this.ensureDataFetched()}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("h1",{id:"tabelLabel"},"Weather forecast"),r.createElement("p",null,"This component demonstrates fetching data from the server and working with URL parameters."),this.renderForecastsTable(),this.renderPagination())}},{key:"ensureDataFetched",value:function(){var e=parseInt(this.props.match.params.startDateIndex,10)||0;this.props.requestWeatherForecasts(e)}},{key:"renderForecastsTable",value:function(){return r.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Date"),r.createElement("th",null,"Temp. (C)"),r.createElement("th",null,"Temp. (F)"),r.createElement("th",null,"Summary"))),r.createElement("tbody",null,this.props.forecasts.map((function(e){return r.createElement("tr",{key:e.date},r.createElement("td",null,e.date),r.createElement("td",null,e.temperatureC),r.createElement("td",null,e.temperatureF),r.createElement("td",null,e.summary))}))))}},{key:"renderPagination",value:function(){var e=(this.props.startDateIndex||0)-5,t=(this.props.startDateIndex||0)+5;return r.createElement("div",{className:"d-flex justify-content-between"},r.createElement(_.a,{className:"btn btn-outline-secondary btn-sm",to:"/fetch-data/".concat(e)},"Previous"),this.props.isLoading&&r.createElement("span",null,"Loading..."),r.createElement(_.a,{className:"btn btn-outline-secondary btn-sm",to:"/fetch-data/".concat(t)},"Next"))}}]),t}(r.PureComponent),J=Object(c.c)((function(e){return e.weatherForecasts}),b)(B),X=n(48);n(71);function H(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(X.a)(t[n],3),r=a[0],l=a[1],c=a[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return e[r]}return null}function V(e){return r.createElement("button",{style:{margin:"0.5em",paddingLeft:0,listStyle:"none",width:"100px",height:"100px"},className:"square",onClick:e.onClick},e.value)}var G=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(j.a)(this,Object(k.a)(t).call(this,e))).renderSquare=n.renderSquare.bind(Object(U.a)(n)),n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.createElement(V,{value:this.props.squares[parseInt(e)],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e={float:"left",width:"100%"},t={float:"left",width:"33.33%"};return r.createElement("div",{style:{float:"left",width:"300px",display:"block"}},r.createElement("div",{style:e,className:"board-row"},r.createElement("div",{style:t},this.renderSquare("0")),r.createElement("div",{style:t},this.renderSquare("1")),r.createElement("div",{style:t},this.renderSquare("2"))),r.createElement("div",{style:e,className:"board-row"},r.createElement("div",{style:t},this.renderSquare("3")),r.createElement("div",{style:t},this.renderSquare("4")),r.createElement("div",{style:t},this.renderSquare("5"))),r.createElement("div",{style:e,className:"board-row"},r.createElement("div",{style:t},this.renderSquare("6")),r.createElement("div",{style:t},this.renderSquare("7")),r.createElement("div",{style:t},this.renderSquare("8"))))}}]),t}(r.PureComponent),z=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n.handleClick=n.handleClick.bind(Object(U.a)(n)),n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"handleClick",value:function(e){var t=parseInt(e),n=this.state.history.slice(0,this.state.stepNumber+1),a=n[n.length-1].squares.slice();H(a)||a[t]||(a[t]=this.state.xIsNext?"X":"O",this.setState({history:n.concat([{squares:a}]),stepNumber:n.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],l=H(a.squares),c=n.map((function(e,n){var a=n?"Go to move #"+n:"Go to game start";return r.createElement("li",{key:n},r.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return t.jumpTo(n)}},a))}));return e=l?"Winner: "+l:"Next player: "+(this.state.xIsNext?"X":"O"),r.createElement("div",{className:"card card-default"},r.createElement("div",{className:"card-body"},r.createElement(G,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),r.createElement("div",{style:{float:"left",width:"100%"},className:"game-info"},r.createElement("div",null,r.createElement("h2",null,e)),r.createElement("ol",null,c)))}}]),t}(r.PureComponent),Q=Object(c.c)((function(e){return e.vieja}),{increment:function(){return{payload:"data",type:"INCREMENT_COUNT"}},decrement:function(){return{type:"DECREMENT_COUNT"}},deleteProduct:function(e){return{id:e,type:"DELETE_PRODUCT"}}})(z),Z=n(24),K=function(e){function t(e){var n;return Object(N.a)(this,t),(n=Object(j.a)(this,Object(k.a)(t).call(this,e))).onMarkerClick=void 0,n.onInfoWindowClose=void 0,n.state={markers:[]},n.onMapa=n.onMapa.bind(Object(U.a)(n)),n.btnLimpiar=n.btnLimpiar.bind(Object(U.a)(n)),n}return Object(w.a)(t,e),Object(C.a)(t,[{key:"btnLimpiar",value:function(){this.setState({markers:[]})}},{key:"onMapa",value:function(e,t,n){var a,r=n.latLng,l=r.lat(),c=r.lng();console.log(l+", "+c),a={lat:l,lng:c};var o=[];for(var i in this.state.markers)o.push(this.state.markers[i]);o.push({lat:a.lat,lng:a.lng}),this.setState({markers:o})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.createElement("div",{style:{height:"200px"}},r.createElement("button",{onClick:this.btnLimpiar,className:"btn btn-warning btn.lg"},"Limpiar"),r.createElement(Z.Map,{onClick:this.onMapa,google:this.props.google,initialCenter:{lat:37.77484758908875,lng:-122.44252162500497},zoom:14},this.state.markers.map((function(e){return r.createElement(Z.Marker,{position:{lat:e.lat,lng:e.lng}})})),r.createElement(Z.Polygon,{paths:this.state.markers})))}}]),t}(r.Component),Y=Object(Z.GoogleApiWrapper)({apiKey:"AIzaSyDZktO_JnnvrY4BnD2IyZo8PqNXiDTWP1w"})(K),$=(n(87),function(){return r.createElement(A,null,r.createElement(v.a,{exact:!0,path:"/",component:q}),r.createElement(v.a,{path:"/vieja",component:Q}),r.createElement(v.a,{path:"/googlemaps",component:Y}),r.createElement(v.a,{path:"/counter",component:F}),r.createElement(v.a,{path:"/product",component:W}),r.createElement(v.a,{path:"/fetch-data/:startDateIndex?",component:J}))}),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=document.getElementsByTagName("base")[0].getAttribute("href"),ae=Object(i.a)({basename:ne}),re=function(e,t){var n=[h.a,Object(E.a)(e)],a=Object(p.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g,{router:Object(o.b)(e)})),r={key:"root",storage:m.a},l=Object(u.a)(r,a),c=[],i="undefined"===typeof window?null:window;i&&i.__REDUX_DEVTOOLS_EXTENSION__&&c.push(i.__REDUX_DEVTOOLS_EXTENSION__());var d=Object(p.e)(l,t,p.d.apply(void 0,[p.a.apply(void 0,n)].concat(c)));return{store:d,persistor:Object(u.b)(d)}}(ae);l.render(r.createElement(c.a,{store:re.store},r.createElement(a.a,{loading:null,persistor:re.persistor},r.createElement((function(){return r.createElement(o.a,{history:ae},r.createElement($,null))}),null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/reactrouterts",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/reactrouterts","/service-worker.js");ee?function(e){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):te(e)}))}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.2651d44d.chunk.js.map