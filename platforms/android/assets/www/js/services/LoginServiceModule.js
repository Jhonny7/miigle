angular.module('LoginServiceModule', []).service('LoginService', function($q, $http) {
    var loginService = {};
    loginService.data = null;
    //var url = 'http://172.16.20.133:8090/nec-monitoreo-web-2/MCM/service/loginReturnPermisos.action?';
    loginService.loginUser = function(name, pw) {
        var urlArmada = '';
        var deferred = $q.defer();
        var promise = deferred.promise;
        console.log(name);
        console.log(pw);
        if (name != null && pw != null) {
            if (name == 'admin' && pw == 'admin') {
                console.log(name);
                console.log(pw);
                //urlArmada = url + 'userName=' + name + '&contrasenia=' + pw + '&imei=' + imei;
                //console.log(url);
                /*$http.get(urlArmada).success(function(data) {
                    console.log(data);
                    deferred.resolve(data);
                }).error(function(error) {
                    console.log('Error ' + error);
                    deferred.reject(data);
                })*/
                return true;
            } else {
                return false;
            }
        } else {
            deferred.reject('Wrong credentials.');
            return false;
        }
    }
    return loginService;
})