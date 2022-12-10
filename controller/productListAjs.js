var app = angular.module("ux",['ngRoute']);

app.controller("productList", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    console.log("Hola")

$scope.url = window.location.href;

console.log($scope.url)

$scope.listCard = [
    {title: "Microsoft Word",img: "/components/img/landing/OfficeWord.jpeg",description:"Aprende a mejorar el diseño y orden tus documentos."},
    {title: "Adobe Photoshop",img: "/components/img/landing/Photoshop.jpg",description:"Dale un mejor toque a cada una de las imagenes que desees."},
    {title: "Arduino",img: "/components/img/landing/arduino.jpg",description:"Aprende desde lo básico para automatizar diversas tareas."},
    {title: "Blender",img: "/components/img/landing/Blender.jpg",description:"Aprende a modelar tus ideas en 3D."},
    {title: "CSS",img: "/components/img/landing/CSS.png",description:"Mejora los diseños de tus paginas con este lenguaje de estilos."},
    {title: "MySQL",img: "/components/img/landing/mysql.jpg",description:"Deseas guardar informacion de tu app con mysql lo puedes hacer."}
]
}]);
console.log($scope)