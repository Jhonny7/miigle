var db = null;
angular.module('starter', ['ionic', 'ngCordova', 'BienvenidaModule', 'MenuModule', 'LoginModule', 'BienvenidaModule', 'CelulaModule', 'BibliaModule', 'VersiculoModule', 'CapituloModule']).
run(function($ionicPlatform, MasterService, $state, $cordovaSQLite, DaoService) {
    $ionicPlatform.ready(function() {
        console.log("start");
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        /*DB*/
        /*DB*/
        if (MasterService.init() == null) {
            console.log("el valor es nulo en init");
        } else {
            DaoService.setDataBase(MasterService.init());
        }
        //$state.go('menu.biblia');
        $state.go('login');
    });
}).config(function($stateProvider, $urlRouterProvider, $controllerProvider, $httpProvider) {
    $stateProvider.state('app', {
        url: '/app',
        abstract: true
    })
    $controllerProvider.allowGlobals();
    //$urlRouterProvider.otherwise('/login');
});