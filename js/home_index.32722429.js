(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"112":function(e,t,n){},"125":function(e,t,n){"use strict";n.r(t);var r=n(83),o=n.n(r),a=n(1),i=n(77),s=n(2),c=n(13),u=n(115),l=n(90),p=n(106),f=n(22),d=n(137),h=n(129),b=n(94),y=n(80),m=n(86),v=n(87),r=n(112),r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0!==r){if("value"in r)return r.value;r=r.get;return void 0!==r?r.call(n):void 0}if(null!==(e=Object.getPrototypeOf(e)))return z(e,t,n)}function _asyncToGenerator(e){return function(){var i=e.apply(this,arguments);return new Promise(function(o,a){return function step(e,t){try{var n=i[e](t),r=n.value}catch(e){return void a(e)}if(!n.done)return Promise.resolve(r).then(function(e){step("next",e)},function(e){step("throw",e)});o(r)}("next")})}}var g,P,r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,s.a.Component),r(Index,[{"key":"componentDidShow","value":function componentDidShow(){console.error("into componentDidshow at home index","https://xx.com/")}},{"key":"componentDidHide","value":function componentDidHide(){console.error("into componentDidhide at home index")}},{"key":"handleInput","value":function handleInput(e,t){console.log("type",e,t)}},{"key":"handleJSONPTest","value":(P=_asyncToGenerator(o.a.mark(function _callee(){var t;return o.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.geocoder({"location":"28.2532,112.87887","get_poi":0});case 2:t=e.sent,console.log("result",t);case 4:case"end":return e.stop()}},_callee,this)})),function handleJSONPTest(){return P.apply(this,arguments)})},{"key":"handleProxyText","value":(g=_asyncToGenerator(o.a.mark(function _callee2(){var t;return o.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.queryDiseaseByDrugName({"ComName":"阿莫西林胶囊"});case 2:t=e.sent,console.log("result",t);case 4:case"end":return e.stop()}},_callee2,this)})),function handleProxyText(){return g.apply(this,arguments)})},{"key":"handleBackToTop","value":function handleBackToTop(){}},{"key":"handleModalClose","value":function handleModalClose(){this.setState({"modalVisible":!1})}},{"key":"handleTabChange","value":function handleTabChange(e){console.log("handleTabChange",e)}},{"key":"handleOk","value":function handleOk(){this.setState({"modalVisible":!1})}},{"key":"render","value":function render(){var e=this.props.counter.counter,t=this.state,n=t.testState,r=t.mobileText,t=t.modalVisible;return console.log("mobileText",r),a.j.createElement(c.a,{"className":"index"},a.j.createElement(d.a,null,"这是 NoticeBar 通告栏"),a.j.createElement(h.a,{"size":"small"},"标签"),a.j.createElement(u.a,{"onInput":this.handleInput.bind(this,"mobile"),"type":"number","placeholder":"请输入手机号"}),a.j.createElement(l.a,{"onClick":this.handleJSONPTest.bind(this),"className":"button-jsonp"},"jsonp 测试"),a.j.createElement(l.a,{"onClick":this.handleProxyText.bind(this)},"本地代理 测试"),a.j.createElement(l.a,{"onClick":this.increment},"+"),a.j.createElement(l.a,{"onClick":this.decrement},"-"),a.j.createElement(l.a,{"onClick":this.incrementAsync},"Add Async"),a.j.createElement(l.a,{"onClick":this.incrementAsync},n),a.j.createElement(p.a,null,e),a.j.createElement(b.f,{"hasMore":!0}),a.j.createElement(b.a,{"visible":!0,"color":"#ff4a4a","onClick":this.handleBackToTop.bind(this)}),a.j.createElement(b.b,null,"这是卡片内容哦"),a.j.createElement(b.c,{"leftTime":5e4}),a.j.createElement(b.d,{"positionType":"center","title":"弹窗标题","visible":t,"onClose":this.handleModalClose.bind(this),"mask":!0,"maskClosable":!0,"showfooter":!0,"onOk":this.handleOk.bind(this)},"这是弹窗内容"),a.j.createElement(b.g,{"currentTab":1,"list":[{"text":"tab1","id":1},{"text":"tab2","id":2}],"onChange":this.handleTabChange.bind(this)}),a.j.createElement(b.e,{"height":600,"text":"测试缺省文字"}),a.j.createElement(y.a,null))}},{"key":"componentDidMount","value":function componentDidMount(){z(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&z(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}}]),Index);function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e.increment=function(){e.setState({"testState":e.state.testState+"expand"}),e.props.counter.increment()},e.decrement=function(){e.props.counter.decrement()},e.incrementAsync=function(){e.props.counter.incrementAsync()},e.state={"testState":"1212","mobileText":"","modalVisible":!0},e}r=Object(i.a)([Object(f.b)("counter"),f.c],r),t.default=r},"76":function(e,t,n){"use strict";var o=n(75);function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(function(e,t,n){t&&defineProperties(e.prototype,t),n&&defineProperties(e,n)})(Toast,[{"key":"loading","value":function loading(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];Object(o.c)({"title":e,"mask":t})}},{"key":"hideLoading","value":function hideLoading(){Object(o.a)()}},{"key":"error","value":function error(e){Object(o.e)({"title":e,"mask":!0,"icon":"none","duration":1500})}},{"key":"show","value":function show(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"none",r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1200;Object(o.e)({"title":e,"mask":t,"duration":r,"icon":n})}},{"key":"hide","value":function hide(){Object(o.b)()}}]),n=Toast;function Toast(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Toast)}t.a=new n},"80":function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(13),i=n(81),i=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(Tabbar,o.a.Component),i(Tabbar,[{"key":"handleTabItemClick","value":function handleTabItemClick(e){e=e.router;o.a.redirectTo({"url":e})}},{"key":"render","value":function render(){var t=this,e=this.state.tabList;return r.j.createElement(a.a,{"className":"tabbar-comp"},e.map(function(e){return r.j.createElement(a.a,{"className":"tab-item","onClick":t.handleTabItemClick.bind(t,e)},e.text)}))}}]),i=Tabbar;function Tabbar(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Tabbar);e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Tabbar.__proto__||Object.getPrototypeOf(Tabbar)).call(this,e));return e.state={"tabList":[{"id":1,"router":"/pages/home/index","text":"首页"},{"id":2,"router":"/pages/lab/index","text":"实验室"},{"id":2,"router":"/pages/user/index","text":"个人中心"}]},e}t.a=i},"81":function(e,t,n){},"82":function(e,t,n){"use strict";function K0(e){var t=e.requestParams,n=t.header,r=t.url;return r.startsWith("https://")||r.startsWith("http://")||(t.url=""+n[m.INTERCEPTOR_HEADER].hostUrl+r),e.proceed(t)}function L0(e){console.log("enter header interceptor",e);var t=e.requestParams,n=t.header;return t.header=n,e.proceed(t)}function M0(e){var t=e.requestParams,n=t.data;return t.data=n,e.proceed(t)}var r=n(83),h=n.n(r),a=n(2),b=n(128),y=n(138),m={"MASK_TOKEN":"maskToken","LOGIN_FAILURE_TIMESTAMP":"loginFailureTimeStamp","INTERCEPTOR_HEADER":"interceptor-custom-header"},v=["0","00000","10000"],i=["99999","40000","40001"],s=n(127),c=n(75),g=n(76),o=n(74);function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pages(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Pages)}function V0(e){console.log("enter data interceptor",e);var t=e.requestParams,n=t.header[m.INTERCEPTOR_HEADER],r=n.showToast,o=n.resType;return e.proceed(t).then(function(e){if(console.log("data拦截器接收到的数据",e),200!==e.statusCode)return console.error("接口异常: "+e.data.path,e.statusCode),r&&g.a.error("很抱歉，数据临时丢失，请耐心等待修复"),Promise.resolve("很抱歉，数据临时丢失，请耐心等待修复");var t=l({},e.data);if(!t)throw"返回数据为空："+t;return console.log("into data handle",t),1===o&&(t.code=t.status,t.msg=t.message,t.data=t.result),t.code=t.hasOwnProperty("code")?t.code.toString():t.code,console.error("resultData",t),i.includes(t.code)?(console.error("into login falire"),Object(s.b)(m.LOGIN_FAILURE_TIMESTAMP,(new Date).getTime()),Object(s.a)(m.MASK_TOKEN),Object(c.e)({"title":t.msg,"icon":"none","duration":800}),e=a.a.getCurrentPages(),console.error("taro.curPages",e),u.getCurRoute()===u.getRoutes().home?setTimeout(function(){a.a.navigateTo({"url":"/"+u.getRoutes().auth+"?from=home"})},800):setTimeout(function(){a.a.navigateTo({"url":"/"+u.getRoutes().auth})},800)):!v.includes(t.code)&&r&&(console.log("非登录失效的失败code",t),"50000"===t.code?g.a.error("系统开小差了"):g.a.error(t.msg)),console.error("返回之前的resultData",t),Promise.resolve(t)}).catch(function(e){return Object(c.a)(),g.a.error("网络开小差了"),Promise.reject(e)})}function W0(e){console.log("enter del interceptor",e);var t=e.requestParams,n=t.header;return n[m.INTERCEPTOR_HEADER].crossHeaderInterceptor||(delete n[m.INTERCEPTOR_HEADER],t.header=n),e.proceed(t)}var u=new(function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}(Pages,[{"key":"getRoutes","value":function getRoutes(){return{"home":"pages/index/index","auth":"pages/auth/auth","user":"pages/user/index"}}},{"key":"getCurRoute","value":function getCurRoute(){return window.location.pathname.slice(1)}},{"key":"backToHome","value":function backToHome(){Object(o.b)({"url":"/pages/goods/list"})}}]),Pages),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _asyncToGenerator(e){return function(){var i=e.apply(this,arguments);return new Promise(function(o,a){return function step(e,t){try{var n=i[e](t),r=n.value}catch(e){return void a(e)}if(!n.done)return Promise.resolve(r).then(function(e){step("next",e)},function(e){step("throw",e)});o(r)}("next")})}}console.log("hostconfig",Object({"API_HOST":"https://xx.com/","APPID":"this_is_my_tourist_appid","API_MAP_QQ":"https://apis.map.qq.com","KEY_MAP_QQ":"UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM"})),function getInterceptors(){return[K0,L0,M0,V0,W0,a.a.interceptors.logInterceptor,a.a.interceptors.timeoutInterceptor]}().forEach(function(e){return Object(b.a)(e)});var f,n=(n(BaseRequest,[{"key":"request","value":(f=_asyncToGenerator(h.a.mark(function _callee(e){var t,n,r=e.url,o=e.data,a=e.method,i=e.header,s=void 0===i?{"Content-Type":"application/json"}:i,i=e.dataType,c=void 0===i?"json":i,i=e.responseType,u=void 0===i?"text":i,i=e.showToast,l=void 0===i||i,i=e.jsonp,p=void 0!==i&&i,i=e.crossHeaderInterceptor,f=void 0!==i&&i,e=e.resType,d=void 0===e?0:e;return h.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.options?this.options.hostKey:""){e.next=3;break}throw"请指定service key";case 3:if(n=Object({"API_HOST":"https://xx.com/","APPID":"this_is_my_tourist_appid","API_MAP_QQ":"https://apis.map.qq.com","KEY_MAP_QQ":"UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM"})[t],s[m.INTERCEPTOR_HEADER]={"hostKey":t,"hostUrl":n,"showToast":l,"resType":d,"crossHeaderInterceptor":f},"UPLOAD"===a)return e.abrupt("return",new Promise(function(t,n){return Object(y.a)({"url":"https://xx.com//"+r,"filePath":o,"name":"file","success":function success(e){e=e.data;console.log("uploadFile success",e),console.log("uploadFile success",JSON.parse(e));e=JSON.parse(e);v.includes(e.code)?t(e):(g.a.error(e.msg),n(e))},"fail":function fail(e){console.log("uploadFile err",e),n(e)}})}));e.next=9;break;case 9:return e.abrupt("return",Object(b.b)({"url":r,"data":o,"method":a,"header":s,"dataType":c,"responseType":u,"jsonp":p}));case 10:case"end":return e.stop()}},_callee,this)})),function request(e){return f.apply(this,arguments)})},{"key":"get","value":function get(e){return this.request(p({"method":"GET"},e))}},{"key":"post","value":function post(e){return this.request(p({"method":"POST"},e))}},{"key":"put","value":function put(e){return this.request(p({"method":"PUT"},e))}},{"key":"delete","value":function _delete(e){return this.request(p({"method":"DELETE"},e))}},{"key":"jsonp","value":function jsonp(e){return this.request(p({"method":"GET","jsonp":!0},e))}},{"key":"upload","value":function upload(e){return this.request(p({},e,{"method":"UPLOAD","header":{"Content-Type":"multipart/form-data"}}))}}]),BaseRequest);function BaseRequest(e){!function request_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BaseRequest),console.log("options",e),this.options=e}t.a=n},"86":function(e,t,n){"use strict";var r=n(82),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(QQMapWebService,r.a),n(QQMapWebService,[{"key":"geocoder","value":function geocoder(e){return this.jsonp({"url":"/ws/geocoder/v1","data":o({},e,{"key":"UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM","output":"jsonp","callback":"jsonhandle1"}),"resType":1})}}]),n=QQMapWebService;function QQMapWebService(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,QQMapWebService),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(QQMapWebService.__proto__||Object.getPrototypeOf(QQMapWebService)).call(this,{"hostKey":"API_MAP_QQ"}))}t.a=new n},"87":function(e,t,n){"use strict";var r=n(82),n=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(LianouService,r.a),n(LianouService,[{"key":"queryDiseaseByDrugName","value":function queryDiseaseByDrugName(e){return this.post({"url":"/drug/queryDiseaseByDrugName","data":e})}}]),n=LianouService;function LianouService(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LianouService),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(LianouService.__proto__||Object.getPrototypeOf(LianouService)).call(this,{"hostKey":"API_HOST"}))}t.a=new n}}]);