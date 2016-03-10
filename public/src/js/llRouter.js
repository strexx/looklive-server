//difine all routers in app
ll.routes = (function () {
    //define routes from the app
    var _routes = {
        '/': ll.page.home,
        '/appearance/:uuid': ll.page.appearance
    };

    //make routes
    function _createRoutes() {
        var router = Router(_routes);
        router.init();
    };
    //check the current route
    function _checkRoute() {
        //if the hash is undefined or a '' redirect to #/home
        if (location.hash === undefined || location.hash === '') {
            window.location = '#/';
        }
    };

    //run functions
    function init() {
        _createRoutes();
        _checkRoute();
    }
    return {
        init: init
    };

})();
