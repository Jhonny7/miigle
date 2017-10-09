angular.module('CelulaModule', ['MasterServiceModule']) // se crea el módulo y con un array vacío ya que no necesito inyectar dependendias
    .config(function($stateProvider) { //tenemos definido por injection el stateProvider para accesar a los estados
        //Configuracion del módulo
        $stateProvider.state('menu.celula', {
            url: '/celula',
            views: {
                'content': {
                    templateUrl: 'js/app/celula/celula.html',
                    controller: 'CelulaController'
                }
            }
        });
    });