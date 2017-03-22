'use strict';
var letzChaat=angular.module("Collaboration",["ngRoute"]);
letzChaat.config(function($routeProvider) {
	$routeProvider
	.when("/",
	{
		templateUrl:"main.html",
		controller:'mainController'
	})
	.when("/main",
	{
		templateUrl:"main.html",
		controller:'mainController'
	})
	
	.when("/register",
	{
		templateUrl:"FormPage.html",
		controller:'registerController'
	})
	

			
	
			
});
letzChaat.controller('mainController',function($scope)		
		{
				console.log("Main Page");
		}
		);

letzChaat.controller('registerController',function($scope,$http)		
		{
			$scope.register=function()
			{
				console.log("Thanks:"+$scope.userFullName);
				var userData={
						userFullName:$scope.userFullName,
						address:$scope.address,
						userEmail:$scope.userEmail,
						userPhone:$scope.userPhone,
						password:$scope.password,
						
					}
				$scope.message=$scope.userFullName+": you are successfully registered!!!";
				$scope.userFullName="";
				$scope.username="";
				$scope.userEmail="";
				$scope.userPhone="";
				$scope.password="";			 		
			
			} 
		}
	);
