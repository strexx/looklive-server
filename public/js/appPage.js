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
