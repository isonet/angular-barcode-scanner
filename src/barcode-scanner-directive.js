'use strict';

class BarcodeScannerDirective {
    constructor($window) {

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
                    BarcodeScannerDirective.buffer += String.fromCharCode(keycode);
                } else if (keycode === separatorChar) {
                    if (this.buffer.length > 0) {
                        scope.scanCallback(BarcodeScannerDirective.buffer);
                    }
                    BarcodeScannerDirective.buffer = '';
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
