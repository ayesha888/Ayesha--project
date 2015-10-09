var MoviesApp;
(function (MoviesApp) {
    var Controllers;
    (function (Controllers) {
        var moviesListContriller = (function () {
            function moviesListContriller(productService, movieServiceUrl) {
                var MovieResource = $resource(movieServiceUrl);
                this.movies = MovieResource.query();
                this.taxAmount = productService.calculateTax(120000);
                this.randomMovies = productService.randomQuote();
            }
            return moviesListContriller;
        })();
        angular.module('MoviesApp').controller('MoviesListController', MoviesListController);
        var MoviesAddController = (function () {
            function MoviesAddController($resource, $location, movieServiceUrl) {
                this.$resource = $resource;
                this.$location = $location;
                this.MovieResource = $resource(movieServiceUrl);
            }
            MoviesAddController.prototype.addMovie = function () {
                var _this = this;
                this.MovieResource.save(this.movieToCreate).$promise.then(function () {
                    _this.$location.path('/');
                });
            };
            return MoviesAddController;
        })();
        angular.module('MoviesApp').controller('MoviesAddController', MoviesAddController);
        var MoviesDeleteController = (function () {
            function MoviesDeleteController($routeParams, $resource, $location, movieServiceUrl) {
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.MovieResource = $resource(movieServiceUrl);
                this.movieToDelete = this.MovieResource.get({
                    id: $routeParams['id']
                });
            }
            MoviesDeleteController.prototype.deleteMovie = function () {
                var _this = this;
                this.MovieResource.delete({ id: this.$routeParams['id'] }).$promise.then(function () {
                    _this.$location.path('/');
                });
            };
            return MoviesDeleteController;
        })();
        angular.module('MoviesApp').controller('MoviesDeleteController', MoviesDeleteController);
        var MoviesEditController = (function () {
            function MoviesEditController($routeParams, $resource, $location, movieServiceUrl) {
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.MovieResource = $resource(movieServiceUrl);
                this.movieToEdit = this.MovieResource.get({
                    id: $routeParams['id']
                });
            }
            MoviesEditController.prototype.editMovie = function () {
                var _this = this;
                this.MovieResource.save(this.movieToEdit).$promise.then(function () {
                    _this.$location.path('/');
                });
            };
            return MoviesEditController;
        })();
        angular.module('MoviesApp').controller('MoviesEditController', MoviesEditController);
        var AccountController = (function () {
            function AccountController(authenticateURL, $http, $window, $location) {
                this.authenticateURL = authenticateURL;
                this.$http = $http;
                this.$window = $window;
                this.$location = $location;
            }
            AccountController.prototype.login = function () {
                var _this = this;
                var data = "grant_type=password&username=" + this.username + "&password=" + this.password;
                this.$http.post(this.authenticateURL, data, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (result) {
                    _this.$window.sessionStorage.setItem('token', result.access_token);
                    _this.$location.path('/');
                }).error(function () {
                    _this.loginMessage = 'Invalid user name/password';
                });
            };
            AccountController.prototype.logout = function () {
                this.$window.sessionStorage.removeItem('token');
            };
            AccountController.prototype.isLoggedIn = function () {
                return this.$window.sessionStorage.getItem('token');
            };
            return AccountController;
        })();
        angular.module('MoviesApp').controller('AccountController', AccountController);
    })(Controllers = MoviesApp.Controllers || (MoviesApp.Controllers = {}));
})(MoviesApp || (MoviesApp = {}));
