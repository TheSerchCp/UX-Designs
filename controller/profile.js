console.log("Hola desde profileController")
var app = angular.module("ux",['ngRoute']);

app.controller("profileController", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.dataProfile = {
            name: "Sergio Cortes Popoca",
            img: "/components/img/profile/sergio.jpg",
            email: "20203TN125@utez.edu.mx",
            cellphone: "777-963-24-36",
            password: "qwerty126",
            direction: "Hortaliza 23, Prolongación Limones 3, entre Jumiles y Portisa"
        };

    $scope.methodPay = [
        {
            serie: "1596-7822-3268-7456",
            caducity: "07/26",
            name: "Sergio Cortes",
            service: "Banamex",
        },
        {
            serie: "7895-1265-9468-1238",
            caducity: "03/25",
            name: "Sergio Cortes",
            service: "Banco Azteca",
        },
        {
            serie: "1528-4539-3258-7468",
            caducity: "10/27",
            name: "Sergio Cortes",
            service: "Bancomer",
        }
    ]
}]);