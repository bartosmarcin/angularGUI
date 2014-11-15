'use strict';

var appControllers = angular.module('appControllers', []);

appControllers.controller('ClientCtrl', ['$scope', '$location',
    function ($scope, $location) {

    }]);

appControllers.controller('OrdersCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.orders = [
            {date: '10.10.2014', id : 1},
            {date: '11.10.2014', id : 2},
            {date: '12.10.2014', id : 3}
        ];
        $scope.navigateTo = function(id) {
            $location.path('/client/orders/'+id);
        };
    }]);

appControllers.controller('OrderCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.order = {
            date: '10.10.2014',
            status: 0,
            items: [
                {
                    article: {
                        name: 'Młotek'
                    },
                    count: 5
                },
                {
                    article: {
                        name: 'Komputer'
                    },
                    count: 2
                },
                {
                    article: {
                        name: 'Dysk'
                    },
                    count: 511
                }
            ]
        };
        $scope.getStatus = function(status) {
            if (status == 0)
                return 'Złożono';
        };
    }]);