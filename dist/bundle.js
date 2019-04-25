/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Heebo|Roboto);", ""]);

// Module
exports.push([module.i, "nav {\n  display: flex;\n  color: #EBF5F9;\n  background: #52A5CC;\n  width: 100%;\n  top: 0;\n  height: 75px;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  justify-content: center;\n  border-bottom: 5px solid #3B76AD; }\n\n#burgernav #dropbutton {\n  margin-right: 10px;\n  background: transparent;\n  border: none;\n  position: absolute;\n  right: 10;\n  top: 18px; }\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #EBF5F9;\n  margin: 6px 0;\n  transition: 0.4s; }\n\n/* rotates bar1 -45 degrees and .change .bar3 rotates 45 degrees to make the X when clicked on */\n.change.bar1 {\n  -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n  transform: rotate(-45deg) translate(-9px, 6px); }\n\n/* makes the middle bar disapear when burger nav pressed on */\n.change.bar2 {\n  opacity: 0; }\n\n.change.bar3 {\n  -webkit-transform: rotate(45deg) translate(-9px, -6px);\n  transform: rotate(45deg) translate(-9px, -6px); }\n\n.dropdowncontent {\n  display: none;\n  position: fixed;\n  margin-top: 0;\n  left: 0;\n  background-color: #EBF5F9;\n  width: 90%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  font-size: 30px; }\n  .dropdowncontent a {\n    float: none;\n    color: #3B76AD;\n    padding: 10px 10px;\n    text-decoration: none;\n    display: block;\n    text-align: left; }\n  .dropdowncontent a :visited {\n    color: #3B76AD; }\n\n.show {\n  display: block; }\n\nbody {\n  background: #D8EBF3;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%233b76ad' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E\");\n  margin: 0px;\n  font-family: \"Roboto\", sans-serif;\n  margin-bottom: 70px; }\n\nh2 {\n  text-align: center; }\n\np {\n  text-align: center;\n  color: #EBF5F9;\n  font-size: 20px;\n  font-weight: bold; }\n  p a {\n    color: #FE6D43;\n    text-decoration: none;\n    font-weight: bold; }\n\n.siteDescription {\n  background: #3B76AD;\n  padding: 5px;\n  text-align: center;\n  color: #EBF5F9; }\n\n#trackerInformation {\n  margin-bottom: 20px; }\n  #trackerInformation h3 {\n    margin-top: 0; }\n  #trackerInformation p {\n    font-size: 15px;\n    font-weight: normal; }\n\nhr {\n  border-color: #EBF5F9; }\n\n.mainButton {\n  display: block;\n  text-decoration: none;\n  text-align: center;\n  margin: auto;\n  width: 250px;\n  line-height: 70px;\n  background-color: #FE6D43;\n  box-shadow: 0px 4px 4px #7D7D7D;\n  border-radius: 40px;\n  color: #EBF5F9;\n  font-size: 24px;\n  border: none; }\n  .mainButton:first-of-type {\n    margin-bottom: 30px; }\n\n#buttonContainer {\n  margin-top: 15vh; }\n\n.registerForm {\n  color: #EBF5F9;\n  font-weight: bold;\n  font-size: 30px;\n  width: 90%;\n  margin: auto;\n  text-align: center; }\n\n#formContainer {\n  margin: auto;\n  margin-top: 5vh;\n  background-color: #3B76AD;\n  border-radius: 15px;\n  padding-top: 10px;\n  padding-bottom: 5px; }\n\n#helpText {\n  position: fixed;\n  bottom: 0;\n  background: #3B76AD;\n  width: 100%;\n  margin: auto;\n  line-height: 10vh;\n  margin-top: 20px; }\n\n.inputBoxes {\n  margin: auto;\n  width: 90%;\n  line-height: 40px;\n  border-radius: 10px;\n  text-decoration: none;\n  display: inline-block;\n  border: none;\n  background: #EBF5F9;\n  margin-bottom: 15px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n  font-weight: bold;\n  font-size: 20px;\n  color: #C066A8;\n  padding: 3px; }\n  .inputBoxes::placeholder {\n    color: #C066A8; }\n\n#profileButtonContainer {\n  margin-top: 8vh; }\n\n.profileButtons {\n  display: flex;\n  justify-content: space-evenly;\n  margin: auto;\n  width: 80%;\n  line-height: 65px;\n  height: 65px;\n  text-decoration: none;\n  color: #EBF5F9;\n  font-size: 24px;\n  border-radius: 10px;\n  padding: 5px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25); }\n  .profileButtons:first-of-type {\n    margin-bottom: 5vh; }\n  .profileButtons:nth-of-type(2) {\n    margin-bottom: 5vh; }\n  .profileButtons.buttonPurple1 {\n    background: #C066A8; }\n    .profileButtons.buttonPurple1 img {\n      width: 48px; }\n  .profileButtons.buttonPurple2 {\n    background: #B779BB;\n    text-align: right; }\n    .profileButtons.buttonPurple2 img {\n      width: 48px; }\n  .profileButtons.buttonPurple3 {\n    background: #C3588B; }\n    .profileButtons.buttonPurple3 img {\n      width: 48px; }\n  .profileButtons:visited {\n    color: #EBF5F9; }\n\n#moodContainer {\n  margin: auto;\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10vh;\n  text-align: center;\n  justify-content: space-between; }\n\n.moodButtons {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 30%;\n  height: 75px;\n  margin-bottom: 5px;\n  font-weight: bold;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.10s ease-in;\n  border-radius: 10px; }\n  .moodButtons img {\n    margin: auto;\n    height: 40px; }\n  .moodButtons.button7 {\n    margin-bottom: 10px; }\n  .moodButtons.button8 {\n    margin-bottom: 10px; }\n  .moodButtons.button9 {\n    margin-bottom: 10px; }\n\n.button1 {\n  background: #03EE31; }\n\n.button2 {\n  background: #5CF640; }\n\n.button3 {\n  background: #9AFF36; }\n\n.button4 {\n  background: #FAFF09; }\n\n.button5 {\n  background: #FFE71F; }\n\n.button6 {\n  background: #FFCF34; }\n\n.button7 {\n  background: #FF6D19; }\n\n.button8 {\n  background: #DD3B17; }\n\n.button9 {\n  background: #BA1414; }\n\ntextarea {\n  width: 90%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  font-size: 15px;\n  color: #C066A8;\n  font-weight: bold; }\n  textarea::placeholder {\n    color: #C066A8; }\n\ninput[type=radio] {\n  display: none; }\n\ninput[type=radio]:checked + label {\n  border: 3px solid #EBF5F9; }\n\n#calender {\n  background: #EBF5F9;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr); }\n  #calender div {\n    outline: 1px solid #FE6D43;\n    padding: 5px; }\n\nselect {\n  border: none;\n  font-size: 24px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n  color: #C066A8;\n  font-weight: bold; }\n\n#monthListContainer {\n  text-align: center;\n  margin-bottom: 20px; }\n\n#month {\n  font-size: 30px;\n  text-align: center; }\n\n#goalListDropdown {\n  margin-top: 15px;\n  margin-bottom: 10px; }\n\n#goalSubmitButton {\n  margin-top: 10px; }\n\n#goalTableContainer {\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr); }\n  #goalTableContainer div {\n    outline: 1px solid #FE6D43;\n    padding: 5px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dropdown.js */ "./src/js/dropdown.js");
/* harmony import */ var _js_dropdown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_dropdown_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/register.js */ "./src/js/register.js");
/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_register_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/login.js */ "./src/js/login.js");
/* harmony import */ var _js_login_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_login_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_diary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/diary.js */ "./src/js/diary.js");
/* harmony import */ var _js_diary_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_diary_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_goals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/goals.js */ "./src/js/goals.js");
/* harmony import */ var _js_goals_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_goals_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_tracker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/tracker.js */ "./src/js/tracker.js");
/* harmony import */ var _js_tracker_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_tracker_js__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/diary.js":
/*!*************************!*\
  !*** ./src/js/diary.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.enterMood = function () {
  event.preventDefault();
  var hr = new XMLHttpRequest();
  var url = "/includes/diaryDAO.php";
  var text = document.getElementById("textZone").value;
  var mood = parseInt(document.querySelector('input[name="answer"]:checked').value);
  var moodInfo = "text=" + text + "&mood=" + mood + "&phpfunction=submitDiary";
  hr.open("POST", url, true);
  hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  hr.onreadystatechange = function () {
    var returnData = hr.responseText;

    if (returnData == "Currently you can only submit one diary submission a day") {
      document.getElementById("errorbox").innerHTML = returnData;
    } else {
      document.getElementById("errorbox").innterHTML = "Your diary submission was successful! Visit the tracker to see your diary progress";
    }
  };

  hr.send(moodInfo);
};

/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dropDownMenu = document.getElementById('dropbutton');
var burgerBars = document.getElementsByClassName("bar");
dropDownMenu.addEventListener('click', function (x) {
  document.getElementById("dropdown").classList.toggle("show");
  Array.from(burgerBars).forEach(function (bar) {
    bar.classList.toggle("change");
  });
});

/***/ }),

/***/ "./src/js/goals.js":
/*!*************************!*\
  !*** ./src/js/goals.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.uploadGoal = function () {
  event.preventDefault();
  var hr = new XMLHttpRequest();
  var url = "/includes/goalsDAO.php";
  var goal = document.getElementById("goalListDropdown").value;
  var data = "goal=" + goal + "&phpfunction=uploadGoal";
  hr.open("POST", url, true);
  hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  hr.onreadystatechange = function () {
    var return_data = hr.responseText;

    if (return_data == "passed") {
      document.getElementById("errorbox").innerHTML = "Your goal was submitted";
    } else if (return_data == "failed") {
      document.getElementById("errorbox").innerHTML = "Error submitting the goal";
    }
  };

  hr.send(data);
};

window.getGoals = function () {
  var goalEntriesToRemove = document.getElementsByClassName("goalEntry");
  Array.from(goalEntriesToRemove).forEach(function (entry) {
    entry.parentNode.removeChild(entry);
  });
  var hr = new XMLHttpRequest();
  var url = "/includes/goalsDAO.php";
  hr.open("GET", url, true);
  hr.setRequestHeader("content-type", "application/json");
  hr.responseType = "json";

  hr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      userData = this.response;
      populateGoalTable(this.response);
    }
  };

  hr.send();
};

window.populateGoalTable = function (userData) {
  userData.forEach(function (entry) {
    var id = entry.id;
    var goal = entry.goal;
    var progress = entry.progress;
    var divGoal = document.createElement('div');
    var divProgress = document.createElement('div');
    divProgress.classList.add("goalEntry");
    divGoal.classList.add("goalEntry");
    divGoal.innerHTML = goal;
    divProgress.innerHTML = progress;
    goalTableContainer.append(divGoal);
    goalTableContainer.append(divProgress);

    if (progress == "Complete") {
      divProgress.style.color = "#5CF640";
    }

    divProgress.addEventListener("click", changeProgress);

    function changeProgress() {
      //changes to complete
      divProgress.innerHTML = "Complete";
      divProgress.style.color = "#5CF640";
      updateProgress(id);
    }
  });
};

window.updateProgress = function (id) {
  var hr = new XMLHttpRequest();
  var url = "/includes/goalsDAO.php";
  var data = "id=" + id + "&phpfunction=updateGoalData";
  hr.open("POST", url, true);
  hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  hr.onreadystatechange = function () {
    var return_data = hr.responseText;

    if (return_data == "passed") {
      document.getElementById("errorbox2").innerHTML = "Your goal was completed";
    } else if (return_data == "failed") {
      document.getElementById("errorbox2").innerHTML = "Error updating the goal";
    }

    console.log(return_data);
  };

  hr.send(data);
};

getGoals();

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.LogIn = function () {
  event.preventDefault();
  var hr = new XMLHttpRequest();
  var url = "/includes/loginDAO.php";
  var email = document.getElementById("txtEmail1").value;
  var password = document.getElementById("txtPassword1").value;
  var users = "email=" + email + "&password=" + password + "&phpfunction=loginUser";
  hr.open("POST", url, true);
  hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

  hr.onreadystatechange = function () {
    var return_data = hr.responseText;

    if (return_data != "email or password does not match") {
      event.preventDefault();
      window.location.assign(return_data);
    } else {
      event.preventDefault();
      document.getElementById("errorbox").innerHTML = return_data;
    }
  };

  hr.send(users);
};

/***/ }),

/***/ "./src/js/register.js":
/*!****************************!*\
  !*** ./src/js/register.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.register = function () {
  event.preventDefault();
  var password = document.getElementById("txtPassword");
  var confirmPassword = document.getElementById("txtConfirmPassword");
  var email = document.getElementById("txtEmail");

  if (password.value == confirmPassword.value && email.value != "" && password.value != "" && confirmPassword.value != "") {
    var hr = new XMLHttpRequest();
    var url = "/includes/registrationDAO.php";
    var email = document.getElementById("txtEmail").value;
    var password = document.getElementById("txtPassword").value;
    var users = "email=" + email + "&password=" + password + "&phpfunction=createUser";
    hr.open("POST", url, true);
    hr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    hr.onreadystatechange = function () {
      var return_data = hr.responseText;
      console.log(return_data);

      if (return_data != "This email already registered.") {
        document.location.assign(return_data);
      } else {
        document.getElementById("errorbox").innerHTML = return_data;
      }
    };

    hr.send(users);
  } else {
    document.getElementById("errorbox").innerHTML = "Passwords don't match, please try again";
  }
};

/***/ }),

/***/ "./src/js/tracker.js":
/*!***************************!*\
  !*** ./src/js/tracker.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

var calender = document.getElementById("calender");
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

window.getCalendarMonth = function (daysThisMonth, month) {
  var currentRow = 2;
  var year = date.getFullYear();
  var startDate = new Date(year, month, 1);
  startDatePosition = startDate.getDay();
  document.getElementById("month").innerHTML = monthList[month];

  for (var i = 0; i < daysThisMonth; i++) {
    var this_day = document.createElement("div");
    this_day.classList.add("calenderEntry");
    var dayPosition = startDate.getDay() + i;
    this_day.innerHTML = startDate.getDate() + i;
    this_day.id = dayPosition + "-" + (month + 1);

    if ((startDatePosition + i) % (7 * (currentRow - 1)) == 0) {
      this_day.style.gridColumn = 7;
    } else {
      this_day.style.gridColumn = (startDatePosition + i) % (7 * (currentRow - 1));
    }

    this_day.style.gridColumn = (startDatePosition + i) % (7 * (currentRow - 1));

    if (dayPosition == 6) {
      currentRow + 1;
    }

    calender.appendChild(this_day);
  }
};

window.updateButton = function () {
  var date = new Date();
  var year = date.getFullYear();
  var month = document.getElementById("monthList").value;
  month = parseInt(month);
  var daysThisMonth = daysInMonth(month, year); // get month from dropdown

  console.log(month);
  console.log(daysThisMonth);
  var calenderEntriesToRemove = document.getElementsByClassName("calenderEntry");
  Array.from(calenderEntriesToRemove).forEach(function (entry) {
    entry.parentNode.removeChild(entry);
  });
  getCalendarMonth(daysThisMonth, month);
  updateCalendar(month);
};

window.updateCalendar = function (month) {
  if (event) {
    event.preventDefault();
  }

  var hr = new XMLHttpRequest();
  var url = "/includes/trackerDAO.php";
  hr.open("GET", url, true);
  hr.setRequestHeader("content-type", "application/json");
  hr.responseType = "json";

  hr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      userDate = this.response;
      populateCalendar(this.response, month);
    }
  };

  hr.send();
};

window.populateCalendar = function (data, month) {
  data.forEach(function (entry) {
    var date = new Date(entry.dateUploaded);

    if (date.getMonth() == month) {
      var popup = function popup() {
        moodFeelings = document.getElementById("moodFeelings");
        var breakLine = document.createElement("br");
        moodFeelings.innerHTML = "<b>Diary notes</b><br/>" + entry.text;
        moodValue = document.getElementById("moodValue");
        moodValue.innerHTML = "<b>Mood</b><br/>" + mood;
      };

      console.log(entry);
      var mood = entry.mood;

      var _month = date.getMonth();

      var day = date.getDate();
      var targetID = day + "-" + (_month + 1);
      console.log(targetID);
      var targetDiv = document.getElementById(targetID);
      targetDiv.innerHTML = day;
      targetDiv.classList.add("button" + mood);
      targetDiv.addEventListener("click", popup);

      switch (mood) {
        case '1':
          mood = 'Very Happy';
          break;

        case '2':
          mood = 'happy';
          break;

        case '3':
          mood = 'Upbeat';
          break;

        case '4':
          mood = 'OK';
          break;

        case '5':
          mood = 'Other';
          break;

        case '6':
          mood = 'Anxious';
          break;

        case '7':
          mood = 'Unhappy';
          break;

        case '8':
          mood = 'Sad';
          break;

        case '9':
          mood = 'Very Sad';
          break;
      }
    }
  });
};

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
daysThisMonth = daysInMonth(month, year);
getCalendarMonth(daysThisMonth, month);
updateCalendar(month);

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dvYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzRjMTUiXSwibmFtZXMiOlsid2luZG93IiwiZW50ZXJNb29kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibW9vZCIsInBhcnNlSW50IiwicXVlcnlTZWxlY3RvciIsIm1vb2RJbmZvIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXR1cm5EYXRhIiwicmVzcG9uc2VUZXh0IiwiaW5uZXJIVE1MIiwiaW5udGVySFRNTCIsInNlbmQiLCJkcm9wRG93bk1lbnUiLCJidXJnZXJCYXJzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ4IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImJhciIsInVwbG9hZEdvYWwiLCJnb2FsIiwiZGF0YSIsInJldHVybl9kYXRhIiwiZ2V0R29hbHMiLCJnb2FsRW50cmllc1RvUmVtb3ZlIiwiZW50cnkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZXNwb25zZVR5cGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwidXNlckRhdGEiLCJwb3B1bGF0ZUdvYWxUYWJsZSIsImlkIiwicHJvZ3Jlc3MiLCJkaXZHb2FsIiwiY3JlYXRlRWxlbWVudCIsImRpdlByb2dyZXNzIiwiYWRkIiwiZ29hbFRhYmxlQ29udGFpbmVyIiwiYXBwZW5kIiwic3R5bGUiLCJjb2xvciIsImNoYW5nZVByb2dyZXNzIiwidXBkYXRlUHJvZ3Jlc3MiLCJMb2dJbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VycyIsImxvY2F0aW9uIiwiYXNzaWduIiwicmVnaXN0ZXIiLCJjb25maXJtUGFzc3dvcmQiLCJkYXlzSW5Nb250aCIsIm1vbnRoIiwieWVhciIsIkRhdGUiLCJnZXREYXRlIiwiY2FsZW5kZXIiLCJtb250aExpc3QiLCJnZXRDYWxlbmRhck1vbnRoIiwiZGF5c1RoaXNNb250aCIsImN1cnJlbnRSb3ciLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJzdGFydERhdGUiLCJzdGFydERhdGVQb3NpdGlvbiIsImdldERheSIsImkiLCJ0aGlzX2RheSIsImRheVBvc2l0aW9uIiwiZ3JpZENvbHVtbiIsImFwcGVuZENoaWxkIiwidXBkYXRlQnV0dG9uIiwiY2FsZW5kZXJFbnRyaWVzVG9SZW1vdmUiLCJ1cGRhdGVDYWxlbmRhciIsInVzZXJEYXRlIiwicG9wdWxhdGVDYWxlbmRhciIsImRhdGVVcGxvYWRlZCIsImdldE1vbnRoIiwicG9wdXAiLCJtb29kRmVlbGluZ3MiLCJicmVha0xpbmUiLCJtb29kVmFsdWUiLCJkYXkiLCJ0YXJnZXRJRCIsInRhcmdldERpdiJdLCJtYXBwaW5ncyI6IjtBQUFB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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bEIsYUFBYSxHQUFHUixXQUFXLENBQUNDLEtBQUQsRUFBUUMsSUFBUixDQUEzQjtBQUVBSyxnQkFBZ0IsQ0FBQ0MsYUFBRCxFQUFnQlAsS0FBaEIsQ0FBaEI7QUFDQXFCLGNBQWMsQ0FBQ3JCLEtBQUQsQ0FBZCxDOzs7Ozs7Ozs7Ozs7QUNwTEEsY0FBYyxtQkFBTyxDQUFDLGdOQUFzRzs7QUFFNUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IZWVib3xSb2JvdG8pO1wiLCBcIlwiXSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogI0VCRjVGOTtcXG4gIGJhY2tncm91bmQ6ICM1MkE1Q0M7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjM0I3NkFEOyB9XFxuXFxuI2J1cmdlcm5hdiAjZHJvcGJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMDtcXG4gIHRvcDogMThweDsgfVxcblxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1Rjk7XFxuICBtYXJnaW46IDZweCAwO1xcbiAgdHJhbnNpdGlvbjogMC40czsgfVxcblxcbi8qIHJvdGF0ZXMgYmFyMSAtNDUgZGVncmVlcyBhbmQgLmNoYW5nZSAuYmFyMyByb3RhdGVzIDQ1IGRlZ3JlZXMgdG8gbWFrZSB0aGUgWCB3aGVuIGNsaWNrZWQgb24gKi9cXG4uY2hhbmdlLmJhcjEge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTsgfVxcblxcbi8qIG1ha2VzIHRoZSBtaWRkbGUgYmFyIGRpc2FwZWFyIHdoZW4gYnVyZ2VyIG5hdiBwcmVzc2VkIG9uICovXFxuLmNoYW5nZS5iYXIyIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4uY2hhbmdlLmJhcjMge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC05cHgsIC02cHgpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCAtNnB4KTsgfVxcblxcbi5kcm9wZG93bmNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVGOTtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxuICBmb250LXNpemU6IDMwcHg7IH1cXG4gIC5kcm9wZG93bmNvbnRlbnQgYSB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBjb2xvcjogIzNCNzZBRDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAuZHJvcGRvd25jb250ZW50IGEgOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogIzNCNzZBRDsgfVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjRDhFQkYzO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU2IDI4JyB3aWR0aD0nNTYnIGhlaWdodD0nMjgnJTNFJTNDcGF0aCBmaWxsPSclMjMzYjc2YWQnIGZpbGwtb3BhY2l0eT0nMC40JyBkPSdNNTYgMjZ2MmgtNy43NWMyLjMtMS4yNyA0Ljk0LTIgNy43NS0yem0tMjYgMmEyIDIgMCAxIDAtNCAwaC00LjA5QTI1Ljk4IDI1Ljk4IDAgMCAwIDAgMTZ2LTJjLjY3IDAgMS4zNC4wMiAyIC4wN1YxNGEyIDIgMCAwIDAtMi0ydi0yYTQgNCAwIDAgMSAzLjk4IDMuNiAyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NkE4IDggMCAwIDAgMCA2VjRhOS45OSA5Ljk5IDAgMCAxIDguMTcgNC4yM2MuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNBMTMuOTggMTMuOTggMCAwIDAgMCAwaDcuNzVjMiAxLjEgMy43MyAyLjYzIDUuMSA0LjQ1IDEuMTItLjcyIDIuMy0xLjM3IDMuNTMtMS45M0EyMC4xIDIwLjEgMCAwIDAgMTQuMjggMGgyLjdjLjQ1LjU2Ljg4IDEuMTQgMS4yOSAxLjc0IDEuMy0uNDggMi42My0uODcgNC0xLjE1LS4xMS0uMi0uMjMtLjQtLjM2LS41OUgyNnYuMDdhMjguNCAyOC40IDAgMCAxIDQgMFYwaDQuMDlsLS4zNy41OWMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1LjQtLjYuODQtMS4xOCAxLjMtMS43NGgyLjY5YTIwLjEgMjAuMSAwIDAgMC0yLjEgMi41MmMxLjIzLjU2IDIuNDEgMS4yIDMuNTQgMS45M0ExNi4wOCAxNi4wOCAwIDAgMSA0OC4yNSAwSDU2Yy00LjU4IDAtOC42NSAyLjItMTEuMiA1LjYgMS4wNy44IDIuMDkgMS42OCAzLjAzIDIuNjNBOS45OSA5Ljk5IDAgMCAxIDU2IDR2MmE4IDggMCAwIDAtNi43NyAzLjc0YzEuMDMgMS4yIDEuOTcgMi41IDIuNzkgMy44NkE0IDQgMCAwIDEgNTYgMTB2MmEyIDIgMCAwIDAtMiAyLjA3IDI4LjQgMjguNCAwIDAgMSAyLS4wN3YyYy05LjIgMC0xNy4zIDQuNzgtMjEuOTEgMTJIMzB6TTcuNzUgMjhIMHYtMmMyLjgxIDAgNS40Ni43MyA3Ljc1IDJ6TTU2IDIwdjJjLTUuNiAwLTEwLjY1IDIuMy0xNC4yOCA2aC0yLjdjNC4wNC00Ljg5IDEwLjE1LTggMTYuOTgtOHptLTM5LjAzIDhoLTIuNjlDMTAuNjUgMjQuMyA1LjYgMjIgMCAyMnYtMmM2LjgzIDAgMTIuOTQgMy4xMSAxNi45NyA4em0xNS4wMS0uNGEyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NiA4IDggMCAwIDAtMTMuNTUgMGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZhNCA0IDAgMCAxIDcuOTYgMHptMTQuMjktMTEuODZjMS4zLS40OCAyLjYzLS44NyA0LTEuMTVhMjUuOTkgMjUuOTkgMCAwIDAtNDQuNTUgMGMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1YTIxLjk4IDIxLjk4IDAgMCAxIDM2LjU0IDB6bS01LjQzIDIuNzFjMS4xMy0uNzIgMi4zLTEuMzcgMy41NC0xLjkzYTE5Ljk4IDE5Ljk4IDAgMCAwLTMyLjc2IDBjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNhMTUuOTggMTUuOTggMCAwIDEgMjUuNjggMHptLTQuNjcgMy43OGMuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNhMTMuOTggMTMuOTggMCAwIDAtMjIuNCAwYzEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzYTkuOTkgOS45OSAwIDAgMSAxNi4zNCAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDsgfVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbnAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNFQkY1Rjk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgcCBhIHtcXG4gICAgY29sb3I6ICNGRTZENDM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uc2l0ZURlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICMzQjc2QUQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0VCRjVGOTsgfVxcblxcbiN0cmFja2VySW5mb3JtYXRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcbiAgI3RyYWNrZXJJbmZvcm1hdGlvbiBoMyB7XFxuICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gICN0cmFja2VySW5mb3JtYXRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbmhyIHtcXG4gIGJvcmRlci1jb2xvcjogI0VCRjVGOTsgfVxcblxcbi5tYWluQnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU2RDQzO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzdEN0Q3RDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBjb2xvcjogI0VCRjVGOTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJvcmRlcjogbm9uZTsgfVxcbiAgLm1haW5CdXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cXG5cXG4jYnV0dG9uQ29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE1dmg7IH1cXG5cXG4ucmVnaXN0ZXJGb3JtIHtcXG4gIGNvbG9yOiAjRUJGNUY5O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuI2Zvcm1Db250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNCNzZBRDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7IH1cXG5cXG4jaGVscFRleHQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogIzNCNzZBRDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmlucHV0Qm94ZXMge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNFQkY1Rjk7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjQzA2NkE4O1xcbiAgcGFkZGluZzogM3B4OyB9XFxuICAuaW5wdXRCb3hlczo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI0MwNjZBODsgfVxcblxcbiNwcm9maWxlQnV0dG9uQ29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDh2aDsgfVxcblxcbi5wcm9maWxlQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI0VCRjVGOTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3gtc2hhZG93OiAxcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxcbiAgLnByb2ZpbGVCdXR0b25zOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7IH1cXG4gIC5wcm9maWxlQnV0dG9uczpudGgtb2YtdHlwZSgyKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDV2aDsgfVxcbiAgLnByb2ZpbGVCdXR0b25zLmJ1dHRvblB1cnBsZTEge1xcbiAgICBiYWNrZ3JvdW5kOiAjQzA2NkE4OyB9XFxuICAgIC5wcm9maWxlQnV0dG9ucy5idXR0b25QdXJwbGUxIGltZyB7XFxuICAgICAgd2lkdGg6IDQ4cHg7IH1cXG4gIC5wcm9maWxlQnV0dG9ucy5idXR0b25QdXJwbGUyIHtcXG4gICAgYmFja2dyb3VuZDogI0I3NzlCQjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgLnByb2ZpbGVCdXR0b25zLmJ1dHRvblB1cnBsZTIgaW1nIHtcXG4gICAgICB3aWR0aDogNDhweDsgfVxcbiAgLnByb2ZpbGVCdXR0b25zLmJ1dHRvblB1cnBsZTMge1xcbiAgICBiYWNrZ3JvdW5kOiAjQzM1ODhCOyB9XFxuICAgIC5wcm9maWxlQnV0dG9ucy5idXR0b25QdXJwbGUzIGltZyB7XFxuICAgICAgd2lkdGg6IDQ4cHg7IH1cXG4gIC5wcm9maWxlQnV0dG9uczp2aXNpdGVkIHtcXG4gICAgY29sb3I6ICNFQkY1Rjk7IH1cXG5cXG4jbW9vZENvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4ubW9vZEJ1dHRvbnMge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogMXB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xMHMgZWFzZS1pbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG4gIC5tb29kQnV0dG9ucyBpbWcge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogNDBweDsgfVxcbiAgLm1vb2RCdXR0b25zLmJ1dHRvbjcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAubW9vZEJ1dHRvbnMuYnV0dG9uOCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIC5tb29kQnV0dG9ucy5idXR0b245IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5idXR0b24xIHtcXG4gIGJhY2tncm91bmQ6ICMwM0VFMzE7IH1cXG5cXG4uYnV0dG9uMiB7XFxuICBiYWNrZ3JvdW5kOiAjNUNGNjQwOyB9XFxuXFxuLmJ1dHRvbjMge1xcbiAgYmFja2dyb3VuZDogIzlBRkYzNjsgfVxcblxcbi5idXR0b240IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZGMDk7IH1cXG5cXG4uYnV0dG9uNSB7XFxuICBiYWNrZ3JvdW5kOiAjRkZFNzFGOyB9XFxuXFxuLmJ1dHRvbjYge1xcbiAgYmFja2dyb3VuZDogI0ZGQ0YzNDsgfVxcblxcbi5idXR0b243IHtcXG4gIGJhY2tncm91bmQ6ICNGRjZEMTk7IH1cXG5cXG4uYnV0dG9uOCB7XFxuICBiYWNrZ3JvdW5kOiAjREQzQjE3OyB9XFxuXFxuLmJ1dHRvbjkge1xcbiAgYmFja2dyb3VuZDogI0JBMTQxNDsgfVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjQzA2NkE4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjQzA2NkE4OyB9XFxuXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjRUJGNUY5OyB9XFxuXFxuI2NhbGVuZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNFQkY1Rjk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7IH1cXG4gICNjYWxlbmRlciBkaXYge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI0ZFNkQ0MztcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuXFxuc2VsZWN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgY29sb3I6ICNDMDY2QTg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbiNtb250aExpc3RDb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbiNtb250aCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4jZ29hbExpc3REcm9wZG93biB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbiNnb2FsU3VibWl0QnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4jZ29hbFRhYmxlQ29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxcbiAgI2dvYWxUYWJsZUNvbnRhaW5lciBkaXYge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI0ZFNkQ0MztcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBcIi4vc2Fzcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9qcy9kcm9wZG93bi5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL3JlZ2lzdGVyLmpzXCI7XHJcbmltcG9ydCBcIi4vanMvbG9naW4uanNcIjtcclxuaW1wb3J0IFwiLi9qcy9kaWFyeS5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL2dvYWxzLmpzXCI7XHJcbmltcG9ydCBcIi4vanMvdHJhY2tlci5qc1wiO1xyXG5cclxuXHJcblxyXG4iLCJcclxuXHJcblxyXG53aW5kb3cuZW50ZXJNb29kID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIHZhciB1cmwgPSBcIi9pbmNsdWRlcy9kaWFyeURBTy5waHBcIjtcclxuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0Wm9uZVwiKS52YWx1ZTtcclxuICAgIHZhciBtb29kID0gcGFyc2VJbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFuc3dlclwiXTpjaGVja2VkJykudmFsdWUpO1xyXG4gICAgdmFyIG1vb2RJbmZvID0gXCJ0ZXh0PVwiK3RleHQrXCImbW9vZD1cIittb29kKyBcIiZwaHBmdW5jdGlvbj1zdWJtaXREaWFyeVwiO1xyXG4gICAgaHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgIGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcblxyXG4gICAgaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIHJldHVybkRhdGEgPSBoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgIGlmKHJldHVybkRhdGEgPT0gXCJDdXJyZW50bHkgeW91IGNhbiBvbmx5IHN1Ym1pdCBvbmUgZGlhcnkgc3VibWlzc2lvbiBhIGRheVwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveFwiKS5pbm5lckhUTUwgPSByZXR1cm5EYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3hcIikuaW5udGVySFRNTCA9IFwiWW91ciBkaWFyeSBzdWJtaXNzaW9uIHdhcyBzdWNjZXNzZnVsISBWaXNpdCB0aGUgdHJhY2tlciB0byBzZWUgeW91ciBkaWFyeSBwcm9ncmVzc1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaHIuc2VuZChtb29kSW5mbyk7XHJcblxyXG5cclxuXHJcblxyXG59IiwiXHJcblxyXG52YXIgZHJvcERvd25NZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3BidXR0b24nKTtcclxuXHJcbnZhciBidXJnZXJCYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhclwiKTtcclxuXHJcbmRyb3BEb3duTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKHgpe1xyXG5cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG5cclxuXHRBcnJheS5mcm9tKGJ1cmdlckJhcnMpLmZvckVhY2goKGJhcikgPT4ge1xyXG5cclxuXHRcdGJhci5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xyXG5cclxuXHR9KVxyXG4gICAgICAgIFxyXG59KTtcclxuXHJcblxyXG4iLCJcclxuXHJcbndpbmRvdy51cGxvYWRHb2FsID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIHVybCA9IFwiL2luY2x1ZGVzL2dvYWxzREFPLnBocFwiO1xyXG4gICAgdmFyIGdvYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvYWxMaXN0RHJvcGRvd25cIikudmFsdWU7XHJcbiAgICB2YXIgZGF0YSA9IFwiZ29hbD1cIitnb2FsK1wiJnBocGZ1bmN0aW9uPXVwbG9hZEdvYWxcIjtcclxuICAgIGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICBoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG5cclxuICAgIGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHJldHVybl9kYXRhID0gaHIucmVzcG9uc2VUZXh0O1xyXG5cclxuICAgICAgICBpZihyZXR1cm5fZGF0YSA9PSBcInBhc3NlZFwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveFwiKS5pbm5lckhUTUwgPSBcIllvdXIgZ29hbCB3YXMgc3VibWl0dGVkXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHJldHVybl9kYXRhID09IFwiZmFpbGVkXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94XCIpLmlubmVySFRNTCA9IFwiRXJyb3Igc3VibWl0dGluZyB0aGUgZ29hbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaHIuc2VuZChkYXRhKTtcclxuXHJcbn1cclxuXHJcbndpbmRvdy5nZXRHb2FscyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbGV0IGdvYWxFbnRyaWVzVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ29hbEVudHJ5XCIpO1xyXG5cclxuICAgIEFycmF5LmZyb20oZ29hbEVudHJpZXNUb1JlbW92ZSkuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuXHJcblx0XHRlbnRyeS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVudHJ5KTtcclxuXHJcblx0fSlcclxuXHJcblxyXG4gICAgdmFyIGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB2YXIgdXJsID0gXCIvaW5jbHVkZXMvZ29hbHNEQU8ucGhwXCI7XHJcbiAgICBcclxuXHJcbiAgICBoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICBoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhyLnJlc3BvbnNlVHlwZT1cImpzb25cIjtcclxuXHJcbiAgICBoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHVzZXJEYXRhID0gdGhpcy5yZXNwb25zZTtcclxuICAgICAgICAgICAgcG9wdWxhdGVHb2FsVGFibGUodGhpcy5yZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaHIuc2VuZCgpO1xyXG5cclxufVxyXG5cclxud2luZG93LnBvcHVsYXRlR29hbFRhYmxlID0gZnVuY3Rpb24odXNlckRhdGEpe1xyXG5cclxuICAgIHVzZXJEYXRhLmZvckVhY2goZnVuY3Rpb24oZW50cnkpe1xyXG4gICAgICAgIHZhciBpZCA9IGVudHJ5LmlkO1xyXG4gICAgICAgIHZhciBnb2FsID0gZW50cnkuZ29hbDtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBlbnRyeS5wcm9ncmVzcztcclxuICAgICAgICB2YXIgZGl2R29hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZhciBkaXZQcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdlByb2dyZXNzLmNsYXNzTGlzdC5hZGQoXCJnb2FsRW50cnlcIik7XHJcbiAgICAgICAgZGl2R29hbC5jbGFzc0xpc3QuYWRkKFwiZ29hbEVudHJ5XCIpO1xyXG4gICAgICAgIGRpdkdvYWwuaW5uZXJIVE1MID0gZ29hbDtcclxuICAgICAgICBkaXZQcm9ncmVzcy5pbm5lckhUTUwgPSBwcm9ncmVzcztcclxuICAgICAgICBnb2FsVGFibGVDb250YWluZXIuYXBwZW5kKGRpdkdvYWwpO1xyXG4gICAgICAgIGdvYWxUYWJsZUNvbnRhaW5lci5hcHBlbmQoZGl2UHJvZ3Jlc3MpO1xyXG4gICAgICAgIGlmKHByb2dyZXNzID09XCJDb21wbGV0ZVwiKXtcclxuICAgICAgICAgICAgZGl2UHJvZ3Jlc3Muc3R5bGUuY29sb3IgPSBcIiM1Q0Y2NDBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdlByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQcm9ncmVzcyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVByb2dyZXNzKCl7XHJcbiAgICAgICAgICAgIC8vY2hhbmdlcyB0byBjb21wbGV0ZVxyXG4gICAgICAgICAgICBkaXZQcm9ncmVzcy5pbm5lckhUTUwgPSBcIkNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgIGRpdlByb2dyZXNzLnN0eWxlLmNvbG9yID0gXCIjNUNGNjQwXCI7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzKGlkKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG53aW5kb3cudXBkYXRlUHJvZ3Jlc3MgPSBmdW5jdGlvbihpZCl7XHJcblxyXG4gICAgdmFyIGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB2YXIgdXJsID0gXCIvaW5jbHVkZXMvZ29hbHNEQU8ucGhwXCI7XHJcbiAgICB2YXIgZGF0YSA9IFwiaWQ9XCIraWQrXCImcGhwZnVuY3Rpb249dXBkYXRlR29hbERhdGFcIjtcclxuICAgIGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICBoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG5cclxuICAgIGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHJldHVybl9kYXRhID0gaHIucmVzcG9uc2VUZXh0O1xyXG5cclxuICAgICAgICBpZihyZXR1cm5fZGF0YSA9PSBcInBhc3NlZFwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveDJcIikuaW5uZXJIVE1MID0gXCJZb3VyIGdvYWwgd2FzIGNvbXBsZXRlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihyZXR1cm5fZGF0YSA9PSBcImZhaWxlZFwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveDJcIikuaW5uZXJIVE1MID0gXCJFcnJvciB1cGRhdGluZyB0aGUgZ29hbFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmV0dXJuX2RhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoci5zZW5kKGRhdGEpO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuZ2V0R29hbHMoKTsiLCJcclxuXHJcbndpbmRvdy5Mb2dJbiA9IGZ1bmN0aW9uKCl7ICBcclxuXHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgXHJcblxyXG4gICAgdmFyIGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgdmFyIHVybCA9IFwiL2luY2x1ZGVzL2xvZ2luREFPLnBocFwiO1xyXG4gICAgdmFyIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbDFcIikudmFsdWU7XHJcbiAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFBhc3N3b3JkMVwiKS52YWx1ZTtcclxuICAgIHZhciB1c2VycyA9IFwiZW1haWw9XCIrZW1haWwrXCImcGFzc3dvcmQ9XCIrcGFzc3dvcmQrIFwiJnBocGZ1bmN0aW9uPWxvZ2luVXNlclwiO1xyXG4gICAgaHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgIGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICBcclxuICAgIGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciByZXR1cm5fZGF0YSA9IGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgaWYocmV0dXJuX2RhdGEgIT0gXCJlbWFpbCBvciBwYXNzd29yZCBkb2VzIG5vdCBtYXRjaFwiKXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihyZXR1cm5fZGF0YSk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94XCIpLmlubmVySFRNTCA9IHJldHVybl9kYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBoci5zZW5kKHVzZXJzKTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuXHJcblxyXG5cclxud2luZG93LnJlZ2lzdGVyID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFBhc3N3b3JkXCIpO1xyXG4gICAgdmFyIGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0Q29uZmlybVBhc3N3b3JkXCIpO1xyXG4gICAgdmFyIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbFwiKTtcclxuXHJcblxyXG4gICAgaWYoKHBhc3N3b3JkLnZhbHVlID09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkgJiYgKGVtYWlsLnZhbHVlICE9IFwiXCIpICYmIChwYXNzd29yZC52YWx1ZSAhPSBcIlwiKSAmJiAoY29uZmlybVBhc3N3b3JkLnZhbHVlICE9IFwiXCIpKSB7XHJcblxyXG4gICAgICB2YXIgaHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgIHZhciB1cmwgPSBcIi9pbmNsdWRlcy9yZWdpc3RyYXRpb25EQU8ucGhwXCI7XHJcbiAgICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RW1haWxcIikudmFsdWU7XHJcbiAgICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0UGFzc3dvcmRcIikudmFsdWU7XHJcbiAgICAgIHZhciB1c2VycyA9IFwiZW1haWw9XCIrZW1haWwrXCImcGFzc3dvcmQ9XCIrcGFzc3dvcmQrIFwiJnBocGZ1bmN0aW9uPWNyZWF0ZVVzZXJcIjtcclxuICAgICAgaHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgaHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuXHJcbiAgICAgIGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciByZXR1cm5fZGF0YSA9IGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmV0dXJuX2RhdGEpO1xyXG5cclxuICAgICAgICBpZihyZXR1cm5fZGF0YSAhPSBcIlRoaXMgZW1haWwgYWxyZWFkeSByZWdpc3RlcmVkLlwiKXtcclxuICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmFzc2lnbihyZXR1cm5fZGF0YSk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94XCIpLmlubmVySFRNTCA9IHJldHVybl9kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhyLnNlbmQodXNlcnMpOyAgXHJcblxyXG4gIH0gZWxzZXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94XCIpLmlubmVySFRNTCA9IFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoLCBwbGVhc2UgdHJ5IGFnYWluXCI7XHJcblxyXG4gIH1cclxuICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbiIsIlxyXG5mdW5jdGlvbiBkYXlzSW5Nb250aChtb250aCwgeWVhcil7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7XHJcbiAgICBcclxufVxyXG5cclxudmFyIGNhbGVuZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRlclwiKTtcclxuXHJcbmxldCBtb250aExpc3QgPSBbIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIiBdO1xyXG5cclxud2luZG93LmdldENhbGVuZGFyTW9udGggPSBmdW5jdGlvbihkYXlzVGhpc01vbnRoLCBtb250aCl7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRSb3cgPSAyO1xyXG5cclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcclxuICAgIHN0YXJ0RGF0ZVBvc2l0aW9uID0gc3RhcnREYXRlLmdldERheSgpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGhcIikuaW5uZXJIVE1MID0gbW9udGhMaXN0W21vbnRoXTtcclxuXHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGRheXNUaGlzTW9udGg7IGkrKyl7XHJcblxyXG4gICAgICAgIHZhciB0aGlzX2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpc19kYXkuY2xhc3NMaXN0LmFkZChcImNhbGVuZGVyRW50cnlcIik7XHJcbiAgICAgICAgbGV0IGRheVBvc2l0aW9uID0gc3RhcnREYXRlLmdldERheSgpICsgaTtcclxuICAgICAgICB0aGlzX2RheS5pbm5lckhUTUwgPSBzdGFydERhdGUuZ2V0RGF0ZSgpICsgaTtcclxuICAgICAgICB0aGlzX2RheS5pZCA9IGRheVBvc2l0aW9uICsgXCItXCIgKyAobW9udGggKyAxKTtcclxuXHJcbiAgICAgICAgaWYoKHN0YXJ0RGF0ZVBvc2l0aW9uICsgaSkgJSAoNyAqIChjdXJyZW50Um93IC0gMSkpID09IDApe1xyXG4gICAgICAgICAgICB0aGlzX2RheS5zdHlsZS5ncmlkQ29sdW1uID0gNztcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXNfZGF5LnN0eWxlLmdyaWRDb2x1bW4gPSAoc3RhcnREYXRlUG9zaXRpb24gKyBpKSAlICg3ICogKGN1cnJlbnRSb3cgLSAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpc19kYXkuc3R5bGUuZ3JpZENvbHVtbiA9IChzdGFydERhdGVQb3NpdGlvbiArIGkpICUgKDcgKiAoY3VycmVudFJvdyAtIDEpKTtcclxuICAgIFxyXG4gICAgICAgIGlmKGRheVBvc2l0aW9uID09IDYpe1xyXG4gICAgICAgICAgICBjdXJyZW50Um93ICsgMTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYWxlbmRlci5hcHBlbmRDaGlsZCh0aGlzX2RheSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy51cGRhdGVCdXR0b24gPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGV0IG1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aExpc3RcIikudmFsdWU7XHJcbiAgICBtb250aCA9IHBhcnNlSW50KG1vbnRoKTtcclxuXHJcbiAgICBsZXQgZGF5c1RoaXNNb250aCA9IGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcclxuXHJcbiAgICAvLyBnZXQgbW9udGggZnJvbSBkcm9wZG93blxyXG4gICAgY29uc29sZS5sb2cobW9udGgpO1xyXG4gICAgY29uc29sZS5sb2coZGF5c1RoaXNNb250aCk7XHJcblxyXG4gICAgbGV0IGNhbGVuZGVyRW50cmllc1RvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhbGVuZGVyRW50cnlcIik7XHJcblxyXG4gICAgQXJyYXkuZnJvbShjYWxlbmRlckVudHJpZXNUb1JlbW92ZSkuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuXHJcblx0XHRlbnRyeS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVudHJ5KTtcclxuXHJcblx0fSlcclxuXHJcbiAgICBcclxuICAgIGdldENhbGVuZGFyTW9udGgoZGF5c1RoaXNNb250aCwgbW9udGgpO1xyXG4gICAgdXBkYXRlQ2FsZW5kYXIobW9udGgpO1xyXG59XHJcblxyXG5cclxud2luZG93LnVwZGF0ZUNhbGVuZGFyID0gZnVuY3Rpb24obW9udGgpe1xyXG5cclxuICAgIGlmKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIHVybCA9IFwiL2luY2x1ZGVzL3RyYWNrZXJEQU8ucGhwXCI7XHJcbiAgICBcclxuXHJcbiAgICBoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICBoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhyLnJlc3BvbnNlVHlwZT1cImpzb25cIjtcclxuICAgIFxyXG4gICAgaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgdXNlckRhdGUgPSB0aGlzLnJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgcG9wdWxhdGVDYWxlbmRhcih0aGlzLnJlc3BvbnNlLCBtb250aCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaHIuc2VuZCgpO1xyXG5cclxufVxyXG5cclxud2luZG93LnBvcHVsYXRlQ2FsZW5kYXIgPSBmdW5jdGlvbihkYXRhLCBtb250aCl7XHJcblxyXG5cclxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihlbnRyeSl7XHJcblxyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZW50cnkuZGF0ZVVwbG9hZGVkKTtcclxuXHJcbiAgICAgICAgaWYoZGF0ZS5nZXRNb250aCgpID09IG1vbnRoKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5KTtcclxuICAgICAgICAgICAgdmFyIG1vb2QgPSBlbnRyeS5tb29kO1xyXG4gICAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldElEID0gKGRheSArIFwiLVwiICsgKG1vbnRoICsgMSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRJRCk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJRCk7XHJcbiAgICAgICAgICAgIHRhcmdldERpdi5pbm5lckhUTUwgPSBkYXk7XHJcbiAgICAgICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIgKyBtb29kKTtcclxuICAgICAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3B1cCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vb2Qpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nVmVyeSBIYXBweSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdoYXBweSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdVcGJlYXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nT0snO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nT3RoZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nQW54aW91cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdVbmhhcHB5JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vb2Q9J1NhZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdWZXJ5IFNhZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwb3B1cCgpe1xyXG4gICAgICAgICAgICAgICAgbW9vZEZlZWxpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29kRmVlbGluZ3NcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnJlYWtMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xyXG4gICAgICAgICAgICAgICAgbW9vZEZlZWxpbmdzLmlubmVySFRNTCA9IChcIjxiPkRpYXJ5IG5vdGVzPC9iPjxici8+XCIgKyBlbnRyeS50ZXh0KTtcclxuICAgICAgICAgICAgICAgIG1vb2RWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vZFZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgbW9vZFZhbHVlLmlubmVySFRNTCA9IChcIjxiPk1vb2Q8L2I+PGJyLz5cIiArIG1vb2QpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmxldCBkYXRlID0gbmV3IERhdGUoKTtcclxubGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbmxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuZGF5c1RoaXNNb250aCA9IGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcclxuXHJcbmdldENhbGVuZGFyTW9udGgoZGF5c1RoaXNNb250aCwgbW9udGgpO1xyXG51cGRhdGVDYWxlbmRhcihtb250aCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==