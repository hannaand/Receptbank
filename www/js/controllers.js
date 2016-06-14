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

   // $scope.recepies = recepie;

    $scope.getObjectId = function(){

        $scope.recepie.$loaded()
            .then(function(id){ 

            var obj = id;

            console.log(obj);          

        });
    }

}])
   
.controller('dishCtrl', ['$scope', '$firebaseObject', '$firebaseArray', '$state',
  function($scope, $firebaseObject, $firebaseArray, $state) {

    var ref = firebase.database().ref();
    var food = ref.child('food');
    var recepie = $firebaseArray(food);

    $scope.recepies = recepie;

}]);
    