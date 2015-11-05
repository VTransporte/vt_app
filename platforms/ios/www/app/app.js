( function () {
	"use strict";

	var app = angular.module('Demo', ['ui.router']);

	app.config(routes);
    app.run(device);
    //app.config(provides);
    //app.config(theme);
    
    function routes ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url : "/",
                templateUrl : "app/views/home/index.html", 
                controller : "HomeCtrl as vm"
            })

    }

    /*function provides ($provide) {
        $provide.decorator("$exceptionHandler", ["$delegate", functionDelegate]);
        function functionDelegate ($delegate) {
            return function (exception, cause) {
                exception.message = "Por favor contacta al administrador! \n Mensage: "+exception.message;
                $delegate(exception, cause);
                alert(exception.message);
            }
        }
    }*/


    /*function theme ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal',{
                'default' : '800'
            })
            .accentPalette('orange')
            .warnPalette('deep-orange');
    }*/

    function device () {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    }

	
} )();