var moviesApp;
(function (moviesApp) {
    var Services;
    (function (Services) {
        var QuoteService = (function () {
            function QuoteService() {
            }
            return QuoteService;
        })();
        (function () {
            var quotes = [
                'It is our choices, Harry, that show what we truly are, far more than our abilities.',
            ];
            return quotes[Math.floor(Math.random() * quotes.length)];
        });
    })(Services = moviesApp.Services || (moviesApp.Services = {}));
})(moviesApp || (moviesApp = {}));
angular.module('moviesApp').service('quoteServices', QuoteService);
