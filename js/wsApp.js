angular.module('wsApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: './home.html',
            controller : 'HomeCtrl',
            controllerAs: 'vm'
        })
        .when('/new-meal', {
            templateUrl: 'new-meal.html',
            controller : 'MealCtrl',
            controllerAs: 'vm'
        })
        .when('/my-earnings', {
            templateUrl: 'my-earnings.html',
            controller : 'EarnCtrl',
            controllerAs: 'vm'
        })
        .when('/error', {
              template : '<p>Error Page Not Found</p>'
        })
            .otherwise('/error');
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/error');
        });
    }])
    .controller('HomeCtrl', [function() {
        //empty for now
    }])
    .controller('MealCtrl', [function() {
        //empty for now
      }])
    .controller('EarnCtrl', [function() {
        //empty for now
      }])