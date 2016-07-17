
var easyWebCustomer = angular.module('com.cts.customer', []);

easyWebCustomer.factory('CustomerFactory', [function() {

        return {
            save: function() {
                console.log('save is called');
            },
            findAll: function() {
                console.log('findAll is called');
            }
        };
    }]);

