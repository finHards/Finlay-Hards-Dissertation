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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dvYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzRjMTUiXSwibmFtZXMiOlsid2luZG93IiwiZW50ZXJNb29kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyIiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibW9vZCIsInBhcnNlSW50IiwicXVlcnlTZWxlY3RvciIsIm1vb2RJbmZvIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXR1cm5EYXRhIiwicmVzcG9uc2VUZXh0IiwiaW5uZXJIVE1MIiwiaW5udGVySFRNTCIsInNlbmQiLCJkcm9wRG93bk1lbnUiLCJidXJnZXJCYXJzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ4IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImJhciIsInVwbG9hZEdvYWwiLCJnb2FsIiwiZGF0YSIsInJldHVybl9kYXRhIiwiZ2V0R29hbHMiLCJnb2FsRW50cmllc1RvUmVtb3ZlIiwiZW50cnkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZXNwb25zZVR5cGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwidXNlckRhdGEiLCJwb3B1bGF0ZUdvYWxUYWJsZSIsImlkIiwicHJvZ3Jlc3MiLCJkaXZHb2FsIiwiY3JlYXRlRWxlbWVudCIsImRpdlByb2dyZXNzIiwiYWRkIiwiZ29hbFRhYmxlQ29udGFpbmVyIiwiYXBwZW5kIiwic3R5bGUiLCJjb2xvciIsImNoYW5nZVByb2dyZXNzIiwidXBkYXRlUHJvZ3Jlc3MiLCJMb2dJbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VycyIsImxvY2F0aW9uIiwiYXNzaWduIiwicmVnaXN0ZXIiLCJjb25maXJtUGFzc3dvcmQiLCJkYXlzSW5Nb250aCIsIm1vbnRoIiwieWVhciIsIkRhdGUiLCJnZXREYXRlIiwiY2FsZW5kZXIiLCJtb250aExpc3QiLCJnZXRDYWxlbmRhck1vbnRoIiwiZGF5c1RoaXNNb250aCIsImN1cnJlbnRSb3ciLCJkYXRlIiwiZ2V0RnVsbFllYXIiLCJzdGFydERhdGUiLCJzdGFydERhdGVQb3NpdGlvbiIsImdldERheSIsImkiLCJ0aGlzX2RheSIsImRheVBvc2l0aW9uIiwiZ3JpZENvbHVtbiIsImFwcGVuZENoaWxkIiwidXBkYXRlQnV0dG9uIiwiY2FsZW5kZXJFbnRyaWVzVG9SZW1vdmUiLCJ1cGRhdGVDYWxlbmRhciIsInVzZXJEYXRlIiwicG9wdWxhdGVDYWxlbmRhciIsImRhdGVVcGxvYWRlZCIsImdldE1vbnRoIiwicG9wdXAiLCJtb29kRmVlbGluZ3MiLCJicmVha0xpbmUiLCJtb29kVmFsdWUiLCJkYXkiLCJ0YXJnZXRJRCIsInRhcmdldERpdiJdLCJtYXBwaW5ncyI6IjtBQUFB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LGFBQWEsR0FBR1IsV0FBVyxDQUFDQyxLQUFELEVBQVFDLElBQVIsQ0FBM0I7QUFFQUssZ0JBQWdCLENBQUNDLGFBQUQsRUFBZ0JQLEtBQWhCLENBQWhCO0FBQ0FxQixjQUFjLENBQUNyQixLQUFELENBQWQsQzs7Ozs7Ozs7Ozs7O0FDcExBLGNBQWMsbUJBQU8sQ0FBQyxnTkFBc0c7O0FBRTVILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SGVlYm98Um9ib3RvKTtcIiwgXCJcIl0pO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6ICNFQkY1Rjk7XFxuICBiYWNrZ3JvdW5kOiAjNTJBNUNDO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzNCNzZBRDsgfVxcblxcbiNidXJnZXJuYXYgI2Ryb3BidXR0b24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTA7XFxuICB0b3A6IDE4cHg7IH1cXG5cXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNUY5O1xcbiAgbWFyZ2luOiA2cHggMDtcXG4gIHRyYW5zaXRpb246IDAuNHM7IH1cXG5cXG4vKiByb3RhdGVzIGJhcjEgLTQ1IGRlZ3JlZXMgYW5kIC5jaGFuZ2UgLmJhcjMgcm90YXRlcyA0NSBkZWdyZWVzIHRvIG1ha2UgdGhlIFggd2hlbiBjbGlja2VkIG9uICovXFxuLmNoYW5nZS5iYXIxIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7IH1cXG5cXG4vKiBtYWtlcyB0aGUgbWlkZGxlIGJhciBkaXNhcGVhciB3aGVuIGJ1cmdlciBuYXYgcHJlc3NlZCBvbiAqL1xcbi5jaGFuZ2UuYmFyMiB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLmNoYW5nZS5iYXIzIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCAtNnB4KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgLTZweCk7IH1cXG5cXG4uZHJvcGRvd25jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkY1Rjk7XFxuICB3aWR0aDogOTAlO1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAzMHB4OyB9XFxuICAuZHJvcGRvd25jb250ZW50IGEge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgY29sb3I6ICMzQjc2QUQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLmRyb3Bkb3duY29udGVudCBhIDp2aXNpdGVkIHtcXG4gICAgY29sb3I6ICMzQjc2QUQ7IH1cXG5cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI0Q4RUJGMztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NiAyOCcgd2lkdGg9JzU2JyBoZWlnaHQ9JzI4JyUzRSUzQ3BhdGggZmlsbD0nJTIzM2I3NmFkJyBmaWxsLW9wYWNpdHk9JzAuNCcgZD0nTTU2IDI2djJoLTcuNzVjMi4zLTEuMjcgNC45NC0yIDcuNzUtMnptLTI2IDJhMiAyIDAgMSAwLTQgMGgtNC4wOUEyNS45OCAyNS45OCAwIDAgMCAwIDE2di0yYy42NyAwIDEuMzQuMDIgMiAuMDdWMTRhMiAyIDAgMCAwLTItMnYtMmE0IDQgMCAwIDEgMy45OCAzLjYgMjguMDkgMjguMDkgMCAwIDEgMi44LTMuODZBOCA4IDAgMCAwIDAgNlY0YTkuOTkgOS45OSAwIDAgMSA4LjE3IDQuMjNjLjk0LS45NSAxLjk2LTEuODMgMy4wMy0yLjYzQTEzLjk4IDEzLjk4IDAgMCAwIDAgMGg3Ljc1YzIgMS4xIDMuNzMgMi42MyA1LjEgNC40NSAxLjEyLS43MiAyLjMtMS4zNyAzLjUzLTEuOTNBMjAuMSAyMC4xIDAgMCAwIDE0LjI4IDBoMi43Yy40NS41Ni44OCAxLjE0IDEuMjkgMS43NCAxLjMtLjQ4IDIuNjMtLjg3IDQtMS4xNS0uMTEtLjItLjIzLS40LS4zNi0uNTlIMjZ2LjA3YTI4LjQgMjguNCAwIDAgMSA0IDBWMGg0LjA5bC0uMzcuNTljMS4zOC4yOCAyLjcyLjY3IDQuMDEgMS4xNS40LS42Ljg0LTEuMTggMS4zLTEuNzRoMi42OWEyMC4xIDIwLjEgMCAwIDAtMi4xIDIuNTJjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNBMTYuMDggMTYuMDggMCAwIDEgNDguMjUgMEg1NmMtNC41OCAwLTguNjUgMi4yLTExLjIgNS42IDEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzQTkuOTkgOS45OSAwIDAgMSA1NiA0djJhOCA4IDAgMCAwLTYuNzcgMy43NGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZBNCA0IDAgMCAxIDU2IDEwdjJhMiAyIDAgMCAwLTIgMi4wNyAyOC40IDI4LjQgMCAwIDEgMi0uMDd2MmMtOS4yIDAtMTcuMyA0Ljc4LTIxLjkxIDEySDMwek03Ljc1IDI4SDB2LTJjMi44MSAwIDUuNDYuNzMgNy43NSAyek01NiAyMHYyYy01LjYgMC0xMC42NSAyLjMtMTQuMjggNmgtMi43YzQuMDQtNC44OSAxMC4xNS04IDE2Ljk4LTh6bS0zOS4wMyA4aC0yLjY5QzEwLjY1IDI0LjMgNS42IDIyIDAgMjJ2LTJjNi44MyAwIDEyLjk0IDMuMTEgMTYuOTcgOHptMTUuMDEtLjRhMjguMDkgMjguMDkgMCAwIDEgMi44LTMuODYgOCA4IDAgMCAwLTEzLjU1IDBjMS4wMyAxLjIgMS45NyAyLjUgMi43OSAzLjg2YTQgNCAwIDAgMSA3Ljk2IDB6bTE0LjI5LTExLjg2YzEuMy0uNDggMi42My0uODcgNC0xLjE1YTI1Ljk5IDI1Ljk5IDAgMCAwLTQ0LjU1IDBjMS4zOC4yOCAyLjcyLjY3IDQuMDEgMS4xNWEyMS45OCAyMS45OCAwIDAgMSAzNi41NCAwem0tNS40MyAyLjcxYzEuMTMtLjcyIDIuMy0xLjM3IDMuNTQtMS45M2ExOS45OCAxOS45OCAwIDAgMC0zMi43NiAwYzEuMjMuNTYgMi40MSAxLjIgMy41NCAxLjkzYTE1Ljk4IDE1Ljk4IDAgMCAxIDI1LjY4IDB6bS00LjY3IDMuNzhjLjk0LS45NSAxLjk2LTEuODMgMy4wMy0yLjYzYTEzLjk4IDEzLjk4IDAgMCAwLTIyLjQgMGMxLjA3LjggMi4wOSAxLjY4IDMuMDMgMi42M2E5Ljk5IDkuOTkgMCAwIDEgMTYuMzQgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7IH1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5wIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRUJGNUY5OyB9XFxuICBwIGEge1xcbiAgICBjb2xvcjogI0ZFNkQ0MztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5zaXRlRGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZDogIzNCNzZBRDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRUJGNUY5OyB9XFxuXFxuI3RyYWNrZXJJbmZvcm1hdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAjdHJhY2tlckluZm9ybWF0aW9uIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgI3RyYWNrZXJJbmZvcm1hdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuaHIge1xcbiAgYm9yZGVyLWNvbG9yOiAjRUJGNUY5OyB9XFxuXFxuLm1haW5CdXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMjUwcHg7XFxuICBsaW5lLWhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTZENDM7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjN0Q3RDdEO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIGNvbG9yOiAjRUJGNUY5O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyOiBub25lOyB9XFxuICAubWFpbkJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxcblxcbiNidXR0b25Db250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTV2aDsgfVxcblxcbi5yZWdpc3RlckZvcm0ge1xcbiAgY29sb3I6ICNFQkY1Rjk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4jZm9ybUNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I3NkFEO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDsgfVxcblxcbiNoZWxwVGV4dCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjM0I3NkFEO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBsaW5lLWhlaWdodDogMTB2aDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4uaW5wdXRCb3hlcyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI0VCRjVGOTtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBib3gtc2hhZG93OiAxcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICNDMDY2QTg7XFxuICBwYWRkaW5nOiAzcHg7IH1cXG4gIC5pbnB1dEJveGVzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjQzA2NkE4OyB9XFxuXFxuI3Byb2ZpbGVCdXR0b25Db250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogOHZoOyB9XFxuXFxuLnByb2ZpbGVCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICBsaW5lLWhlaWdodDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjRUJGNUY5O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XFxuICAucHJvZmlsZUJ1dHRvbnM6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDV2aDsgfVxcbiAgLnByb2ZpbGVCdXR0b25zOm50aC1vZi10eXBlKDIpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoOyB9XFxuICAucHJvZmlsZUJ1dHRvbnMuYnV0dG9uUHVycGxlMSB7XFxuICAgIGJhY2tncm91bmQ6ICNDMDY2QTg7IH1cXG4gICAgLnByb2ZpbGVCdXR0b25zLmJ1dHRvblB1cnBsZTEgaW1nIHtcXG4gICAgICB3aWR0aDogNDhweDsgfVxcbiAgLnByb2ZpbGVCdXR0b25zLmJ1dHRvblB1cnBsZTIge1xcbiAgICBiYWNrZ3JvdW5kOiAjQjc3OUJCO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgICAucHJvZmlsZUJ1dHRvbnMuYnV0dG9uUHVycGxlMiBpbWcge1xcbiAgICAgIHdpZHRoOiA0OHB4OyB9XFxuICAucHJvZmlsZUJ1dHRvbnMuYnV0dG9uUHVycGxlMyB7XFxuICAgIGJhY2tncm91bmQ6ICNDMzU4OEI7IH1cXG4gICAgLnByb2ZpbGVCdXR0b25zLmJ1dHRvblB1cnBsZTMgaW1nIHtcXG4gICAgICB3aWR0aDogNDhweDsgfVxcbiAgLnByb2ZpbGVCdXR0b25zOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogI0VCRjVGOTsgfVxcblxcbiNtb29kQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLm1vb2RCdXR0b25zIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJveC1zaGFkb3c6IDFweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTBzIGVhc2UtaW47XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuICAubW9vZEJ1dHRvbnMgaW1nIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwcHg7IH1cXG4gIC5tb29kQnV0dG9ucy5idXR0b243IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgLm1vb2RCdXR0b25zLmJ1dHRvbjgge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAubW9vZEJ1dHRvbnMuYnV0dG9uOSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cXG4uYnV0dG9uMSB7XFxuICBiYWNrZ3JvdW5kOiAjMDNFRTMxOyB9XFxuXFxuLmJ1dHRvbjIge1xcbiAgYmFja2dyb3VuZDogIzVDRjY0MDsgfVxcblxcbi5idXR0b24zIHtcXG4gIGJhY2tncm91bmQ6ICM5QUZGMzY7IH1cXG5cXG4uYnV0dG9uNCB7XFxuICBiYWNrZ3JvdW5kOiAjRkFGRjA5OyB9XFxuXFxuLmJ1dHRvbjUge1xcbiAgYmFja2dyb3VuZDogI0ZGRTcxRjsgfVxcblxcbi5idXR0b242IHtcXG4gIGJhY2tncm91bmQ6ICNGRkNGMzQ7IH1cXG5cXG4uYnV0dG9uNyB7XFxuICBiYWNrZ3JvdW5kOiAjRkY2RDE5OyB9XFxuXFxuLmJ1dHRvbjgge1xcbiAgYmFja2dyb3VuZDogI0REM0IxNzsgfVxcblxcbi5idXR0b245IHtcXG4gIGJhY2tncm91bmQ6ICNCQTE0MTQ7IH1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogI0MwNjZBODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI0MwNjZBODsgfVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0VCRjVGOTsgfVxcblxcbiNjYWxlbmRlciB7XFxuICBiYWNrZ3JvdW5kOiAjRUJGNUY5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpOyB9XFxuICAjY2FsZW5kZXIgZGl2IHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNGRTZENDM7XFxuICAgIHBhZGRpbmc6IDVweDsgfVxcblxcbnNlbGVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3gtc2hhZG93OiAxcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGNvbG9yOiAjQzA2NkE4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4jbW9udGhMaXN0Q29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4jbW9udGgge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuI2dvYWxMaXN0RHJvcGRvd24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuI2dvYWxTdWJtaXRCdXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbiNnb2FsVGFibGVDb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyB9XFxuICAjZ29hbFRhYmxlQ29udGFpbmVyIGRpdiB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjRkU2RDQzO1xcbiAgICBwYWRkaW5nOiA1cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IFwiLi9zYXNzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2pzL2Ryb3Bkb3duLmpzXCI7XHJcbmltcG9ydCBcIi4vanMvcmVnaXN0ZXIuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9sb2dpbi5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL2RpYXJ5LmpzXCI7XHJcbmltcG9ydCBcIi4vanMvZ29hbHMuanNcIjtcclxuaW1wb3J0IFwiLi9qcy90cmFja2VyLmpzXCI7XHJcblxyXG5cclxuXHJcbiIsIlxyXG5cclxuXHJcbndpbmRvdy5lbnRlck1vb2QgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgdmFyIHVybCA9IFwiL2luY2x1ZGVzL2RpYXJ5REFPLnBocFwiO1xyXG4gICAgdmFyIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRab25lXCIpLnZhbHVlO1xyXG4gICAgdmFyIG1vb2QgPSBwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYW5zd2VyXCJdOmNoZWNrZWQnKS52YWx1ZSk7XHJcbiAgICB2YXIgbW9vZEluZm8gPSBcInRleHQ9XCIrdGV4dCtcIiZtb29kPVwiK21vb2QrIFwiJnBocGZ1bmN0aW9uPXN1Ym1pdERpYXJ5XCI7XHJcbiAgICBoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgaHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuXHJcbiAgICBoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgcmV0dXJuRGF0YSA9IGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgaWYocmV0dXJuRGF0YSA9PSBcIkN1cnJlbnRseSB5b3UgY2FuIG9ubHkgc3VibWl0IG9uZSBkaWFyeSBzdWJtaXNzaW9uIGEgZGF5XCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94XCIpLmlubmVySFRNTCA9IHJldHVybkRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcmJveFwiKS5pbm50ZXJIVE1MID0gXCJZb3VyIGRpYXJ5IHN1Ym1pc3Npb24gd2FzIHN1Y2Nlc3NmdWwhIFZpc2l0IHRoZSB0cmFja2VyIHRvIHNlZSB5b3VyIGRpYXJ5IHByb2dyZXNzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoci5zZW5kKG1vb2RJbmZvKTtcclxuXHJcblxyXG5cclxuXHJcbn0iLCJcclxuXHJcbnZhciBkcm9wRG93bk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGJ1dHRvbicpO1xyXG5cclxudmFyIGJ1cmdlckJhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmFyXCIpO1xyXG5cclxuZHJvcERvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oeCl7XHJcblxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcblxyXG5cdEFycmF5LmZyb20oYnVyZ2VyQmFycykuZm9yRWFjaCgoYmFyKSA9PiB7XHJcblxyXG5cdFx0YmFyLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XHJcblxyXG5cdH0pXHJcbiAgICAgICAgXHJcbn0pO1xyXG5cclxuXHJcbiIsIlxyXG5cclxud2luZG93LnVwbG9hZEdvYWwgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB2YXIgdXJsID0gXCIvaW5jbHVkZXMvZ29hbHNEQU8ucGhwXCI7XHJcbiAgICB2YXIgZ29hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29hbExpc3REcm9wZG93blwiKS52YWx1ZTtcclxuICAgIHZhciBkYXRhID0gXCJnb2FsPVwiK2dvYWwrXCImcGhwZnVuY3Rpb249dXBsb2FkR29hbFwiO1xyXG4gICAgaHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgIGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcblxyXG4gICAgaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcmV0dXJuX2RhdGEgPSBoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgIGlmKHJldHVybl9kYXRhID09IFwicGFzc2VkXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94XCIpLmlubmVySFRNTCA9IFwiWW91ciBnb2FsIHdhcyBzdWJtaXR0ZWRcIjtcclxuICAgICAgICB9IGVsc2UgaWYocmV0dXJuX2RhdGEgPT0gXCJmYWlsZWRcIil7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3hcIikuaW5uZXJIVE1MID0gXCJFcnJvciBzdWJtaXR0aW5nIHRoZSBnb2FsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoci5zZW5kKGRhdGEpO1xyXG5cclxufVxyXG5cclxud2luZG93LmdldEdvYWxzID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgZ29hbEVudHJpZXNUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnb2FsRW50cnlcIik7XHJcblxyXG4gICAgQXJyYXkuZnJvbShnb2FsRW50cmllc1RvUmVtb3ZlKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG5cclxuXHRcdGVudHJ5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZW50cnkpO1xyXG5cclxuXHR9KVxyXG5cclxuXHJcbiAgICB2YXIgaHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHZhciB1cmwgPSBcIi9pbmNsdWRlcy9nb2Fsc0RBTy5waHBcIjtcclxuICAgIFxyXG5cclxuICAgIGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgIGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaHIucmVzcG9uc2VUeXBlPVwianNvblwiO1xyXG5cclxuICAgIGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgdXNlckRhdGEgPSB0aGlzLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBwb3B1bGF0ZUdvYWxUYWJsZSh0aGlzLnJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoci5zZW5kKCk7XHJcblxyXG59XHJcblxyXG53aW5kb3cucG9wdWxhdGVHb2FsVGFibGUgPSBmdW5jdGlvbih1c2VyRGF0YSl7XHJcblxyXG4gICAgdXNlckRhdGEuZm9yRWFjaChmdW5jdGlvbihlbnRyeSl7XHJcbiAgICAgICAgdmFyIGlkID0gZW50cnkuaWQ7XHJcbiAgICAgICAgdmFyIGdvYWwgPSBlbnRyeS5nb2FsO1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IGVudHJ5LnByb2dyZXNzO1xyXG4gICAgICAgIHZhciBkaXZHb2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmFyIGRpdlByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2UHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZChcImdvYWxFbnRyeVwiKTtcclxuICAgICAgICBkaXZHb2FsLmNsYXNzTGlzdC5hZGQoXCJnb2FsRW50cnlcIik7XHJcbiAgICAgICAgZGl2R29hbC5pbm5lckhUTUwgPSBnb2FsO1xyXG4gICAgICAgIGRpdlByb2dyZXNzLmlubmVySFRNTCA9IHByb2dyZXNzO1xyXG4gICAgICAgIGdvYWxUYWJsZUNvbnRhaW5lci5hcHBlbmQoZGl2R29hbCk7XHJcbiAgICAgICAgZ29hbFRhYmxlQ29udGFpbmVyLmFwcGVuZChkaXZQcm9ncmVzcyk7XHJcbiAgICAgICAgaWYocHJvZ3Jlc3MgPT1cIkNvbXBsZXRlXCIpe1xyXG4gICAgICAgICAgICBkaXZQcm9ncmVzcy5zdHlsZS5jb2xvciA9IFwiIzVDRjY0MFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2UHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlUHJvZ3Jlc3MoKXtcclxuICAgICAgICAgICAgLy9jaGFuZ2VzIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIGRpdlByb2dyZXNzLmlubmVySFRNTCA9IFwiQ29tcGxldGVcIjtcclxuICAgICAgICAgICAgZGl2UHJvZ3Jlc3Muc3R5bGUuY29sb3IgPSBcIiM1Q0Y2NDBcIjtcclxuICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3MoaWQpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbndpbmRvdy51cGRhdGVQcm9ncmVzcyA9IGZ1bmN0aW9uKGlkKXtcclxuXHJcbiAgICB2YXIgaHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHZhciB1cmwgPSBcIi9pbmNsdWRlcy9nb2Fsc0RBTy5waHBcIjtcclxuICAgIHZhciBkYXRhID0gXCJpZD1cIitpZCtcIiZwaHBmdW5jdGlvbj11cGRhdGVHb2FsRGF0YVwiO1xyXG4gICAgaHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgIGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcblxyXG4gICAgaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcmV0dXJuX2RhdGEgPSBoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgIGlmKHJldHVybl9kYXRhID09IFwicGFzc2VkXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94MlwiKS5pbm5lckhUTUwgPSBcIllvdXIgZ29hbCB3YXMgY29tcGxldGVkXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHJldHVybl9kYXRhID09IFwiZmFpbGVkXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yYm94MlwiKS5pbm5lckhUTUwgPSBcIkVycm9yIHVwZGF0aW5nIHRoZSBnb2FsXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXR1cm5fZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhyLnNlbmQoZGF0YSk7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5nZXRHb2FscygpOyIsIlxyXG5cclxud2luZG93LkxvZ0luID0gZnVuY3Rpb24oKXsgIFxyXG5cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuXHJcbiAgICB2YXIgaHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB2YXIgdXJsID0gXCIvaW5jbHVkZXMvbG9naW5EQU8ucGhwXCI7XHJcbiAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEVtYWlsMVwiKS52YWx1ZTtcclxuICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0UGFzc3dvcmQxXCIpLnZhbHVlO1xyXG4gICAgdmFyIHVzZXJzID0gXCJlbWFpbD1cIitlbWFpbCtcIiZwYXNzd29yZD1cIitwYXNzd29yZCsgXCImcGhwZnVuY3Rpb249bG9naW5Vc2VyXCI7XHJcbiAgICBoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgaHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgIFxyXG4gICAgaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIHJldHVybl9kYXRhID0gaHIucmVzcG9uc2VUZXh0O1xyXG5cclxuICAgICAgICBpZihyZXR1cm5fZGF0YSAhPSBcImVtYWlsIG9yIHBhc3N3b3JkIGRvZXMgbm90IG1hdGNoXCIpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHJldHVybl9kYXRhKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3hcIikuaW5uZXJIVE1MID0gcmV0dXJuX2RhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGhyLnNlbmQodXNlcnMpO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5cclxuXHJcblxyXG53aW5kb3cucmVnaXN0ZXIgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0UGFzc3dvcmRcIik7XHJcbiAgICB2YXIgY29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRDb25maXJtUGFzc3dvcmRcIik7XHJcbiAgICB2YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR4dEVtYWlsXCIpO1xyXG5cclxuXHJcbiAgICBpZigocGFzc3dvcmQudmFsdWUgPT0gY29uZmlybVBhc3N3b3JkLnZhbHVlKSAmJiAoZW1haWwudmFsdWUgIT0gXCJcIikgJiYgKHBhc3N3b3JkLnZhbHVlICE9IFwiXCIpICYmIChjb25maXJtUGFzc3dvcmQudmFsdWUgIT0gXCJcIikpIHtcclxuXHJcbiAgICAgIHZhciBociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgdmFyIHVybCA9IFwiL2luY2x1ZGVzL3JlZ2lzdHJhdGlvbkRBTy5waHBcIjtcclxuICAgICAgdmFyIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRFbWFpbFwiKS52YWx1ZTtcclxuICAgICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRQYXNzd29yZFwiKS52YWx1ZTtcclxuICAgICAgdmFyIHVzZXJzID0gXCJlbWFpbD1cIitlbWFpbCtcIiZwYXNzd29yZD1cIitwYXNzd29yZCsgXCImcGhwZnVuY3Rpb249Y3JlYXRlVXNlclwiO1xyXG4gICAgICBoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICBoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG5cclxuICAgICAgaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIHJldHVybl9kYXRhID0gaHIucmVzcG9uc2VUZXh0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXR1cm5fZGF0YSk7XHJcblxyXG4gICAgICAgIGlmKHJldHVybl9kYXRhICE9IFwiVGhpcyBlbWFpbCBhbHJlYWR5IHJlZ2lzdGVyZWQuXCIpe1xyXG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uYXNzaWduKHJldHVybl9kYXRhKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3hcIikuaW5uZXJIVE1MID0gcmV0dXJuX2RhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcblxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgaHIuc2VuZCh1c2Vycyk7ICBcclxuXHJcbiAgfSBlbHNle1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Jib3hcIikuaW5uZXJIVE1MID0gXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2gsIHBsZWFzZSB0cnkgYWdhaW5cIjtcclxuXHJcbiAgfVxyXG4gIFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuIiwiXHJcbmZ1bmN0aW9uIGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKXtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcclxuICAgIFxyXG59XHJcblxyXG52YXIgY2FsZW5kZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGVyXCIpO1xyXG5cclxubGV0IG1vbnRoTGlzdCA9IFsgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiIF07XHJcblxyXG53aW5kb3cuZ2V0Q2FsZW5kYXJNb250aCA9IGZ1bmN0aW9uKGRheXNUaGlzTW9udGgsIG1vbnRoKXtcclxuXHJcbiAgICB2YXIgY3VycmVudFJvdyA9IDI7XHJcblxyXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xyXG4gICAgc3RhcnREYXRlUG9zaXRpb24gPSBzdGFydERhdGUuZ2V0RGF5KCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aFwiKS5pbm5lckhUTUwgPSBtb250aExpc3RbbW9udGhdO1xyXG5cclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF5c1RoaXNNb250aDsgaSsrKXtcclxuXHJcbiAgICAgICAgdmFyIHRoaXNfZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzX2RheS5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kZXJFbnRyeVwiKTtcclxuICAgICAgICBsZXQgZGF5UG9zaXRpb24gPSBzdGFydERhdGUuZ2V0RGF5KCkgKyBpO1xyXG4gICAgICAgIHRoaXNfZGF5LmlubmVySFRNTCA9IHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyBpO1xyXG4gICAgICAgIHRoaXNfZGF5LmlkID0gZGF5UG9zaXRpb24gKyBcIi1cIiArIChtb250aCArIDEpO1xyXG5cclxuICAgICAgICBpZigoc3RhcnREYXRlUG9zaXRpb24gKyBpKSAlICg3ICogKGN1cnJlbnRSb3cgLSAxKSkgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXNfZGF5LnN0eWxlLmdyaWRDb2x1bW4gPSA3O1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgdGhpc19kYXkuc3R5bGUuZ3JpZENvbHVtbiA9IChzdGFydERhdGVQb3NpdGlvbiArIGkpICUgKDcgKiAoY3VycmVudFJvdyAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzX2RheS5zdHlsZS5ncmlkQ29sdW1uID0gKHN0YXJ0RGF0ZVBvc2l0aW9uICsgaSkgJSAoNyAqIChjdXJyZW50Um93IC0gMSkpO1xyXG4gICAgXHJcbiAgICAgICAgaWYoZGF5UG9zaXRpb24gPT0gNil7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb3cgKyAxO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNhbGVuZGVyLmFwcGVuZENoaWxkKHRoaXNfZGF5KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxud2luZG93LnVwZGF0ZUJ1dHRvbiA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBsZXQgbW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRoTGlzdFwiKS52YWx1ZTtcclxuICAgIG1vbnRoID0gcGFyc2VJbnQobW9udGgpO1xyXG5cclxuICAgIGxldCBkYXlzVGhpc01vbnRoID0gZGF5c0luTW9udGgobW9udGgsIHllYXIpO1xyXG5cclxuICAgIC8vIGdldCBtb250aCBmcm9tIGRyb3Bkb3duXHJcbiAgICBjb25zb2xlLmxvZyhtb250aCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXlzVGhpc01vbnRoKTtcclxuXHJcbiAgICBsZXQgY2FsZW5kZXJFbnRyaWVzVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FsZW5kZXJFbnRyeVwiKTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGNhbGVuZGVyRW50cmllc1RvUmVtb3ZlKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG5cclxuXHRcdGVudHJ5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZW50cnkpO1xyXG5cclxuXHR9KVxyXG5cclxuICAgIFxyXG4gICAgZ2V0Q2FsZW5kYXJNb250aChkYXlzVGhpc01vbnRoLCBtb250aCk7XHJcbiAgICB1cGRhdGVDYWxlbmRhcihtb250aCk7XHJcbn1cclxuXHJcblxyXG53aW5kb3cudXBkYXRlQ2FsZW5kYXIgPSBmdW5jdGlvbihtb250aCl7XHJcblxyXG4gICAgaWYoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB2YXIgdXJsID0gXCIvaW5jbHVkZXMvdHJhY2tlckRBTy5waHBcIjtcclxuICAgIFxyXG5cclxuICAgIGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgIGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaHIucmVzcG9uc2VUeXBlPVwianNvblwiO1xyXG4gICAgXHJcbiAgICBoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICB1c2VyRGF0ZSA9IHRoaXMucmVzcG9uc2U7XHJcblxyXG4gICAgICAgICAgICBwb3B1bGF0ZUNhbGVuZGFyKHRoaXMucmVzcG9uc2UsIG1vbnRoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoci5zZW5kKCk7XHJcblxyXG59XHJcblxyXG53aW5kb3cucG9wdWxhdGVDYWxlbmRhciA9IGZ1bmN0aW9uKGRhdGEsIG1vbnRoKXtcclxuXHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KXtcclxuXHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShlbnRyeS5kYXRlVXBsb2FkZWQpO1xyXG5cclxuICAgICAgICBpZihkYXRlLmdldE1vbnRoKCkgPT0gbW9udGgpe1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZW50cnkpO1xyXG4gICAgICAgICAgICB2YXIgbW9vZCA9IGVudHJ5Lm1vb2Q7XHJcbiAgICAgICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0SUQgPSAoZGF5ICsgXCItXCIgKyAobW9udGggKyAxKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldElEKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElEKTtcclxuICAgICAgICAgICAgdGFyZ2V0RGl2LmlubmVySFRNTCA9IGRheTtcclxuICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIiArIG1vb2QpO1xyXG4gICAgICAgICAgICB0YXJnZXREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcHVwKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobW9vZCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdWZXJ5IEhhcHB5JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vb2Q9J2hhcHB5JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vb2Q9J1VwYmVhdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdPSyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICc1JzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdPdGhlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICc2JzpcclxuICAgICAgICAgICAgICAgICAgICBtb29kPSdBbnhpb3VzJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJzcnOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vb2Q9J1VuaGFwcHknO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnOCc6XHJcbiAgICAgICAgICAgICAgICAgICAgbW9vZD0nU2FkJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJzknOlxyXG4gICAgICAgICAgICAgICAgICAgIG1vb2Q9J1ZlcnkgU2FkJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBvcHVwKCl7XHJcbiAgICAgICAgICAgICAgICBtb29kRmVlbGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vb2RGZWVsaW5nc1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBicmVha0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICAgICAgICAgICAgICBtb29kRmVlbGluZ3MuaW5uZXJIVE1MID0gKFwiPGI+RGlhcnkgbm90ZXM8L2I+PGJyLz5cIiArIGVudHJ5LnRleHQpO1xyXG4gICAgICAgICAgICAgICAgbW9vZFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29kVmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICBtb29kVmFsdWUuaW5uZXJIVE1MID0gKFwiPGI+TW9vZDwvYj48YnIvPlwiICsgbW9vZCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxubGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5sZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxubGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5kYXlzVGhpc01vbnRoID0gZGF5c0luTW9udGgobW9udGgsIHllYXIpO1xyXG5cclxuZ2V0Q2FsZW5kYXJNb250aChkYXlzVGhpc01vbnRoLCBtb250aCk7XHJcbnVwZGF0ZUNhbGVuZGFyKG1vbnRoKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9