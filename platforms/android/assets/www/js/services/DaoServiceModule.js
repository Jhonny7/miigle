angular.module('DaoServiceModule', []).service('DaoService', function($q, $cordovaSQLite) {
    var daoService = {};
    daoService.data = null;
    daoService.dataBase;
    var deferred = $q.defer();
    daoService.setDataBase = function(db) {
        try {
            daoService.dataBase = db;
            return true;
        } catch (err) {
            console.log("Error en setDataBase " + err);
            return false;
        }
    }
    ///Consultas genéricas///
    daoService.genericQuerie = function(query, params) {
        var deferred = $q.defer();
        $cordovaSQLite.execute(db, query, params).then(function(res) {
            deferred.resolve(res);
        }, function(err) {
            deferred.resolve(err);
        });
        return deferred.promise;
    }
    daoService.getAllByTable = function(table) {
        var querie = "SELECT * FROM " + table;
        var deferred = $q.defer();
        try {
            $cordovaSQLite.execute(db, querie).then(function(res) {
                deferred.resolve(res);
            }, function(err) {
                deferred.resolve(err);
            });
            return deferred.promise;
        } catch (err) {
            console.log("Error: " + err.message);
            deferred.resolve(err);
        }
    }
    daoService.getAllById = function(table, id) {
        var querie = "SELECT * FROM " + table + " WHERE id = (?)";
        try {
            $cordovaSQLite.execute(db, querie, [id]).then(function(res) {
                deferred.resolve(res);
            }, function(err) {
                deferred.resolve(err);
            });
            return deferred.promise;
        } catch (err) {
            console.log("Error: " + err.message);
            deferred.resolve(err);
        }
    }
    daoService.getAllByTableAndConditions = function(table, conditions, values) {
        var querie = "SELECT * FROM " + table + " WHERE " + conditions;
        try {
            if (conditions == null) {
                return daoService.getAllByTable(table);
            } else {
                if (values != null && values.length > 0) {
                    return daoService.genericQuerie(querie, values);
                } else {
                    return daoService.genericQuerie(querie, []);
                }
            }
        } catch (err) {
            console.log("Error: " + err.message);
            deferred.resolve(err);
        }
    }
    return daoService;
})