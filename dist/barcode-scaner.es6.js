(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.barcode = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

class BarcodeScannerDirective {
    constructor($window) {

        // Private members
        this.buffer = '';

        // Injections
        BarcodeScannerDirective.window = $window;

        // Directive config
        this.restrict = 'AE';
        this.scope = {
            separatorChar: '=',
            triggerChar: '=',
            scanCallback: '=',
            triggerCallback: '='
        }
    }

    link(scope, element, attributes) {
        angular.element(BarcodeScannerDirective.window).on('keydown', (e) => {
            let keycode = e.keyCode || e.which;
            let triggerChar = parseInt(scope.triggerChar, 10);
            let separatorChar = parseInt(scope.separatorChar, 10);

            if(keycode === triggerChar) {
                scope.triggerCallback();
                e.preventDefault();
            } else {
                let valid = keycode >= 32 && keycode <= 255;
                if (valid === true && keycode !== separatorChar) {
                    this.buffer += e.key;
                } else if (keycode === separatorChar) {
                    if (this.buffer.length > 0) {
                        scope.scanCallback(this.buffer);
                    }
                    this.buffer = '';
                }
            }


        });
    }

    static directiveFactory($window){
        BarcodeScannerDirective.instance = new BarcodeScannerDirective($window);
        return BarcodeScannerDirective.instance;
    }
}

BarcodeScannerDirective.directiveFactory.$inject = ['$window'];

module.exports = BarcodeScannerDirective;

},{}],2:[function(require,module,exports){
'use strict';

let BarcodeScannerDirective = require('./barcode-scanner-directive');

let barcodeScanner = angular.module('barcodeScanner', []);

barcodeScanner.directive('barcodeScanner', BarcodeScannerDirective.directiveFactory);

module.exports = barcodeScanner;

},{"./barcode-scanner-directive":1}]},{},[2])(2)
});