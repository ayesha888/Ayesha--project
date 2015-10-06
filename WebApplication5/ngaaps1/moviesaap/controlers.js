/*namespace Myapp.controllers {
    class MoviesController {
                                                                                                              
        movies: any[];

        constructor() {
            this.movies = [
                { title: 'star wars' },
                {title: 'raiders of the lost Ark' },
                { title: 'king kong' },
            ];
        }

    }

    angular.module('MoviesApp').controller('MoviesController', MoviesController);

};*/
var Myapp;
(function (Myapp) {
    var controllers;
    (function (controllers) {
        var MoviesController = (function () {
            function MoviesController() {
                this.pets = [
                    {
                        type: 'cat', animals: [
                            { name: 'kitty', src: 'http://orig11.deviantart.net/3f72/f/2013/077/4/5/tom_and_jerry_by_mollyketty-d5yh71o.png' },
                            { name: 'taddy', src: 'https://s-media-cache-ak0.pinimg.com/236x/75/22/17/752217532e4d3f9ae98ce5750d600e3f.jpg' }
                        ]
                    },
                    {
                        type: 'birds', animals: [
                            { name: 'tweety', src: 'http://coolspotters.com/files/photos/627338/tweety-bird-profile.gif' },
                            { name: 'donald duck', src: 'http://www.spwallpapers.com/var/resizes/480x720/Mickey%20Mouse%20and%20Donald%20Duck%20cartoon%20wallpaper%20480x720/Mickey%20Mouse%20and%20Donald%20Duck%20cartoon%20wallpaper%20480x720%20%2822%29.jpg?m=1343459991' }
                        ]
                    }];
            }
            return MoviesController;
        })();
        angular.module('MoviesApp').controller('MoviesController', MoviesController);
    })(controllers = Myapp.controllers || (Myapp.controllers = {}));
})(Myapp || (Myapp = {}));
