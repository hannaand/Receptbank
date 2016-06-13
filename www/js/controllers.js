angular.module('app.controllers', [])
  
.controller('addRecepieCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state',
  function($scope, $firebaseObject, $firebaseArray, $state) {
    var ref = firebase.database().ref();
    var food = ref.child('food');
    var recepie = $firebaseArray(food);
   
    // the recepie is automatically added to our Firebase database!
    $scope.addRecepie = function() {

      recepie.$add({
        'recepie': $scope.newRecepie,
        'category': $scope.newCategory,  
        'word': $scope.newWord, 
        'ingredient': $scope.newIngredient, 
        'instructions': $scope.newInstruction,  
    
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
   
.controller('dishCtrl', function($scope) {

})
    