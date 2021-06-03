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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/LandingPage.module.css */ \"./styles/LandingPage.module.css\");\n/* harmony import */ var _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hero.jpg */ \"./assets/hero.jpg\");\n/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"react-icons/ri\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gr */ \"react-icons/gr\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _jsxFileName = \"/home/rinku/codes/next/mobyoxx/client/pages/index.js\";\n\n\n\n\n\n\n\n\n\n\nfunction LandingPage({\n  hottestProducts\n}) {\n  const {\n    0: slideIndex,\n    1: setSlideIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"useRouter\"])(); //sliced hot items\n\n  const slicedHotItems = hottestProducts.slice(slideIndex);\n  const {\n    0: qna,\n    1: setQna\n  } = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([{\n    showAnswer: false,\n    question: \"Is shipping completely free on every item?\",\n    answer: \"Yes it absolutely is, it doesn't matter where you are buying from shipping cost is free ,at least for now but it will defintely stop one day.\"\n  }, {\n    showAnswer: false,\n    question: \"Does every product have 1 year warranty?\",\n    answer: \"Off course it does, as long as it comes inside warranty rules.\"\n  }, {\n    showAnswer: false,\n    question: \"How long does it take to get delivery?\",\n    answer: \"Usually it takes between 3-10 days depending on where you are ordering from.\"\n  }, {\n    showAnswer: false,\n    question: \"Can i get a refund after buying for some reasons?\",\n    answer: \"If there is any fault in the device,which is unlikely in such case we offer 95% refund on every product, you can email us if such problem occurs.\"\n  }]);\n\n  const toggleAnswer = index => {\n    const qnaCopy = [...qna];\n    qnaCopy[index].showAnswer = !qna[index].showAnswer;\n    setQna(qnaCopy);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.homePage,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n          alt: \"product_image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n          children: \"ONE LOCATION ALL SOLUTION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Get all the latest and hottest smartphones in one place, phonyoxx.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => router.push(\"/explore\"),\n          children: \"Shop Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hottestSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"HOT PRODUCTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev - 1),\n          disabled: slideIndex === 0,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdChevronLeft\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), slicedHotItems.map(product => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: product.product_image_url,\n              alt: \"item_image\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: product.product_name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"$\", product.product_price]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => setSlideIndex(prev => prev + 1),\n          disabled: slideIndex === 7,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__[\"MdChevronRight\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.advantageSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"WHY CHOOSE US?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__[\"BiDollar\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Free delivery around the globe\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__[\"RiDropLine\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"One year warranty on every product\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__[\"AiOutlineCustomerService\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"24x7 fast customer support\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questionSection,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"u\", {\n        children: \"SOME COMMON QUESTIONS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: qna.map((qna, i) => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: () => toggleAnswer(i),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: qna.question\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 19\n              }, this), qna.showAnswer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__[\"AiOutlineMinus\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 37\n              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_8__[\"GrAdd\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 58\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 17\n            }, this), qna.showAnswer ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: qna.answer\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 35\n            }, this) : null]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 15\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_LandingPage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"phonyoxx 2021 All rights reserved\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n} //https://bit.ly/3wF70WS\n\nLandingPage.getInitialProps = async () => {\n  const data = await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(\"https://phonyoxx.herokuapp.com/product/fetchAll\");\n  return {\n    hottestProducts: data.data\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiaG90dGVzdFByb2R1Y3RzIiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNsaWNlZEhvdEl0ZW1zIiwic2xpY2UiLCJxbmEiLCJzZXRRbmEiLCJzaG93QW5zd2VyIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0b2dnbGVBbnN3ZXIiLCJpbmRleCIsInFuYUNvcHkiLCJzdHlsZXMiLCJob21lUGFnZSIsImhlcm9TZWN0aW9uIiwiSGVyb0ltYWdlIiwicHVzaCIsImhvdHRlc3RTZWN0aW9uIiwicHJldiIsIm1hcCIsInByb2R1Y3QiLCJwcm9kdWN0X2ltYWdlX3VybCIsInByb2R1Y3RfbmFtZSIsInByb2R1Y3RfcHJpY2UiLCJhZHZhbnRhZ2VTZWN0aW9uIiwicXVlc3Rpb25TZWN0aW9uIiwiaSIsImZvb3RlciIsImdldEluaXRpYWxQcm9wcyIsImRhdGEiLCJheGlvcyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUEwQztBQUN2RCxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsQ0FBRCxDQUE1QztBQUVBLFFBQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEIsQ0FIdUQsQ0FLdkQ7O0FBQ0EsUUFBTUMsY0FBYyxHQUFHTixlQUFlLENBQUNPLEtBQWhCLENBQXNCTixVQUF0QixDQUF2QjtBQUVBLFFBQU07QUFBQSxPQUFDTyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQk4sc0RBQVEsQ0FBQyxDQUM3QjtBQUNFTyxjQUFVLEVBQUUsS0FEZDtB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O0FBQUE7QUFBQSxzQkFGekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBTUdGLEdBQUcsQ0FBQ0UsVUFBSixnQkFBaUI7QUFBQSx3QkFBSUYsR0FBRyxDQUFDSTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWpCLEdBQXVDLElBTjFDO0FBQUEsYUFBVWtCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQVVELFNBWEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkRGLGVBMEVFO0FBQVEsZUFBUyxFQUFFZCxxRUFBTSxDQUFDZSxNQUExQjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdGRCxDLENBRUQ7O0FBRUFoQyxXQUFXLENBQUNpQyxlQUFaLEdBQThCLFlBQVk7QUFDeEMsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxpREFBVixDQUFuQjtBQUNBLFNBQU87QUFBRW5DLG1CQUFlLEVBQUVpQyxJQUFJLENBQUNBO0FBQXhCLEdBQVA7QUFDRCxDQUhEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGFuZGluZ1BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlcm9JbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2hlcm8uanBnXCI7XG5pbXBvcnQgeyBNZENoZXZyb25SaWdodCwgTWRDaGV2cm9uTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpRG9sbGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBSaURyb3BMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVDdXN0b21lclNlcnZpY2UsIEFpT3V0bGluZU1pbnVzIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBHckFkZCB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKHsgaG90dGVzdFByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3NsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy9zbGljZWQgaG90IGl0ZW1zXG4gIGNvbnN0IHNsaWNlZEhvdEl0ZW1zID0gaG90dGVzdFByb2R1Y3RzLnNsaWNlKHNsaWRlSW5kZXgpO1xuXG4gIGNvbnN0IFtxbmEsIHNldFFuYV0gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgc2hvd0Fuc3dlcjogZmFsc2UsXG4gICAgICBxdWVzdGlvbjogXCJJcyBzaGlwcGluZyBjb21wbGV0ZWx5IGZyZWUgb24gZXZlcnkgaXRlbT9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJZZXMgaXQgYWJzb2x1dGVseSBpcywgaXQgZG9lc24ndCBtYXR0ZXIgd2hlcmUgeW91IGFyZSBidXlpbmcgZnJvbSBzaGlwcGluZyBjb3N0IGlzIGZyZWUgLGF0IGxlYXN0IGZvciBub3cgYnV0IGl0IHdpbGwgZGVmaW50ZWx5IHN0b3Agb25lIGRheS5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNob3dBbnN3ZXI6IGZhbHNlLFxuICAgICAgcXVlc3Rpb246IFwiRG9lcyBldmVyeSBwcm9kdWN0IGhhdmUgMSB5ZWFyIHdhcnJhbnR5P1wiLFxuICAgICAgYW5zd2VyOiBcIk9mZiBjb3Vyc2UgaXQgZG9lcywgYXMgbG9uZyBhcyBpdCBjb21lcyBpbnNpZGUgd2FycmFudHkgcnVsZXMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBzaG93QW5zd2VyOiBmYWxzZSxcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyBsb25nIGRvZXMgaXQgdGFrZSB0byBnZXQgZGVsaXZlcnk/XCIsXG4gICAgICBhbnN3ZXI6IFwiVXN1YWxseSBpdCB0YWtlcyBiZXR3ZWVuIDMtMTAgZGF5cyBkZXBlbmRpbmcgb24gd2hlcmUgeW91IGFyZSBvcmRlcmluZyBmcm9tLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc2hvd0Fuc3dlcjogZmFsc2UsXG4gICAgICBxdWVzdGlvbjogXCJDYW4gaSBnZXQgYSByZWZ1bmQgYWZ0ZXIgYnV5aW5nIGZvciBzb21lIHJlYXNvbnM/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiSWYgdGhlcmUgaXMgYW55IGZhdWx0IGluIHRoZSBkZXZpY2Usd2hpY2ggaXMgdW5saWtlbHkgaW4gc3VjaCBjYXNlIHdlIG9mZmVyIDk1JSByZWZ1bmQgb24gZXZlcnkgcHJvZHVjdCwgeW91IGNhbiBlbWFpbCB1cyBpZiBzdWNoIHByb2JsZW0gb2NjdXJzLlwiLFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IHRvZ2dsZUFuc3dlciA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHFuYUNvcHkgPSBbLi4ucW5hXTtcbiAgICBxbmFDb3B5W2luZGV4XS5zaG93QW5zd2VyID0gIXFuYVtpbmRleF0uc2hvd0Fuc3dlcjtcbiAgICBzZXRRbmEocW5hQ29weSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5ob21lUGFnZX0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvU2VjdGlvbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e0hlcm9JbWFnZX0gYWx0PVwicHJvZHVjdF9pbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHU+T05FIExPQ0FUSU9OIEFMTCBTT0xVVElPTjwvdT5cbiAgICAgICAgICA8cD5HZXQgYWxsIHRoZSBsYXRlc3QgYW5kIGhvdHRlc3Qgc21hcnRwaG9uZXMgaW4gb25lIHBsYWNlLCBwaG9ueW94eC48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9leHBsb3JlXCIpfT5TaG9wIE5vdzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaG90dGVzdFNlY3Rpb259PlxuICAgICAgICA8dT5IT1QgUFJPRFVDVFM8L3U+XG5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZUluZGV4KChwcmV2KSA9PiBwcmV2IC0gMSl9IGRpc2FibGVkPXtzbGlkZUluZGV4ID09PSAwfT5cbiAgICAgICAgICAgIDxNZENoZXZyb25MZWZ0IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge3NsaWNlZEhvdEl0ZW1zLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5wcm9kdWN0X2ltYWdlX3VybH0gYWx0PVwiaXRlbV9pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QucHJvZHVjdF9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3Byb2R1Y3QucHJvZHVjdF9wcmljZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNsaWRlSW5kZXgoKHByZXYpID0+IHByZXYgKyAxKX0gZGlzYWJsZWQ9e3NsaWRlSW5kZXggPT09IDd9PlxuICAgICAgICAgICAgPE1kQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWR2YW50YWdlU2VjdGlvbn0+XG4gICAgICAgIDx1PldIWSBDSE9PU0UgVVM/PC91PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPEJpRG9sbGFyIC8+XG4gICAgICAgICAgICA8cD5GcmVlIGRlbGl2ZXJ5IGFyb3VuZCB0aGUgZ2xvYmU8L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8UmlEcm9wTGluZSAvPlxuICAgICAgICAgICAgPHA+T25lIHllYXIgd2FycmFudHkgb24gZXZlcnkgcHJvZHVjdDwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxBaU91dGxpbmVDdXN0b21lclNlcnZpY2UgLz5cbiAgICAgICAgICAgIDxwPjI0eDcgZmFzdCBjdXN0b21lciBzdXBwb3J0PC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uU2VjdGlvbn0+XG4gICAgICAgIDx1PlNPTUUgQ09NTU9OIFFVRVNUSU9OUzwvdT5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtxbmEubWFwKChxbmEsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUFuc3dlcihpKX0+XG4gICAgICAgICAgICAgICAgICA8cD57cW5hLnF1ZXN0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIHtxbmEuc2hvd0Fuc3dlciA/IDxBaU91dGxpbmVNaW51cyAvPiA6IDxHckFkZCAvPn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHtxbmEuc2hvd0Fuc3dlciA/IDxwPntxbmEuYW5zd2VyfTwvcD4gOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxwPnBob255b3h4IDIwMjEgQWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuLy9odHRwczovL2JpdC5seS8zd0Y3MFdTXG5cbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vcGhvbnlveHguaGVyb2t1YXBwLmNvbS9wcm9kdWN0L2ZldGNoQWxsXCIpO1xuICByZXR1cm4geyBob3R0ZXN0UHJvZHVjdHM6IGRhdGEuZGF0YSB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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