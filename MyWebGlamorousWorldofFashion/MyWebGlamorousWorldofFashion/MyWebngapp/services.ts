namespace moviesApp.Services {

    class QuoteService(){ 
        let quotes: string[] = [
            'It is our choices, Harry, that show what we truly are, far more than our abilities.',
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

}
angular.module('moviesApp').service('quoteServices', QuoteService);
}    
         