angular.module('CelulaServiceModule', []).service('CelulaService', function($q, $http) {
    var celulaService = {};
    celulaService.data = null;
    return celulaService;
})