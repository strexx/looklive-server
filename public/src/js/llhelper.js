ll.helper = (function () {
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
        one: one,
        all: all,
        addClass: addClass,
        removeClass: removeClass,
        data: data
    };
})();
