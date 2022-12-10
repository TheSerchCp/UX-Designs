var app = angular.module("ux", ['ngRoute']);

app.controller("inbox", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


    // $scope.listCard = []
    // $scope.url = window.location.href;
    // console.log($scope.url)

    $scope.listCard = [
        { title: "Microsoft Word", img: "/components/assets/tag.png", description: "Aprende a mejorar el diseño y orden tus documentos" },

    ]

    $scope.avatars = [
        { title: "avatar", img: "/components/assets/4.jpg", name: "Jocelyn", mail: "Director HTTP" },
        { title: "avatar", img: "/components/assets/17.jpg", name: "Haylie", mail: "Panel convertible" },
        { title: "avatar", img: "/components/assets/46.jpg", name: "Lincoln Lubin", mail: "Exploit" },
        { title: "avatar", img: "/components/assets/58.jpg", name: "Emerson", mail: "Reporte Error HTTP" },
        { title: "avatar", img: "/components/assets/77.jpg", name: "Charile Culhane", mail: "Transmitiendo" },
        { title: "avatar", img: "/components/assets/87.jpg", name: "Charlie Siphron", mail: "Oferta negocio" },
       
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