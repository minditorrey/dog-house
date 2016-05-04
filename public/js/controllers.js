'use strict';

var app = angular.module('doghouseApp');

app.controller('mainController', function($scope) {
    $scope.isVisible = true; 

    $scope.toggleDiv = function(event) {
        // event.preventDefault(); // included to show how to prevent default behavior
        // event.stopPropagation(); // included to show how to stop propagation
        if ($scope.isVisible === false){
            $scope.isVisible = true;
        } else {
            $scope.isVisible = false;
        }
    };
});

app.controller('dogsController', function($scope, $state, DogSvc) {
    console.log("made it to dogs view");
    DogSvc.getAll($scope.dogs)
    .then(res => {
        $scope.dogs = res.data;
        var dogs = $scope.dogs;
        console.log('get dogs', $scope.dogs);
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.removeDog = function(dog) {
        DogSvc.removeDog(dog);
        $scope.dogs.splice(0, 1);
        location.reload;
    }

    $scope.addDog = function(newDog) {
        console.log("click on addDog");
        DogSvc.create($scope.newDog);
        console.log('newDog', $scope.newDog);
        $scope.newDog = null;
        location.reload;
    }

    // $scope.filterDogs = 
});

app.controller('housesController', function($scope, $state, HouseSvc) {
    HouseSvc.getAll($scope.houses)
    .then(res => {
        $scope.houses = res.data;
        var houses = $scope.houses;

    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.removeHouse = function(house) {
        HouseSvc.removeHouse(house);
        $scope.houses.splice(0, 1);
        location.reload;
    }

    $scope.addHouse = function(newHouse) {
        HouseSvc.create($scope.newHouse);
        $scope.newHouse = null;
        location.reload;
    }
            
    // $scope.filterHouses = 
   

});


