'use strict';

var app = angular.module('doghouseApp');



app.controller('mainController', function($scope, HouseSvc) {
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
app.controller('occupiedController', function($scope, OccupiedSvc) {
    OccupiedSvc.getOccupied($scope.unavailableHouses)
    .then(res => {
        $scope.unavailableHouses = res.data;
        console.log('unavailablehouses:', $scope.unavailableHouses);
        console.log('$scope.unavailableHouses-name', $scope.unavailableHouses[0].name);
        console.log('$scope.unavailableHouses-dogs', $scope.unavailableHouses[0].dogs);
        console.log('dog name:', $scope.unavailableHouses[0].dogs.name); 

    })
    .catch(err => {
        console.log('err:', err);
    });
});

app.controller('detailsController', function($scope, OccupiedSvc, HouseSvc, DogSvc) {
    OccupiedSvc.getOccupied($scope.unavailableHouses)
        .then(res => {
        $scope.unavailableHouses = res.data;
        $scope.numOccupiedHouses = $scope.unavailableHouses.length;
    })
    .catch(err => {
        console.log('err:', err);
    });

    HouseSvc.getAll()
    .then(res => {
        $scope.houses = res.data;
        $scope.numHouses = $scope.houses.length;
       
        console.log('$scope.houses', $scope.houses);
        console.log('$scope.houses.price:', $scope.houses[0].price);
        
        $scope.totalIncome = $scope.houses.reduce((total, house) => total + house.price, 0)
            
    })
    .catch(err => {
        console.log('err:', err);
    });

    DogSvc.getAll($scope.dogs)
    .then(res => {
        $scope.dogs = res.data;
        $scope.numDogs = $scope.dogs.length
        console.log('numdogs', $scope.numDogs);
    })
    .catch(err => {
        console.log('err:', err);
    });

});

app.controller('dogsController', function($scope, $state, DogSvc) {
    DogSvc.getAll($scope.dogs)
    .then(res => {
        $scope.dogs = res.data;
        $scope.allDogs = res.data;
        var dogs = $scope.dogs;
        console.log('get dogs', $scope.dogs);
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.weightSort = function() {
    DogSvc.weightSort()
    .then(res => {
        console.log(res.data);
        $scope.dogs = res.data;
        $scope.sortedDogs = res.data;
        var dogs= $scope.dogs;
    })
    }

    $scope.checkSort = function(){
        if($scope.weightSorted){
            if(!$scope.sortedDogs){
                $scope.weightSort()
                $scope.dogs = $scope.sortedDogs;
            } else {
                $scope.dogs = $scope.sortedDogs;
            } 
            }
            else {
                $scope.dogs = $scope.allDogs;
            }
            }

    $scope.removeDog = function(dog) {
        DogSvc.removeDog(dog);
        $scope.dogs.splice(0, 1);
        location.reload;
    }

    $scope.addDog = function(editFormDog) {
        console.log("click on addDog");
        DogSvc.create($scope.editFormDog);
        console.log('newDog', $scope.editFormDog);
        $scope.editFormDog = null;
        //
       
    }

    $scope.editDog = (dog) => {
        $scope.editFormDog = angular.copy(dog);
    }

    $scope.saveChanges = () => {
        DogSvc.update($scope.editFormDog)
        .then(res => {
            $scope.dogs.forEach((dog, i) => {
                if(dog._id === res.data._id) {
                    $scope.dogs[i] = res.data;
                }
            })
            $scope.editFormDog = null;
        })
    }

    $scope.cancelEdit = () => {
        $scope.editFormDog = null;
    };
});


app.controller('housesController', function($scope, $state, HouseSvc) {
    HouseSvc.getAll($scope.houses)
    .then(res => {
        $scope.houses = res.data;
        $scope.allHouses = res.data;
        var houses = $scope.houses;
        console.log('length:', $scope.houses.length);
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.priceSort = function() {
    HouseSvc.priceSort()
    .then(res => {
        console.log(res.data);
        $scope.houses = res.data;
        $scope.sortedHouses = res.data;
        var houses = $scope.houses;
    })
    }
    $scope.checkSort = function(){
        if($scope.priceSorted){
    if(!$scope.sortedHouses){
        $scope.priceSort()
        $scope.houses = $scope.sortedHouses;
    } else {
        $scope.houses = $scope.sortedHouses;
    } 
    }
    else {
        $scope.houses = $scope.allHouses;
    }
    }

    $scope.removeHouse = function(house) {
        HouseSvc.removeHouse(house);
        $scope.houses.splice(0, 1);
        location.reload;
    }


    $scope.addHouse = function(editFormHouse) {
        HouseSvc.create($scope.editFormHouse);
        $scope.editFormHouse = null;
        location.reload;
    }
            
    $scope.editHouse = (house) => {
        $scope.editFormHouse = angular.copy(house);
    }

    $scope.saveChanges = () => {
        HouseSvc.update($scope.editFormHouse)
        .then(res => {
            $scope.houses.forEach((house, i) => {
                if(house._id === res.data._id) {
                    $scope.houses[i] = res.data;
                }
            })
            $scope.editFormHouse = null;
        })
    }

    $scope.cancelEdit = () => {
        $scope.editFormHouse = null;
    };
    
    $scope.assignDog = () => {
        HouseSvc.assignDog($scope.house, $scope.selectedDog)
        .then (res => {
            
        })
    }




});


