angular.module('MasterServiceModule', ['LoginServiceModule', 'DaoServiceModule']).service('MasterService', function($cordovaSQLite, $q, $http, $state, $cordovaDevice, $ionicPopup, $ionicSideMenuDelegate, $ionicHistory, LoginService, $timeout, DaoService) {
    var masterService = {};
    masterService.data = null;
    masterService.dataBase;
    masterService.genericObject;
    /*Init*/
    masterService.init = function() {
        console.log("init app");
        try {
            dbcopy('db.db');
            return masterService.dataBase;
        } catch (err) {
            console.log("Error: " + err.message);
            return null;
        }
    }
    masterService.setDataBase = function(db) {
        masterService.dataBase = db;
        if (DaoService.setDataBase(db)) {
            return true;
        }
    }
    masterService.getDataBase = function() {
        return masterService.dataBase;
    }
    /*Servicios*/
    masterService.getLoginService = function() {
        return LoginService;
    }
    masterService.getDaoService = function() {
        return DaoService;
    }
    /*Directivas*/
    masterService.getState = function() {
        return $state;
    }
    masterService.getCordovaDevice = function() {
        return $cordovaDevice;
    }
    masterService.getIonicPopup = function() {
        return $ionicPopup;
    }
    masterService.getIonicSideMenuDelegate = function() {
        return $ionicSideMenuDelegate;
    }
    masterService.getIonicHistory = function() {
        return $ionicHistory;
    }
    masterService.getTimeout = function() {
        return $timeout;
    }
    /*Métodos Compartidos*/
    masterService.setGenericObject = function(object) {
        masterService.genericObject = object;
    }
    masterService.getGenericObject = function() {
        return masterService.genericObject;
    }
    /*Métodos propios*/
    function dbcopy(dbName) {
        window.plugins.sqlDB.copy(dbName, 1, copysuccess, copyerror);
    }

    function copysuccess() {
        console.log("open db");
        //open db and run your queries
        if (window.cordova) {
            db = $cordovaSQLite.openDB({
                name: "db.db",
                location: "default"
            });
        } else {
            db = window.openDatabase("db.db", '1', 'ES Database', 5 * 1024 * 1024);
        }
        masterService.dataBase = db;
        masterService.getDaoService.setDataBase(db);
    }

    function copyerror(e) {
        //db already exists or problem in copying the db file. Check the Log.
        console.log("Error Code = " + JSON.stringify(e));
        //e.code = 516 => if db exists
        if (e.code == 516) {
            if (window.cordova) {
                db = $cordovaSQLite.openDB({
                    name: "db.db",
                    location: "default"
                });
            } else {
                db = window.openDatabase("db.db", '1', 'ES Database', 5 * 1024 * 1024);
            }
            masterService.dataBase = db;
            masterService.getDaoService().setDataBase(db);
        }
    }
    return masterService;
})