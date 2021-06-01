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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/LandingPage.module.css */ \"./styles/LandingPage.module.css\");\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hero.jpg */ \"./assets/hero.jpg\");\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Item */ \"./components/Item.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/rinku/codes/next/mobyoxx/client/pages/index.js\";\n\n\n\n\n\nfunction LandingPage({\n  hottestProducts\n}) {\n  const {\n    0: visibleHottestItems,\n    1: setVisibleHottestItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(hottestProducts);\n  const {\n    0: slideIndex,\n    1: setSlideIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(0);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n          alt: \"new_product_image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n          children: \"ONE LOCATION ALL SOLUTION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Get all the latest and hottest smartphones in one place, phonyoxx.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Shop Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hottestSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"HOT PRODUCTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev - 1),\n          disabled: slideIndex === 0,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdChevronLeft\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), visibleHottestItems.slice(slideIndex).map(product => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            itemId: product.productId,\n            itemName: product.productName,\n            itemPrice: product.price,\n            itemImageURL: product.productImageURL\n          }, product.productId, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 15\n          }, this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev + 1),\n          disabled: slideIndex === 6,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[\"MdChevronRight\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\nLandingPage.defaultProps = {\n  hottestProducts: [{\n    productName: \"Iphone 12\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 1,\n    price: 1299\n  }, {\n    productName: \"Samsung Galaxy S9\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 2,\n    price: 999\n  }, {\n    productName: \"Iphone X\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 3,\n    price: 799\n  }, {\n    productName: \"Pixel 2\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 4,\n    price: 899\n  }, {\n    productName: \"Huawei Mate 20 Lite\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 5,\n    price: 1199\n  }, {\n    productName: \"ZenPhone 3\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 6,\n    price: 499\n  }, {\n    productName: \"Sony Ericsson XC12\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 7,\n    price: 399\n  }, {\n    productName: \"Vivo V5\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 8,\n    price: 299\n  }]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiaG90dGVzdFByb2R1Y3RzIiwidmlzaWJsZUhvdHRlc3RJdGVtcyIsInNldFZpc2libGVIb3R0ZXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNsaWRlSW5kZXgiLCJzZXRTbGlkZUluZGV4Iiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVyb1NlY3Rpb24iLCJIZXJvSW1hZ2UiLCJob3R0ZXN0U2VjdGlvbiIsInByZXYiLCJzbGljZSIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0SWQiLCJwcm9kdWN0TmFtZSIsInByaWNlIiwicHJvZHVjdEltYWdlVVJMIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQjtBQUFFQztBQUFGLENBQXJCLEVBQTBDO0FBQ3ZELFFBQU07QUFBQSxPQUFDQyxtQkFBRDtBQUFBLE9BQXNCQztBQUF0QixNQUFnREMsc0RBQVEsQ0FBQ0gsZUFBRCxDQUE5RDtBQUNBLFFBQU07QUFBQSxPQUFDSSxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBQyxDQUFELENBQTVDO0FBRUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUVHLHFFQUFNLENBQUNDLFNBQXhCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUVELHFFQUFNLENBQUNFLFdBQTNCO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUMsdURBQVY7QUFBcUIsYUFBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtB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QVJlO0FBRFEsQ0FBM0IiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9MYW5kaW5nUGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVyb0ltYWdlIGZyb20gXCIuLi9hc3NldHMvaGVyby5qcGdcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcbmltcG9ydCB7IE1kQ2hldnJvblJpZ2h0LCBNZENoZXZyb25MZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSh7IGhvdHRlc3RQcm9kdWN0cyB9KSB7XG4gIGNvbnN0IFt2aXNpYmxlSG90dGVzdEl0ZW1zLCBzZXRWaXNpYmxlSG90dGVzdEl0ZW1zXSA9IHVzZVN0YXRlKGhvdHRlc3RQcm9kdWN0cyk7XG4gIGNvbnN0IFtzbGlkZUluZGV4LCBzZXRTbGlkZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9TZWN0aW9ufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17SGVyb0ltYWdlfSBhbHQ9XCJuZXdfcHJvZHVjdF9pbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHU+T05FIExPQ0FUSU9OIEFMTCBTT0xVVElPTjwvdT5cbiAgICAgICAgICA8cD5HZXQgYWxsIHRoZSBsYXRlc3QgYW5kIGhvdHRlc3Qgc21hcnRwaG9uZXMgaW4gb25lIHBsYWNlLCBwaG9ueW94eC48L3A+XG4gICAgICAgICAgPGJ1dHRvbj5TaG9wIE5vdzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaG90dGVzdFNlY3Rpb259PlxuICAgICAgICA8dT5IT1QgUFJPRFVDVFM8L3U+XG5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZUluZGV4KChwcmV2KSA9PiBwcmV2IC0gMSl9IGRpc2FibGVkPXtzbGlkZUluZGV4ID09PSAwfT5cbiAgICAgICAgICAgIDxNZENoZXZyb25MZWZ0IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge3Zpc2libGVIb3R0ZXN0SXRlbXMuc2xpY2Uoc2xpZGVJbmRleCkubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIGl0ZW1JZD17cHJvZHVjdC5wcm9kdWN0SWR9XG4gICAgICAgICAgICAgICAgaXRlbU5hbWU9e3Byb2R1Y3QucHJvZHVjdE5hbWV9XG4gICAgICAgICAgICAgICAgaXRlbVByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgIGl0ZW1JbWFnZVVSTD17cHJvZHVjdC5wcm9kdWN0SW1hZ2VVUkx9XG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LnByb2R1Y3RJZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZUluZGV4KChwcmV2KSA9PiBwcmV2ICsgMSl9IGRpc2FibGVkPXtzbGlkZUluZGV4ID09PSA2fT5cbiAgICAgICAgICAgIDxNZENoZXZyb25SaWdodCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5MYW5kaW5nUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhvdHRlc3RQcm9kdWN0czogW1xuICAgIHsgcHJvZHVjdE5hbWU6IFwiSXBob25lIDEyXCIsIHByb2R1Y3RJbWFnZVVSTDogXCJodHRwczovL2JpdC5seS8zd0Y3MFdTXCIsIHByb2R1Y3RJZDogMSwgcHJpY2U6IDEyOTkgfSxcbiAgICB7IHByb2R1Y3ROYW1lOiBcIlNhbXN1bmcgR2FsYXh5IFM5XCIsIHByb2R1Y3RJbWFnZVVSTDogXCJodHRwczovL2JpdC5seS8zd0Y3MFdTXCIsIHByb2R1Y3RJZDogMiwgcHJpY2U6IDk5OSB9LFxuICAgIHsgcHJvZHVjdE5hbWU6IFwiSXBob25lIFhcIiwgcHJvZHVjdEltYWdlVVJMOiBcImh0dHBzOi8vYml0Lmx5LzN3RjcwV1NcIiwgcHJvZHVjdElkOiAzLCBwcmljZTogNzk5IH0sXG4gICAgeyBwcm9kdWN0TmFtZTogXCJQaXhlbCAyXCIsIHByb2R1Y3RJbWFnZVVSTDogXCJodHRwczovL2JpdC5seS8zd0Y3MFdTXCIsIHByb2R1Y3RJZDogNCwgcHJpY2U6IDg5OSB9LFxuICAgIHsgcHJvZHVjdE5hbWU6IFwiSHVhd2VpIE1hdGUgMjAgTGl0ZVwiLCBwcm9kdWN0SW1hZ2VVUkw6IFwiaHR0cHM6Ly9iaXQubHkvM3dGNzBXU1wiLCBwcm9kdWN0SWQ6IDUsIHByaWNlOiAxMTk5IH0sXG4gICAgeyBwcm9kdWN0TmFtZTogXCJaZW5QaG9uZSAzXCIsIHByb2R1Y3RJbWFnZVVSTDogXCJodHRwczovL2JpdC5seS8zd0Y3MFdTXCIsIHByb2R1Y3RJZDogNiwgcHJpY2U6IDQ5OSB9LFxuICAgIHsgcHJvZHVjdE5hbWU6IFwiU29ueSBFcmljc3NvbiBYQzEyXCIsIHByb2R1Y3RJbWFnZVVSTDogXCJodHRwczovL2JpdC5seS8zd0Y3MFdTXCIsIHByb2R1Y3RJZDogNywgcHJpY2U6IDM5OSB9LFxuICAgIHsgcHJvZHVjdE5hbWU6IFwiVml2byBWNVwiLCBwcm9kdWN0SW1hZ2VVUkw6IFwiaHR0cHM6Ly9iaXQubHkvM3dGNzBXU1wiLCBwcm9kdWN0SWQ6IDgsIHByaWNlOiAyOTkgfSxcbiAgXSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

eval("// Exports\nmodule.exports = {\n\t\"heroSection\": \"LandingPage_heroSection__3Ff7O\",\n\t\"hottestSection\": \"LandingPage_hottestSection__2Af8W\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTGFuZGluZ1BhZ2UubW9kdWxlLmNzcz85Njk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvTGFuZGluZ1BhZ2UubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlcm9TZWN0aW9uXCI6IFwiTGFuZGluZ1BhZ2VfaGVyb1NlY3Rpb25fXzNGZjdPXCIsXG5cdFwiaG90dGVzdFNlY3Rpb25cIjogXCJMYW5kaW5nUGFnZV9ob3R0ZXN0U2VjdGlvbl9fMkFmOFdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/LandingPage.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiP2YzZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/md\n");

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