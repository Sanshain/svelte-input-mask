(function () {
    'use strict';

    var n,l$1,u$1,t$1,o$1,f$1={},e$1=[],c$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l){ n[u]=l[u]; }return n}function a$1(n){var l=n.parentNode;l&&l.removeChild(n);}function h$1(l,u,i){var t,o,r,f={};for(r in u){ "key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r]; }if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps){ for(r in l.defaultProps){ void 0===f[r]&&(f[r]=l.defaultProps[r]); } }return v$1(l,f,t,o,null)}function v$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function p$1(n){return n.children}function d$1(n,l){this.props=n,this.context=l;}function _$1(n,l){if(null==l){ return n.__?_$1(n.__,n.__.__k.indexOf(n)+1):null; }for(var u;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){ return u.__e; } }return "function"==typeof n.type?_$1(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++){ if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break} }return k$1(n)}}function b$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||setTimeout)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;){ n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_$1(t):o,t.__h),z$1(u,t),t.__e!=o&&k$1(t)));}); }}function w$2(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$1,C=x.length;for(u.__k=[],h=0;h<l.length;h++){ if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(p$1,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type){ x[h]=void 0; }else { for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;} }j$2(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$1(k,s,n):s=A$1(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_$1(d));} }for(u.__e=g,h=C;h--;){ null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=_$1(i,h+1)),N(x[h],x[h])); }if(w){ for(h=0;h<w.length;h++){ M(w[h],w[++h],w[++h]); } }}function m$1(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++){ (i=t[o])&&(i.__=n,l="function"==typeof i.type?m$1(i,l,u):A$1(u,i,i,t,i.__e,l)); }return l}function x(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x(n,l);}):l.push(n)),l}function A$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d){ r=l.__d,l.__d=void 0; }else if(null==u||t!=o||null==t.parentNode){ n:if(null==o||o.parentNode!==n){ n.appendChild(t),r=null; }else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2){ if(f==t){ break n; } }n.insertBefore(t,o),r=o;} }return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u){ "children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i); }for(o in l){ t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i); }}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l){ if("string"==typeof u){ n.style.cssText=u; }else {if("string"==typeof i&&(n.style.cssText=i=""),i){ for(l in i){ u&&l in u||$$1(n.style,l,""); } }if(u){ for(l in u){ i&&u[l]===i[l]||$$1(n.style,l,u[l]); } }} }else if("o"===l[0]&&"n"===l[1]){ o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I,o):n.removeEventListener(l,o?T$1:I,o); }else if("dangerouslySetInnerHTML"!==l){if(t){ l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s"); }else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n){ try{n[l]=null==u?"":u;break n}catch(n$1){} }"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H=u.type;if(void 0!==u.constructor){ return null; }null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof H){if(g=u.props,m=(a=H.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in H&&H.prototype.render?u.__c=h=new H(g,x):(u.__c=h=new d$1(g,x),h.constructor=H,h.render=O$1),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,H.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v){ null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount); }else {if(null==H.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,A=l$1.__r,C=0,"prototype"in H&&H.prototype.render){ h.state=h.__s,h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context); }else { do{h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++C<25); }h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),$=null!=a&&a.type===p$1&&null==a.key?a.props.children:a,w$2(n,Array.isArray($)?$:[$],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else { null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c); }(a=l$1.diffed)&&a(u);}catch(n$1){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n$1,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n$1){l$1.__e(n$1,u.__v);}});}function L$1(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r){ for(;k<r.length;k++){ if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break} } }if(null==l){if(null===d){ return document.createTextNode(p); }l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d){ y===p||c&&l.data===p||(l.data=p); }else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r){ for(y={},k=0;k<l.attributes.length;k++){ y[l.attributes[k].name]=l.attributes[k].value; } }(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v){ u.__k=[]; }else if(k=u.props.children,w$2(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_$1(i,0),c),null!=r){ for(k=r.length;k--;){ null!=r[k]&&a$1(r[k]); } }c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H$1(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H$1(l,"checked",k,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n$1){l$1.__e(n$1,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount){ try{t.componentWillUnmount();}catch(n$1){l$1.__e(n$1,u);} }t.base=t.__P=null;}if(t=n.__k){ for(o=0;o<t.length;o++){ t[o]&&N(t[o],u,"function"!=typeof n.type); } }i||null==n.__e||a$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function P$1(u,i,t){var o,r,e;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$2(i,u=(!o&&t||i).__k=h$1(p$1,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$1(e,u);}n=e$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;){ if((t=l.__c)&&!t.__){ try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r){ return t.__E=t }}catch(l$1){n=l$1;} } }throw n}},u$1=0,d$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),b$1(this));},d$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$1(this));},d$1.prototype.render=p$1,t$1=[],g$2.__r=0;

    var t,r,u,i,o=0,c=[],f=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:f}),i.__[t]}function p(n){return o=1,y(z,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):z(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){r.u=!0;var c=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H){ return !0; }var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N})){ return !c||c.call(this,n,t,r); }var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!!i&&(!c||c.call(this,n,t,r))};}return o.__N||o.__}function h(u,i){var o=d(t++,3);!l$1.__s&&w$1(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function _(n){return o=5,F$1(function(){return {current:n}},[])}function F$1(n,r){var u=d(t++,7);return w$1(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function b(){for(var t;t=c.shift();){ if(t.__P&&t.__H){ try{t.__H.__h.forEach(j$1),t.__H.__h.forEach(k),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);} } }}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=f,n.__N=n.i=void 0;})):(i.__h.forEach(j$1),i.__h.forEach(k),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==c.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));})(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==f&&(n.__=n.__V),n.i=void 0,n.__V=f;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(j$1),t.__h=t.__h.filter(function(n){return !n.__||k(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{j$1(n);}catch(n$1){r=n$1;}}),r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function k(n){var t=r;n.__c=n.__(),r=t;}function w$1(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function z(n,t){return "function"==typeof t?t(n):t}

    function S(n,t){for(var e in t){ n[e]=t[e]; }return n}function g(n,t){for(var e in n){ if("__source"!==e&&!(e in t)){ return !0; } }for(var r in t){ if("__source"!==r&&n[r]!==t[r]){ return !0; } }return !1}function C(n){this.props=n;}(C.prototype=new d$1).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return g(this.props,n)||g(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var A=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then){ for(var u,o=t;o=o.__;){ if((u=o.__c)&&u.__c){ return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t); } } }A(n,t,e,r);};var O=l$1.unmount;function T(){this.__u=0,this.t=null,this.__b=null;}function L(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function D(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(T.prototype=new d$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=L(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();){ t.forceUpdate(); }}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},T.prototype.componentWillUnmount=function(){this.t=[];},T.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__a&&h$1(p$1,null,n.fallback);return u&&(u.__h=null),[h$1(p$1,null,t.__a?null:n.children),u]};var F=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size)){ for(e=n.u;e;){for(;e.length>3;){ e.pop()(); }if(e[1]<e[0]){ break; }n.u=e=e[2];} }};(D.prototype=new d$1).__a=function(n){var t=this,e=L(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),F(t,n,r)):u();};e?e(o):o();}},D.prototype.render=function(n){this.u=null,this.o=new Map;var t=x(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;){ this.o.set(t[e],this.u=[1,0,this.u]); }return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){F(n,e,t);});};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$="undefined"!=typeof document,j=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};d$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(d$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var J={configurable:!0,get:function(){return this.class}},K=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];$&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!j(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===i&&(i=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=x(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=x(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J));}n.$$typeof=W,K&&K(n);};var Q=l$1.__r;l$1.__r=function(n){Q&&Q(n);};

    function noop() { }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return function () { return node.removeEventListener(event, handler, options); };
    }
    function attr(node, attribute, value) {
        if (value == null)
            { node.removeAttribute(attribute); }
        else if (node.getAttribute(attribute) !== value)
            { node.setAttribute(attribute, value); }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.wholeText !== data)
            { text.data = data; }
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    var HtmlTag = function HtmlTag(is_svg) {
        if ( is_svg === void 0 ) is_svg = false;

        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
    };
    HtmlTag.prototype.c = function c (html) {
        this.h(html);
    };
    HtmlTag.prototype.m = function m (html, target, anchor) {
            if ( anchor === void 0 ) anchor = null;

        if (!this.e) {
            if (this.is_svg)
                { this.e = svg_element(target.nodeName); }
            else
                { this.e = element(target.nodeName); }
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    };
    HtmlTag.prototype.h = function h (html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    };
    HtmlTag.prototype.i = function i (anchor) {
        for (var i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    };
    HtmlTag.prototype.p = function p (html) {
        this.d();
        this.h(html);
        this.i(this.a);
    };
    HtmlTag.prototype.d = function d () {
        this.n.forEach(detach);
    };

    var current_component;
    function set_current_component(component) {
        current_component = component;
    }

    var dirty_components = [];
    var binding_callbacks = [];
    var render_callbacks = [];
    var flush_callbacks = [];
    var resolved_promise = Promise.resolve();
    var update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    var seen_callbacks = new Set();
    var flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        var saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                var component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                { binding_callbacks.pop()(); }
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (var i = 0; i < render_callbacks.length; i += 1) {
                var callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            var dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    var outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        var ref = component.$$;
        var fragment = ref.fragment;
        var on_mount = ref.on_mount;
        var on_destroy = ref.on_destroy;
        var after_update = ref.after_update;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(function () {
                var new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push.apply(on_destroy, new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        var $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty) {
        if ( dirty === void 0 ) dirty = [-1];

        var parent_component = current_component;
        set_current_component(component);
        var $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props: props,
            update: noop,
            not_equal: not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty: dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        var ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, function (i, ret) {
                var rest = [], len = arguments.length - 2;
                while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

                var value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        { $$.bound[i](value); }
                    if (ready)
                        { make_dirty(component, i); }
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                var nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                { transition_in(component.$$.fragment); }
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    var SvelteComponent = function SvelteComponent () {};

    SvelteComponent.prototype.$destroy = function $destroy () {
        destroy_component(this, 1);
        this.$destroy = noop;
    };
    SvelteComponent.prototype.$on = function $on (type, callback) {
        var callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return function () {
            var index = callbacks.indexOf(callback);
            if (index !== -1)
                { callbacks.splice(index, 1); }
        };
    };
    SvelteComponent.prototype.$set = function $set ($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    };

    /* node_modules\svelte-mask\src\PhoneMaskInput.svelte generated by Svelte v3.50.0 */

    function create_fragment(ctx) {
    	var div2;
    	var input;
    	var t0;
    	var div0;
    	var t1;
    	var div0_style_value;
    	var t2;
    	var div1;
    	var t3;
    	var mounted;
    	var dispose;

    	return {
    		c: function c() {
    			div2 = element("div");
    			input = element("input");
    			t0 = space();
    			div0 = element("div");
    			t1 = text(/*holderValue*/ ctx[1]);
    			t2 = space();
    			div1 = element("div");
    			t3 = text(/*value*/ ctx[3]);
    			attr(input, "type", "tel");
    			attr(input, "class", "svelte-1b22go2");
    			attr(div0, "class", "placeholder svelte-1b22go2");
    			attr(div0, "style", div0_style_value = `margin-left: ${/*holderOffset*/ ctx[2]}px;`);
    			attr(div1, "class", "mask svelte-1b22go2");
    			attr(div2, "class", "container svelte-1b22go2");
    		},
    		m: function m(target, anchor) {
    			insert(target, div2, anchor);
    			append(div2, input);
    			set_input_value(input, /*value*/ ctx[3]);
    			append(div2, t0);
    			append(div2, div0);
    			append(div0, t1);
    			append(div2, t2);
    			append(div2, div1);
    			append(div1, t3);
    			/*div1_binding*/ ctx[9](div1);

    			if (!mounted) {
    				dispose = [
    					listen(input, "input", /*onInput*/ ctx[4]),
    					listen(input, "input", /*input_input_handler*/ ctx[8])
    				];

    				mounted = true;
    			}
    		},
    		p: function p(ctx, ref) {
    			var dirty = ref[0];

    			if (dirty & /*value*/ 8) {
    				set_input_value(input, /*value*/ ctx[3]);
    			}

    			if (dirty & /*holderValue*/ 2) { set_data(t1, /*holderValue*/ ctx[1]); }

    			if (dirty & /*holderOffset*/ 4 && div0_style_value !== (div0_style_value = `margin-left: ${/*holderOffset*/ ctx[2]}px;`)) {
    				attr(div0, "style", div0_style_value);
    			}

    			if (dirty & /*value*/ 8) { set_data(t3, /*value*/ ctx[3]); }
    		},
    		i: noop,
    		o: noop,
    		d: function d(detaching) {
    			if (detaching) { detach(div2); }
    			/*div1_binding*/ ctx[9](null);
    			mounted = false;
    			run_all(dispose);
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	var originHolder = $$props.originHolder; if ( originHolder === void 0 ) originHolder = '+7(000)0000000';
    	var exceptNotNumbers = $$props.exceptNotNumbers; if ( exceptNotNumbers === void 0 ) exceptNotNumbers = [];
    	var onComplete = $$props.onComplete; if ( onComplete === void 0 ) onComplete = null;

    	/**
     * @type {HTMLElement}
     */
    	var shadowElement = null;

    	var holderValue = originHolder;
    	var holderOffset = 0;
    	var value = '';

    	/**
     * 
     */
    	var notNumbers = Array.from(originHolder).reduce(
    		function (acc, c, i, arr) { return (!~exceptNotNumbers.indexOf(c) && Number.isNaN(Number.parseInt(c))
    		? acc[i] = c
    		: '', acc); },
    		[]
    	);

    	/**
    * @param {InputEvent} event
    */
    	function onInput(event) {
    		// console.log(event);
    		var formatHolder = function (autoValue) {
    			var len = (autoValue || event.target.value).length;
    			$$invalidate(1, holderValue = originHolder.slice(len));

    			setTimeout(function () {
    				$$invalidate(2, holderOffset = shadowElement.offsetWidth);
    			});
    		};

    		// console.log(event);
    		if (~['insertText', 'insertFromPaste'].indexOf(event.inputType)) {
    			var autoValue = validate(event.inputType, event);

    			if (autoValue === false) {
    				event.target.value = value;

    				// value = event.target.value;
    				return;
    			}

    			formatHolder(autoValue);
    		} else if (~['deleteContentBackward', 'deleteContentForward'].indexOf(event.inputType)) {
    			// console.log(event);
    			// проверяем регуляркой:
    			if (!(event.target.value.match(/\+\d\(\d{3}\)\d*/) || event.target.value.match(/\+\d\(\d{0,3}/) || event.target.value.match(/\+?/))) {
    				event.target.value = value;
    				return;
    			}

    			formatHolder('');
    		}
    	}

    	/**
     * 
     * @param {string} typeInput // {"insertText"|"deleteContentBackward"}
     * @param {InputEvent} event
     */
    	function validate(typeInput, event) {
    		var data = event.data;

    		// console.log(data);
    		if (data && data.length === 1) {
    			for (var i in notNumbers) {
    				if (Object.hasOwnProperty.call(notNumbers, i)) {
    					var char = notNumbers[+i];

    					if (value.length == +i && !Number.isNaN(Number.parseInt(data))) {
    						$$invalidate(3, value += char + data);
    						event.target.value = value;
    						return value;
    					}
    				} // else if(data === c) return false;
    			}

    			// if (value.length == 0){
    			//   if (!Number.isNaN(Number.parseInt(data))){
    			//     value = '+' + data;
    			//     event.target.value = value;
    			//     return value;
    			//   }
    			//   else if(data === '+') return false;
    			// }
    			// else if (value.length == 2){
    			//   if (!Number.isNaN(Number.parseInt(data))){
    			//     value += '(' + data;
    			//     event.target.value = value;
    			//     return value;
    			//   }        
    			// }
    			// else if (value.length == 6){
    			//   if (!Number.isNaN(Number.parseInt(data))){
    			//     value += ')' + data;
    			//     event.target.value = value;
    			//     return value;
    			//   }        
    			// }
    			if (!Number.isNaN(Number.parseInt(data)) && value.length < originHolder.length) {
    				$$invalidate(3, value += data);
    				event.target.value = value;

    				if (value.length === originHolder.length && onComplete) { setTimeout(function () {
    					onComplete(value);
    				}); }

    				return value;
    			}
    		} else if (data && data.length > 1 && data.length < 13) {
    			// if (data.match(/\d/))
    			return false;
    		}

    		return false;
    	}

    	function input_input_handler() {
    		value = this.value;
    		$$invalidate(3, value);
    	}

    	function div1_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](function () {
    			shadowElement = $$value;
    			$$invalidate(0, shadowElement);
    		});
    	}

    	$$self.$$set = function ($$props) {
    		if ('originHolder' in $$props) { $$invalidate(5, originHolder = $$props.originHolder); }
    		if ('exceptNotNumbers' in $$props) { $$invalidate(6, exceptNotNumbers = $$props.exceptNotNumbers); }
    		if ('onComplete' in $$props) { $$invalidate(7, onComplete = $$props.onComplete); }
    	};

    	return [
    		shadowElement,
    		holderValue,
    		holderOffset,
    		value,
    		onInput,
    		originHolder,
    		exceptNotNumbers,
    		onComplete,
    		input_input_handler,
    		div1_binding
    	];
    }

    var PhoneMaskInput = /*@__PURE__*/(function (SvelteComponent) {
    	function PhoneMaskInput(options) {
    		SvelteComponent.call(this);

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			originHolder: 5,
    			exceptNotNumbers: 6,
    			onComplete: 7
    		});
    	}

    	if ( SvelteComponent ) PhoneMaskInput.__proto__ = SvelteComponent;
    	PhoneMaskInput.prototype = Object.create( SvelteComponent && SvelteComponent.prototype );
    	PhoneMaskInput.prototype.constructor = PhoneMaskInput;

    	return PhoneMaskInput;
    }(SvelteComponent));

    //@ts-check

    // import { css, setup, styled } from "goober";
    // import "./styles.css";

    // setup(React.createElement);

    // const color = 'red'
    // const counter = css`
    //     color: ${color};
    //     &:hover{
    //         text-shadow: red;
    //     }
    // `;

    // const Title = styled("h1")`
    //   text-align: center;
    // `;



    var App =  function () {

        var inputContainer = _(null);

        h(function () {
                                           
            new PhoneMaskInput({
                target: inputContainer.current,
                props: {
                    onComplete: function (v) {
                        console.log(v);
                        setMsg(function (ov) { return v; });
                    }
                }
            });        
            return function () {};
        }, []);

        var ref = p('');
        var msg = ref[0];
        var setMsg = ref[1];

        return h$1( 'div', { className: "App" },         
            h$1( 'p', { style: { cursor: 'pointer', userSelect: null } }, "Enter complete number: ", h$1( 'b', { className: 'counter' }, 
                    msg
                )
            ), 
            h$1( 'div', { ref: inputContainer })
        )
    };

    P$1(h$1( App, null ), document.body);

})();
//# sourceMappingURL=bundle.js.map
