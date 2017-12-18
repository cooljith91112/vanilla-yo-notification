!function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1);window.VanillaYoNotification=o.default},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e(2);var o=function(){function t(){this.defaultConfig={content:"",footer:"",timeout:3e3,title:""},this.init()}return t.prototype.init=function(){this.buildContainers()},t.prototype.buildContainers=function(){var t=document.createElement("div");t.className="notif-mainContainer topRight",this.notifInner=document.createElement("div"),this.notifInner.className="notif-inner",t.appendChild(this.notifInner),document.body.appendChild(t)},t.prototype.show=function(t){var n=this,e=document.createElement("div");e.className="vanilla-yo-notification",this.notificationTemplate='\n        <div class="notification_container">\n            <div class="notification_header">\n            '+(t.title?t.title:this.defaultConfig.title)+'\n            </div>\n            <div class="notification_body">\n            '+(t.content?t.content:this.defaultConfig.content)+'\n            </div>\n            <div class="notification_footer">\n            '+(t.footer?t.footer:this.defaultConfig.footer)+"\n            </div>\n        </div>\n        ",e.innerHTML=this.notificationTemplate,this.notifInner.appendChild(e),setTimeout(function(){n.destroyNotification(e)},t.timeout?t.timeout:this.defaultConfig.timeout)},t.prototype.destroyNotification=function(t){this.notifInner.removeChild(t)},t}();n.default=o},function(t,n,e){var o=e(3);"string"==typeof o&&(o=[[t.i,o,""]]);var i={};i.transform=void 0;e(5)(o,i);o.locals&&(t.exports=o.locals)},function(t,n,e){n=t.exports=e(4)(void 0),n.push([t.i,'\n\n.notif-mainContainer {\n    z-index: 999;\n    position: fixed;\n    width: 350px;\n    max-width: 98%;\n    font-family: "Segoe UI","Tahoma","Calibri","Verdana",sans-serif;\n    color: #999;\n    box-sizing: border-box;\n}\n\n.notif-mainContainer.topRight{\n    top: 8px;\n    right: 8px;\n}\n\n.notif-inner {\n    display: flex;\n    flex-direction: column;\n}\n\n.vanilla-yo-notification{\n    width: 250px;\n    background: #58a758;\n    color: white;\n    position: relative;\n    cursor: pointer;\n    padding: 8px;\n    margin-bottom: 12px;\n    display: flex;\n}\n\n\n.notification_header{\n\tfont-size: 15px;\n    font-weight: bold\n}',""])},function(t,n){function e(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var r=o(i);return[e].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([r]).join("\n")}return[e].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var o=e(n,t);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){function o(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=h[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(u(o.parts[r],n))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(u(o.parts[r],n));h[o.id]={id:o.id,refs:1,parts:a}}}}function i(t,n){for(var e=[],o={},i=0;i<t.length;i++){var r=t[i],a=n.base?r[0]+n.base:r[0],s=r[1],f=r[2],c=r[3],u={css:s,media:f,sourceMap:c};o[a]?o[a].parts.push(u):e.push(o[a]={id:a,parts:[u]})}return e}function r(t,n){var e=m(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=g[g.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),g.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=g.indexOf(t);n>=0&&g.splice(n,1)}function s(t){var n=document.createElement("style");return t.attrs.type="text/css",c(n,t.attrs),r(t,n),n}function f(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(n,t.attrs),r(t,n),n}function c(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function u(t,n){var e,o,i,r;if(n.transform&&t.css){if(!(r=n.transform(t.css)))return function(){};t.css=r}if(n.singleton){var c=y++;e=b||(b=s(n)),o=l.bind(null,e,c,!1),i=l.bind(null,e,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=f(n),o=p.bind(null,e,n),i=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(n),o=d.bind(null,e),i=function(){a(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}function l(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(n,i);else{var r=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function d(t,n){var e=n.css,o=n.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function p(t,n,e){var o=e.css,i=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||r)&&(o=x(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},v=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var n={};return function(e){return void 0===n[e]&&(n[e]=t.call(this,e)),n[e]}}(function(t){return document.querySelector(t)}),b=null,y=0,g=[],x=e(6);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=v()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=i(t,n);return o(e,n),function(t){for(var r=[],a=0;a<e.length;a++){var s=e[a],f=h[s.id];f.refs--,r.push(f)}if(t){o(i(t,n),n)}for(var a=0;a<r.length;a++){var f=r[a];if(0===f.refs){for(var c=0;c<f.parts.length;c++)f.parts[c]();delete h[f.id]}}}};var w=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}}]);
//# sourceMappingURL=vanilla-yo-notification.js.map