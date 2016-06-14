angular.module('app.controllers', [])
  
.controller('addRecepieCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state',
  function($scope, $firebaseObject, $firebaseArray, $state) {
    var ref = firebase.database().ref();
    var food = ref.child('food');
    var recepie = $firebaseArray(food);
   
    // the recepie is automatically added to our Firebase database!
    $scope.addRecepie = function() {

      recepie.$add({
        'recepie': $scope.recepie.recepie,
        'category': $scope.recepie.category,  
        'word': $scope.recepie.word, 
        'ingredient': $scope.recepie.ingredient, 
        'instruction': $scope.recepie.instruction,  
    
    })
      //.then(function(data){  
    //console.log(data);
  //}); 
 };

}])
   
.controller('dishListCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state',
  function($scope, $firebaseObject, $firebaseArray, $state) {

  	var ref = firebase.database().ref();
    var food = ref.child('food');
    var recepie = $firebaseArray(food);

    $scope.recepies = recepie;

}])
   
.controller('dishCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state', '$location',
  function($scope, $firebaseObject, $firebaseArray, $state, $location) {

    var ref = firebase.database().ref();
    var food = ref.child('food');
    var recepie = $firebaseArray(food);
    var key = location.hash.split('#/')[1];
    var recepieRef = ref.child(key);
    var showRecepies = [];

    showRecepies.push($firebaseObject(recepieRef));
  
    $scope.showRecepies = showRecepies; 

}]);
    