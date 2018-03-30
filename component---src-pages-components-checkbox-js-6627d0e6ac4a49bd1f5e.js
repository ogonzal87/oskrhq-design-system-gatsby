webpackJsonp([0x8d2b22515019],{209:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=n(1),s=a(r),u=n(7);a(u);n(11);var i=function(e){function t(n){c(this,t);var a=o(this,e.call(this,n));return a.state={isChecked:a.props.checked},a}return l(t,e),t.prototype.render=function(){return s.default.createElement("label",{className:"ds-checkbox-container"},s.default.createElement("input",{type:"checkbox",className:"ds-checkbox",defaultChecked:this.state.isChecked}),s.default.createElement("i",{className:"material-icons ds-icon-tiny ds-checkmark"},"done"),s.default.createElement("span",{className:"ds-body2-text-style"},this.props.label))},t}(s.default.Component);t.default=i,e.exports=t.default},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=n(1),s=a(r),u=n(7),i=(a(u),n(13)),d=a(i),h=n(16),f=a(h);n(29);var m=n(12),p=a(m),b=n(209),k=a(b),y=n(31);a(y);n(11);var g=function(e){function t(){var n,a,l;c(this,t);for(var r=arguments.length,s=Array(r),u=0;u<r;u++)s[u]=arguments[u];return n=a=o(this,e.call.apply(e,[this].concat(s))),a.state={checkboxA:!1,checkboxB:!0},l=n,o(a,l)}return l(t,e),t.prototype.handleChange=function(e){var t,n=e.target,a="checkbox"===n.type?n.checked:n.value,c=n.name;this.setState((t={},t[c]=a,t))},t.prototype.render=function(){return s.default.createElement("div",{className:"ds-app-grid"},s.default.createElement(d.default,null),s.default.createElement("div",{className:"ds-main-content"},s.default.createElement("div",{className:"ds-container"},s.default.createElement("h1",null,"Checkbox"),s.default.createElement("h3",{className:"subheading"},"Binary checkboxes allow the selection of multiple options from a set."),s.default.createElement("div",{className:"ds-col-container"},s.default.createElement("div",{className:"ds-col-6"},s.default.createElement(k.default,{name:"checkboxA",label:"Unchecked Checkbox",onChange:this.handleChange,checked:this.state.checkboxA})),s.default.createElement("div",{className:"ds-col-6"},s.default.createElement(k.default,{name:"checkboxB",label:"Checked Checkbox",onChange:this.handleChange,checked:this.state.checkboxB}))),s.default.createElement("h4",{className:"ds-usage-title"},"Usage"),s.default.createElement("p",null,"Checkboxes are tools the user has to communicate something to the system. In this system they are a Presentational React Component that you can use by simply instantiate a ",s.default.createElement("code",null,"DSCheckbox")," tag and passing attributes for name ",s.default.createElement("code",null,"(string)"),", onChange ",s.default.createElement("code",null,"(function)"),", checked ",s.default.createElement("code",null,"(boolean)"),", and label ",s.default.createElement("code",null,"(string)"),"."),s.default.createElement(f.default,{className:"jsx"},'class DemoPage extends React.Component {\n  state = {\n    checkedA: false,\n    checkedB: true,\n  };\n\n  handleChange(event) {\n    const target = event.target;\n    const value = target.type === \'checkbox\' ? target.checked : target.value;\n    const name = target.name;\n\n    this.setState({\n      [name]: value\n    });\n  }\n\n  render() {\n    return (\n\n      <DSCheckbox\n        name="checkboxA"  \n        label="Option 1"\n        onChange={this.handleChange}\n        checked={this.state.checkboxA}\n      />\n              \n      <DSCheckbox\n        name="checkboxB"  \n        label="Option 2"\n        onChange={this.handleChange}\n        checked={this.state.checkboxB}\n      />\n    )\n  }\n}')),s.default.createElement(p.default,null)))},t}(s.default.Component);t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-checkbox-js-6627d0e6ac4a49bd1f5e.js.map