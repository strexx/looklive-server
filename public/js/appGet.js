APP.get = (function() {    

    function customFonts() {
        var observer = new FontFaceObserver('Raleway');

        observer.check().then(function () {
          document.body.className += "fonts-loaded";
        });
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
        data: data,
        customFonts: customFonts
    }

})();