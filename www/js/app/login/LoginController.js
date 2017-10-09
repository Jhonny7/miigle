angular.module('LoginModule').controller('LoginController', LoginController);
LoginController.$inject = ['$scope', 'MasterService'];

function LoginController($scope, MasterService) {
    $scope.data = {};
    $scope.registro = false;
    $scope.login = function() {
        console.log($scope.data.a);
        if (MasterService.getLoginService().loginUser($scope.data.a, $scope.data.password)) {
            MasterService.getState().go('menu.bienvenida', {}, {
                reload: true
            });
            MasterService.getIonicSideMenuDelegate().toggleLeft();
        } else {
            var alertPopup = MasterService.getIonicPopup().alert({
                title: 'Sin accesos! ',
                template: 'Favor de verificar credenciales!'
            });
        }
    }
    $scope.change = function(id) {
        var boton, botonId, i, tabcontent, tablinks;
        tablinks = document.getElementsByClassName("myTabs");
        if (id == '0') {
            console.log("login");
            tablinks[1].className = tablinks[1].className.replace(" active", "");
            tablinks[0].className = tablinks[0].className.replace("myTabs", "myTabs active");
            $scope.registro = false;
        } else {
            console.log("registro");
            tablinks[0].className = tablinks[0].className.replace(" active", "");
            tablinks[1].className = tablinks[1].className.replace("myTabs", "myTabs active");
            $scope.registro = true;
        }
    }
};