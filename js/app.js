(function(){
	
	angular.module('starter', ['ionic', 'starter.controllers'])

	.run(function($ionicPlatform) {
	  $ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
		  // org.apache.cordova.statusbar required
		  StatusBar.styleDefault();
		}
	  });
	})

	.config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  .state('menu', {
		url: "/menu",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	  })  
	 
		.state('menu.home', {
		  url: "/home",
		  views: {
			'menuContent': {
			  templateUrl: "templates/home.html",
			  controller: "homeController"
			}
		  }
		})

		.state('menu.camera', {
		  url: "/camera",
		  views: {
			'menuContent': {
			  templateUrl: "templates/camera.html"
			}
		  }
		})

		.state('menu.compass', {
		  url: "/compass",
		  views: {
			'menuContent': {
			  templateUrl: "templates/compass.html"
			}
		  }
		})

		.state('menu.notification', {
		  url: "/notification",
		  views: {
			'menuContent': {
			  templateUrl: "templates/notification.html"
			}
		  }
		});
	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/menu/home');
	})

})();
