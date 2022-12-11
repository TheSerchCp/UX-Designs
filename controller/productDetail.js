console.log("Hola desde productDetailController")
var app = angular.module("ux",['ngRoute']);

app.controller("productDetailController", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.product = {
            title: "JAVA",
            img: "/components/img/productDetail/java.jpg",
            description: "Aprende lo basico para programar en Java.",
            prize: "$258.22",
            dsp: "250",
            detail: {
                1: "Orientado a objetos",
                2: "Ciclos",
                3: "Usa base de datos",
                4: "Aplicaciones cliente-servidor"
            }
        };
    $scope.otherProducts = 
    [
        {
            img: "/components/img/productDetail/excel.jpg",
            title: "Curso Excel completo",
            prize: "$5",
        },
        {
            img: "/components/img/productDetail/powerpoint.jpg",
            title: "Curso Power Point completo",
            prize: "$15",
        },
        {
            img: "/components/img/productDetail/word.jpg",
            title: "Curso Word completo",
            prize: "$15",
        },
        {
            img: "/components/img/productDetail/mysql.jpg",
            title: "Base de datos MySQL",
            prize: "$20",
        },
        {
            img: "/components/img/productDetail/blender.png",
            title: "Diseña y anima con blender",
            prize: "$9.99",
        },
    ]
    console.log($scope.otherProducts)
}]);