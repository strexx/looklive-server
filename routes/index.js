var express = require('express'),
    router = express.Router(),
    fs = require('fs');

router.get('/', function (req, res, next) {
    res.render('main', {
        title: 'feed'
    });
});

//router.get('/appearance/:uuid', function (req, res, next) {
//    fs.readFile('resources/appearance/' + req.params.uuid + '.json', 'utf8', function (err, data) {
//        if (err) {
//            res.status(404);
//            next();
//        }
//
//        var item = JSON.parse(data),
//            products = [];
//
//        item.product_occurrences.forEach(function (occurrence) {
//            var product = fs.readFileSync('resources/product/' + occurrence.product.id + '.json', 'utf8');
//            products.push(JSON.parse(product));
//        });
//
//        res.render('appearance', {
//            title: item.title,
//            item: item,
//            products: products
//        });
//    })
//});

module.exports = router;
