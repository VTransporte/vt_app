( function () {
	
	"use strict";

    var app = {
        // Application Constructor
        initialize: function() {
            this.bindEvents();
        },
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
                document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        onDeviceReady: function() {
            app.receivedEvent('deviceready');
            navigator.geolocation.getCurrentPosition(app.onSuccess, app.onErr);
        },
        onErr: function(error)
        {
            alert('Unable to get your location. Without location you will not be able to use navigate feature! Error:' + 'n' + error.message);
        },
     
        onSuccess: function(position)
        {
            blogSample.latitude = position.coords.latitude;
            blogSample.longitude = position.coords.longitude;
        }
    }
	

} )();