namespace EventApp.Controllers {
    class FavoriteController {
        
        public selectedColor: string;
        pick(color: string) {
            this.selectedColor = color;
        }
    }
    angular.module('EventsApp').controller('FavoriteColorController', FavoriteController);
}