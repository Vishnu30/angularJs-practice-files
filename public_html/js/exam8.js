// Register our custom filter as a dependency
var app8 = angular.module('app8', ['weatherFilters']);

app8.controller('mainCtrl', function($scope) {

  $scope.students = [
    {name: "George Thomas", gpa: 3.5},
    {name: "Susy Smith", gpa: 3.6},
    {name: "Paul Marks", gpa: 3.2},
    {name: "Sue Edgar", gpa: 3.8}
  ];

  $scope.student = {
      gpas:[
        {name: "George Thomas", gpa: 3.5},
        {name: "Susy Smith", gpa: 3.6},
        {name: "Paul Marks", gpa: 3.2},
        {name: "Sue Edgar", gpa: 3.8}
      ]
  };

  $scope.currDate = new Date();

  $scope.randomStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "

  $scope.randArray = [
    "Tomato",
    "Potato",
    "Bread",
    "Pickles",
    "Raisins"
  ];

  $scope.weather = [
    {day: "Monday", rain: false},
    {day: "Tuesday", rain: true}
  ];

});

filter.js

// Create a module named weatherfilters
// The name for the filter is raining and different unicode
// characters are returned based on weather an item is true or false
angular.module('weatherFilters', []).filter('raining', function(){
  return function(input){
    return input ? '\u2602' : '\u2600';
  };
});

