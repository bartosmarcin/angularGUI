'use strict';
var app = angular.module('myApp', [
    'ngRoute',
    'appControllers'
]);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/', {
                templateUrl: '/app/partials/home.html'
            }).
            when('/app', {
                redirectTo: '/'
            }).
            when('/client', {
                templateUrl: '/app/partials/client.html',
                controller: 'ClientCtrl'
            }).
            when('/client/place-order', {
                templateUrl: '/app/partials/place-order.html'
            }).
            when('/client/orders', {
                templateUrl: '/app/partials/orders.html',
                controller: 'OrdersCtrl'
            }).
            when('/client/orders/:orderId', {
                templateUrl: '/app/partials/order.html',
                controller: 'OrderCtrl'
            }).
            otherwise({
                templateUrl: '/app/partials/error.html'
                // redirectTo: '/'
            });
    }]);


//app.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.
//        when('/orders', {
//            templateUrl: 'ordersManagement/ordersManagement.html',
//            controller: 'OrdersListCtrl'
//        }).
//        otherwise({redirectTo: '/view1'});
//}]);