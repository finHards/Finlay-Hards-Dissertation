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
exports.push([module.i, "nav {\n  display: flex;\n  color: #EBF5F9;\n  background: #52A5CC;\n  width: 100%;\n  top: 0;\n  height: 75px;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  justify-content: center;\n  border-bottom: 5px solid #3B76AD; }\n\n#burgernav #dropbutton {\n  margin-right: 10px;\n  background: transparent;\n  border: none;\n  position: absolute;\n  right: 10;\n  top: 18px; }\n\n.bar1, .bar2, .bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #EBF5F9;\n  margin: 6px 0;\n  transition: 0.4s; }\n\n/* rotates bar1 -45 degrees and .change .bar3 rotates 45 degrees to make the X when clicked on */\n.change.bar1 {\n  -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n  transform: rotate(-45deg) translate(-9px, 6px); }\n\n/* makes the middle bar disapear when burger nav pressed on */\n.change.bar2 {\n  opacity: 0; }\n\n.change.bar3 {\n  -webkit-transform: rotate(45deg) translate(-9px, -6px);\n  transform: rotate(45deg) translate(-9px, -6px); }\n\n.dropdowncontent {\n  display: none;\n  position: fixed;\n  margin-top: 0;\n  left: 0;\n  background-color: #EBF5F9;\n  width: 90%;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  font-size: 30px; }\n  .dropdowncontent a {\n    float: none;\n    color: #3B76AD;\n    padding: 10px 10px;\n    text-decoration: none;\n    display: block;\n    text-align: left; }\n  .dropdowncontent a :visited {\n    color: #3B76AD; }\n\n.show {\n  display: block; }\n\nbody {\n  background: #D8EBF3;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%233b76ad' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E\");\n  margin: 0px;\n  font-family: \"Roboto\", sans-serif;\n  margin-bottom: 70px; }\n\nh2 {\n  text-align: center; }\n\np {\n  text-align: center;\n  color: #EBF5F9; }\n  p a {\n    color: #FE6D43;\n    text-decoration: none;\n    font-weight: bold; }\n\n.siteDescription {\n  background: #3B76AD;\n  padding: 5px;\n  text-align: center;\n  color: #EBF5F9; }\n\n#trackerInformation {\n  margin-bottom: 20px; }\n  #trackerInformation h3 {\n    margin-top: 0; }\n  #trackerInformation p {\n    font-size: 15px;\n    font-weight: normal; }\n\nhr {\n  border-color: #EBF5F9; }\n\n.mainButton {\n  display: block;\n  text-decoration: none;\n  text-align: center;\n  margin: auto;\n  width: 250px;\n  line-height: 70px;\n  background-color: #FE6D43;\n  box-shadow: 0px 4px 4px #7D7D7D;\n  border-radius: 40px;\n  color: #EBF5F9;\n  font-size: 24px;\n  border: none; }\n  .mainButton:first-of-type {\n    margin-bottom: 30px; }\n\n#buttonContainer {\n  margin-top: 15vh; }\n\n.registerForm {\n  color: #EBF5F9;\n  font-weight: bold;\n  font-size: 30px;\n  width: 90%;\n  margin: auto;\n  text-align: center; }\n\n#formContainer {\n  margin: auto;\n  margin-top: 5vh;\n  background-color: #3B76AD;\n  border-radius: 15px;\n  padding-top: 10px;\n  padding-bottom: 5px; }\n\n#helpText {\n  position: fixed;\n  bottom: 0;\n  background: #3B76AD;\n  width: 100%;\n  margin: auto;\n  line-height: 10vh;\n  margin-top: 20px;\n  font-size: 20px; }\n\n.inputBoxes {\n  margin: auto;\n  width: 90%;\n  line-height: 40px;\n  border-radius: 10px;\n  text-decoration: none;\n  display: inline-block;\n  border: none;\n  background: #EBF5F9;\n  margin-bottom: 15px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n  font-weight: bold;\n  font-size: 20px;\n  color: #C066A8;\n  padding: 3px; }\n  .inputBoxes::placeholder {\n    color: #C066A8; }\n\n#profileButtonContainer {\n  margin-top: 8vh; }\n\n.profileButtons {\n  display: flex;\n  justify-content: space-evenly;\n  margin: auto;\n  width: 80%;\n  line-height: 65px;\n  height: 65px;\n  text-decoration: none;\n  color: #EBF5F9;\n  font-size: 24px;\n  border-radius: 10px;\n  padding: 5px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25); }\n  .profileButtons:first-of-type {\n    margin-bottom: 5vh; }\n  .profileButtons:nth-of-type(2) {\n    margin-bottom: 5vh; }\n  .profileButtons.buttonPurple1 {\n    background: #C066A8; }\n    .profileButtons.buttonPurple1 img {\n      width: 48px; }\n  .profileButtons.buttonPurple2 {\n    background: #B779BB;\n    text-align: right; }\n    .profileButtons.buttonPurple2 img {\n      width: 48px; }\n  .profileButtons.buttonPurple3 {\n    background: #C3588B; }\n    .profileButtons.buttonPurple3 img {\n      width: 48px; }\n  .profileButtons:visited {\n    color: #EBF5F9; }\n\n#moodContainer {\n  margin: auto;\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5vh;\n  text-align: center;\n  justify-content: space-between; }\n\n.moodButtons {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 30%;\n  height: 75px;\n  margin-bottom: 5px;\n  font-weight: bold;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.10s ease-in;\n  border-radius: 10px; }\n  .moodButtons img {\n    margin: auto;\n    height: 40px; }\n  .moodButtons.button7 {\n    margin-bottom: 10px; }\n  .moodButtons.button8 {\n    margin-bottom: 10px; }\n  .moodButtons.button9 {\n    margin-bottom: 10px; }\n\n.button1 {\n  background: #03EE31; }\n\n.button2 {\n  background: #5CF640; }\n\n.button3 {\n  background: #9AFF36; }\n\n.button4 {\n  background: #FAFF09; }\n\n.button5 {\n  background: #FFE71F; }\n\n.button6 {\n  background: #FFCF34; }\n\n.button7 {\n  background: #FF6D19; }\n\n.button8 {\n  background: #DD3B17; }\n\n.button9 {\n  background: #BA1414; }\n\ntextarea {\n  width: 90%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  font-size: 15px;\n  color: #C066A8;\n  font-weight: bold; }\n  textarea::placeholder {\n    color: #C066A8; }\n\ninput[type=radio] {\n  display: none; }\n\ninput[type=radio]:checked + label {\n  border: 3px solid #EBF5F9; }\n\n#calender {\n  background: #EBF5F9;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr); }\n  #calender div {\n    outline: 1px solid #FE6D43;\n    padding: 5px; }\n\nselect {\n  border: none;\n  font-size: 24px;\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);\n  color: #C066A8;\n  font-weight: bold; }\n\n#monthListContainer {\n  text-align: center;\n  margin-bottom: 20px; }\n\n#month {\n  font-size: 30px;\n  text-align: center; }\n\n#goalListDropdown {\n  width: 90%;\n  margin-top: 15px;\n  margin-bottom: 10px; }\n\n#goalSubmitButton {\n  margin-top: 10px; }\n\n#goalTableContainer {\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr); }\n  #goalTableContainer div {\n    outline: 1px solid #FE6D43;\n    padding: 5px; }\n", ""]);



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






 //This is where all my javascript and sass gets minified by webpack and sent to bundle.js in the dist folder
//some devdependencies in package.json are unused in this project and were used for testing

/***/ }),

/***/ "./src/js/diary.js":
/*!*************************!*\
  !*** ./src/js/diary.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//function is defined in javascript by DOM using window. function as its all bundled together it would try run every function at once otherwise
window.enterMood = function () {
  event.preventDefault(); //setting an ajax request to be sent to diaryDAO

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
        var breakLine = document.createElement("br"); // moodFeelings.innerHTML = ("<b>Diary notes</b><br/>" + entry.text);

        moodFeelings.innerHTML = "<b>Diary notes</b><br/>" + testingText;
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
      testingText = atob(entry.text);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dvYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzRjMTUiXSwibmFtZXMiOlsid2luZG93IiwiZW50ZXJNb29kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibW9vZCIsInBhcnNlSW50IiwicXVlcnlTZWxlY3RvciIsIm1vb2RJbmZvIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXR1cm5EYXRhIiwicmVzcG9uc2VUZXh0IiwiaW5uZXJIVE1MIiwiaW5udGVySFRNTCIsInNlbmQiLCJkcm9wRG93bk1lbnUiLCJidXJnZXJCYXJzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ4IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImJhciIsInVwbG9hZEdvYWwiLCJnb2FsIiwiZGF0YSIsInJldHVybl9kYXRhIiwiZ2V0R29hbHMiLCJnb2FsRW50cmllc1RvUmVtb3ZlIiwiZW50cnkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZXNwb25zZVR5cGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwidXNlckRhdGEiLCJwb3B1bGF0ZUdvYWxUYWJsZSIsImlkIiwicHJvZ3Jlc3MiLCJkaXZHb2FsIiwiY3JlYXRlRWxlbWVudCIsImRpdlByb2dyZXNzIiwiYWRkIiwiZ29hbFRhYmxlQ29udGFpbmVyIiwiYXBwZW5kIiwic3R5bGUiLCJjb2xvciIsImNoYW5nZVByb2dyZXNzIiwidXBkYXRlUHJvZ3Jlc3MiLCJMb2dJbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VycyIsImxvY2F0aW9uIiwiYXNzaWduIiwicmVnaXN0ZXIiLCJjb25maXJtUGFzc3dvcmQiLCJkYXlzSW5Nb250aCIsIm1vbnRoIiwieWVhciIsIkRhdGUiLCJnZXREYXRlIiwiY2FsZW5kZXIiLCJtb250aExpc3QiLCJnZXRDYWxlbmRhck1vbnRoIiwiZGF5c1RoaXNNb250aCIsImN1cnJlbnRSb3ciLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJzdGFydERhdGUiLCJzdGFydERhdGVQb3NpdGlvbiIsImdldERheSIsImkiLCJ0aGlzX2RheSIsImRheVBvc2l0aW9uIiwiZ3JpZENvbHVtbiIsImFwcGVuZENoaWxkIiwidXBkYXRlQnV0dG9uIiwiY2FsZW5kZXJFbnRyaWVzVG9SZW1vdmUiLCJ1cGRhdGVDYWxlbmRhciIsInVzZXJEYXRlIiwicG9wdWxhdGVDYWxlbmRhciIsImRhdGVVcGxvYWRlZCIsImdldE1vbnRoIiwicG9wdXAiLCJtb29kRmVlbGluZ3MiLCJicmVha0xpbmUiLCJ0ZXN0aW5nVGV4dCIsIm1vb2RWYWx1ZSIsImRheSIsInRhcmdldElEIiwidGFyZ2V0RGl2IiwiYXRv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c0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUosRUFBWDtBQUNBLElBQUlELElBQUksR0FBR1EsSUFBSSxDQUFDQyxXQUFMLEVBQVg7QUFDQSxJQUFJVixLQUFLLEdBQUdTLElBQUksQ0FBQ2dCLFFBQUwsRUFBWjtBQUNBbEIsYUFBYSxHQUFHUixXQUFXLENBQUNDLEtBQUQsRUFBUUMsSUFBUixDQUEzQjtBQUVBSyxnQkFBZ0IsQ0FBQ0MsYUFBRCxFQUFnQlAsS0FBaEIsQ0FBaEI7QUFDQXFCLGNBQWMsQ0FBQ3JCLEtBQUQsQ0FBZCxDOzs7Ozs7Ozs7Ozs7QUN2TEEsY0FBYyxtQkFBTyxDQUFDLGdOQUFzRzs7QUFFNUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1IZWVib3xSb2JvdG8pO1wiLCBcIlwiXSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogI0VCRjVGOTtcXG4gIGJhY2tncm91bmQ6ICM1MkE1Q0M7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjM0I3NkFEOyB9XFxuXFxuI2J1cmdlcm5hdiAjZHJvcGJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMDtcXG4gIHRvcDogMThweDsgfVxcblxcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1Rjk7XFxuICBtYXJnaW46IDZweCAwO1xcbiAgdHJhbnNpdGlvbjogMC40czsgfVxcblxcbi8qIHJvdGF0ZXMgYmFyMSAtNDUgZGVncmVlcyBhbmQgLmNoYW5nZSAuYmFyMyByb3RhdGVzIDQ1IGRlZ3JlZXMgdG8gbWFrZSB0aGUgWCB3aGVuIGNsaWNrZWQgb24gKi9cXG4uY2hhbmdlLmJhcjEge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTsgfVxcblxcbi8qIG1ha2VzIHRoZSBtaWRkbGUgYmFyIGRpc2FwZWFyIHdoZW4gYnVyZ2VyIG5hdiBwcmVzc2VkIG9uICovXFxuLmNoYW5nZS5iYXIyIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4uY2hhbmdlLmJhcjMge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC05cHgsIC02cHgpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCAtNnB4KTsgfVxcblxcbi5kcm9wZG93bmNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjVGOTtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHotaW5kZXg6IDE7XFxuICBmb250LXNpemU6IDMwcHg7IH1cXG4gIC5kcm9wZG93bmNvbnRlbnQgYSB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBjb2xvcjogIzNCNzZBRDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAuZHJvcGRvd25jb250ZW50IGEgOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogIzNCNzZBRDsgfVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjRDhFQkYzO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU2IDI4JyB3aWR0aD0nNTYnIGhlaWdodD0nMjgnJTNFJTNDcGF0aCBmaWxsPSclMjMzYjc2YWQnIGZpbGwtb3BhY2l0eT0nMC40JyBkPSdNNTYgMjZ2MmgtNy43NWMyLjMtMS4yNyA0Ljk0LTIgNy43NS0yem0tMjYgMmEyIDIgMCAxIDAtNCAwaC00LjA5QTI1Ljk4IDI1Ljk4IDAgMCAwIDAgMTZ2LTJjLjY3IDAgMS4zNC4wMiAyIC4wN1YxNGEyIDIgMCAwIDAtMi0ydi0yYTQgNCAwIDAgMSAzLjk4IDMuNiAyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NkE4IDggMCAwIDAgMCA2VjRhOS45OSA5Ljk5IDAgMCAxIDguMTcgNC4yM2MuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNBMTMuOTggMTMuOTggMCAwIDAgMCAwaDcuNzVjMiAxLjEgMy43MyAyLjYzIDUuMSA0LjQ1IDEuMTItLjcyIDIuMy0xLjM3IDMuNTMtMS45M0EyMC4xIDIwLjEgMCAwIDAgMTQuMjggMGgyLjdjLjQ1LjU2Ljg4IDEuMTQgMS4yOSAxLjc0IDEuMy0uNDggMi42My0uODcgNC0xLjE1LS4xMS0uMi0uMjMtLjQtLjM2LS41OUgyNnYuMDdhMjguNCAyOC40IDAgMCAxIDQgMFYwaDQuMDlsLS4zNy41OWMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1LjQtLjYuODQtMS4xOCAxLjMtMS43NGgyLjY5YTIwLjEgMjAuMSAwIDAgMC0yLjEgMi41MmMxLjIzLjU2IDIuNDEgMS4yIDMuNTQgMS45M0ExNi4wOCAxNi4wOCAwIDAgMSA0OC4yNSAwSDU2Yy00LjU4IDAtOC42NSAyLjItMTEuMiA1LjYgMS4wNy44IDIuMDkgMS42OCAzLjAzIDIuNjNBOS45OSA5Ljk5IDAgMCAxIDU2IDR2MmE4IDggMCAwIDAtNi43NyAzLjc0YzEuMDMgMS4yIDEuOTcgMi41IDIuNzkgMy44NkE0IDQgMCAwIDEgNTYgMTB2MmEyIDIgMCAwIDAtMiAyLjA3IDI4LjQgMjguNCAwIDAgMSAyLS4wN3YyYy05LjIgMC0xNy4zIDQuNzgtMjEuOTEgMTJIMzB6TTcuNzUgMjhIMHYtMmMyLjgxIDAgNS40Ni43MyA3Ljc1IDJ6TTU2IDIwdjJjLTUuNiAwLTEwLjY1IDIuMy0xNC4yOCA2aC0yLjdjNC4wNC00Ljg5IDEwLjE1LTggMTYuOTgtOHptLTM5LjAzIDhoLTIuNjlDMTAuNjUgMjQuMyA1LjYgMjIgMCAyMnYtMmM2LjgzIDAgMTIuOTQgMy4xMSAxNi45NyA4em0xNS4wMS0uNGEyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NiA4IDggMCAwIDAtMTMuNTUgMGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZhNCA0IDAgMCAxIDcuOTYgMHptMTQuMjktMTEuODZjMS4zLS40OCAyLjYzLS44NyA0LTEuMTVhMjUuOTkgMjUuOTkgMCAwIDAtNDQuNTUgMGMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1YTIxLjk4IDIxLjk4IDAgMCAxIDM2LjU0IDB6bS01LjQzIDIuNzFjMS4xMy0uNzIgMi4zLTEuMzcgMy41NC0xLjkzYTE5Ljk4IDE5Ljk4IDAgMCAwLTMyLjc2IDBjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNhMTUuOTggMTUuOTggMCAwIDEgMjUuNjggMHptLTQuNjcgMy43OGMuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNhMTMuOTggMTMuOTggMCAwIDAtMjIuNCAwYzEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzYTkuOTkgOS45OSAwIDAgMSAxNi4zNCAweiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcXFwiKTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWJvdHRvbTogNzBweDsgfVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbnAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNFQkY1Rjk7IH1cXG4gIHAgYSB7XFxuICAgIGNvbG9yOiAjRkU2RDQzO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLnNpdGVEZXNjcmlwdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjM0I3NkFEO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNFQkY1Rjk7IH1cXG5cXG4jdHJhY2tlckluZm9ybWF0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG4gICN0cmFja2VySW5mb3JtYXRpb24gaDMge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICAjdHJhY2tlckluZm9ybWF0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG5ociB7XFxuICBib3JkZXItY29sb3I6ICNFQkY1Rjk7IH1cXG5cXG4ubWFpbkJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNkQ0MztcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICM3RDdEN0Q7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgY29sb3I6ICNFQkY1Rjk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXI6IG5vbmU7IH1cXG4gIC5tYWluQnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XFxuXFxuI2J1dHRvbkNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNXZoOyB9XFxuXFxuLnJlZ2lzdGVyRm9ybSB7XFxuICBjb2xvcjogI0VCRjVGOTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbiNmb3JtQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQjc2QUQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XFxuXFxuI2hlbHBUZXh0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICMzQjc2QUQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAxMHZoO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi5pbnB1dEJveGVzIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjRUJGNUY5O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI0MwNjZBODtcXG4gIHBhZGRpbmc6IDNweDsgfVxcbiAgLmlucHV0Qm94ZXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNDMDY2QTg7IH1cXG5cXG4jcHJvZmlsZUJ1dHRvbkNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiA4dmg7IH1cXG5cXG4ucHJvZmlsZUJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xcbiAgaGVpZ2h0OiA2NXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNFQkY1Rjk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cXG4gIC5wcm9maWxlQnV0dG9uczpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoOyB9XFxuICAucHJvZmlsZUJ1dHRvbnM6bnRoLW9mLXR5cGUoMikge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7IH1cXG4gIC5wcm9maWxlQnV0dG9ucy5idXR0b25QdXJwbGUxIHtcXG4gICAgYmFja2dyb3VuZDogI0MwNjZBODsgfVxcbiAgICAucHJvZmlsZUJ1dHRvbnMuYnV0dG9uUHVycGxlMSBpbWcge1xcbiAgICAgIHdpZHRoOiA0OHB4OyB9XFxuICAucHJvZmlsZUJ1dHRvbnMuYnV0dG9uUHVycGxlMiB7XFxuICAgIGJhY2tncm91bmQ6ICNCNzc5QkI7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgIC5wcm9maWxlQnV0dG9ucy5idXR0b25QdXJwbGUyIGltZyB7XFxuICAgICAgd2lkdGg6IDQ4cHg7IH1cXG4gIC5wcm9maWxlQnV0dG9ucy5idXR0b25QdXJwbGUzIHtcXG4gICAgYmFja2dyb3VuZDogI0MzNTg4QjsgfVxcbiAgICAucHJvZmlsZUJ1dHRvbnMuYnV0dG9uUHVycGxlMyBpbWcge1xcbiAgICAgIHdpZHRoOiA0OHB4OyB9XFxuICAucHJvZmlsZUJ1dHRvbnM6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiAjRUJGNUY5OyB9XFxuXFxuI21vb2RDb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4ubW9vZEJ1dHRvbnMge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogMXB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xMHMgZWFzZS1pbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG4gIC5tb29kQnV0dG9ucyBpbWcge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogNDBweDsgfVxcbiAgLm1vb2RCdXR0b25zLmJ1dHRvbjcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAubW9vZEJ1dHRvbnMuYnV0dG9uOCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIC5tb29kQnV0dG9ucy5idXR0b245IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5idXR0b24xIHtcXG4gIGJhY2tncm91bmQ6ICMwM0VFMzE7IH1cXG5cXG4uYnV0dG9uMiB7XFxuICBiYWNrZ3JvdW5kOiAjNUNGNjQwOyB9XFxuXFxuLmJ1dHRvbjMge1xcbiAgYmFja2dyb3VuZDogIzlBRkYzNjsgfVxcblxcbi5idXR0b240IHtcXG4gIGJhY2tncm91bmQ6ICNGQUZGMDk7IH1cXG5cXG4uYnV0dG9uNSB7XFxuICBiYWNrZ3JvdW5kOiAjRkZFNzFGOyB9XFxuXFxuLmJ1dHRvbjYge1xcbiAgYmFja2dyb3VuZDogI0ZGQ0YzNDsgfVxcblxcbi5idXR0b243IHtcXG4gIGJhY2tncm91bmQ6ICNGRjZEMTk7IH1cXG5cXG4uYnV0dG9uOCB7XFxuICBiYWNrZ3JvdW5kOiAjREQzQjE3OyB9XFxuXFxuLmJ1dHRvbjkge1xcbiAgYmFja2dyb3VuZDogI0JBMTQxNDsgfVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiAjQzA2NkE4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjQzA2NkE4OyB9XFxuXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjRUJGNUY5OyB9XFxuXFxuI2NhbGVuZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNFQkY1Rjk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7IH1cXG4gICNjYWxlbmRlciBkaXYge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI0ZFNkQ0MztcXG4gICAgcGFkZGluZzogNXB4OyB9XFxuXFxuc2VsZWN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgY29sb3I6ICNDMDY2QTg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbiNtb250aExpc3RDb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbiNtb250aCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4jZ29hbExpc3REcm9wZG93biB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cXG4jZ29hbFN1Ym1pdEJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuI2dvYWxUYWJsZUNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IH1cXG4gICNnb2FsVGFibGVDb250YWluZXIgZGl2IHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNGRTZENDM7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgXCIuL3Nhc3MvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBcIi4vanMvZHJvcGRvd24uanNcIjtcclxuaW1wb3J0IFwiLi9qcy9yZWdpc3Rlci5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL2xvZ2luLmpzXCI7XHJcbmltcG9ydCBcIi4vanMvZGlhcnkuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9nb2Fscy5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL3RyYWNrZXIuanNcIjtcclxuXHJcblxyXG4vL1RoaXMgaXMgd2hlcmUgYWxsIG15IGphdmFzY3JpcHQgYW5kIHNhc3MgZ2V0cyBtaW5pZmllZCBieSB3ZWJwYWNrIGFuZCBzZW50IHRvIGJ1bmRsZS5qcyBpbiB0aGUgZGlzdCBmb2xkZXJcclxuLy9zb21lIGRldmRlcGVuZGVuY2llcyBpbiBwYWNrYWdlLmpzb24gYXJlIHVudXNlZCBpbiB0aGlzIHByb2plY3QgYW5kIHdlcmUgdXNlZCBmb3IgdGVzdGluZyIsIlxyXG5cclxuLy9mdW5jdGlvbiBpcyBkZWZpbmVkIGluIGphdmFzY3JpcHQgYnkgRE9NIHVzaW5nIHdpbmRvdy4gZnVuY3Rpb24gYXMgaXRzIGFsbCBidW5kbGVkIHRvZ2V0aGVyIGl0IHdvdWxkIHRyeSBydW4gZXZlcnkgZnVuY3Rpb24gYXQgb25jZSBvdGhlcndpc2Vcclxud2luZG93LmVudGVyTW9vZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy9zZXR0aW5nIGFuIGFqYXggcmVxdWVzdCB0byBiZSBzZW50IHRvIGRpYXJ5REFPXHJcbiAgICB2YXIgaHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB2YXIgdXJsID0gXCIvaW5jbHVkZXMvZGlhcnlEQU8ucGhwXCI7XHJcbiAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFpvbmVcIikudmFsdWU7XHJcbiAgICB2YXIgbW9vZCA9IHBhcnNlSW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhbnN3ZXJcIl06Y2hlY2tlZCcpLnZhbHVlKTtcclxuICAgIHZhciBtb29kSW5mbyA9IFwidGV4dD1cIit0ZXh0K1wiJm1vb2Q9XCIrbW9vZCsgXCImcGhwZnVuY3Rpb249c3VibWl0RGlhcnlcIjtcclxuICAgIGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICBoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG5cclxuICAgIGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciByZXR1cm5EYXRhID0gaHIucmVzcG9uc2VUZXh0O1xyXG5cclxuICAgICAgICBpZihyZXR1cm5EYXRhID09IFwiQ3VycmVudGx5IHlvdSBjYW4gb25seSBzdWJtaXQgb25lIGRpYXJ5IHN1Ym1pc3Npb24gYSBkYXlcIil7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3hcIikuaW5uZXJIVE1MID0gcmV0dXJuRGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94XCIpLmlubnRlckhUTUwgPSBcIllvdXIgZGlhcnkgc3VibWlzc2lvbiB3YXMgc3VjY2Vzc2Z1bCEgVmlzaXQgdGhlIHRyYWNrZXIgdG8gc2VlIHlvdXIgZGlhcnkgcHJvZ3Jlc3NcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhyLnNlbmQobW9vZEluZm8pO1xyXG5cclxuXHJcblxyXG5cclxufSIsIlxyXG5cclxudmFyIGRyb3BEb3duTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wYnV0dG9uJyk7XHJcblxyXG52YXIgYnVyZ2VyQmFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiYXJcIik7XHJcblxyXG5kcm9wRG93bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbih4KXtcclxuXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93blwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuXHJcblx0QXJyYXkuZnJvbShidXJnZXJCYXJzKS5mb3JFYWNoKChiYXIpID0+IHtcclxuXHJcblx0XHRiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuXHJcblx0fSlcclxuICAgICAgICBcclxufSk7XHJcblxyXG5cclxuIiwiXHJcblxyXG53aW5kb3cudXBsb2FkR29hbCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHZhciB1cmwgPSBcIi9pbmNsdWRlcy9nb2Fsc0RBTy5waHBcIjtcclxuICAgIHZhciBnb2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2FsTGlzdERyb3Bkb3duXCIpLnZhbHVlO1xyXG4gICAgdmFyIGRhdGEgPSBcImdvYWw9XCIrZ29hbCtcIiZwaHBmdW5jdGlvbj11cGxvYWRHb2FsXCI7XHJcbiAgICBoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgaHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuXHJcbiAgICBoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciByZXR1cm5fZGF0YSA9IGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgaWYocmV0dXJuX2RhdGEgPT0gXCJwYXNzZWRcIil7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3hcIikuaW5uZXJIVE1MID0gXCJZb3VyIGdvYWwgd2FzIHN1Ym1pdHRlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZihyZXR1cm5fZGF0YSA9PSBcImZhaWxlZFwiKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveFwiKS5pbm5lckhUTUwgPSBcIkVycm9yIHN1Ym1pdHRpbmcgdGhlIGdvYWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhyLnNlbmQoZGF0YSk7XHJcblxyXG59XHJcblxyXG53aW5kb3cuZ2V0R29hbHMgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGxldCBnb2FsRW50cmllc1RvUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdvYWxFbnRyeVwiKTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGdvYWxFbnRyaWVzVG9SZW1vdmUpLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcblxyXG5cdFx0ZW50cnkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeSk7XHJcblxyXG5cdH0pXHJcblxyXG5cclxuICAgIHZhciBociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIHVybCA9IFwiL2luY2x1ZGVzL2dvYWxzREFPLnBocFwiO1xyXG4gICAgXHJcblxyXG4gICAgaHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgaHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoci5yZXNwb25zZVR5cGU9XCJqc29uXCI7XHJcblxyXG4gICAgaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB1c2VyRGF0YSA9IHRoaXMucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIHBvcHVsYXRlR29hbFRhYmxlKHRoaXMucmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhyLnNlbmQoKTtcclxuXHJcbn1cclxuXHJcbndpbmRvdy5wb3B1bGF0ZUdvYWxUYWJsZSA9IGZ1bmN0aW9uKHVzZXJEYXRhKXtcclxuXHJcbiAgICB1c2VyRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KXtcclxuICAgICAgICB2YXIgaWQgPSBlbnRyeS5pZDtcclxuICAgICAgICB2YXIgZ29hbCA9IGVudHJ5LmdvYWw7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzID0gZW50cnkucHJvZ3Jlc3M7XHJcbiAgICAgICAgdmFyIGRpdkdvYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2YXIgZGl2UHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZQcm9ncmVzcy5jbGFzc0xpc3QuYWRkKFwiZ29hbEVudHJ5XCIpO1xyXG4gICAgICAgIGRpdkdvYWwuY2xhc3NMaXN0LmFkZChcImdvYWxFbnRyeVwiKTtcclxuICAgICAgICBkaXZHb2FsLmlubmVySFRNTCA9IGdvYWw7XHJcbiAgICAgICAgZGl2UHJvZ3Jlc3MuaW5uZXJIVE1MID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgZ29hbFRhYmxlQ29udGFpbmVyLmFwcGVuZChkaXZHb2FsKTtcclxuICAgICAgICBnb2FsVGFibGVDb250YWluZXIuYXBwZW5kKGRpdlByb2dyZXNzKTtcclxuICAgICAgICBpZihwcm9ncmVzcyA9PVwiQ29tcGxldGVcIil7XHJcbiAgICAgICAgICAgIGRpdlByb2dyZXNzLnN0eWxlLmNvbG9yID0gXCIjNUNGNjQwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXZQcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VQcm9ncmVzcygpe1xyXG4gICAgICAgICAgICAvL2NoYW5nZXMgdG8gY29tcGxldGVcclxuICAgICAgICAgICAgZGl2UHJvZ3Jlc3MuaW5uZXJIVE1MID0gXCJDb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICBkaXZQcm9ncmVzcy5zdHlsZS5jb2xvciA9IFwiIzVDRjY0MFwiO1xyXG4gICAgICAgICAgICB1cGRhdGVQcm9ncmVzcyhpZCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxud2luZG93LnVwZGF0ZVByb2dyZXNzID0gZnVuY3Rpb24oaWQpe1xyXG5cclxuICAgIHZhciBociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgdmFyIHVybCA9IFwiL2luY2x1ZGVzL2dvYWxzREFPLnBocFwiO1xyXG4gICAgdmFyIGRhdGEgPSBcImlkPVwiK2lkK1wiJnBocGZ1bmN0aW9uPXVwZGF0ZUdvYWxEYXRhXCI7XHJcbiAgICBoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgaHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuXHJcbiAgICBoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciByZXR1cm5fZGF0YSA9IGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgaWYocmV0dXJuX2RhdGEgPT0gXCJwYXNzZWRcIil7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3gyXCIpLmlubmVySFRNTCA9IFwiWW91ciBnb2FsIHdhcyBjb21wbGV0ZWRcIjtcclxuICAgICAgICB9IGVsc2UgaWYocmV0dXJuX2RhdGEgPT0gXCJmYWlsZWRcIil7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3gyXCIpLmlubmVySFRNTCA9IFwiRXJyb3IgdXBkYXRpbmcgdGhlIGdvYWxcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJldHVybl9kYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaHIuc2VuZChkYXRhKTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmdldEdvYWxzKCk7IiwiXHJcblxyXG53aW5kb3cuTG9nSW4gPSBmdW5jdGlvbigpeyAgXHJcblxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG5cclxuICAgIHZhciBociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIHZhciB1cmwgPSBcIi9pbmNsdWRlcy9sb2dpbkRBTy5waHBcIjtcclxuICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RW1haWwxXCIpLnZhbHVlO1xyXG4gICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRQYXNzd29yZDFcIikudmFsdWU7XHJcbiAgICB2YXIgdXNlcnMgPSBcImVtYWlsPVwiK2VtYWlsK1wiJnBhc3N3b3JkPVwiK3Bhc3N3b3JkKyBcIiZwaHBmdW5jdGlvbj1sb2dpblVzZXJcIjtcclxuICAgIGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICBoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG4gICAgXHJcbiAgICBoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgcmV0dXJuX2RhdGEgPSBoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgIGlmKHJldHVybl9kYXRhICE9IFwiZW1haWwgb3IgcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2hcIil7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24ocmV0dXJuX2RhdGEpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveFwiKS5pbm5lckhUTUwgPSByZXR1cm5fZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgaHIuc2VuZCh1c2Vycyk7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiXHJcblxyXG5cclxuXHJcbndpbmRvdy5yZWdpc3RlciA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRQYXNzd29yZFwiKTtcclxuICAgIHZhciBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dENvbmZpcm1QYXNzd29yZFwiKTtcclxuICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0RW1haWxcIik7XHJcblxyXG5cclxuICAgIGlmKChwYXNzd29yZC52YWx1ZSA9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpICYmIChlbWFpbC52YWx1ZSAhPSBcIlwiKSAmJiAocGFzc3dvcmQudmFsdWUgIT0gXCJcIikgJiYgKGNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPSBcIlwiKSkge1xyXG5cclxuICAgICAgdmFyIGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICB2YXIgdXJsID0gXCIvaW5jbHVkZXMvcmVnaXN0cmF0aW9uREFPLnBocFwiO1xyXG4gICAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEVtYWlsXCIpLnZhbHVlO1xyXG4gICAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dFBhc3N3b3JkXCIpLnZhbHVlO1xyXG4gICAgICB2YXIgdXNlcnMgPSBcImVtYWlsPVwiK2VtYWlsK1wiJnBhc3N3b3JkPVwiK3Bhc3N3b3JkKyBcIiZwaHBmdW5jdGlvbj1jcmVhdGVVc2VyXCI7XHJcbiAgICAgIGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgIGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcblxyXG4gICAgICBoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgcmV0dXJuX2RhdGEgPSBoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJldHVybl9kYXRhKTtcclxuXHJcbiAgICAgICAgaWYocmV0dXJuX2RhdGEgIT0gXCJUaGlzIGVtYWlsIGFscmVhZHkgcmVnaXN0ZXJlZC5cIil7XHJcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5hc3NpZ24ocmV0dXJuX2RhdGEpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveFwiKS5pbm5lckhUTUwgPSByZXR1cm5fZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBoci5zZW5kKHVzZXJzKTsgIFxyXG5cclxuICB9IGVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveFwiKS5pbm5lckhUTUwgPSBcIlBhc3N3b3JkcyBkb24ndCBtYXRjaCwgcGxlYXNlIHRyeSBhZ2FpblwiO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4iLCJcclxuZnVuY3Rpb24gZGF5c0luTW9udGgobW9udGgsIHllYXIpe1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgXHJcbn1cclxuXHJcbnZhciBjYWxlbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kZXJcIik7XHJcblxyXG5sZXQgbW9udGhMaXN0ID0gWyBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIgXTtcclxuXHJcbndpbmRvdy5nZXRDYWxlbmRhck1vbnRoID0gZnVuY3Rpb24oZGF5c1RoaXNNb250aCwgbW9udGgpe1xyXG5cclxuICAgIHZhciBjdXJyZW50Um93ID0gMjtcclxuXHJcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxldCBzdGFydERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgICBzdGFydERhdGVQb3NpdGlvbiA9IHN0YXJ0RGF0ZS5nZXREYXkoKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRoXCIpLmlubmVySFRNTCA9IG1vbnRoTGlzdFttb250aF07XHJcblxyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXlzVGhpc01vbnRoOyBpKyspe1xyXG5cclxuICAgICAgICB2YXIgdGhpc19kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXNfZGF5LmNsYXNzTGlzdC5hZGQoXCJjYWxlbmRlckVudHJ5XCIpO1xyXG4gICAgICAgIGxldCBkYXlQb3NpdGlvbiA9IHN0YXJ0RGF0ZS5nZXREYXkoKSArIGk7XHJcbiAgICAgICAgdGhpc19kYXkuaW5uZXJIVE1MID0gc3RhcnREYXRlLmdldERhdGUoKSArIGk7XHJcbiAgICAgICAgdGhpc19kYXkuaWQgPSBkYXlQb3NpdGlvbiArIFwiLVwiICsgKG1vbnRoICsgMSk7XHJcblxyXG4gICAgICAgIGlmKChzdGFydERhdGVQb3NpdGlvbiArIGkpICUgKDcgKiAoY3VycmVudFJvdyAtIDEpKSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpc19kYXkuc3R5bGUuZ3JpZENvbHVtbiA9IDc7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICB0aGlzX2RheS5zdHlsZS5ncmlkQ29sdW1uID0gKHN0YXJ0RGF0ZVBvc2l0aW9uICsgaSkgJSAoNyAqIChjdXJyZW50Um93IC0gMSkpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRoaXNfZGF5LnN0eWxlLmdyaWRDb2x1bW4gPSAoc3RhcnREYXRlUG9zaXRpb24gKyBpKSAlICg3ICogKGN1cnJlbnRSb3cgLSAxKSk7XHJcbiAgICBcclxuICAgICAgICBpZihkYXlQb3NpdGlvbiA9PSA2KXtcclxuICAgICAgICAgICAgY3VycmVudFJvdyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY2FsZW5kZXIuYXBwZW5kQ2hpbGQodGhpc19kYXkpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cudXBkYXRlQnV0dG9uID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxldCBtb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGhMaXN0XCIpLnZhbHVlO1xyXG4gICAgbW9udGggPSBwYXJzZUludChtb250aCk7XHJcblxyXG4gICAgbGV0IGRheXNUaGlzTW9udGggPSBkYXlzSW5Nb250aChtb250aCwgeWVhcik7XHJcblxyXG4gICAgLy8gZ2V0IG1vbnRoIGZyb20gZHJvcGRvd25cclxuICAgIGNvbnNvbGUubG9nKG1vbnRoKTtcclxuICAgIGNvbnNvbGUubG9nKGRheXNUaGlzTW9udGgpO1xyXG5cclxuICAgIGxldCBjYWxlbmRlckVudHJpZXNUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYWxlbmRlckVudHJ5XCIpO1xyXG5cclxuICAgIEFycmF5LmZyb20oY2FsZW5kZXJFbnRyaWVzVG9SZW1vdmUpLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcblxyXG5cdFx0ZW50cnkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeSk7XHJcblxyXG5cdH0pXHJcblxyXG4gICAgXHJcbiAgICBnZXRDYWxlbmRhck1vbnRoKGRheXNUaGlzTW9udGgsIG1vbnRoKTtcclxuICAgIHVwZGF0ZUNhbGVuZGFyKG1vbnRoKTtcclxufVxyXG5cclxuXHJcbndpbmRvdy51cGRhdGVDYWxlbmRhciA9IGZ1bmN0aW9uKG1vbnRoKXtcclxuXHJcbiAgICBpZihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHZhciB1cmwgPSBcIi9pbmNsdWRlcy90cmFja2VyREFPLnBocFwiO1xyXG4gICAgXHJcblxyXG4gICAgaHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgaHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoci5yZXNwb25zZVR5cGU9XCJqc29uXCI7XHJcbiAgICBcclxuICAgIGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIHVzZXJEYXRlID0gdGhpcy5yZXNwb25zZTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVsYXRlQ2FsZW5kYXIodGhpcy5yZXNwb25zZSwgbW9udGgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhyLnNlbmQoKTtcclxuXHJcbn1cclxuXHJcbndpbmRvdy5wb3B1bGF0ZUNhbGVuZGFyID0gZnVuY3Rpb24oZGF0YSwgbW9udGgpe1xyXG5cclxuXHJcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZW50cnkpe1xyXG5cclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmRhdGVVcGxvYWRlZCk7XHJcblxyXG4gICAgICAgIGlmKGRhdGUuZ2V0TW9udGgoKSA9PSBtb250aCl7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbnRyeSk7XHJcbiAgICAgICAgICAgIHZhciBtb29kID0gZW50cnkubW9vZDtcclxuICAgICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRJRCA9IChkYXkgKyBcIi1cIiArIChtb250aCArIDEpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0SUQpO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SUQpO1xyXG4gICAgICAgICAgICB0YXJnZXREaXYuaW5uZXJIVE1MID0gZGF5O1xyXG4gICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiICsgbW9vZCk7XHJcbiAgICAgICAgICAgIHRhcmdldERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdXApO1xyXG4gICAgICAgICAgICB0ZXN0aW5nVGV4dCA9IGF0b2IoZW50cnkudGV4dCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1vb2Qpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nVmVyeSBIYXBweSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdoYXBweSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdVcGJlYXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nT0snO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nT3RoZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nQW54aW91cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdVbmhhcHB5JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vb2Q9J1NhZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdWZXJ5IFNhZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwb3B1cCgpe1xyXG4gICAgICAgICAgICAgICAgbW9vZEZlZWxpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29kRmVlbGluZ3NcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnJlYWtMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIG1vb2RGZWVsaW5ncy5pbm5lckhUTUwgPSAoXCI8Yj5EaWFyeSBub3RlczwvYj48YnIvPlwiICsgZW50cnkudGV4dCk7XHJcbiAgICAgICAgICAgICAgICBtb29kRmVlbGluZ3MuaW5uZXJIVE1MID0gKFwiPGI+RGlhcnkgbm90ZXM8L2I+PGJyLz5cIiArIHRlc3RpbmdUZXh0KTtcclxuICAgICAgICAgICAgICAgIG1vb2RWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vZFZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgbW9vZFZhbHVlLmlubmVySFRNTCA9IChcIjxiPk1vb2Q8L2I+PGJyLz5cIiArIG1vb2QpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmxldCBkYXRlID0gbmV3IERhdGUoKTtcclxubGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbmxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuZGF5c1RoaXNNb250aCA9IGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcclxuXHJcbmdldENhbGVuZGFyTW9udGgoZGF5c1RoaXNNb250aCwgbW9udGgpO1xyXG51cGRhdGVDYWxlbmRhcihtb250aCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==