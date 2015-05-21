function alertDismissed() {
	alert('Fechou alert');
}

function onConfirm(buttonIndex) {
	alert('You selected button ' + buttonIndex);
}	

(function(){
	
	angular.module('starter.controllers', [])

	.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	  // Form data for the login modal
	  $scope.loginData = {};

	  // Create the login modal that we will use later
	  $ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	  }).then(function(modal) {
		$scope.modal = modal;
	  });

	  // Triggered in the login modal to close it
	  $scope.closeLogin = function() {
		$scope.modal.hide();
	  };

	  // Open the login modal
	  $scope.login = function() {
		$scope.modal.show();
	  };

	  // Perform the login action when the user submits the login form
	  $scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
		  $scope.closeLogin();
		}, 1000);
	  };
	})

	.controller('homeController', function($scope) {

	})
	
	.controller('notificationController', function($scope) {
		$scope.alertJS = function() {
			alert('alert');
		},
		$scope.confirmJS = function() {
			if (confirm('confirm?'))
			{
				alert('yes');	
			}
			else 
			{
				alert('no');
			}
		},
		$scope.alertNativo = function() {
			navigator.notification.alert(
				'You are the winner!',  
				alertDismissed,         
				'Game Over',            
				'Done'                  
			);	
		},
		$scope.confirmNativo = function() {
			navigator.notification.confirm(
				'You are the winner!', 
				 onConfirm,            
				'Game Over',           
				['Restart','Exit']     
			);	
		};			
	})	
	
	
})();