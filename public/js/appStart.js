// Start app
APP.start = (function() {

    var init = function() {
        APP.routes.init();
    };

    return {
        init: init
    }

})();

// On page ready
document.addEventListener('DOMContentLoaded', function() {
    APP.start.init();
});