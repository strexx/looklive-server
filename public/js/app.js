var helper = (function () {
    function one(selector) {
        return document.querySelector(selector);
    };

    function all(selector) {
        return document.querySelectorAll(selector);
    };

    function addClass(element, className) {
        one(element).classList.add(className);
    }

    function removeClass(element, className) {
        one(element).classList.remove(className);
    }
    return {
        one: one,
        all: all,
        addClass: addClass,
        removeClass: removeClass
    };
})();


document.addEventListener('DOMContentLoaded', function () {
    var uuid = helper.one('.product').attributes['data-uuid'].value,
        productIndicator = helper.all('.product-indicator');

    helper.addClass('.product', 'product-active');
    helper.addClass('.product-indicator[data-uuid=\'' + uuid + "']", 'product-indicator-active');

    for (var p = 0; p < productIndicator.length; p++) {
        productIndicator[p].addEventListener('click', function (e) {
            var id = e.currentTarget.attributes[2].nodeValue;
            helper.removeClass('.product-indicator-active', 'product-indicator-active');
            e.currentTarget.classList.add('product-indicator-active');

            helper.removeClass('.product.product-active', 'product-active');
            helper.addClass(".product[data-uuid='" + id + "']", 'product-active');
        });
    }
}, false);
