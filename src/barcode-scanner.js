'use strict';

import BarcodeScannerDirective from './barcode-scanner-directive';

let barcodeScanner = angular.module('barcodeScanner', []);

barcodeScanner.directive('barcodeScanner', BarcodeScannerDirective.directiveFactory);

export default barcodeScanner;