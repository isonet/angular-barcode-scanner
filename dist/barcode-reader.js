(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("barcode-reader", [], factory);
	else if(typeof exports === 'object')
		exports["barcode-reader"] = factory();
	else
		root["barcode-reader"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _barcodeReaderDirective = __webpack_require__(1);
	
	var _barcodeReaderDirective2 = _interopRequireDefault(_barcodeReaderDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var barcodeReader = angular.module('barcodeReader', []);
	
	barcodeReader.directive('barcodeReader', _barcodeReaderDirective2.default.directiveFactory);
	
	exports.default = barcodeReader;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BarcodeReaderDirective = function () {
	    function BarcodeReaderDirective($window) {
	        _classCallCheck(this, BarcodeReaderDirective);
	
	        // Private members
	        this.buffer = '';
	
	        // Injections
	        this.window = $window;
	
	        // Directive config
	        this.restrict = 'AE';
	        this.scope = {
	            separatorChar: '=',
	            triggerChar: '=',
	            scanCallback: '=',
	            triggerCallback: '='
	        };
	    }
	
	    _createClass(BarcodeReaderDirective, [{
	        key: 'link',
	        value: function link(scope, element, attributes) {
	            var _this = this;
	
	            angular.element(this.window).on('keydown', function (e) {
	                var keycode = e.keyCode || e.which;
	                var triggerChar = parseInt(scope.triggerChar, 10);
	                var separatorChar = parseInt(scope.separatorChar, 10);
	
	                if (keycode === triggerChar) {
	                    scope.triggerCallback();
	                    e.preventDefault();
	                } else {
	                    var valid = keycode >= 32 && keycode <= 127;
	                    if (valid === true && keycode !== separatorChar) {
	                        _this.buffer += e.key;
	                    } else if (keycode === separatorChar) {
	                        if (_this.buffer.length > 0) {
	                            scope.scanCallback(_this.buffer);
	                        }
	                        _this.buffer = '';
	                    }
	                }
	            });
	        }
	    }], [{
	        key: 'directiveFactory',
	        value: function directiveFactory($window) {
	            BarcodeReaderDirective.instance = new BarcodeReaderDirective($window);
	            return BarcodeReaderDirective.instance;
	        }
	    }]);
	
	    return BarcodeReaderDirective;
	}();
	
	exports.default = BarcodeReaderDirective;
	
	
	BarcodeReaderDirective.directiveFactory.$inject = ['$window'];
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=barcode-reader.js.map