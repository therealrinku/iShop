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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/LandingPage.module.css */ \"./styles/LandingPage.module.css\");\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hero.jpg */ \"./assets/hero.jpg\");\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Item */ \"./components/Item.js\");\n\nvar _jsxFileName = \"/home/rinku/codes/next/mobyoxx/client/pages/index.js\";\n\n\n\nfunction LandingPage({\n  hottestProducts\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n          alt: \"new_product_image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n          children: \"ONE LOCATION ALL SOLUTION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Get all the latest and hottest smartphones in one place, phonyoxx.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Shop Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hottestSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"HOTTEST PRODUCTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        children: hottestProducts.map(product => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            itemId: product.productId,\n            itemName: product.productName,\n            itemPrice: product.price,\n            itemImageURL: product.productImageURL\n          }, product.productId, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 15\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\nLandingPage.defaultProps = {\n  hottestProducts: [{\n    productName: \"Iphone 12\",\n    productImageURL: \"https://bit.ly/3wF70WS\",\n    productId: 1,\n    price: 1299\n  }, {\n    productName: \"Samsung Galaxy S9\",\n    productImageURL: \"https://bit.ly/34zeVc3\",\n    productId: 2,\n    price: 999\n  }, {\n    productName: \"Iphone X\",\n    productImageURL: \"https://bit.ly/3vI7jQu\",\n    productId: 3,\n    price: 799\n  }, {\n    productName: \"Pixel 2\",\n    productImageURL: \"https://bit.ly/34zs6dl\",\n    productId: 4,\n    price: 899\n  }, {\n    productName: \"Huawei Mate 20 Lite\",\n    productImageURL: \"https://bit.ly/3uDiNmX\",\n    productId: 5,\n    price: 1199\n  }, {\n    productName: \"ZenPhone 3\",\n    productImageURL: \"https://bit.ly/3g4OUad\",\n    productId: 6,\n    price: 499\n  }, {\n    productName: \"Sony Ericsson XC12\",\n    productImageURL: \"https://bit.ly/3g6daJ4\",\n    productId: 7,\n    price: 399\n  }, {\n    productName: \"Vivo V5\",\n    productImageURL: \"https://bit.ly/3p9Q7AV\",\n    productId: 8,\n    price: 299\n  }]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiaG90dGVzdFByb2R1Y3RzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVyb1NlY3Rpb24iLCJIZXJvSW1hZ2UiLCJob3R0ZXN0U2VjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0SWQiLCJwcm9kdWN0TmFtZSIsInByaWNlIiwicHJvZHVjdEltYWdlVVJMIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUEwQztBQUN2RCxzQkFDRTtBQUFNLGFBQVMsRUFBRUMscUVBQU0sQ0FBQ0MsU0FBeEI7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBRUQscUVBQU0sQ0FBQ0UsV0FBM0I7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFQyx1REFBVjtBQUFxQixhQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBYUU7QUFBUyxlQUFTLEVBQUVILHFFQUFNLENBQUNJLGNBQTNCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQ0dMLGVBQWUsQ0FBQ00sR0FBaEIsQ0FBcUJDLE9BQUQsSUFBYTtBQUNoQyw4QkFDRSxxRUFBQyx3REFBRDtBQUNFLGtCQUFNLEVBQUVBLE9BQU8sQ0FBQ0MsU0FEbEI7QUFFRSxvQkFBUSxFQUFFRCxPQUFPLENBQUNFLFdBRnBCO0FBR0UscUJBQVMsRUFBRUYsT0FBTyxDQUFDRyxLQUhyQjtBQUlFLHdCQUFZLEVBQUVILE9BQU8sQ0FBQ0k7QUFKeEIsYUFLT0osT0FBTyxDQUFDQyxTQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFTRCxTQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEO0FBRURULFdBQVcsQ0FBQ2EsWUFBWixHQUEyQjtBQUN6QlosaUJBQWUsRUFBRSxDQUNmO0FBQUVTLGVBQVcsRUFBRSxXQUFmO0FBQTRCRSxtQkFBZSxFQUFFLHdCQUE3QztBQUF1RUgsYUFBUyxFQUFFLENBQWxGO0FBQXFGRSxTQUFLLEVBQUU7QUFBNUYsR0FEZSxFQUVmO0FBQUVELGVBQVcsRUFBRSxtQkFBZjtBQUFvQ0UsbUJBQWUsRUFBRSx3QkFBckQ7QUFBK0VILGFBQVMsRUFBRSxDQUExRjtBQUE2RkUsU0FBSyxFQUFFO0FBQXBHLEdBRmUsRUFHZjtBQUFFRCxlQUFXLEVBQUUsVUFBZjtBQUEyQkUsbUJBQWUsRUFBRSx3QkFBNUM7QUFBc0VILGFBQVMsRUFBRSxDQUFqRjtBQUFvRkUsU0FBSyxFQUFFO0FBQTNGLEdBSGUsRUFJZjtBQUFFRCxlQUFXLEVBQUUsU0FBZjtBQUEwQkUsbUJBQWUsRUFBRSx3QkFBM0M7QUFBcUVILGFBQVMsRUFBRSxDQUFoRjtBQUFtRkUsU0FBSyxFQUFFO0FBQTFGLEdBSmUsRUFLZjtBQUFFRCxlQUFXLEVBQUUscUJBQWY7QUFBc0NFLG1CQUFlLEVBQUUsd0JBQXZEO0FBQWlGSCxhQUFTLEVBQUUsQ0FBNUY7QUFBK0ZFLFNBQUssRUFBRTtBQUF0RyxHQUxlLEVBTWY7QUFBRUQsZUFBVyxFQUFFLFlBQWY7QUFBNkJFLG1CQUFlLEVBQUUsd0JBQTlDO0FBQXdFSCxhQUFTLEVBQUUsQ0FBbkY7QUFBc0ZFLFNBQUssRUFBRTtBQUE3RixHQU5lLEVBT2Y7QUFBRUQsZUFBVyxFQUFFLG9CQUFmO0FBQXFDRSxtQkFBZSxFQUFFLHdCQUF0RDtBQUFnRkgsYUFBUyxFQUFFLENBQTNGO0FBQThGRSxTQUFLLEVBQUU7QUFBckcsR0FQZSxFQVFmO0FBQUVELGVBQVcsRUFBRSxTQUFmO0FBQTBCRSxtQkFBZSxFQUFFLHdCQUEzQztBQUFxRUgsYUFBUyxFQUFFLENBQWhGO0FBQW1GRSxTQUFLLEVBQUU7QUFBMUYsR0FSZTtBQURRLENBQTNCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGFuZGluZ1BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlcm9JbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2hlcm8uanBnXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKHsgaG90dGVzdFByb2R1Y3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1NlY3Rpb259PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtIZXJvSW1hZ2V9IGFsdD1cIm5ld19wcm9kdWN0X2ltYWdlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dT5PTkUgTE9DQVRJT04gQUxMIFNPTFVUSU9OPC91PlxuICAgICAgICAgIDxwPkdldCBhbGwgdGhlIGxhdGVzdCBhbmQgaG90dGVzdCBzbWFydHBob25lcyBpbiBvbmUgcGxhY2UsIHBob255b3h4LjwvcD5cbiAgICAgICAgICA8YnV0dG9uPlNob3AgTm93PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5ob3R0ZXN0U2VjdGlvbn0+XG4gICAgICAgIDx1PkhPVFRFU1QgUFJPRFVDVFM8L3U+XG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIHtob3R0ZXN0UHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIGl0ZW1JZD17cHJvZHVjdC5wcm9kdWN0SWR9XG4gICAgICAgICAgICAgICAgaXRlbU5hbWU9e3Byb2R1Y3QucHJvZHVjdE5hbWV9XG4gICAgICAgICAgICAgICAgaXRlbVByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgIGl0ZW1JbWFnZVVSTD17cHJvZHVjdC5wcm9kdWN0SW1hZ2VVUkx9XG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LnByb2R1Y3RJZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbkxhbmRpbmdQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaG90dGVzdFByb2R1Y3RzOiBbXG4gICAgeyBwcm9kdWN0TmFtZTogXCJJcGhvbmUgMTJcIiwgcHJvZHVjdEltYWdlVVJMOiBcImh0dHBzOi8vYml0Lmx5LzN3RjcwV1NcIiwgcHJvZHVjdElkOiAxLCBwcmljZTogMTI5OSB9LFxuICAgIHsgcHJvZHVjdE5hbWU6IFwiU2Ftc3VuZyBHYWxheHkgUzlcIiwgcHJvZHVjdEltYWdlVVJMOiBcImh0dHBzOi8vYml0Lmx5LzM0emVWYzNcIiwgcHJvZHVjdElkOiAyLCBwcmljZTogOTk5IH0sXG4gICAgeyBwcm9kdWN0TmFtZTogXCJJcGhvbmUgWFwiLCBwcm9kdWN0SW1hZ2VVUkw6IFwiaHR0cHM6Ly9iaXQubHkvM3ZJN2pRdVwiLCBwcm9kdWN0SWQ6IDMsIHByaWNlOiA3OTkgfSxcbiAgICB7IHByb2R1Y3ROYW1lOiBcIlBpeGVsIDJcIiwgcHJvZHVjdEltYWdlVVJMOiBcImh0dHBzOi8vYml0Lmx5LzM0enM2ZGxcIiwgcHJvZHVjdElkOiA0LCBwcmljZTogODk5IH0sXG4gICAgeyBwcm9kdWN0TmFtZTogXCJIdWF3ZWkgTWF0ZSAyMCBMaXRlXCIsIHByb2R1Y3RJbWFnZVVSTDogXCJodHRwczovL2JpdC5seS8zdURpTm1YXCIsIHByb2R1Y3RJZDogNSwgcHJpY2U6IDExOTkgfSxcbiAgICB7IHByb2R1Y3ROYW1lOiBcIlplblBob25lIDNcIiwgcHJvZHVjdEltYWdlVVJMOiBcImh0dHBzOi8vYml0Lmx5LzNnNE9VYWRcIiwgcHJvZHVjdElkOiA2LCBwcmljZTogNDk5IH0sXG4gICAgeyBwcm9kdWN0TmFtZTogXCJTb255IEVyaWNzc29uIFhDMTJcIiwgcHJvZHVjdEltYWdlVVJMOiBcImh0dHBzOi8vYml0Lmx5LzNnNmRhSjRcIiwgcHJvZHVjdElkOiA3LCBwcmljZTogMzk5IH0sXG4gICAgeyBwcm9kdWN0TmFtZTogXCJWaXZvIFY1XCIsIHByb2R1Y3RJbWFnZVVSTDogXCJodHRwczovL2JpdC5seS8zcDlRN0FWXCIsIHByb2R1Y3RJZDogOCwgcHJpY2U6IDI5OSB9LFxuICBdLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });