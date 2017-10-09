angular.module('BibliaModule').controller('BibliaController', BibliaController);
BibliaController.$inject = ['$scope', 'MasterService'];

function BibliaController($scope, MasterService) {
    $scope.data = {};
    $scope.data.selectedBook;
    //Consultar libros//
    MasterService.getDaoService().getAllByTableAndConditions("books", "testamento = (?)", ['O']).then(function(r) {
        if (r != null) {
            if (r.rows != null) {
                if (r.rows.length > 0) {
                    var itemsColl = [];
                    for (var i = 0; i < r.rows.length; i++) {
                        itemsColl[i] = r.rows.item(i);
                    };
                    $scope.librosAntiguos = itemsColl;
                }
            }
        }
    });
    MasterService.getDaoService().getAllByTableAndConditions("books", "testamento = (?)", ['N']).then(function(r) {
        if (r != null) {
            if (r.rows != null) {
                if (r.rows.length > 0) {
                    var itemsColl = [];
                    for (var i = 0; i < r.rows.length; i++) {
                        itemsColl[i] = r.rows.item(i);
                    };
                    $scope.librosNuevos = itemsColl;
                }
            }
        }
    });
    $scope.searchByBook = function(book) {
        try {
            $scope.data.selectedBook = book;
            MasterService.getDaoService().getAllByTableAndConditions("versiculos", "id_book = (?)", [book.id]).then(function(r) {
                if (r != null) {
                    if (r.rows != null) {
                        if (r.rows.length > 0) {
                            var itemsColl = [];
                            for (var i = 0; i < r.rows.length; i++) {
                                itemsColl[i] = r.rows.item(i);
                            };
                            $scope.versiculos = itemsColl;
                            MasterService.getState().go('menu.versiculo');
                        }
                    }
                }
            });
        } catch (err) {
            console.log("Error: " + err);
        }
    }
};