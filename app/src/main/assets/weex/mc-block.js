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

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/d1dc97e196c2c6ec7c32399fe3890e0a', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/d1dc97e196c2c6ec7c32399fe3890e0a',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "classList": [
	    "bundleRow"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "bundle"
	      ],
	      "id": function () {return this.id1},
	      "events": {
	        "click": "clickItem1",
	        "longpress": "longpress"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.icon_dir1}
	          },
	          "classList": [
	            "pics"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "name"
	          ],
	          "attr": {
	            "value": function () {return this.name1}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "bundle"
	      ],
	      "id": function () {return this.id2},
	      "events": {
	        "click": "clickItem2",
	        "longpress": "longpress"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.icon_dir2}
	          },
	          "classList": [
	            "pics"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "name"
	          ],
	          "attr": {
	            "value": function () {return this.name2}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "bundle"
	      ],
	      "id": function () {return this.id3},
	      "events": {
	        "click": "clickItem3",
	        "longpress": "longpress"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.icon_dir3}
	          },
	          "classList": [
	            "pics"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "name"
	          ],
	          "attr": {
	            "value": function () {return this.name3}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "bundle"
	      ],
	      "id": function () {return this.id4},
	      "events": {
	        "click": "clickItem4",
	        "longpress": "longpress"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.icon_dir4}
	          },
	          "classList": [
	            "pics"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "name"
	          ],
	          "attr": {
	            "value": function () {return this.name4}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "bundleRow": {
	    "flexDirection": "row"
	  },
	  "pics": {
	    "width": 150,
	    "height": 150
	  },
	  "name": {
	    "fontSize": 20,
	    "textAlign": "center"
	  },
	  "bundle": {
	    "marginTop": 10,
	    "marginRight": 10,
	    "marginBottom": 10,
	    "marginLeft": 10,
	    "width": 150,
	    "height": 200
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var modal = __weex_require__('@weex-module/modal');
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	  data: function () {return {
	    id1: null,
	    name1: null,
	    icon_dir1: null,
	    id2: null,
	    name2: null,
	    icon_dir2: null,
	    id3: null,
	    name3: null,
	    icon_dir3: null,
	    id4: null,
	    name4: null,
	    icon_dir4: null,
	    baseURL: ""
	  }},
	  created: function created() {
	    this.baseURL = 'file://assets/weex/';
	  },
	  methods: {
	    clickItem1: function clickItem1() {
	      this.$dispatch("pressingId", this.id1);
	    },
	    clickItem2: function clickItem2() {
	      this.$dispatch("pressingId", this.id2);
	    },
	    clickItem3: function clickItem3() {
	      this.$dispatch("pressingId", this.id3);
	    },
	    clickItem4: function clickItem4() {
	      this.$dispatch("pressingId", this.id4);
	    },
	    longpress: function longpress(e) {
	      modal.toast({ 'message': "longpress", 'duration': 1 });
	      var params = {
	        'url': this.baseURL + 'npage.js',
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);