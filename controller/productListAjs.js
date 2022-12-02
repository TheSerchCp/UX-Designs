var app = angular.module("ux",['ngRoute']);

app.controller("landing", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    console.log("Hola")

$scope.url = window.location.href;

console.log($scope.url)
$scope.productList = {
    
}
}]);