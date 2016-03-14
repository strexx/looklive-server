'use strict';

// Add namespace

var APP = APP || {};
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
(function () {
    'use strict';

    /**
     * Invoked when the page is ready.
     *
     * @param  {Function} fn
     * @return {void}
     */
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    /**
     * Set the classes on the appearence page.
     *
     * @return {void}
     */
    function appearance() {
        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product-active')
                    .classList.remove('product-active');

                document
                    .querySelector('.product-indicator-active')
                    .classList.remove('product-indicator-active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product-active');

                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    }

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });
}());


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
// Page

APP.render = (function() {

    var home = function() {

        APP.get.data('/api/feed')
            .then(response => {
                var target = document.getElementById("target");
                target.innerHTML = response;
            })
            .catch(e => {
                console.error(e);
            });
    };

    var appearance = function(uuid) {

        var url = 'api/appearance/' + uuid;

        APP.get.data(url)
            .then(response => {
                var target = document.getElementById("target");
                target.innerHTML = response;
                toggle();
            })
            .catch(e => {
                console.error(e);
            });
    };

    var toggle = function(data) {

        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function(el) {
            el.addEventListener('click', function(event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product-active')
                    .classList.remove('product-active');

                document
                    .querySelector('.product-indicator-active')
                    .classList.remove('product-indicator-active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product-active');

                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    };

    return {
        home: home,
        appearance: appearance
    }

})();

APP.get = (function() {

    function data(url) {
        // return a Promise object
        return new Promise((resolve, reject) => {
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
        data: data
    }

})();