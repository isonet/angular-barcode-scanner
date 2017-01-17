export default ($window) => {
    'ngInject';

    return {
        restrict: 'AE',
        scope: {
            separatorChar: '=',
            triggerChar: '=',
            scanCallback: '=',
            triggerCallback: '='
        },
        link: (scope) => {
            let buffer = '';
            angular.element($window).on('keypress', (e) => {
                const keycode = e.keyCode ? e.keyCode : e.which;
                const triggerChar = parseInt(scope.triggerChar, 10);
                const separatorChar = parseInt(scope.separatorChar, 10);

                if (keycode === triggerChar) {
                    if (typeof scope.triggerCallback !== 'undefined') {
                        scope.triggerCallback();
                        e.preventDefault();
                    }
                } else {
                    const valid = keycode >= 32 && keycode <= 255;
                    if (valid === true && keycode !== separatorChar) {
                        buffer += String.fromCharCode(keycode);
                    } else if (keycode === separatorChar) {
                        if (buffer.length > 0) {
                            scope.scanCallback(buffer);
                        }
                        buffer = '';
                    }
                }
            });
        }
    }
}
