APP.routes = (function() {

    var checkRoute = function() {
        if (location.hash === undefined || location.hash === '') {
            window.location = '#/';
        }
    };

    var route = function() {
        routie({
            '/': function() {
                APP.render.home();
            },
            '/appearance/:uuid': APP.render.appearance
        });
    };

    var init = function() {
        checkRoute();
        route();
    };

    return {
        init: init
    }

})();