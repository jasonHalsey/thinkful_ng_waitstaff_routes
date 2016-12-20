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
        .otherwise('/');
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path('/');
        });
    }])
    .controller('HomeCtrl', ['$rootscope', function() {
        //empty for now
    }])
    .controller('MealCtrl', ['$rootScope', function($rootScope) {
        var clearedForm = {
          baseMealPrice: null,
          tipPercentage: null,
          taxRate: null
        }
        this.customerCharges = {
            subtotal: 0,
            tip: 0,
            total: 0
          }
      
      this.submit = function() {
        // this.updateCustomerCharges()
        this.customerCharges.subtotal = ((this.myform.taxRate / 100) * this.myform.baseMealPrice) + this.myform.baseMealPrice
        this.customerCharges.tip = ((this.myform.tipPercentage / 100) * this.myform.baseMealPrice)
        this.customerCharges.total = this.customerCharges.subtotal + this.customerCharges.tip
        
        // this.updateTotalEarnigs()
        this.totalEarnings.totalTip = this.totalEarnings.totalTip + this.customerCharges.tip
        this.totalEarnings.mealCount = this.totalEarnings.mealCount + 1 
        this.totalEarnings.averageTipPerMeal = this.totalEarnings.totalTip / this.totalEarnings.mealCount

        this.myform = {
          baseMealPrice: null,
          tipPercentage: null,
          taxRate: null
        }
      }
        this.clear = function clear(){
            this.myform = clearedForm
        }
      }])
    .controller('EarnCtrl', ['$rootScope', function($rootScope) {
        this.testVal = $rootScope.value;
        this.wipeClean = function wipeClean(){
        this.myform = {
          baseMealPrice: null,
          tipPercentage: null,
          taxRate: null
        }
        this.totalEarnings = {
          totalTip: 0,
          mealCount: 0,
          averageTipPerMeal: 0
        }
        this.customerCharges = {
          subtotal: 0,
          tip: 0,
          total: 0
        }
      }
      }])