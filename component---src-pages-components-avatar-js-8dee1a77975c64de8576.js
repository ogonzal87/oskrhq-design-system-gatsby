webpackJsonp([0x7699ec359d42],{680:function(e,t,n){e.exports=n.p+"static/michael-scott.c57abd2e.jpg"},207:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(1),s=a(o);n(11);var i=function(e){function t(n){r(this,t);var a=l(this,e.call(this,n));return c.call(a),a}return u(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:"ds-avatar-container"},s.default.createElement("img",{src:this.props.userImg,className:"ds-avatar "+this.checkSize(this.props)}))},t}(s.default.Component),c=function(){this.checkSize=function(e){var t="";return t="small"===e.size?"ds-avatar-small":"large"===e.size?"ds-avatar-large":"medium"===e.size?"ds-avatar-medium":""}};t.default=i,e.exports=t.default},219:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){return e.raw=t,e}t.__esModule=!0;var s=o(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 16px;\n  margin-bottom: 24px;\n  align-items: end;\n  justify-items: center;\n"],["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 16px;\n  margin-bottom: 24px;\n  align-items: end;\n  justify-items: center;\n"]),i=o(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]),c=n(1),f=a(c),d=n(6),m=(a(d),n(13)),p=a(m),g=n(15),y=a(g);n(27);var E=n(12),h=a(E),b=n(207),v=a(b),x=n(28),w=a(x);n(11);var _=n(680),j=a(_),z=w.default.div(s),I=w.default.div(i),O=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return f.default.createElement("div",{className:"ds-app-grid"},f.default.createElement(p.default,null),f.default.createElement("div",{className:"ds-main-content"},f.default.createElement("div",{className:"ds-container"},f.default.createElement("h1",null,"Avatar"),f.default.createElement("h3",{className:"subheading"},"Avatars allow to display a person's Profile Image."),f.default.createElement(z,null,f.default.createElement(I,null,f.default.createElement(v.default,{userImg:j.default,size:"small"}),f.default.createElement("code",{style:{marginTop:"8px"}},"small")),f.default.createElement(I,null,f.default.createElement(v.default,{userImg:j.default}),f.default.createElement("code",{style:{marginTop:"8px"}},"base")),f.default.createElement(I,null,f.default.createElement(v.default,{userImg:j.default,size:"medium"}),f.default.createElement("code",{style:{marginTop:"8px"}},"medium")),f.default.createElement(I,null,f.default.createElement(v.default,{userImg:j.default,size:"large"}),f.default.createElement("code",{style:{marginTop:"8px"}},"large"))),f.default.createElement("h4",{className:"ds-usage-title"},"Usage"),f.default.createElement("p",null,"Avatars are Presentational React Components that you can use by simply instantiate a ",f.default.createElement("code",null,"DSAvatar")," tag and pass attributes for userImg ",f.default.createElement("code",null,"(string | obj)"),", and size ",f.default.createElement("code",null,"(string)"),"."),f.default.createElement(y.default,{className:"jsx"},"import Img from './img.jpg'\n\nclass DemoPage extends React.Component {\n  render() {\n    return (\n      <DSAvatar\n        userImg={Img}\n        size=\"large\"\n      />\n    )\n  }\n}")),f.default.createElement(h.default,null)))},t}(f.default.Component);t.default=O,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-avatar-js-8dee1a77975c64de8576.js.map