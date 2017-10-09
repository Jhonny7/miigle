angular.module('CelulaModule').controller('CelulaController', CelulaController);
CelulaController.$inject = ['$scope', 'MasterService'];

function CelulaController($scope, MasterService) {
    $scope.data = {};
    $scope.items = [{
        color: "#E47500",
        icon: "house.png",
        title: "Célula"
    }, {
        color: "#5AD863",
        icon: "conversation.png",
        title: "Foros"
    }, {
        color: "#F8E548",
        icon: "praying.png",
        title: "Mis Peticiones"
    }, {
        color: "#AD5CE9",
        icon: "churcing.png",
        title: "Mi Iglesia"
    }, {
        color: "#3DBEC9",
        icon: "person.png",
        title: "Mi Perfil"
    }, {
        color: "#D86B67",
        icon: "acercade.png",
        title: "Acerca de"
    }, {
        color: "#a07467",
        icon: "bible.png",
        title: "Biblia"
    }];
    $scope.data.nombre = "Juan";
    $scope.data.idRol = 1;
    //Verificar si es pastor//
    if ($scope.data.idRol == 1) {
        var miembros = {
            color: "#00c58f",
            icon: "lecture.png",
            title: "Miembros"
        };
        $scope.items.push(miembros);
    }
    $scope.data.nombreCelula = "#1";
};