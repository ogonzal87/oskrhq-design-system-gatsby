webpackJsonp([0xf7791461abf9],{212:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),s=a(c),u=n(6);a(u);n(11);var i=function(e){function t(n){return l(this,t),o(this,e.call(this,n))}return r(t,e),t.prototype.render=function(){return s.default.createElement("label",{className:"ds-radio-container"},s.default.createElement("input",{type:"radio",defaultChecked:this.props.checked,name:this.props.name}),s.default.createElement("span",{className:"ds-radio"}),s.default.createElement("span",{className:"ds-body2-text-style"},this.props.label))},t}(s.default.Component);t.default=i,e.exports=t.default},223:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),s=a(c),u=n(6),i=(a(u),n(13)),d=a(i),f=n(15),p=a(f);n(27);var m=n(12),h=a(m),b=n(212),y=a(b),E=n(28);a(E);n(11);var g=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:"ds-app-grid"},s.default.createElement(d.default,null),s.default.createElement("div",{className:"ds-main-content"},s.default.createElement("div",{className:"ds-container"},s.default.createElement("h1",null,"Radio"),s.default.createElement("h3",{className:"subheading"},"Binary radios allow the selection of a single option from a set."),s.default.createElement("div",{className:"ds-col-container"},s.default.createElement("div",{className:"ds-col-6"},s.default.createElement(y.default,{name:"radio",label:"Unchecked radio"})),s.default.createElement("div",{className:"ds-col-6"},s.default.createElement(y.default,{name:"radio",label:"Checked radio",checked:!0}))),s.default.createElement("h4",{className:"ds-usage-title"},"Usage"),s.default.createElement("p",null,"Radios are tools the user has to communicate something to the app. In this system they are a Presentational React Components that you can use by simply instantiate a ",s.default.createElement("code",null,"DSRadio")," tag and passing attributes for name ",s.default.createElement("code",null,"(string)"),", onChange ",s.default.createElement("code",null,"(function)"),", checked ",s.default.createElement("code",null,"(boolean)"),", and label ",s.default.createElement("code",null,"(string)"),"."),s.default.createElement(p.default,{className:"jsx"},'class DemoPage extends React.Component {\n\n  handleChange(event) {\n    // do something\n  }\n\n  render() {\n    return (\n      <DSRadio\n        name="radio"  \n        label="Option 1"\n        onChange={this.handleChange}\n      />\n              \n      <DSRadio\n        name="radio"  \n        label="Option 2"\n        onChange={this.handleChange}\n        checked\n      />\n    )\n  }\n}')),s.default.createElement(h.default,null)))},t}(s.default.Component);t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-radio-js-7104be918e34051e135f.js.map