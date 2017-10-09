angular.module('MenuModule').controller('MenuController', MenuController);
MenuController.$inject = ['$scope', 'MasterService'];

function MenuController($scope, MasterService) {
    $scope.items = [{
        color: "#a07467",
        icon: "bible.png",
        title: "Biblia",
        goto: "menu.biblia"
    }, {
        color: "#5AD863",
        icon: "conversation.png",
        title: "Foros",
        goto: "menu.foros"
    }, {
        color: "#F8E548",
        icon: "praying.png",
        title: "Mis Peticiones",
        goto: "menu.mispeticiones"
    }, {
        color: "#AD5CE9",
        icon: "churcing.png",
        title: "Mi Iglesia",
        goto: "menu.miiglesia"
    }, {
        color: "#3DBEC9",
        icon: "person.png",
        title: "Mi Perfil",
        goto: "menu.miperfil"
    }, {
        color: "#D86B67",
        icon: "acercade.png",
        title: "Acerca de",
        goto: "menu.acercade"
    }, {
        color: "#E47500",
        icon: "house.png",
        title: "Célula",
        goto: "menu.celula"
    }];
    $scope.idRol = 1;
    if ($scope.idRol == 1) {
        var miembros = {
            color: "#00c58f",
            icon: "lecture.png",
            title: "Miembros"
        };
        $scope.items.push(miembros);
    }
    $scope.logout = function() {
        MasterService.getState().go('login');
        MasterService.getTimeout()(function() {
            MasterService.getIonicHistory().clearCache();
        }, 200)
    }
    $scope.exitApp = function() {
        ionic.Platform.exitApp();
    };
    $scope.goTo = function(lugar) {
        console.log("-> " + lugar);
        var menu = "menu." + lugar
        MasterService.getState().go(menu);
    }
};