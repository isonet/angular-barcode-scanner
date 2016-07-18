(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("barcode-scanner", [], factory);
	else if(typeof exports === 'object')
		exports["barcode-scanner"] = factory();
	else
		root["barcode-scanner"] = factory();
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
	
	var _barcodeScannerDirective = __webpack_require__(1);
	
	var _barcodeScannerDirective2 = _interopRequireDefault(_barcodeScannerDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var barcodeScanner = angular.module('barcodeScanner', []);
	
	barcodeScanner.directive('barcodeScanner', _barcodeScannerDirective2.default.directiveFactory);
	
	exports.default = barcodeScanner;
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
	
	var BarcodeScannerDirective = function () {
	    function BarcodeScannerDirective($window) {
	        _classCallCheck(this, BarcodeScannerDirective);
	
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
	
	    _createClass(BarcodeScannerDirective, [{
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
	                    var valid = keycode >= 32 && keycode <= 255;
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
	            BarcodeScannerDirective.instance = new BarcodeScannerDirective($window);
	            return BarcodeScannerDirective.instance;
	        }
	    }]);
	
	    return BarcodeScannerDirective;
	}();
	
	exports.default = BarcodeScannerDirective;
	
	
	BarcodeScannerDirective.directiveFactory.$inject = ['$window'];
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=barcode-scanner.js.map