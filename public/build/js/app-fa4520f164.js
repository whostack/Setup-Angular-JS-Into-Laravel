/* This is the main file where angular is definded */
var myApp = angular.module('myApp',['ngRoute','ngCookies']);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

		$routeProvider.when('/',{
			title: 'Home',
			templateUrl:'/theme/home/home.html',
			controller : 'userController',
		});

		$routeProvider.when('/sahre',{
			title: 'Home',
			templateUrl:'/theme/home/sahre.html',
			controller : 'userController',
		});
	}
]);

