
import BarcodeScannerDirective from './barcode-scanner.directive';

const barcodeScanner = angular.module('barcodeScanner', []);

barcodeScanner.directive('barcodeScanner', BarcodeScannerDirective);

export default barcodeScanner;
