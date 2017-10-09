angular.module('BienvenidaServiceModule', []).service('BienvenidaService', function($q, $http) {
    var bienvenidaService = {};
    bienvenidaService.data = null;
    return bienvenidaService;
})