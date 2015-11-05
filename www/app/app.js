( function () {
	"use strict";

	var app = angular.module('vt_app', ['ui.router', 'ngCordova', 'ngTouch']);

    app.run(functionRun);
    app.config(routes);
    app.config(provides);
    //app.config(theme);
    
    function functionRun () {
        new FastClick.attach(document.body);
        document.addEventListener("deviceready", function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        }, false);
    }


    function routes ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url : "/",
                templateUrl : "app/views/home/index.html", 
                controller : "HomeCtrl as vm"
            })
            .state("second", {
                url : "/second",
                templateUrl : "app/views/second/index.html", 
                controller : "SecondCtrl as vm"
            })
            .state("samples", {
                url : "/samples",
                templateUrl : "app/views/sample/index.html", 
                controller : "SampleCtrl as vm"
            })

    }

    function provides ($provide) {
        $provide.decorator("$exceptionHandler", ["$delegate", functionDelegate]);
        function functionDelegate ($delegate) {
            return function (exception, cause) {
                exception.message = "Por favor contacta al administrador! \n Mensage: "+exception.message;
                $delegate(exception, cause);
                alert(exception.message);
            }
        }
    }


    /*function theme ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal',{
                'default' : '800'
            })
            .accentPalette('orange')
            .warnPalette('deep-orange');
    }*/


	
} )();