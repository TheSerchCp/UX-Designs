var app = angular.module("ux",['ngRoute']);

app.controller("login", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    console.log("Hola")

$scope.url = window.location.href;

$scope.showSt1 = true;


$scope.step1 = () => {
    $scope.showSt1 = true;
    $scope.showSt2 = false;
    $scope.showSt3 = false;
    $('#step1').css({"background":"#00413B"});
    $('#step2').css({"background": "#266B66"});
    $('#step3').css({"background": "#266B66"});
}

$scope.step2 = () => {
        $scope.showSt1 = false;
        $scope.showSt2 = true;
        $scope.showSt3 = false;
        $('#step1').css({"background":"#266B66"});
        $('#step2').css({"background": "#00413B"});
}

$scope.step3 = () => {
        $scope.showSt1 = false;
        $scope.showSt2 = false;
        $scope.showSt3 = true;
        $('#step2').css({"background":"#266B66"});
        $('#step3').css({"background":"#00413B"});
}

}]);