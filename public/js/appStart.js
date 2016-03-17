'use strict';

// Add namespace

var APP = APP || {};

// Start app
APP.start = (function() {

    var init = function() {
        APP.routes.init();
        APP.serviceWorker.init();
    };

    return {
        init: init
    }

})();

// On page ready
document.addEventListener('DOMContentLoaded', function() {
    APP.start.init();
});