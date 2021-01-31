/**
 *  name: @jswork/react-rte-slate
 *  description: Pure React rich text WYSIWYG editor based on slatejs.
 *  homepage: 
 *  version: 1.0.0
 *  date: 2021-01-31T02:35:02.378Z
 *  license: MIT
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@jswork/noop"),require("classnames"),require("prop-types"),require("react"),require("slate"),require("@jswork/next-compose"),require("@jswork/next-slate-serialize"),require("@jswork/next-slate-deserialize"),require("@jswork/next-slate-defaults"),require("fast-deep-equal"),require("slate-react")):"function"==typeof define&&define.amd?define(["exports","@jswork/noop","classnames","prop-types","react","slate","@jswork/next-compose","@jswork/next-slate-serialize","@jswork/next-slate-deserialize","@jswork/next-slate-defaults","fast-deep-equal","slate-react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactRteSlate={},e.noop,e.classNames,e.PropTypes,e.React,e.slate,e.nxCompose,e.NxSlateSerialize,e.NxDeslateSerialize,e.NxSlateDefaults,e.deepEqual,e.slateReact)}(this,(function(e,t,r,n,a,o,l,u,i,s,p,c){"use strict";function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=f(t),h=f(r),m=f(n),y=f(a),v=f(l),g=f(u),b=f(i),j=f(s),w=f(p),N=function(e,t){return(N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}N(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var O=function(){return(O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function k(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}var E="react-rte-slate",S={element:c.DefaultElement,leaf:c.DefaultLeaf},_=function(e){function t(t){var r=e.call(this,t)||this;r.editor=null,r.initialValue=[],r.renderElement=function(e){return r.renderHooks("element",e)},r.renderLeaf=function(e){return r.renderHooks("leaf",e)},r.handleChange=function(e){var t=r.props.onChange,n=r.handleSerialize("exporter",e),a={value:e};r.setState(a,(function(){t({target:{value:n}})}))};var n=t.value,a=r.withDecorators;return r.initialValue=r.toSlateNodes(n),r.editor=a(o.createEditor()),r.state={value:r.initialValue},r}return x(t,e),Object.defineProperty(t.prototype,"withDecorators",{get:function(){var e=this.props.plugins.map((function(e){return e.decorator})).filter(Boolean);return v.default.apply(void 0,function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var o=arguments[t],l=0,u=o.length;l<u;l++,a++)n[a]=o[l];return n}([c.withReact],e))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hooks",{get:function(){return this.props.plugins.filter((function(e){return e.hooks}))},enumerable:!1,configurable:!0}),t.prototype.renderHooks=function(e,t){var r=this,n=S[e],a=this.hooks.map((function(t){return t.hooks[e]})).filter(Boolean).find((function(e){return e(r,t)}));return a?a(this,t):y.default.createElement(n,O({},t))},t.prototype.toSlateNodes=function(e){return this.handleSerialize("importer",e)},t.prototype.shouldComponentUpdate=function(e){var t=this.toSlateNodes(e.value);return w.default(t,this.initialValue)||this.setState({value:t}),!0},t.prototype.handleSerialize=function(e,t){var r=this.props.plugins.map((function(t){return t[e]})).filter(Boolean);return("exporter"===e?g.default:b.default).parse(t,{process:function(t,n){var a=r.find((function(e){return e(t,n)}));return a?a(t,n):j.default[e](t,n)}})},t.prototype.render=function(){var e=this.props,t=e.className;e.value,e.onChange;var r=e.placeholder,n=k(e,["className","value","onChange","placeholder"]),a=this.state.value;return y.default.createElement("section",O({"data-component":E,className:h.default(E,t)},n),y.default.createElement(c.Slate,{editor:this.editor,value:a,onChange:this.handleChange},y.default.createElement(c.Editable,{placeholder:r,renderLeaf:this.renderLeaf,renderElement:this.renderElement})))},t.displayName=E,t.version="1.0.0",t.propTypes={className:m.default.string,value:m.default.string,onChange:m.default.func,plugins:m.default.array},t.defaultProps={value:"",onChange:d.default,plugins:[]},t}(a.Component),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.render=function(){var e=this.props,t=e.active,r=e.className,n=e.tooltip,a=k(e,["active","className","tooltip"]);return y.default.createElement("button",O({"aria-label":n,"data-balloon-pos":"up",className:h.default({"is-active":t},"react-rte-slate__button",r)},a))},t}(y.default.Component),q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.render=function(){var e=this.props,t=e.className,r=k(e,["className"]);return y.default.createElement("nav",O({className:h.default("react-rte-slate__button-group",t)},r))},t}(y.default.Component),P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.render=function(){var e=this.props,t=e.className,r=k(e,["className"]);return y.default.createElement("nav",O({className:h.default("react-rte-slate__toolbar",t)},r))},t}(y.default.Component);e.Button=C,e.ButtonGroup=q,e.Editor=_,e.Toolbar=P,Object.defineProperty(e,"__esModule",{value:!0})}));
