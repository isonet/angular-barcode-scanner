'use strict';

import BarcodeReaderDirective from './barcode-reader-directive';

let barcodeReader = angular.module('barcodeReader', []);

console.info('Barcode Reader loading');

barcodeReader.directive('barcodeReader', BarcodeReaderDirective.directiveFactory);



export default barcodeReader;