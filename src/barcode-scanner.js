'use strict';

let BarcodeScannerDirective = require('./barcode-scanner-directive');

let barcodeScanner = angular.module('barcodeScanner', []);

barcodeScanner.directive('barcodeScanner', BarcodeScannerDirective.directiveFactory);

module.exports = barcodeScanner;
