'use strict';

(
    function() {// Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
        'ngRoute',
        'OrdersManagement',
        'client',
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/orders', {
                    templateUrl: 'ordersManagement/ordersManagement.html',
                    controller: 'OrdersListCtrl'
                }).otherwise({redirectTo: '/view1'});
        }]);
})();