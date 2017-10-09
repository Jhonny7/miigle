angular.module('LoginModule', ['MasterServiceModule']) // se crea el módulo y con un array vacío ya que no necesito inyectar dependendias
    .config(function($stateProvider) { //tenemos definido por injection el stateProvider para accesar a los estados
        //Configuracion del módulo
        $stateProvider.state('login', {
            url: '/login',
            views: {
                'start': {
                    templateUrl: 'js/app/login/login.html',
                    controller: 'LoginController'
                }
            }
        });
    });