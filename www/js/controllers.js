angular.module('app.controllers', [])
  
.controller('addRecepieCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state',
  function($scope, $firebaseObject, $firebaseArray, $state) {

  	var ref = firebase.database().ref();
    var recepie = ref.child('recepie');
    var dish = $firebaseArray(recepie);
    
    $scope.addDish = function() {
    
    // create
    dish.$add({
      'dish': $scope.dish.recepie,
      'category': $scope.dish.category,  
      'word': $scope.dish.word, 
      'ingredients': $scope.dishingredient, 
      'instructions': $scope.dishinstruction,  
    
    }).then(function(data){  
    console.log(data);
  }); 
 };

}])
   
.controller('dishlistCtrl', function($scope) {

})
   
.controller('dishCtrl', function($scope) {

})
    