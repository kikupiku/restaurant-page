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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contactWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactWrapper\", function() { return contactWrapper; });\nlet contactWrapper = document.createElement('div');\ncontactWrapper.setAttribute('class', 'contact-wrapper');\n\nlet title = document.createElement('h1');\ntitle.innerHTML = 'CONTACT US';\ntitle.setAttribute('class', 'section-title');\ncontactWrapper.appendChild(title);\n\nlet address = document.createElement('p');\naddress.innerHTML = 'Hochenbrochenzockenallee 5 <br> 78954 Berlin <br> Telephone: 1357-1234567';\naddress.setAttribute('class', 'address');\ncontactWrapper.appendChild(address);\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"home\", function() { return home; });\nlet home = document.createElement('p');\nhome.setAttribute('class', 'welcome-message');\nhome.innerHTML = 'Welcome to our restaurant!';\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\n\nlet content = document.getElementById('content');\ncontent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"home\"]);\n\nlet navBar = document.createElement('div');\nnavBar.setAttribute('class', 'navbar');\ncontent.appendChild(navBar);\n\nlet logo = document.createElement('img');\nlogo.setAttribute('src', './assets/restaurant-logo.png');\nlogo.setAttribute('class', 'logo');\nnavBar.appendChild(logo);\n\nlet name = document.createElement('h1');\nname.innerHTML = 'RESTAURANT';\nnavBar.appendChild(name);\n\nlet linkList = document.createElement('ul');\nlinkList.setAttribute('class', 'link-list');\nnavBar.appendChild(linkList);\n\nlet createLink = () => {\n  let link;\n\n  for (let i = 0; i < 3; i++) {\n    link = document.createElement('li');\n    link.setAttribute('id', `link${i + 1}`);\n    if (i + 1 === 1) {\n      link.innerHTML = 'HOME';\n    } else if (i + 1 === 2) {\n      link.innerHTML = 'MENU';\n    } else if (i + 1 === 3) {\n      link.innerHTML = 'CONTACT';\n    }\n\n    linkList.appendChild(link);\n\n    link.addEventListener('click', (event) => {\n      if (event.target.id === 'link1') {\n        content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"home\"]);\n        content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"]);\n        content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"contactWrapper\"]);\n        content.removeChild(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"]);\n        content.removeChild(_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"contactWrapper\"]);\n      } else if (event.target.id === 'link2') {\n        content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"home\"]);\n        content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"]);\n        content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"contactWrapper\"]);\n        content.removeChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"home\"]);\n        content.removeChild(_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"contactWrapper\"]);\n      } else if (event.target.id === 'link3') {\n        content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"home\"]);\n        content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"]);\n        content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"contactWrapper\"]);\n        content.removeChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"home\"]);\n        content.removeChild(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"]);\n      };\n    });\n  }\n};\n\ncreateLink();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\nlet menu = document.createElement('img');\nmenu.setAttribute('class', 'menu');\nmenu.setAttribute('src', 'https://assets.atlasobscura.com/article_images/37742/image.jpg');\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });