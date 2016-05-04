'use strict';

var app = angular.module('doghouseApp');

app.service('HouseSvc', function($http) {

  // manage all item api calls

  this.getAll = () => {
    return $http.get('/api/houses');
  };

  this.removeHouse = (house) => {
  	return $http.delete(`/api/houses/${house._id}`)
  }

  this.create = house => {
  	return $http.post('/api/houses', house);
  }

  this.priceSort = () => {
  	return $http.get('api/houses/priceSort');
  }

  this.update = house => {
  	return $http.put('api/houses', house);
  }

})

app.service('DogSvc', function($http) {

  this.getAll = () => {
  	return $http.get('/api/dogs');
  }

  this.removeDog = (dog) => {
  	return $http.delete(`/api/dogs/${dog._id}`)
  }


  this.create = dog => {
  	return $http.post('/api/dogs', dog);
  }

  this.weightSort = () => {
  	return $http.get('api/dogs/weightSort');
  }

})






