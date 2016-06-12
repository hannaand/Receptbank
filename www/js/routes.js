angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.addRecepie', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addRecepie.html',
        controller: 'addRecepieCtrl'
      }
    }
  })

  .state('menu.dishList', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dishList.html',
        controller: 'dishListCtrl'
      }
    }
  })

  .state('menu.dish', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dish.html',
        controller: 'dishCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});