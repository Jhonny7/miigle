angular.module('CapituloModule').controller('CapituloController', CapituloController);
CapituloController.$inject = ['$scope', 'MasterService'];

function CapituloController($scope, MasterService) {
    $scope.data = {};
    $scope.book = MasterService.getGenericObject().book;
    $scope.capitulos = MasterService.getGenericObject().capitulos;
    $scope.searchByCap = function(cap) {
        try {
            var objectArray = {};
            objectArray.book = $scope.book;
            MasterService.getDaoService().getAllByTableAndConditions("versiculos", "id_book = (?) AND capitulo = (?)", [objectArray.book.id, cap.capitulo]).then(function(r) {
                $scope.verisculos = MasterService.getDaoService().getListTable(r);
                if ($scope.verisculos.length > 0) {
                    objectArray.verisculos = $scope.verisculos;
                    MasterService.setGenericObject(objectArray);
                    MasterService.getState().go('menu.versiculo');
                } else {
                    console.log('Sin capítulos');
                }
            });
        } catch (err) {
            console.log("Error: " + err);
        }
    }
};