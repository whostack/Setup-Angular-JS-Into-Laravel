/* This is the main file where angular is definded */
var myApp = angular.module('myApp',['ngRoute','ngCookies']);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

		$routeProvider.when('/',{
			title: 'Home',
			templateUrl:'/theme/home.html',
			controller : 'userController',
		});

		$routeProvider.when('/gallery',{
			title: 'Gallery',
			templateUrl:'/theme/gallery.html',
			controller : 'userController',
		});

		$routeProvider.when('/aboutus',{
			title: 'About US',
			templateUrl:'/theme/about.html',
			controller : 'userController',
		});

		$routeProvider.when('/contactus',{
			title: 'Contact US',
			templateUrl:'/theme/contactus.html',
			controller : 'userController',
		});
	}
]);

