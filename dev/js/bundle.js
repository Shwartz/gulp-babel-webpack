/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Message = __webpack_require__(1);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var message = new _Message2.default('Default text');
	var num = 10;
	
	console.log('ahoi: ', num);
	
	new Promise(function (resolve, reject) {
		setTimeout(resolve, 2000);
	}).then(function () {
		console.log('Yay it works!');
	});
	
	message.say('Override default text');
	//debugger;
	function foo() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$bar = _ref.bar,
		    bar = _ref$bar === undefined ? 'no' : _ref$bar,
		    _ref$baz = _ref.baz,
		    baz = _ref$baz === undefined ? 'works!' : _ref$baz;
	
		return bar + ', ' + baz;
	}
	
	console.log(foo({
		bar: 'yay 1'
	})); // logs 'yay, works!'

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Message = function () {
		function Message(text) {
			_classCallCheck(this, Message);
	
			this.text = text || 'Very Default Text';
		}
	
		_createClass(Message, [{
			key: 'say',
			value: function say(text) {
				console.log('MESSAGE MODULE - Your message: ', text || this.text);
				return 'this is message';
			}
		}]);
	
		return Message;
	}();
	
	exports.default = Message;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map