angular.module('MenuModule', ['MasterServiceModule']) // se crea el módulo y con un array vacío ya que no necesito inyectar dependendias
    .config(function($stateProvider) { //tenemos definido por injection el stateProvider para accesar a los estados
        //Configuracion del módulo
        $stateProvider.state('menu', {
            url: '/menu',
            views: {
                'start': {
                    templateUrl: 'js/app/menu/menu.html',
                    controller: 'MenuController'
                }
            }
        });
    });