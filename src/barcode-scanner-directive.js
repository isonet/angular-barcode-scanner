'use strict';

export default class BarcodeScannerDirective {
    constructor($window) {

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
        }
    }

    link(scope, element, attributes) {
        angular.element(this.window).on('keydown', (e) => {
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