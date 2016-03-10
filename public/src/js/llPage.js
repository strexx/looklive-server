var ll = ll || {}; //Maakt de variable app als globaal object aan. En als er al een variabele app bestaat voegt hij de app var toe. Dit voorkomt conflicten met andere libary's.

ll.page = (function () {
    function home() {
        ll.helper.data('/api/feed')
            .then(response => {
             var target = ll.helper.one('#target')
                target.innerHTML = response;
            }).catch(e => {
                //log an error
                console.error(e);
            });
    };

    function appearance(uuid) {
        var url = 'api/appearance/' + uuid;

        ll.helper.data(url)
            .then(response => {
             var target = ll.helper.one('#target')
                target.innerHTML = response;
                _toggle();
            }).catch(e => {
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
})();
