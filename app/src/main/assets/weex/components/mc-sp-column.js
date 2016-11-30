/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(8)
	var __weex_style__ = __webpack_require__(9)
	var __weex_script__ = __webpack_require__(10)

	__weex_define__('@weex-component/a027d05e6e5df86a546cde9403ffe763', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/a027d05e6e5df86a546cde9403ffe763',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "bundle"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "id": function () {return this.id},
	      "events": {
	        "click": "clickitem",
	        "longpress": "longpress"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.icon_dir}
	          },
	          "classList": [
	            "pic"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "name"
	          ],
	          "attr": {
	            "value": function () {return this.name}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "number"
	          ],
	          "attr": {
	            "value": function () {return this.item_num}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "pic": {
	    "width": 150,
	    "height": 150
	  },
	  "name": {
	    "fontSize": 20,
	    "textAlign": "center",
	    "flex": 1
	  },
	  "item": {
	    "marginTop": 10,
	    "marginRight": 10,
	    "marginBottom": 10,
	    "marginLeft": 10,
	    "width": 150,
	    "height": 200,
	    "flex": 1
	  },
	  "number": {
	    "fontSize": 40,
	    "flex": 1
	  },
	  "bundle": {
	    "flexDirection": "row",
	    "width": 200,
	    "height": 250
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var sqliteModules = __weex_require__('@weex-module/sqlitemodule');
	var modal = __weex_require__('@weex-module/modal');
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	  data: function () {return {
	    item: null,
	    name: null,
	    id: null,
	    icon_dir: null,
	    item_num: 0
	  }},
	  created: function created() {
	    this.baseURL = 'file://assets/weex/pages/';
	    var item = new Object();
	    item.name = this.name;
	    item.id = this.id;
	    item.icon_dir = this.icon_dir;
	    this.item = item;
	  },
	  methods: {
	    clickitem: function clickitem(e) {
	      var params = {
	        'url': this.baseURL + 'mc-formula.js',
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {});
	    },
	    longpress: function longpress(e) {}
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);