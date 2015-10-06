var EventApp;
(function (EventApp) {
    var Controllers;
    (function (Controllers) {
        var FavoriteController = (function () {
            function FavoriteController() {
            }
            FavoriteController.prototype.pick = function (color) {
                this.selectedColor = color;
            };
            return FavoriteController;
        })();
        angular.module('EventsApp').controller('FavoriteColorController', FavoriteController);
    })(Controllers = EventApp.Controllers || (EventApp.Controllers = {}));
})(EventApp || (EventApp = {}));
