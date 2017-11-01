angular.module('BibliaModule').controller('BibliaController', BibliaController);
BibliaController.$inject = ['$scope', 'MasterService'];

function BibliaController($scope, MasterService) {
    $scope.data = {};
    $scope.data.selectedBook;
    //Consultar libros//
    MasterService.getDaoService().getAllByTableAndConditions("books", "testamento = (?)", ['O']).then(function(r) {
        $scope.librosAntiguos = MasterService.getDaoService().getListTable(r);
    });
    MasterService.getDaoService().getAllByTableAndConditions("books", "testamento = (?)", ['N']).then(function(r) {
        $scope.librosNuevos = MasterService.getDaoService().getListTable(r);
    });
    $scope.searchByBook = function(book) {
        try {
            var objectArray = {};
            objectArray.book = book;
            MasterService.getDaoService().getAllByTableAndConditionsDistinct("versiculos", "id_book = (?)", [book.id], "capitulo").then(function(r) {
                $scope.capitulos = MasterService.getDaoService().getListTable(r);
                if ($scope.capitulos.length > 0) {
                    objectArray.capitulos = $scope.capitulos;
                    MasterService.getDaoService().getAllByTableAndConditions("versiculos", "id_book = (?) AND capitulo = (?)", [book.id, 1]).then(function(r2) {
                        $scope.verisculos = MasterService.getDaoService().getListTable(r2);
                        if ($scope.verisculos.length > 0) {
                            objectArray.verisculos = $scope.verisculos;
                            MasterService.setGenericObject(objectArray);
                            MasterService.getState().go('menu.versiculo');
                        } else {
                            console.log('Sin capítulos');
                        }
                    });
                } else {
                    console.log('Sin capítulos');
                }
            });
        } catch (err) {
            console.log("Error: " + err);
        }
    }
    $scope.searchMax = function(book) {
        try {
            MasterService.getDaoService().getMax("versiculos", "id_book = (?)", [book.id], "capitulo").then(function(r) {
                console.log(r.rows.item(0).maximo);
                book.maximo = r.rows.item(0).maximo;
            });
        } catch (err) {
            console.log("Error: " + err);
        }
    }
};