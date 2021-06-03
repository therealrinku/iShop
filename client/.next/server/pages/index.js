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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Item.module.css */ \"./styles/Item.module.css\");\n/* harmony import */ var _styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/rinku/codes/next/mobyoxx/client/components/Item.js\";\n\nfunction Item({\n  imageURL,\n  name,\n  price\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: imageURL,\n      alt: \"item_image\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"$\", price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW0uanM/YWE4ZiJdLCJuYW1lcyI6WyJJdGVtIiwiaW1hZ2VVUkwiLCJuYW1lIiwicHJpY2UiLCJzdHlsZXMiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxDQUFjO0FBQUVDLFVBQUY7QUFBWUMsTUFBWjtBQUFrQkM7QUFBbEIsQ0FBZCxFQUF5QztBQUN0RCxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBRUosUUFBVjtBQUFvQixTQUFHLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLHNCQUFLQyxLQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSXRlbS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBpbWFnZVVSTCwgbmFtZSwgcHJpY2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XG4gICAgICA8aW1nIHNyYz17aW1hZ2VVUkx9IGFsdD1cIml0ZW1faW1hZ2VcIiAvPlxuICAgICAgPHA+e25hbWV9PC9wPlxuICAgICAgPHA+JHtwcmljZX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Item.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/LandingPage.module.css */ \"./styles/LandingPage.module.css\");\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hero.jpg */ \"./assets/hero.jpg\");\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"react-icons/ri\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gr */ \"react-icons/gr\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Item */ \"./components/Item.js\");\n\nvar _jsxFileName = \"/home/rinku/codes/next/mobyoxx/client/pages/index.js\";\n\n\n\n\n\n\n\n\n\n\n\nfunction LandingPage({\n  hottestProducts\n}) {\n  const {\n    0: slideIndex,\n    1: setSlideIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])(); //sliced hot items\n\n  const slicedHotItems = hottestProducts.slice(slideIndex);\n  const {\n    0: qna,\n    1: setQna\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([{\n    showAnswer: false,\n    question: \"Is shipping completely free on every item?\",\n    answer: \"Yes it absolutely is, it doesn't matter where you are buying from shipping cost is free ,at least for now but it will defintely stop one day.\"\n  }, {\n    showAnswer: false,\n    question: \"Does every product have 1 year warranty?\",\n    answer: \"Off course it does, as long as it comes inside warranty rules.\"\n  }, {\n    showAnswer: false,\n    question: \"How long does it take to get delivery?\",\n    answer: \"Usually it takes between 3-10 days depending on where you are ordering from.\"\n  }, {\n    showAnswer: false,\n    question: \"Can i get a refund after buying for some reasons?\",\n    answer: \"If there is any fault in the device,which is unlikely in such case we offer 95% refund on every product, you can email us if such problem occurs.\"\n  }]);\n\n  const toggleAnswer = index => {\n    const qnaCopy = [...qna];\n    qnaCopy[index].showAnswer = !qna[index].showAnswer;\n    setQna(qnaCopy);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.homePage,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n          alt: \"product_image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n          children: \"ONE LOCATION ALL SOLUTION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Get all the latest and hottest smartphones in one place, phonyoxx.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => router.push(\"/explore\"),\n          children: \"Shop Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hottestSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"HOT PRODUCTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev - 1),\n          disabled: slideIndex === 0,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdChevronLeft\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), slicedHotItems.map(product => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Item__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            imageURL: product.product_image_url,\n            name: product.product_name,\n            price: product.product_price\n          }, product.productId, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 15\n          }, this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev + 1),\n          disabled: slideIndex === 7,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdChevronRight\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advantageSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"WHY CHOOSE US?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__[\"BiDollar\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Free delivery around the globe\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__[\"RiDropLine\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"One year warranty on every product\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__[\"AiOutlineCustomerService\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"24x7 fast customer support\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questionSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"SOME COMMON QUESTIONS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: qna.map((qna, i) => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: () => toggleAnswer(i),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: qna.question\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 19\n              }, this), qna.showAnswer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__[\"AiOutlineMinus\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 37\n              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_8__[\"GrAdd\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 58\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 17\n            }, this), qna.showAnswer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: qna.answer\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 35\n            }, this) : null]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 15\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"phonyoxx 2021 All rights reserved\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n} //https://bit.ly/3wF70WS\n\nLandingPage.getInitialProps = async () => {\n  const data = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(\"https://phonyoxx.herokuapp.com/product/fetchAll\");\n  return {\n    hottestProducts: data.data\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiaG90dGVzdFByb2R1Y3RzIiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNsaWNlZEhvdEl0ZW1zIiwic2xpY2UiLCJxbmEiLCJzZXRRbmEiLCJzaG93QW5zd2VyIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0b2dnbGVBbnN3ZXIiLCJpbmRleCIsInFuYUNvcHkiLCJzdHlsZXMiLCJob21lUGFnZSIsImhlcm9TZWN0aW9uIiwiSGVyb0ltYWdlIiwicHVzaCIsImhvdHRlc3RTZWN0aW9uIiwicHJldiIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0X2ltYWdlX3VybCIsInByb2R1Y3RfbmFtZSIsInByb2R1Y3RfcHJpY2UiLCJwcm9kdWN0SWQiLCJhZHZhbnRhZ2VTZWN0aW9uIiwicXVlc3Rpb25TZWN0aW9uIiwiaSIsImZvb3RlciIsImdldEluaXRpYWxQcm9wcyIsImRhdGEiLCJheGlvcyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUEwQztBQUN2RCxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsQ0FBRCxDQUE1QztBQUVBLFFBQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEIsQ0FIdUQsQ0FLdkQ7O0FBQ0EsUUFBTUMsY0FBYyxHQUFHTixlQUFlLENBQUNPLEtBQWhCLENBQXNCTixVQUF0QixDQUF2QjtBQUVBLFFBQU07QUFBQSxPQUFDTyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQk4sc0RBQVEsQ0FBQyxDQUM3QjtBQUNF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QUosZ0JBQWlCO0FBQUEsd0JBQUlGLEdBQUcsQ0FBQ0k7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFqQixHQUF1QyxJQU4xQztBQUFBLGFBQVVtQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFVRCxTQVhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhERixlQTJFRTtBQUFRLGVBQVMsRUFBRWYscUVBQU0sQ0FBQ2dCLE1BQTFCO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUZELEMsQ0FFRDs7QUFFQWpDLFdBQVcsQ0FBQ2tDLGVBQVosR0FBOEIsWUFBWTtBQUN4QyxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGlEQUFWLENBQW5CO0FBQ0EsU0FBTztBQUFFcEMsbUJBQWUsRUFBRWtDLElBQUksQ0FBQ0E7QUFBeEIsR0FBUDtBQUNELENBSEQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9MYW5kaW5nUGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVyb0ltYWdlIGZyb20gXCIuLi9hc3NldHMvaGVyby5qcGdcIjtcbmltcG9ydCB7IE1kQ2hldnJvblJpZ2h0LCBNZENoZXZyb25MZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmlEb2xsYXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IFJpRHJvcExpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7IEFpT3V0bGluZUN1c3RvbWVyU2VydmljZSwgQWlPdXRsaW5lTWludXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IEdyQWRkIH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoeyBob3R0ZXN0UHJvZHVjdHMgfSkge1xuICBjb25zdCBbc2xpZGVJbmRleCwgc2V0U2xpZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvL3NsaWNlZCBob3QgaXRlbXNcbiAgY29uc3Qgc2xpY2VkSG90SXRlbXMgPSBob3R0ZXN0UHJvZHVjdHMuc2xpY2Uoc2xpZGVJbmRleCk7XG5cbiAgY29uc3QgW3FuYSwgc2V0UW5hXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBzaG93QW5zd2VyOiBmYWxzZSxcbiAgICAgIHF1ZXN0aW9uOiBcIklzIHNoaXBwaW5nIGNvbXBsZXRlbHkgZnJlZSBvbiBldmVyeSBpdGVtP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlllcyBpdCBhYnNvbHV0ZWx5IGlzLCBpdCBkb2Vzbid0IG1hdHRlciB3aGVyZSB5b3UgYXJlIGJ1eWluZyBmcm9tIHNoaXBwaW5nIGNvc3QgaXMgZnJlZSAsYXQgbGVhc3QgZm9yIG5vdyBidXQgaXQgd2lsbCBkZWZpbnRlbHkgc3RvcCBvbmUgZGF5LlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc2hvd0Fuc3dlcjogZmFsc2UsXG4gICAgICBxdWVzdGlvbjogXCJEb2VzIGV2ZXJ5IHByb2R1Y3QgaGF2ZSAxIHllYXIgd2FycmFudHk/XCIsXG4gICAgICBhbnN3ZXI6IFwiT2ZmIGNvdXJzZSBpdCBkb2VzLCBhcyBsb25nIGFzIGl0IGNvbWVzIGluc2lkZSB3YXJyYW50eSBydWxlcy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNob3dBbnN3ZXI6IGZhbHNlLFxuICAgICAgcXVlc3Rpb246IFwiSG93IGxvbmcgZG9lcyBpdCB0YWtlIHRvIGdldCBkZWxpdmVyeT9cIixcbiAgICAgIGFuc3dlcjogXCJVc3VhbGx5IGl0IHRha2VzIGJldHdlZW4gMy0xMCBkYXlzIGRlcGVuZGluZyBvbiB3aGVyZSB5b3UgYXJlIG9yZGVyaW5nIGZyb20uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaG93QW5zd2VyOiBmYWxzZSxcbiAgICAgIHF1ZXN0aW9uOiBcIkNhbiBpIGdldCBhIHJlZnVuZCBhZnRlciBidXlpbmcgZm9yIHNvbWUgcmVhc29ucz9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJJZiB0aGVyZSBpcyBhbnkgZmF1bHQgaW4gdGhlIGRldmljZSx3aGljaCBpcyB1bmxpa2VseSBpbiBzdWNoIGNhc2Ugd2Ugb2ZmZXIgOTUlIHJlZnVuZCBvbiBldmVyeSBwcm9kdWN0LCB5b3UgY2FuIGVtYWlsIHVzIGlmIHN1Y2ggcHJvYmxlbSBvY2N1cnMuXCIsXG4gICAgfSxcbiAgXSk7XG5cbiAgY29uc3QgdG9nZ2xlQW5zd2VyID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgcW5hQ29weSA9IFsuLi5xbmFdO1xuICAgIHFuYUNvcHlbaW5kZXhdLnNob3dBbnN3ZXIgPSAhcW5hW2luZGV4XS5zaG93QW5zd2VyO1xuICAgIHNldFFuYShxbmFDb3B5KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmhvbWVQYWdlfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9TZWN0aW9ufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17SGVyb0ltYWdlfSBhbHQ9XCJwcm9kdWN0X2ltYWdlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dT5PTkUgTE9DQVRJT04gQUxMIFNPTFVUSU9OPC91PlxuICAgICAgICAgIDxwPkdldCBhbGwgdGhlIGxhdGVzdCBhbmQgaG90dGVzdCBzbWFydHBob25lcyBpbiBvbmUgcGxhY2UsIHBob255b3h4LjwvcD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL2V4cGxvcmVcIil9PlNob3AgTm93PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5ob3R0ZXN0U2VjdGlvbn0+XG4gICAgICAgIDx1PkhPVCBQUk9EVUNUUzwvdT5cblxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNsaWRlSW5kZXgoKHByZXYpID0+IHByZXYgLSAxKX0gZGlzYWJsZWQ9e3NsaWRlSW5kZXggPT09IDB9PlxuICAgICAgICAgICAgPE1kQ2hldnJvbkxlZnQgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7c2xpY2VkSG90SXRlbXMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5wcm9kdWN0SWR9XG4gICAgICAgICAgICAgICAgaW1hZ2VVUkw9e3Byb2R1Y3QucHJvZHVjdF9pbWFnZV91cmx9XG4gICAgICAgICAgICAgICAgbmFtZT17cHJvZHVjdC5wcm9kdWN0X25hbWV9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJvZHVjdF9wcmljZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZUluZGV4KChwcmV2KSA9PiBwcmV2ICsgMSl9IGRpc2FibGVkPXtzbGlkZUluZGV4ID09PSA3fT5cbiAgICAgICAgICAgIDxNZENoZXZyb25SaWdodCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFkdmFudGFnZVNlY3Rpb259PlxuICAgICAgICA8dT5XSFkgQ0hPT1NFIFVTPzwvdT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxCaURvbGxhciAvPlxuICAgICAgICAgICAgPHA+RnJlZSBkZWxpdmVyeSBhcm91bmQgdGhlIGdsb2JlPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPFJpRHJvcExpbmUgLz5cbiAgICAgICAgICAgIDxwPk9uZSB5ZWFyIHdhcnJhbnR5IG9uIGV2ZXJ5IHByb2R1Y3Q8L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8QWlPdXRsaW5lQ3VzdG9tZXJTZXJ2aWNlIC8+XG4gICAgICAgICAgICA8cD4yNHg3IGZhc3QgY3VzdG9tZXIgc3VwcG9ydDwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvblNlY3Rpb259PlxuICAgICAgICA8dT5TT01FIENPTU1PTiBRVUVTVElPTlM8L3U+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cW5hLm1hcCgocW5hLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVBbnN3ZXIoaSl9PlxuICAgICAgICAgICAgICAgICAgPHA+e3FuYS5xdWVzdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICB7cW5hLnNob3dBbnN3ZXIgPyA8QWlPdXRsaW5lTWludXMgLz4gOiA8R3JBZGQgLz59XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICB7cW5hLnNob3dBbnN3ZXIgPyA8cD57cW5hLmFuc3dlcn08L3A+IDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8cD5waG9ueW94eCAyMDIxIEFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbi8vaHR0cHM6Ly9iaXQubHkvM3dGNzBXU1xuXG5MYW5kaW5nUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL3Bob255b3h4Lmhlcm9rdWFwcC5jb20vcHJvZHVjdC9mZXRjaEFsbFwiKTtcbiAgcmV0dXJuIHsgaG90dGVzdFByb2R1Y3RzOiBkYXRhLmRhdGEgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

eval("// Exports\nmodule.exports = {\n\t\"heroSection\": \"LandingPage_heroSection__3Ff7O\",\n\t\"hottestSection\": \"LandingPage_hottestSection__2Af8W\",\n\t\"advantageSection\": \"LandingPage_advantageSection__v8Mgx\",\n\t\"questionSection\": \"LandingPage_questionSection__3KmXf\",\n\t\"footer\": \"LandingPage_footer__2o4Bo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTGFuZGluZ1BhZ2UubW9kdWxlLmNzcz85Njk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvTGFuZGluZ1BhZ2UubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlcm9TZWN0aW9uXCI6IFwiTGFuZGluZ1BhZ2VfaGVyb1NlY3Rpb25fXzNGZjdPXCIsXG5cdFwiaG90dGVzdFNlY3Rpb25cIjogXCJMYW5kaW5nUGFnZV9ob3R0ZXN0U2VjdGlvbl9fMkFmOFdcIixcblx0XCJhZHZhbnRhZ2VTZWN0aW9uXCI6IFwiTGFuZGluZ1BhZ2VfYWR2YW50YWdlU2VjdGlvbl9fdjhNZ3hcIixcblx0XCJxdWVzdGlvblNlY3Rpb25cIjogXCJMYW5kaW5nUGFnZV9xdWVzdGlvblNlY3Rpb25fXzNLbVhmXCIsXG5cdFwiZm9vdGVyXCI6IFwiTGFuZGluZ1BhZ2VfZm9vdGVyX18ybzRCb1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/LandingPage.module.css\n");

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