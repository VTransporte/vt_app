( function () {
	
	"use strict";

	angular
		.module('vt_app')
		.controller('SampleCtrl', ["$cordovaDevice", "$cordovaDialogs", "$cordovaVibration", "$cordovaGeolocation", SampleCtrl]);

	function SampleCtrl ($cordovaDevice, $cordovaDialogs, $cordovaVibration, $cordovaGeolocation) {
		
		var vm = this;

		vm.latLng = null;

		vm.optionsPosition = {timeout: 10000, maximumAge: 300000, enableHighAccuracy: true};

		vm.alertDeviceInfo = function() {
			document.addEventListener("deviceready", function () {
			    var device = $cordovaDevice.getDevice();
			    var cordova = $cordovaDevice.getCordova();
			    var model = $cordovaDevice.getModel();
			    var platform = $cordovaDevice.getPlatform();
			    var uuid = $cordovaDevice.getUUID();
			    var version = $cordovaDevice.getVersion();

		  	}, false);
		  	$cordovaDialogs.alert(device.platform, "Informacion del dispositivo", "OK");
		};

		vm.alertGeoLocation = function() {
			document.addEventListener("deviceready", function () { 
				$cordovaGeolocation.getCurrentPosition(vm.optionsPosition).then(function(position){
 		    		vm.latLng = position.coords.latitude+"---"+position.coords.longitude;
 		    		$cordovaDialogs.alert(vm.latLng, "Coordenadas", "Aceptar");
 		    		vm.lat  = position.coords.latitude
			    	vm.long = position.coords.longitude
				}, function(error){
					$cordovaDialogs.alert("Could not get location");
				});
			}, false);
		};

		vm.beepNotify = function() {
		    $cordovaDialogs.beep(3);
		};

		vm.vibrateNotify = function() {
		    $cordovaVibration.vibrate(100);
		};

	}

} )();