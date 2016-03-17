APP.serviceWorker = (function() {

    function init() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js', {
                    scope: './'
                })
                .then(reg => console.info('Succes', reg))
                .catch(err => console.error('Error', err));
        } else {
            console.log('ServiceWorker is not supported in this browser');
        }
    };

    return {
        init: init
    }

})();