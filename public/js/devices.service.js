/*global angular,console*/
(function () {
  "use strict";

  function DeviceService($http, $q) {

    console.log("Initializing DeviceService...");

    return {
      getDevices: function () {
        var deferred = $q.defer();
        //$http.get("/api/devices.json").success(function (data) {
        $http.get("/m2m/devices").success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  }

  angular.module('app')
    .service('DeviceService', ['$http', '$q', DeviceService]);
}());
