angular.module('BibliaModule', ['MasterServiceModule']).config(function($stateProvider) {
    $stateProvider.state('menu.biblia', {
        url: '/biblia',
        views: {
            'content': {
                templateUrl: 'js/app/biblia/biblia.html',
                controller: 'BibliaController'
            }
        }
    });
});