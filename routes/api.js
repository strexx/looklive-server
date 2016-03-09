var fs = require('fs'),
    express = require('express'),
    router = express.Router();

router.get('/feed', function (req, res, next) {
    //    sendFile('feed.json', res);

    fs.readFile('resources/feed.json', 'utf8', function (err, data) {
        if (err) {
            res.status(404);
            next();
        }

        res.render('feed', {
            title: 'Feed',
            items: JSON.parse(data),
            layout: false
        });

    })
});

router.get('/appearance/:uuid', function (req, res, next) {
    //    sendFile('appearance/' + req.params.uuid + '.json', res);
    fs.readFile('resources/appearance/' + req.params.uuid + '.json', 'utf8', function (err, data) {
        if (err) {
            res.status(404);
            next();
        }

        var item = JSON.parse(data),
            products = [];

        item.product_occurrences.forEach(function (occurrence) {
            var product = fs.readFileSync('resources/product/' + occurrence.product.id + '.json', 'utf8');
            products.push(JSON.parse(product));
        });

        res.render('appearance', {
            title: item.title,
            item: item,
            products: products,
            layout: false
        });
    })
});

router.get('/product/:uuid', function (req, res, next) {
    sendFile('product/' + req.params.uuid + '.json', res);
});

// Reads and sends file contents
function sendFile(filename, res) {
    res.type('json');
    var file = fs.readFile('resources/' + filename, 'utf8', function (err, data) {
        if (err) {
            res.status(404);
            res.json({
                'status': 404,
                'message': 'resource with name: ' + filename + ' not found'
            });
        } else {
            res.send(data);
        }
    });
};

module.exports = router;
