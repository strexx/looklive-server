'use strict';

var ll = ll || {}; //Maakt de variable app als globaal object aan. En als er al een variabele app bestaat voegt hij de app var toe. Dit voorkomt conflicten met andere libary's.

ll.page = function () {

    function home() {
        ll.helper.data('/api/feed').then(function (response) {
            var target = ll.helper.one('#target');
            target.innerHTML = response;
        }).catch(function (e) {
            //log an error
            console.error(e);
        });
    };

    function appearance(uuid) {
        var url = 'api/appearance/' + uuid;

        ll.helper.data(url).then(function (response) {
            var target = ll.helper.one('#target');
            target.innerHTML = response;
            _toggle();
        }).catch(function (e) {
            //log an error
            console.error(e);
        });
    };

    function _toggle() {
        var uuid = ll.helper.one('.product').attributes['data-uuid'].value,
            productIndicator = ll.helper.all('.product-indicator');

        ll.helper.addClass('.product', 'product-active');
        ll.helper.addClass('.product-indicator[data-uuid=\'' + uuid + "']", 'product-indicator-active');

        for (var p = 0; p < productIndicator.length; p++) {
            productIndicator[p].addEventListener('click', function (e) {
                var id = e.currentTarget.attributes[2].nodeValue;
                ll.helper.removeClass('.product-indicator-active', 'product-indicator-active');
                e.currentTarget.classList.add('product-indicator-active');

                ll.helper.removeClass('.product.product-active', 'product-active');
                ll.helper.addClass(".product[data-uuid='" + id + "']", 'product-active');
            });
        };
    };

    return {
        home: home,
        appearance: appearance
    };
}();

//difine all routers in app
ll.routes = function () {
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
    function _ceckRoute() {
        //if the hash is undefined or a '' redirect to #/home
        if (location.hash === undefined || location.hash === '') {
            window.location = '#/';
        }
    };

    //run functions
    function init() {
        _createRoutes();
        _ceckRoute();
    }
    return {
        init: init
    };
}();

ll.init = function () {
    ll.routes.init();
};
document.addEventListener('DOMContentLoaded', function () {
    ll.init();
});

ll.helper = function () {
    function one(selector) {
        return document.querySelector(selector);
    };

    function all(selector) {
        return document.querySelectorAll(selector);
    };

    function addClass(element, className) {
        one(element).classList.add(className);
    };

    function removeClass(element, className) {
        one(element).classList.remove(className);
    };

    function data(url) {
        // return a Promise object
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            //open an get request
            request.open('GET', url, true);

            //if the request is done
            request.onload = function () {
                //ony if request is done
                if (request.status == 200) {
                    // send text form request
                    resolve(request.responseText);
                } else {
                    // reject the promise if there is a err
                    reject(new Error('request failed!'));
                }
            };
            //send the request
            request.send();
        });
    };
    return {
        one: one,
        all: all,
        addClass: addClass,
        removeClass: removeClass,
        data: data
    };
}();