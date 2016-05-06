'use strict';

var app = angular.module('doghouseApp');


app.service('DetailsSvc', function($http) {
    
    this.get = (house, dog) => {
      return $http.get(`/api/occupied/${house}/dogs/${dog}`);
  }

})


app.service('OccupiedSvc', function($http) {
    
  this.assignDog = (house, dog) => {
    return $http.put(`/api/houses/${house}/dogs/${dog}`);
  }
  
  this.removeDog = (house, dog) => {
    return $http.put(`/api/houses/${house}/${dog}`);
  }

  this.getOccupied = () => {
    return $http.get('/api/occupied');
  }

})

app.service('HouseSvc', function($http) {

  // manage all item api calls

  this.getAll = () => {
    return $http.get('/api/houses');
  };

  this.removeHouse = (house) => {
  	return $http.delete(`/api/houses/${house._id}`)
  }

  this.update = house => {
    return $http.put(`/api/houses/${house._id}`, house)
  }

  this.create = house => {
  	return $http.post('/api/houses', house);
  }

  this.priceSort = () => {
  	return $http.get('api/houses/priceSort');
  }

  this.update = house => {
  	return $http.put(`/api/houses/${house._id}`, house);
  }

  this.assignDog = (house, dog) => {
    return $http.put(`/api/houses/${house}/dogs/${dog}`);
  }

    this.removeDog = (house, dog) => {
    return $http.put(`/api/houses/${house}/${dog}`);
  }

})

app.service('DogSvc', function($http) {

  this.getAll = () => {
  	return $http.get('/api/dogs');
  }

  this.removeDog = (dog) => {
  	return $http.delete(`/api/dogs/${dog._id}`)
  }

  this.update = dog => {
    return $http.put(`/api/dogs/${dog._id}`, dog)
  }

  this.create = dog => {
  	return $http.post('/api/dogs', dog);
  }

  this.weightSort = () => {
  	return $http.get('api/dogs/weightSort');
  }

})






