(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"116":function(e,t,o){},"130":function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(77),i=o(2),c=o(13),a=o(135),l=o(126),p=o(22),s=o(116),s=function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e};function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0!==n){if("value"in n)return n.value;n=n.get;return void 0!==n?n.call(o):void 0}if(null!==(e=Object.getPrototypeOf(e)))return q(e,t,o)}(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(ImgPreview,i.a.Component),s(ImgPreview,[{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact",this.props)}},{"key":"componentWillMount","value":function componentWillMount(){document.title="图片预览";var e=JSON.parse(decodeURIComponent(this.$router.params.data));console.log("data",e),this.setState({"list":e.list,"current":e.current})}},{"key":"handleBackClick","value":function handleBackClick(){i.a.navigateBack()}},{"key":"handleSwiperClick","value":function handleSwiperClick(e){this.setState({"current":e.detail.current})}},{"key":"render","value":function render(){var o=this,e=this.state,t=e.current,e=e.list;return e&&0<e.length?n.j.createElement(c.a,{"className":"imgPreview-page"},n.j.createElement(c.a,{"className":"img-preview-header"},n.j.createElement(c.a,{"className":"back","onClick":this.handleBackClick.bind(this)},"返回"),n.j.createElement(c.a,{"className":"title"},t+1,"/",e.length),n.j.createElement(c.a,{"className":"right-actions"})),n.j.createElement(a.a,{"className":"img-preview-swiper","indicatorColor":"#999","indicatorActiveColor":"#333","current":t,"onChange":this.handleSwiperClick.bind(this)},e&&e.map(function(e,t){return n.j.createElement(a.b,{"className":"img-preview-swiper-item"},n.j.createElement(l.a,{"src":e,"onClick":o.handleBackClick.bind(o),"className":"img-preview-ele","mode":"aspectFit"}))}))):null}},{"key":"componentDidMount","value":function componentDidMount(){q(ImgPreview.prototype.__proto__||Object.getPrototypeOf(ImgPreview.prototype),"componentDidMount",this)&&q(ImgPreview.prototype.__proto__||Object.getPrototypeOf(ImgPreview.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){q(ImgPreview.prototype.__proto__||Object.getPrototypeOf(ImgPreview.prototype),"componentDidShow",this)&&q(ImgPreview.prototype.__proto__||Object.getPrototypeOf(ImgPreview.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){q(ImgPreview.prototype.__proto__||Object.getPrototypeOf(ImgPreview.prototype),"componentDidHide",this)&&q(ImgPreview.prototype.__proto__||Object.getPrototypeOf(ImgPreview.prototype),"componentDidHide",this).call(this)}}]),s=ImgPreview;function ImgPreview(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ImgPreview);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ImgPreview.__proto__||Object.getPrototypeOf(ImgPreview)).apply(this,arguments));return e.config={"navigationBarTitleText":"图片预览"},e}s=Object(r.a)([Object(p.b)("counter"),p.c],s),t.default=s}}]);