console.log("Hola desde productDetailController")
var app = angular.module("ux",['ngRoute']);

app.controller("productDetailController", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.product = {
            title: "JAVA",
            img: "/components/img/profile/sergio.jpg",
            desciption: "2Aprende lo basico para programar en Java.",
            prize: "$258.22!",
            dsp: "250",
        };

    $scope.others = [
        {
            img: "1596-7822-3268-7456",
            title: "07/26",
            prize: "Sergio Cortes",
        },
        {
            img: "1596-7822-3268-7456",
            title: "07/26",
            prize: "Sergio Cortes",
        },
        {
            img: "1596-7822-3268-7456",
            title: "07/26",
            prize: "Sergio Cortes",
        },
        {
            img: "1596-7822-3268-7456",
            title: "07/26",
            prize: "Sergio Cortes",
        },
        {
            img: "1596-7822-3268-7456",
            title: "07/26",
            prize: "Sergio Cortes",
        },
        {
            img: "1596-7822-3268-7456",
            title: "07/26",
            prize: "Sergio Cortes",
        }, 
    ]
}]);