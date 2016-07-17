/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**Module 
 * SubModule
 * 
 */
//Module DI
var easyWeb = angular.module('easyWeb', ['com.cts.customer', 'ngRoute']);

//Router
//Router configuration
easyWeb.config(['$routeProvider', function($routeProvider) {
        $routeProvider

                // route for the home page
                .when('/customer', {
                    templateUrl: 'customertemplate.html',
                    controller: 'CustomerController'
                });
             
    }]);



easyWeb.controller('CustomerController', ['$scope', 'CustomerFactory',
    function($scope, cusFactory) {
        console.log('customer controller');
        $scope.save = function() {
        console.log('customer controller');

            cusFactory.save();
        };
        $scope.findAll = function() {
            cusFactory.findAll();
        };

    }]);

