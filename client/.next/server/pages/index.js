module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/hero.jpg":
/*!*************************!*\
  !*** ./assets/hero.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/hero-54976f82e598281321fc636adc470f33.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaGVyby5qcGc/NjI2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL2Fzc2V0cy9oZXJvLmpwZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9oZXJvLTU0OTc2ZjgyZTU5ODI4MTMyMWZjNjM2YWRjNDcwZjMzLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/hero.jpg\n");

/***/ }),

/***/ "./assets/hero2.jpg":
/*!**************************!*\
  !*** ./assets/hero2.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/hero2-24d89d0ee3c2cffd24bf3a1c8b996395.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaGVybzIuanBnP2YxN2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvaGVybzIuanBnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2hlcm8yLTI0ZDg5ZDBlZTNjMmNmZmQyNGJmM2ExYzhiOTk2Mzk1LmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/hero2.jpg\n");

/***/ }),

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Item.module.css */ \"./styles/Item.module.css\");\n/* harmony import */ var _styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/rinku/codes/next/mobyoxx/client/components/Item.js\";\n\nfunction Item({\n  itemImageURL,\n  itemName,\n  itemPrice,\n  itemId\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: itemImageURL,\n      alt: \"item_image\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: itemName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"$\", itemPrice]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW0uanM/YWE4ZiJdLCJuYW1lcyI6WyJJdGVtIiwiaXRlbUltYWdlVVJMIiwiaXRlbU5hbWUiLCJpdGVtUHJpY2UiLCJpdGVtSWQiLCJzdHlsZXMiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxDQUFjO0FBQUVDLGNBQUY7QUFBZ0JDLFVBQWhCO0FBQTBCQyxXQUExQjtBQUFxQ0M7QUFBckMsQ0FBZCxFQUE2RDtBQUMxRSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBRUwsWUFBVjtBQUF3QixTQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLHNCQUFLQyxTQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSXRlbS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBpdGVtSW1hZ2VVUkwsIGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1JZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cbiAgICAgIDxpbWcgc3JjPXtpdGVtSW1hZ2VVUkx9IGFsdD1cIml0ZW1faW1hZ2VcIiAvPlxuICAgICAgPHA+e2l0ZW1OYW1lfTwvcD5cbiAgICAgIDxwPiR7aXRlbVByaWNlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Item.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/LandingPage.module.css */ \"./styles/LandingPage.module.css\");\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hero.jpg */ \"./assets/hero.jpg\");\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_hero2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hero2.jpg */ \"./assets/hero2.jpg\");\n/* harmony import */ var _assets_hero2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_hero2_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Item */ \"./components/Item.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ri */ \"react-icons/ri\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/gr */ \"react-icons/gr\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n\nvar _jsxFileName = \"/home/rinku/codes/next/mobyoxx/client/pages/index.js\";\n\n\n\n\n\n\n\n\n\n\n\n\nfunction LandingPage({\n  hottestProducts\n}) {\n  const {\n    0: slideIndex,\n    1: setSlideIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(0);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__[\"useRouter\"])(); //sliced hot items\n\n  const slicedHotItems = hottestProducts.slice(slideIndex);\n  const {\n    0: qna,\n    1: setQna\n  } = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([{\n    showAnswer: false,\n    question: \"Is shipping completely free on every item?\",\n    answer: \"Yes it absolutely is, it doesn't matter where you are buying from shipping cost is free ,at least for now but it will defintely stop one day.\"\n  }, {\n    showAnswer: false,\n    question: \"Does every product have 1 year warranty?\",\n    answer: \"Off course it does, as long as it comes inside warranty rules.\"\n  }, {\n    showAnswer: false,\n    question: \"How long does it take to get delivery?\",\n    answer: \"Usually it takes between 3-10 days depending on where you are ordering from.\"\n  }, {\n    showAnswer: false,\n    question: \"Can i get a refund after buying for some reasons?\",\n    answer: \"If there is any fault in the device,which is unlikely in such case we offer 95% refund on every product, you can email us if such problem occurs.\"\n  }]);\n\n  const toggleAnswer = index => {\n    const qnaCopy = [...qna];\n    qnaCopy[index].showAnswer = !qna[index].showAnswer;\n    setQna(qnaCopy);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.homePage,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n          alt: \"product_image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n          children: \"ONE LOCATION ALL SOLUTION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Get all the latest and hottest smartphones in one place, phonyoxx.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => router.push(\"/explore\"),\n          children: \"Shop Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hottestSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"HOT PRODUCTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev - 1),\n          disabled: slideIndex === 0,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_5__[\"MdChevronLeft\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), slicedHotItems.map(product => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Item__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            itemId: product.product_id,\n            itemName: product.product_name,\n            itemPrice: product.product_price,\n            itemImageURL: product.product_image_url\n          }, product.product_id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 15\n          }, this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev + 1),\n          disabled: slideIndex === 7,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_5__[\"MdChevronRight\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advantageSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"WHY CHOOSE US?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__[\"BiDollar\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Free delivery around the globe\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__[\"RiDropLine\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"One year warranty on every product\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__[\"AiOutlineCustomerService\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"24x7 fast customer support\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questionSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"SOME COMMON QUESTIONS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: qna.map((qna, i) => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: () => toggleAnswer(i),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: qna.question\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 19\n              }, this), qna.showAnswer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__[\"AiOutlineMinus\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 120,\n                columnNumber: 37\n              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_10__[\"GrAdd\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 120,\n                columnNumber: 58\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 17\n            }, this), qna.showAnswer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: qna.answer\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 35\n            }, this) : null]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 15\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n} //https://bit.ly/3wF70WS\n\nLandingPage.getInitialProps = async () => {\n  const data = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(\"https://phonyoxx.herokuapp.com/product/fetchAll\");\n  return {\n    hottestProducts: data.data\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiaG90dGVzdFByb2R1Y3RzIiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNsaWNlZEhvdEl0ZW1zIiwic2xpY2UiLCJxbmEiLCJzZXRRbmEiLCJzaG93QW5zd2VyIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0b2dnbGVBbnN3ZXIiLCJpbmRleCIsInFuYUNvcHkiLCJzdHlsZXMiLCJob21lUGFnZSIsImhlcm9TZWN0aW9uIiwiSGVyb0ltYWdlIiwicHVzaCIsImhvdHRlc3RTZWN0aW9uIiwicHJldiIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0X2lkIiwicHJvZHVjdF9uYW1lIiwicHJvZHVjdF9wcmljZSIsInByb2R1Y3RfaW1hZ2VfdXJsIiwiYWR2YW50YWdlU2VjdGlvbiIsInF1ZXN0aW9uU2VjdGlvbiIsImkiLCJnZXRJbml0aWFsUHJvcHMiLCJkYXRhIiwiYXhpb3MiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQztBQUFGLENBQXJCLEVBQTBDO0FBQ3ZELFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQyxDQUFELENBQTVDO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QixDQUh1RCxDQUt2RDs7QUFDQSxRQUFNQyxjQUFjLEdBQUdOLGVBQWUsQ0FBQ08sS0FBaEIsQ0FBc0JOLFVBQXRCLENBQXZCO0FBRUEsUUFBTTtBQUFBLE9BQUNPLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCTixzREFBUSxDQUFDLENBQzdCO0FBQ0VPLGNBQVUsRUFBRSxLQURkO0FBRUVDLFlBQVEsRUFBRSw0Q0FGWjtBQUdFQyxVQUFNLEVBQ0o7QUFKSixHQUQ2QixFQU83QjtBQUNFRixjQUFVLEVBQUUsS0FEZDtBQUVFQyxZQUFRLEVBQUUsMENBRlo7QUFHRUMsVUFBTSxFQUFFO0FBSFYsR0FQNkIsRUFZN0I7QUFDRUYsY0FBVSxFQUFFLEtBRGQ7QUFFRUMsWUFBUSxFQUFFLHdDQUZaO0FBR0VDLFVBQU0sRUFBRTtBQUhWLEdBWjZCLEVBaUI3QjtBQUNFRixjQUFVLEVBQUUsS0FEZDtBQUVFQyxZQUFRLEVBQUUsbURBRlo7QUFHRUMsVUFBTSxFQUNKO0FBSkosR0FqQjZCLENBQUQsQ0FBOUI7O0FBeUJBLFFBQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCLFVBQU1DLE9BQU8sR0FBRyxDQUFDLEdBQUdQLEdBQUosQ0FBaEI7QUFDQU8sV0FBTyxDQUFDRCxLQUFELENBQVAsQ0FBZUosVUFBZixHQUE0QixDQUFDRixHQUFHLENBQUNNLEtBQUQsQ0FBSCxDQUFXSixVQUF4QztBQUNBRCxVQUFNLENBQUNNLE9BQUQsQ0FBTjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUVDLHFFQUFNLENBQUNDLFFBQXhCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUVELHFFQUFNLENBQUNFLFdBQTNCO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUMsdURBQVY7QUFBcUIsYUFBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFRLGlCQUFPLEVBQUUsTUFBTWYsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZLFVBQVosQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFhRTtBQUFTLGVBQVMsRUFBRUoscUVBQU0sQ0FBQ0ssY0FBM0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBQSxnQ0FDRTtBQUFRLGlCQUFPLEVBQUUsTUFBTW5CLGFBQWEsQ0FBRW9CLElBQUQsSUFBVUEsSUFBSSxHQUFHLENBQWxCLENBQXBDO0FBQTBELGtCQUFRLEVBQUVyQixVQUFVLEtBQUssQ0FBbkY7QUFBQSxpQ0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUlHSyxjQUFjLENBQUNpQixHQUFmLENBQW9CQyxPQUFELElBQWE7QUFDL0IsOEJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxrQkFBTSxFQUFFQSxPQUFPLENBQUNDLFVBRGxCO0FBRUUsb0JBQVEsRUFBRUQsT0FBTyxDQUFDRSxZQUZwQjtBQUdFLHFCQUFTLEVBQUVGLE9BQU8sQ0FBQ0csYUFIckI7QUFJRSx3QkFBWSxFQUFFSCxPQUFPLENBQUNJO0FBSnhCLGFBS09KLE9BQU8sQ0FBQ0MsVUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBU0QsU0FWQSxDQUpILGVBZUU7QUFBUSxpQkFBTyxFQUFFLE1BQU12QixhQUFhLENBQUVvQixJQUFELElBQVVBLElBQUksR0FBRyxDQUFsQixDQUFwQztBQUEwRCxrQkFBUSxFQUFFckIsVUFBVSxLQUFLLENBQW5GO0FBQUEsaUNBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFxQ0U7QUFBUyxlQUFTLEVBQUVlLHFFQUFNLENBQUNhLGdCQUEzQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGdDQUNFO0FBQUEsa0NBQ0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQUEsa0NBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVdFO0FBQUEsa0NBQ0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0YsZUF5REU7QUFBUyxlQUFTLEVBQUViLHFFQUFNLENBQUNjLGVBQTNCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUEsa0JBQ0d0QixHQUFHLENBQUNlLEdBQUosQ0FBUSxDQUFDZixHQUFELEVBQU11QixDQUFOLEtBQVk7QUFDbkIsOEJBQ0U7QUFBQSxvQ0FDRTtBQUFRLHFCQUFPLEVBQUUsTUFBTWxCLFlBQVksQ0FBQ2tCLENBQUQsQ0FBbkM7QUFBQSxzQ0FDRTtBQUFBLDBCQUFJdkIsR0FBRyxDQUFDRztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFR0gsR0FBRyxDQUFDRSxVQUFKLGdCQUFpQixxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFqQixnQkFBc0MscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBTUdGLEdBQUcsQ0FBQ0UsVUFBSixnQkFBaUI7QUFBQSx3QkFBSUYsR0FBRyxDQUFDSTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWpCLEdBQXVDLElBTjFDO0FBQUEsYUFBVW1CLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQVVELFNBWEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEVELEMsQ0FFRDs7QUFFQWhDLFdBQVcsQ0FBQ2lDLGVBQVosR0FBOEIsWUFBWTtBQUN4QyxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNkNBQUssQ0FBQ0MsR0FBTixDQUFVLGlEQUFWLENBQW5CO0FBQ0EsU0FBTztBQUFFbkMsbUJBQWUsRUFBRWlDLElBQUksQ0FBQ0E7QUFBeEIsR0FBUDtBQUNELENBSEQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9MYW5kaW5nUGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVyb0ltYWdlIGZyb20gXCIuLi9hc3NldHMvaGVyby5qcGdcIjtcbmltcG9ydCBIZXJvSW1hZ2UyIGZyb20gXCIuLi9hc3NldHMvaGVybzIuanBnXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XG5pbXBvcnQgeyBNZENoZXZyb25SaWdodCwgTWRDaGV2cm9uTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpRG9sbGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBSaURyb3BMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVDdXN0b21lclNlcnZpY2UsIEFpT3V0bGluZU1pbnVzIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBHckFkZCB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKHsgaG90dGVzdFByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3NsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy9zbGljZWQgaG90IGl0ZW1zXG4gIGNvbnN0IHNsaWNlZEhvdEl0ZW1zID0gaG90dGVzdFByb2R1Y3RzLnNsaWNlKHNsaWRlSW5kZXgpO1xuXG4gIGNvbnN0IFtxbmEsIHNldFFuYV0gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgc2hvd0Fuc3dlcjogZmFsc2UsXG4gICAgICBxdWVzdGlvbjogXCJJcyBzaGlwcGluZyBjb21wbGV0ZWx5IGZyZWUgb24gZXZlcnkgaXRlbT9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJZZXMgaXQgYWJzb2x1dGVseSBpcywgaXQgZG9lc24ndCBtYXR0ZXIgd2hlcmUgeW91IGFyZSBidXlpbmcgZnJvbSBzaGlwcGluZyBjb3N0IGlzIGZyZWUgLGF0IGxlYXN0IGZvciBub3cgYnV0IGl0IHdpbGwgZGVmaW50ZWx5IHN0b3Agb25lIGRheS5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNob3dBbnN3ZXI6IGZhbHNlLFxuICAgICAgcXVlc3Rpb246IFwiRG9lcyBldmVyeSBwcm9kdWN0IGhhdmUgMSB5ZWFyIHdhcnJhbnR5P1wiLFxuICAgICAgYW5zd2VyOiBcIk9mZiBjb3Vyc2UgaXQgZG9lcywgYXMgbG9uZyBhcyBpdCBjb21lcyBpbnNpZGUgd2FycmFudHkgcnVsZXMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaG93QW5zd2VyOiBmYWxzZSxcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyBsb25nIGRvZXMgaXQgdGFrZSB0byBnZXQgZGVsaXZlcnk/XCIsXG4gICAgICBhbnN3ZXI6IFwiVXN1YWxseSBpdCB0YWtlcyBiZXR3ZWVuIDMtMTAgZGF5cyBkZXBlbmRpbmcgb24gd2hlcmUgeW91IGFyZSBvcmRlcmluZyBmcm9tLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc2hvd0Fuc3dlcjogZmFsc2UsXG4gICAgICBxdWVzdGlvbjogXCJDYW4gaSBnZXQgYSByZWZ1bmQgYWZ0ZXIgYnV5aW5nIGZvciBzb21lIHJlYXNvbnM/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiSWYgdGhlcmUgaXMgYW55IGZhdWx0IGluIHRoZSBkZXZpY2Usd2hpY2ggaXMgdW5saWtlbHkgaW4gc3VjaCBjYXNlIHdlIG9mZmVyIDk1JSByZWZ1bmQgb24gZXZlcnkgcHJvZHVjdCwgeW91IGNhbiBlbWFpbCB1cyBpZiBzdWNoIHByb2JsZW0gb2NjdXJzLlwiLFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IHRvZ2dsZUFuc3dlciA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHFuYUNvcHkgPSBbLi4ucW5hXTtcbiAgICBxbmFDb3B5W2luZGV4XS5zaG93QW5zd2VyID0gIXFuYVtpbmRleF0uc2hvd0Fuc3dlcjtcbiAgICBzZXRRbmEocW5hQ29weSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5ob21lUGFnZX0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvU2VjdGlvbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e0hlcm9JbWFnZX0gYWx0PVwicHJvZHVjdF9pbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHU+T05FIExPQ0FUSU9OIEFMTCBTT0xVVElPTjwvdT5cbiAgICAgICAgICA8cD5HZXQgYWxsIHRoZSBsYXRlc3QgYW5kIGhvdHRlc3Qgc21hcnRwaG9uZXMgaW4gb25lIHBsYWNlLCBwaG9ueW94eC48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9leHBsb3JlXCIpfT5TaG9wIE5vdzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaG90dGVzdFNlY3Rpb259PlxuICAgICAgICA8dT5IT1QgUFJPRFVDVFM8L3U+XG5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZUluZGV4KChwcmV2KSA9PiBwcmV2IC0gMSl9IGRpc2FibGVkPXtzbGlkZUluZGV4ID09PSAwfT5cbiAgICAgICAgICAgIDxNZENoZXZyb25MZWZ0IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge3NsaWNlZEhvdEl0ZW1zLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBpdGVtSWQ9e3Byb2R1Y3QucHJvZHVjdF9pZH1cbiAgICAgICAgICAgICAgICBpdGVtTmFtZT17cHJvZHVjdC5wcm9kdWN0X25hbWV9XG4gICAgICAgICAgICAgICAgaXRlbVByaWNlPXtwcm9kdWN0LnByb2R1Y3RfcHJpY2V9XG4gICAgICAgICAgICAgICAgaXRlbUltYWdlVVJMPXtwcm9kdWN0LnByb2R1Y3RfaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5wcm9kdWN0X2lkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNsaWRlSW5kZXgoKHByZXYpID0+IHByZXYgKyAxKX0gZGlzYWJsZWQ9e3NsaWRlSW5kZXggPT09IDd9PlxuICAgICAgICAgICAgPE1kQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWR2YW50YWdlU2VjdGlvbn0+XG4gICAgICAgIDx1PldIWSBDSE9PU0UgVVM/PC91PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPEJpRG9sbGFyIC8+XG4gICAgICAgICAgICA8cD5GcmVlIGRlbGl2ZXJ5IGFyb3VuZCB0aGUgZ2xvYmU8L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8UmlEcm9wTGluZSAvPlxuICAgICAgICAgICAgPHA+T25lIHllYXIgd2FycmFudHkgb24gZXZlcnkgcHJvZHVjdDwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxBaU91dGxpbmVDdXN0b21lclNlcnZpY2UgLz5cbiAgICAgICAgICAgIDxwPjI0eDcgZmFzdCBjdXN0b21lciBzdXBwb3J0PC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uU2VjdGlvbn0+XG4gICAgICAgIDx1PlNPTUUgQ09NTU9OIFFVRVNUSU9OUzwvdT5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtxbmEubWFwKChxbmEsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUFuc3dlcihpKX0+XG4gICAgICAgICAgICAgICAgICA8cD57cW5hLnF1ZXN0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIHtxbmEuc2hvd0Fuc3dlciA/IDxBaU91dGxpbmVNaW51cyAvPiA6IDxHckFkZCAvPn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHtxbmEuc2hvd0Fuc3dlciA/IDxwPntxbmEuYW5zd2VyfTwvcD4gOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuLy9odHRwczovL2JpdC5seS8zd0Y3MFdTXG5cbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcGhvbnlveHguaGVyb2t1YXBwLmNvbS9wcm9kdWN0L2ZldGNoQWxsXCIpO1xuICByZXR1cm4geyBob3R0ZXN0UHJvZHVjdHM6IGRhdGEuZGF0YSB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Item.module.css":
/*!********************************!*\
  !*** ./styles/Item.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"Item_item__3Yx3Q\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSXRlbS5tb2R1bGUuY3NzP2ZjNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSXRlbS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbVwiOiBcIkl0ZW1faXRlbV9fM1l4M1FcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Item.module.css\n");

/***/ }),

/***/ "./styles/LandingPage.module.css":
/*!***************************************!*\
  !*** ./styles/LandingPage.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"heroSection\": \"LandingPage_heroSection__3Ff7O\",\n\t\"hottestSection\": \"LandingPage_hottestSection__2Af8W\",\n\t\"advantageSection\": \"LandingPage_advantageSection__v8Mgx\",\n\t\"questionSection\": \"LandingPage_questionSection__3KmXf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTGFuZGluZ1BhZ2UubW9kdWxlLmNzcz85Njk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0xhbmRpbmdQYWdlLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZXJvU2VjdGlvblwiOiBcIkxhbmRpbmdQYWdlX2hlcm9TZWN0aW9uX18zRmY3T1wiLFxuXHRcImhvdHRlc3RTZWN0aW9uXCI6IFwiTGFuZGluZ1BhZ2VfaG90dGVzdFNlY3Rpb25fXzJBZjhXXCIsXG5cdFwiYWR2YW50YWdlU2VjdGlvblwiOiBcIkxhbmRpbmdQYWdlX2FkdmFudGFnZVNlY3Rpb25fX3Y4TWd4XCIsXG5cdFwicXVlc3Rpb25TZWN0aW9uXCI6IFwiTGFuZGluZ1BhZ2VfcXVlc3Rpb25TZWN0aW9uX18zS21YZlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/LandingPage.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiPzQ4OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ai\n");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiPzEyNDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bi\n");

/***/ }),

/***/ "react-icons/gr":
/*!*********************************!*\
  !*** external "react-icons/gr" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/gr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9nclwiPzdjZjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZ3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/gr\n");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiP2YzZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/md\n");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ri\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiPzA0MWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvcmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ri\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });