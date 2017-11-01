angular.module('CapituloModule', ['MasterServiceModule']).config(function($stateProvider) {
    $stateProvider.state('menu.capitulo', {
        url: '/capitulo',
        views: {
            'content': {
                templateUrl: 'js/app/biblia/subModules/capitulos/capitulos.html',
                controller: 'CapituloController'
            }
        }
    });
});