'use strict';
(function () {
    var app = angular.module('ordersManagement', []);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/orders', {
                    templateUrl: 'clientOrders.html',
                    controller: 'ClientsOrdersListCtrl'
                }).
                when("/orders/:orderId",{
                    templateUrl: 'clientOrder.html',
                    controller: 'ClientsOrdersListCtrl'
                }).
                otherwise({
                    redirectTo: '/orders'
                });
        }]);

    app.controller('OrdersListCtrl', [function () {
        this.orders = [order1, order2];
    }]);

    app.controller('OrderCtrl', [function () {

    }]);


})();