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
        link: (scope, element) => {
            let buffer = '';
            const handler = (e) => {
                const keycode = e.keyCode || e.which;
                const triggerChar = parseInt(scope.triggerChar, 10);
                const separatorChar = parseInt(scope.separatorChar, 10);

                if (keycode === triggerChar) {
                    scope.triggerCallback();
                    e.preventDefault();
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
            };
            angular.element($window).on('keydown', handler);
            element.on('$destroy', () => {
                angular.element($window).off('keydown', handler);
            });
        }
    }
}
