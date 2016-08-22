(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BarcodeScannerDirective = function () {
    function BarcodeScannerDirective($window) {
        _classCallCheck(this, BarcodeScannerDirective);

        // Private members
        BarcodeScannerDirective.buffer = '';

        // Injections
        BarcodeScannerDirective.window = $window;

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

            angular.element(BarcodeScannerDirective.window).on('keydown', function (e) {
                var keycode = e.keyCode || e.which;
                var triggerChar = parseInt(scope.triggerChar, 10);
                var separatorChar = parseInt(scope.separatorChar, 10);

                if (keycode === triggerChar) {
                    scope.triggerCallback();
                    e.preventDefault();
                } else {
                    var valid = keycode >= 32 && keycode <= 255;
                    if (valid === true && keycode !== separatorChar) {
                        BarcodeScannerDirective.buffer += String.fromCharCode(keycode);
                    } else if (keycode === separatorChar) {
                        if (_this.buffer.length > 0) {
                            scope.scanCallback(BarcodeScannerDirective.buffer);
                        }
                        BarcodeScannerDirective.buffer = '';
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

BarcodeScannerDirective.directiveFactory.$inject = ['$window'];

module.exports = BarcodeScannerDirective;

},{}],2:[function(require,module,exports){
'use strict';

var BarcodeScannerDirective = require('./barcode-scanner-directive');

var barcodeScanner = angular.module('barcodeScanner', []);

barcodeScanner.directive('barcodeScanner', BarcodeScannerDirective.directiveFactory);

module.exports = barcodeScanner;

},{"./barcode-scanner-directive":1}]},{},[2]);
