( function () {
	
	"use strict";

	angular
		.module('vt_app')
		.controller('SecondCtrl', ["$cordovaDevice", "$cordovaDialogs", SecondCtrl]);

	function SecondCtrl ($cordovaDevice, $cordovaDialogs) {
		
		var vm = this;

		/*document.addEventListener('backbutton', function(event){
			//event.preventDefault(); // EDIT
			//navigator.app.exitApp(); // exit the app
		});*/

	}

} )();