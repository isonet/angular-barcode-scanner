'use strict';

import BarcodeReaderDirective from './barcode-reader-directive';

let barcodeReader = angular.module('barcodeReader', []);

barcodeReader.directive('barcodeReader', BarcodeReaderDirective.directiveFactory);

export default barcodeReader;