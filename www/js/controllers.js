angular.module('app.controllers', [])
  
.controller('addRecepieCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state',
  function($scope, $firebaseObject, $firebaseArray, $state) {

  	var ref = firebase.database().ref();
    var food = ref.child('food');
    var dish = $firebaseArray(food);
    var url = ref.toString(); 
    
    $scope.addDish = function() {
    
    // create
    dish.$add({
      'dish': $scope.recepie.dish,
      'category': $scope.category.dish,  
      'word': $scope.word.dish, 
      'ingredients': $scope.ingredient.dish, 
      'instructions': $scope.instruction.dish,  
    
    }).then(function(data){  
    console.log(data);
  }); 
 };

}])
   
.controller('dishlistCtrl', function($scope) {

})
   
.controller('dishCtrl', function($scope) {

})
    