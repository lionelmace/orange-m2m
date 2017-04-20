/*global console, Bloodhound, angular, moment */
/*jslint vars: true*/
(function () {
	"use strict";

	function DeviceController($scope, DeviceService, $stateParams) {
		console.info("Initializing DeviceController");
		var controller = this;

		controller.data = {
				devices: []
		};

		DeviceService.getDevices().then(function (devices) {
			controller.data.devices = devices;
			 devices.forEach(function(device) {
				if (device.sim.status == "ACTIVATED") {
					device.alert = "GREEN";
				} else {
					device.alert = "ORANGE";
				}
		     });
		});
		var filter = '{"client":"ok"}';
	}

	angular.module('app').controller('DeviceController', ['$scope', 'DeviceService', '$stateParams', DeviceController]);

}());
