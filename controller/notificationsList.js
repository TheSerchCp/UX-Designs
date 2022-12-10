console.log("Hola desde notificationController")
var app = angular.module("ux",['ngRoute']);

app.controller("notificationController", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.listCard = [
        {title: "WordPress",
            img: "/components/img/notifications/wordpress.png",
            description:"WordPress es un sistema de gestión de contenidos enfocado a la creación de cualquier tipo de página web."},
        {title: "Bear",img: "/components/img/notifications/bear.jpg",description:"Compañia dedicada a la creacion de elementos digitales para compañias de marketing."},
        {title: "City Cosplay",img: "/components/img/notifications/city.jpg",description:"Empresa dedicada a la importacion y creacion de disfraces para todo tipo de publico."},
        {title: "BBVA",img: "/components/img/notifications/bbva.png",description:"Institución de Banca Múltiple, Grupo Financiero BBVA México, referida simplemente como BBVA, es una institución financiera mexicana."}
    ];
    $scope.deleteList = function() {
        $scope.data = $scope.data || [{}]
        $scope.listCard.push($scope.data)
        console.log("jejeje")
    };
    $scope.remove=function($index){ 
        $scope.bdays.splice($index,1);     
      }
    console.log($scope.listCard)
}]);