!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1),e(6),e(7),e(8)},function(n,t,e){var o=e(2);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(4)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(t=n.exports=e(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Heebo|Roboto);",""]),t.push([n.i,"nav {\n  display: flex;\n  color: #EBF5F9;\n  background: #52A5CC;\n  width: 100%;\n  top: 0;\n  height: 75px;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  justify-content: center;\n  border-bottom: 5px solid #3B76AD; }\n\n#burgernav #dropbutton {\n  margin-right: 10px;\n  background: transparent;\n  border: none;\n  position: absolute;\n  right: 10;\n  top: 18px; }\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #EBF5F9;\n  margin: 6px 0;\n  transition: 0.4s; }\n\n/* rotates bar1 -45 degrees and .change .bar3 rotates 45 degrees to make the X when clicked on */\n.change.bar1 {\n  -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n  transform: rotate(-45deg) translate(-9px, 6px); }\n\n/* makes the middle bar disapear when burger nav pressed on */\n.change.bar2 {\n  opacity: 0; }\n\n.change.bar3 {\n  -webkit-transform: rotate(45deg) translate(-9px, -6px);\n  transform: rotate(45deg) translate(-9px, -6px); }\n\n.dropdowncontent {\n  display: none;\n  position: fixed;\n  margin-top: 0;\n  left: 0;\n  background-color: #EBF5F9;\n  width: 90%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  font-size: 30px; }\n  .dropdowncontent a {\n    float: none;\n    color: #3B76AD;\n    padding: 10px 10px;\n    text-decoration: none;\n    display: block;\n    text-align: left; }\n  .dropdowncontent a :visited {\n    color: #3B76AD; }\n\n.show {\n  display: block; }\n\nbody {\n  background: #D8EBF3;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%233b76ad' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E\");\n  margin: 0px;\n  font-family: \"Roboto\", sans-serif; }\n\np {\n  text-align: center;\n  color: #EBF5F9;\n  font-size: 20px;\n  font-weight: bold; }\n  p a {\n    color: #FE6D43;\n    text-decoration: none;\n    font-weight: bold; }\n\n#siteDescription {\n  background: #3B76AD;\n  padding: 5px;\n  text-align: center;\n  color: #EBF5F9; }\n  #siteDescription h2 {\n    margin-top: 0; }\n\n.mainButton {\n  display: block;\n  text-decoration: none;\n  text-align: center;\n  margin: auto;\n  width: 250px;\n  line-height: 70px;\n  background-color: #FE6D43;\n  box-shadow: 0px 4px 4px #7D7D7D;\n  border-radius: 40px;\n  color: #EBF5F9;\n  font-size: 24px;\n  border: none; }\n  .mainButton:first-of-type {\n    margin-bottom: 30px; }\n\n#buttonContainer {\n  margin-top: 15vh; }\n\n.registerForm {\n  color: #EBF5F9;\n  font-weight: bold;\n  font-size: 30px;\n  width: 90%;\n  margin: auto;\n  text-align: center; }\n\n#formContainer {\n  margin: auto;\n  margin-top: 5vh;\n  background-color: #3B76AD;\n  border-radius: 15px;\n  padding-top: 10px;\n  padding-bottom: 5px; }\n\n#helpText {\n  position: fixed;\n  bottom: 0;\n  background: #3B76AD;\n  width: 100%;\n  margin: auto;\n  line-height: 10vh; }\n\n.inputBoxes {\n  margin: auto;\n  width: 90%;\n  line-height: 40px;\n  border-radius: 10px;\n  text-decoration: none;\n  display: inline-block;\n  border: none;\n  background: #EBF5F9;\n  margin-bottom: 15px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n  font-weight: bold;\n  font-size: 20px;\n  color: #C066A8;\n  padding: 3px; }\n  .inputBoxes::placeholder {\n    color: #C066A8; }\n\n#profileButtonContainer {\n  margin-top: 8vh; }\n\n.profileButtons {\n  display: flex;\n  justify-content: space-evenly;\n  margin: auto;\n  width: 80%;\n  line-height: 65px;\n  height: 65px;\n  text-decoration: none;\n  color: #EBF5F9;\n  font-size: 24px;\n  border-radius: 10px;\n  padding: 5px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25); }\n  .profileButtons:first-of-type {\n    margin-bottom: 5vh; }\n  .profileButtons:nth-of-type(2) {\n    margin-bottom: 5vh; }\n  .profileButtons.buttonPurple1 {\n    background: #C066A8; }\n    .profileButtons.buttonPurple1 img {\n      width: 48px; }\n  .profileButtons.buttonPurple2 {\n    background: #B779BB;\n    text-align: right; }\n    .profileButtons.buttonPurple2 img {\n      width: 48px; }\n  .profileButtons.buttonPurple3 {\n    background: #C3588B; }\n    .profileButtons.buttonPurple3 img {\n      width: 48px; }\n  .profileButtons:visited {\n    color: #EBF5F9; }\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),c=null,u=0,l=[],p=e(5);function d(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(x(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(x(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function f(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function g(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,e);e.insertBefore(t,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return b(t,n.attrs),g(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=u++;e=c||(c=m(t)),o=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),g(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){h(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return d(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var a=e[r];(s=i[a.id]).refs--,o.push(s)}n&&d(f(n,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,y=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function w(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t){var e=document.getElementById("dropbutton"),o=document.getElementsByClassName("bar");e.addEventListener("click",function(n){document.getElementById("dropdown").classList.toggle("show"),Array.from(o).forEach(function(n){n.classList.toggle("change")})})},function(n,t){var e=document.getElementById("txtPassword"),o=document.getElementById("txtConfirmPassword");function r(){e.value!=o.value?o.setCustomValidity("Passwords Don't Match"):o.setCustomValidity("")}e.onchange=r,o.onkeyup=r,document.getElementById("registerButton").onclick=function(){event.preventDefault();var n=new XMLHttpRequest,t="email="+document.getElementById("txtEmail").value+"&password="+document.getElementById("txtPassword").value+"&phpfunction=createUser";n.open("POST","/includes/registrationDAO.php",!0),n.setRequestHeader("content-type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){n.responseText},n.send(t),window.location.href="./registrationSuccess.html"}},function(n,t){document.getElementById("loginButton").onclick=function(){event.preventDefault();var n=new XMLHttpRequest,t="email="+document.getElementById("txtEmail1").value+"&password="+document.getElementById("txtPassword1").value+"&phpfunction=loginUser";n.open("POST","/includes/loginDAO.php",!0),n.setRequestHeader("content-type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){var t=n.responseText;"email or password does not match"!=t?window.location.assign(t):document.getElementById("errorbox").innerHTML=t},n.send(t)}}]);