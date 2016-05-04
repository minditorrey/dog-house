var app = angular.module('doghouseApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('dogs', {
			url: '/dogs',
			templateUrl: '/templates/dogs.html',
			controller: 'dogsController'
		})
		.state('houses', {
			url: '/houses',
			templateUrl: '/templates/houses.html',
			controller: 'housesController'
		})


	$urlRouterProvider.otherwise('/');

});