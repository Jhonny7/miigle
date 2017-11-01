angular.module('VersiculoModule').controller('VersiculoController', VersiculoController);
VersiculoController.$inject = ['$scope', 'MasterService'];

function VersiculoController($scope, MasterService) {
    $scope.data = {};
    $scope.book = MasterService.getGenericObject().book;
    $scope.capitulos = MasterService.getGenericObject().capitulos;
    $scope.versiculos = MasterService.getGenericObject().verisculos;
};