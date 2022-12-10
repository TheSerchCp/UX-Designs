var app = angular.module("ux",['ngRoute']);

app.controller("landing", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


// $scope.listCard = []
//  $scope.url = $location.absUrl();
// console.log($scope.url)

$scope.listCard = [
    {title: "Microsoft Word",img: "/components/img/landing/OfficeWord.jpeg",description:"Aprende a mejorar el diseño y orden tus documentos"},
    {title: "Adobe Photoshop",img: "/components/img/landing/Photoshop.jpg",description:"Dale un mejor toque a cada una de las imagenes que desees"},
    {title: "Arduino",img: "/components/img/landing/arduino.jpg",description:"Aprende desde lo básico para automatizar diversas tareas"},
    {title: "Blender",img: "/components/img/landing/Blender.jpg",description:"Modela tus ideas en 3D"},
    {title: "CSS",img: "/components/img/landing/CSS.png",description:"Mejora los diseños de tus paginas con este lenguaje de estilos"},
    {title: "MySQL",img: "/components/img/landing/mysql.jpg",description:"Deseas guardar informacion de tu app con mysql lo puedes hacer"},
    {title: "Microsoft Word",img: "/components/img/landing/OfficeWord.jpeg",description:"Aprende a mejorar el diseño y orden tus documentos"},
    {title: "Adobe Photoshop",img: "/components/img/landing/Photoshop.jpg",description:"Dale un mejor toque a cada una de las imagenes que desees"},
    {title: "Arduino",img: "/components/img/landing/arduino.jpg",description:"Aprende desde lo básico para automatizar diversas tareas"},
    {title: "Blender",img: "/components/img/landing/Blender.jpg",description:"Modela tus ideas en 3D"},
    {title: "CSS",img: "/components/img/landing/CSS.png",description:"Mejora los diseños de tus paginas con este lenguaje de estilos"},
    {title: "MySQL",img: "/components/img/landing/mysql.jpg",description:"Deseas guardar informacion de tu app con mysql lo puedes hacer"}
]
    console.log($scope.listCard)
///
    // $rootScope.errorhttp = function (data, status, headers, config) {
    //     switch (Number(status)) {
    //         case 401:
    //             SweetAlert.swal({
    //                 title: "Sesión expirada",
    //                 text: "Por tu seguridad tu sesión ha sido cerrada.",
    //                 type: "error",
    //                 timer: 5000,
    //                 allowEscapeKey: false,
    //                 showCancelButton: false,
    //                 showConfirmButton: false
    //             });
    //             setTimeout(function () {
    //                 window.location.replace("/SISAVA");
    //             }, 5000);
    //             break;
    //         case 403:
    //             SweetAlert.swal({
    //                 title: "Acceso denegado",
    //                 text: "Lamentablemente no cuentas con los permisos necesarios para realizar esta acción",
    //                 type: "error",
    //                 timer: 3000
    //             });
    //             break;
    //         case 500:
    //             SweetAlert.swal({
    //                 title: "Error interno",
    //                 text: "Un error interno ocurrió dentro del sistema",
    //                 type: "error",
    //                 timer: 3000
    //             });
    //             break;
    //         default:
    //             console.log("Ocurrió un problema.");
    //     }
    // };
}]);