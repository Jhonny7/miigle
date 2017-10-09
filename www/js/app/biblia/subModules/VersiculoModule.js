angular.module('VersiculoModule', ['MasterServiceModule']).config(function($stateProvider) {
    $stateProvider.state('menu.versiculo', {
        url: '/versiculo',
        views: {
            'content': {
                templateUrl: 'js/app/biblia/subModules/versiculos.html',
                controller: 'BibliaController'
            }
        }
    });
});