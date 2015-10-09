let;
app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http) {
    $http.gey("")
        .success(function (response) { $scope.names = response; });
});
/Script>;
