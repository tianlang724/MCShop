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

	__webpack_require__(11)
	var __weex_template__ = __webpack_require__(12)
	var __weex_style__ = __webpack_require__(13)
	var __weex_script__ = __webpack_require__(14)

	__weex_define__('@weex-component/a5495317100cdca978bedd67314b5559', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/a5495317100cdca978bedd67314b5559',undefined,undefined)

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
	        "click": "clickItem",
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
	        "click": "clickItem",
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
	        "click": "clickItem",
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
	        "click": "clickItem",
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
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "pics": {
	    "width": 150,
	    "height": 150
	  },
	  "name": {
	    "fontSize": 20,
	    "textAlign": "center",
	    "flex": 1
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
	    clickItem: function clickItem(e) {
	      var ele = e.target.attr;
	      modal.toast({ 'message': ele, 'duration': 1 });

	      var params = {
	        'url': this.baseURL + 'mc-formula.js',
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {});
	    },
	    longpress: function longpress(e) {
	      modal.toast({ 'message': "longpress", 'duration': 1 });
	      modal.confirm({
	        message: "hello",
	        okTitle: "hello",
	        cancelTitle: "no"
	      }, function (result) {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/mc-block', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "classList": [
	    "itemList"
	  ],
	  "children": [
	    {
	      "type": "mc-block",
	      "repeat": function () {return this.list},
	      "attr": {
	        "id1": function () {return this.id1},
	        "name1": function () {return this.name1},
	        "icon_dir1": function () {return this.icon_dir1},
	        "id2": function () {return this.id2},
	        "name2": function () {return this.name2},
	        "icon_dir2": function () {return this.icon_dir2},
	        "id3": function () {return this.id3},
	        "name3": function () {return this.name3},
	        "icon_dir3": function () {return this.icon_dir3},
	        "id4": function () {return this.id4},
	        "name4": function () {return this.name4},
	        "icon_dir4": function () {return this.icon_dir4}
	      }
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    list: []
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)
	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/mc-block-list', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "upper"
	      ],
	      "children": [
	        {
	          "type": "input",
	          "classList": [
	            "searchBar"
	          ],
	          "id": "searchBar",
	          "attr": {
	            "type": "text",
	            "autofocus": "true",
	            "placeholder": "橡木木板"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "but"
	          ],
	          "events": {
	            "click": "onclicksearch"
	          },
	          "attr": {
	            "value": "search"
	          }
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "classList": [
	        "lower"
	      ],
	      "id": "lower",
	      "children": [
	        {
	          "type": "mc-block-list",
	          "attr": {
	            "list": function () {return this.list}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "searchBar": {
	    "flex": 2
	  },
	  "upper": {
	    "flexDirection": "row",
	    "flex": 1
	  },
	  "but": {
	    "backgroundColor": "#FF0000",
	    "flex": 1
	  },
	  "lower": {
	    "flex": 10
	  },
	  "wrapper": {}
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var sqliteModules = __weex_require__('@weex-module/sqlitemodule');
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	  data: function () {return {
	    list: []
	  }},
	  created: function created() {
	    var self = this;
	    sqliteModules.getAllEntriesFromTableItems(function (list) {
	      for (var i = 0; i < list.length;) {
	        var item = new Object();
	        item.id1 = list[i].id;
	        item.name1 = list[i].name;
	        item.icon_dir1 = list[i].icon_dir;
	        i++;
	        if (i >= list.length) {
	          self.list.push(item);
	          continue;
	        };
	        item.id2 = list[i].id;
	        item.name2 = list[i].name;
	        item.icon_dir2 = list[i].icon_dir;
	        i++;
	        if (i >= list.length) {
	          self.list.push(item);
	          continue;
	        };
	        item.id3 = list[i].id;
	        item.name3 = list[i].name;
	        item.icon_dir3 = list[i].icon_dir;
	        i++;
	        if (i >= list.length) {
	          self.list.push(item);
	          continue;
	        };
	        item.id4 = list[i].id;
	        item.name4 = list[i].name;
	        item.icon_dir4 = list[i].icon_dir;
	        self.list.push(item);
	        i++;
	      }
	    });
	    this.$on("pressingId", function (e) {
	      sqliteModules.logToast(e.detail);
	    });
	  },
	  methods: {
	    onclicksearch: function onclicksearch(e) {
	      var params = {
	        'url': "file://assets/weex/mc-np.js",
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);