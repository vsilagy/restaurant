/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero.jpg */ \"./src/images/hero.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: 'League Spartan', sans-serif;\n\tfont-weight: 400;\n}\nbody {\n\tcolor: antiquewhite;\n\tmin-height: 100vh;\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n\tbackground-repeat: no-repeat;\n\tbackground-position: 75% 0;\n\tbackground-size: cover;\n}\n.content {\n\tmax-width: 1200px;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 0 auto;\n\toverflow: hidden;\n}\n.nav {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 2rem 0;\n}\n.title {\n\tfont-size: 4rem;\n\tfont-weight: 700;\n\tline-height: 1.1;\n\tpadding: 0.75rem;\n}\n.tabs {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n.btn,\n.cta-btn {\n\tfont-size: 2rem;\n\tfont-family: inherit;\n\tpadding: 0.75rem 1.25rem;\n\tborder: none;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tbackground-color: transparent;\n\tcolor: antiquewhite;\n}\n.cta-btn {\n\tpadding: 1.25rem 2rem;\n\tfont-weight: 500;\n\tborder: 1px solid navajowhite;\n\tcolor: navajowhite;\n\ttransition: transform 0.4s ease-in-out;\n}\n.cta-btn:hover {\n\ttransform: scale(1.1);\n}\n.active {\n\tbackground-color: navajowhite;\n\tcolor: black;\n}\n.main {\n\twidth: 100%;\n}\n.hero {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tmargin-top: 3rem;\n\tmax-width: 600px;\n\tgap: 1.5rem;\n\tpadding: 1rem;\n}\n.hero h2 {\n\tfont-size: 3rem;\n\tfont-weight: 600;\n}\n.hero p {\n\tfont-size: 1.15rem;\n\tfont-style: italic;\n}\n.menu-item {\n\tpadding: 0.75rem 0;\n}\n.menu-title {\n\tfont-size: 1.75rem;\n\tpadding-bottom: 0.25rem;\n}\n.map {\n\tborder-radius: 50%;\n\tmax-width: 20rem;\n\tmargin-top: 1rem;\n}\n/* footer */\n.footer {\n\tmargin-top: auto;\n\tpadding: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 0.5rem;\n}\n.footer img {\n\theight: 1.25rem;\n\ttransition: transform 0.4s ease-in-out;\n}\n.footer img:hover {\n\ttransform: rotateY(0.5turn) scale(1.4);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page-load */ \"./src/modules/page-load.js\");\n\n\n\nconst content = document.getElementById('content');\n\n(0,_modules_page_load__WEBPACK_IMPORTED_MODULE_1__.loadPage)();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/Contact.js":
/*!********************************!*\
  !*** ./src/modules/Contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/map.png */ \"./src/images/map.png\");\n\n\n\n\nfunction Contact() {\n\tconst contact = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { className: 'hero' });\n\tconst heading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', { content: 'Our Address' });\n\tconst text = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p');\n\ttext.innerHTML = `Adress: 740 Madison Ave, <br>\n    New York, <br>\n    NY 10065 <br>\n    Phone: (212) 582-2000`;\n\n\tconst map = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n\t\tattributes: {\n\t\t\tsrc: _images_map_png__WEBPACK_IMPORTED_MODULE_2__,\n\t\t\talt: 'Map',\n\t\t},\n\t\tclassName: 'map',\n\t});\n\n\tcontact.appendChild(heading);\n\tcontact.appendChild(text);\n\tcontact.appendChild(map);\n\t_page_load__WEBPACK_IMPORTED_MODULE_1__.main.appendChild(contact);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/Contact.js?");

/***/ }),

/***/ "./src/modules/Home.js":
/*!*****************************!*\
  !*** ./src/modules/Home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ \"./src/modules/page-load.js\");\n\n\n\nfunction Home() {\n\tconst hero = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { className: 'hero' });\n\tconst heading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {\n\t\tcontent: 'Exquisite dining since 1989',\n\t});\n\tconst text = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n\t\tcontent:\n\t\t\t'Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.',\n\t});\n\tconst button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n\t\tclassName: 'cta-btn',\n\t\tcontent: 'Book a table',\n\t});\n\n\thero.appendChild(heading);\n\thero.appendChild(text);\n\thero.appendChild(button);\n\t_page_load__WEBPACK_IMPORTED_MODULE_1__.main.appendChild(hero);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/Home.js?");

/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n\n\n\nfunction Menu() {\n\tconst menu = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {\n\t\tclassName: 'hero',\n\t});\n\tconst heading = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', { content: `Chef's favorite` });\n\tconst wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { className: 'menu-wrapper' });\n\n\tconst items = [\n\t\tcreateMenu(\n\t\t\t'Spaghetti Carbonara',\n\t\t\t'Spaghetti pasta tossed in a creamy sauce with pancetta, eggs, Pecorino Romano cheese, and black pepper.',\n\t\t),\n\t\tcreateMenu(\n\t\t\t'Bolognese Spaghetti',\n\t\t\t'Spaghetti pasta with a rich and hearty meat sauce made with ground beef, tomatoes, and aromatic spices',\n\t\t),\n\t\tcreateMenu(\n\t\t\t'Lasagna',\n\t\t\t'Layers of pasta, ricotta, mozzarella, and a savory meat sauce',\n\t\t),\n\t\tcreateMenu(\n\t\t\t'Chicken Parmesan',\n\t\t\t'Breaded and fried chicken cutlet topped with marinara sauce and melted mozzarella, served over spaghetti.',\n\t\t\t'24',\n\t\t),\n\t\tcreateMenu(\n\t\t\t'Chicken Milanese',\n\t\t\t' Breaded and pan-fried chicken breast served with a fresh arugula salad, cherry tomatoes, and a drizzle of balsamic reduction.',\n\t\t),\n\t];\n\n\titems.forEach((item) => wrapper.appendChild(item));\n\n\tmenu.appendChild(heading);\n\tmenu.appendChild(wrapper);\n\t_page_load__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(menu);\n}\n\nfunction createMenu(name, description) {\n\tconst menuItem = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { className: 'menu-item' });\n\tconst menuTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('h3', {\n\t\tclassName: 'menu-title',\n\t\tcontent: `${name}`,\n\t});\n\tconst menuText = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {\n\t\tclassName: 'menu-text',\n\t\tcontent: `Ingredients: ${description}`,\n\t});\n\t// const menuPrice = createElement('p', {\n\t// \tclassName: 'menu-price',\n\t// \tcontent: `${price} $`,\n\t// });\n\n\tmenuItem.appendChild(menuTitle);\n\tmenuItem.appendChild(menuText);\n\n\treturn menuItem;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/Menu.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/github.svg */ \"./src/images/github.svg\");\n\n\n\nfunction footer() {\n\tconst footer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer', { className: 'footer' });\n\tconst text = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {\n\t\tcontent: '© 2023 Made by vsilagy',\n\t});\n\tconst link = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {\n\t\tattributes: {\n\t\t\thref: 'https://github.com/vsilagy/restaurant',\n\t\t\ttarget: '_blank',\n\t\t},\n\t});\n\n\tconst image = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {\n\t\tattributes: {\n\t\t\tsrc: _images_github_svg__WEBPACK_IMPORTED_MODULE_1__,\n\t\t\talt: 'github logo',\n\t\t},\n\t});\n\n\tfooter.appendChild(text);\n\tlink.appendChild(image);\n\tfooter.appendChild(link);\n\n\treturn footer;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNav: () => (/* binding */ createNav),\n/* harmony export */   handleTabClick: () => (/* binding */ handleTabClick)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/modules/Home.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/modules/Menu.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ \"./src/modules/Contact.js\");\n\n\n\n\n\n\nfunction createNav() {\n\tconst nav = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { className: 'nav' });\n\tconst heading = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {\n\t\tclassName: 'title',\n\t\tcontent: 'delish',\n\t});\n\tconst tabs = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { className: 'tabs' });\n\tconst homeTab = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n\t\tclassName: 'btn',\n\t\tid: 'home',\n\t\tcontent: 'Home',\n\t});\n\thomeTab.classList.add('active');\n\tconst menuTab = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n\t\tclassName: 'btn',\n\t\tid: 'menu',\n\t\tcontent: 'Menu',\n\t});\n\tconst contactTab = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {\n\t\tclassName: 'btn',\n\t\tid: 'contact',\n\t\tcontent: 'Contact',\n\t});\n\t// append the tabs to nav\n\ttabs.appendChild(homeTab);\n\ttabs.appendChild(menuTab);\n\ttabs.appendChild(contactTab);\n\tnav.appendChild(heading);\n\tnav.appendChild(tabs);\n\n\treturn nav;\n}\n\nconst handleTabClick = () => {\n\t(0,_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\tconst tabs = document.querySelectorAll('.btn');\n\ttabs.forEach((tab) => {\n\t\ttab.addEventListener('click', changeTab);\n\t});\n\n\tfunction changeTab(e) {\n\t\tconst targetTab = e.target;\n\n\t\tchangeActiveTab(e);\n\n\t\tif (targetTab.id === 'home') {\n\t\t\t_page_load__WEBPACK_IMPORTED_MODULE_1__.main.innerHTML = '';\n\t\t\t(0,_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t\t} else if (targetTab.id === 'menu') {\n\t\t\t_page_load__WEBPACK_IMPORTED_MODULE_1__.main.innerHTML = '';\n\t\t\t(0,_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t\t} else if (targetTab.id === 'contact') {\n\t\t\t_page_load__WEBPACK_IMPORTED_MODULE_1__.main.innerHTML = '';\n\t\t\t(0,_Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\t\t}\n\t}\n\n\tfunction changeActiveTab(e) {\n\t\ttabs.forEach((tab) => tab.classList.remove('active'));\n\t\te.target.classList.add('active');\n\t}\n};\n\n\n//# sourceURL=webpack://restaurant/./src/modules/nav.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage),\n/* harmony export */   main: () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/modules/utils.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ \"./src/modules/nav.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/modules/footer.js\");\n\n\n\n\n\nfunction loadPage() {\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.createNav)());\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\n\t_index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\t(0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.handleTabClick)();\n}\n\nconst main = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { className: 'main' });\n\n\n//# sourceURL=webpack://restaurant/./src/modules/page-load.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(type, options = {}) {\n\tconst { id, className, content, attributes, events } = options;\n\tconst element = document.createElement(type);\n\tif (id) {\n\t\telement.id = id;\n\t}\n\tif (className) {\n\t\telement.classList.add(className);\n\t}\n\tif (content) {\n\t\telement.textContent = content;\n\t}\n\tif (attributes) {\n\t\tfor (const [attrName, attrValue] of Object.entries(attributes)) {\n\t\t\telement.setAttribute(attrName, attrValue);\n\t\t}\n\t}\n\tif (events) {\n\t\tfor (const [eventName, eventHandler] of Object.entries(events)) {\n\t\t\telement.addEventListener(eventName, eventHandler);\n\t\t}\n\t}\n\n\treturn element;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/modules/utils.js?");

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"github.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/github.svg?");

/***/ }),

/***/ "./src/images/hero.jpg":
/*!*****************************!*\
  !*** ./src/images/hero.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"hero.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/hero.jpg?");

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"map.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/map.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;