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

appControllers.controller('NewOrderCtrl', ['$scope', '$location', '$timeout', '$filter',
    function ($scope, $location, $timeout, $filter) {

        $scope.item = {
            article: {
                name: ''
            },
            count : 1
        };

        $scope.initItem = function() {
            $scope.item = {
                article: $scope.articles[0],
                count : 1
            };
        };

        $scope.remove = function(index) {
            $scope.neworder.items.splice(index, 1);
        };

        $scope.save = function() {
            for(var i=0; i<$scope.neworder.items.length; i++) {
                if ($scope.neworder.items[i].article.name == $scope.item.article.name) {
                    $scope.neworder.items[i].count += $scope.item.count;
                    $scope.initItem();
                    return;
                }
            }
            $scope.neworder.items.push($scope.item);
            $scope.initItem();
        };

        $scope.articles = [
            {name : 'Długopis', id : 1},
            {name : 'Monitor', id : 2},
            {name : 'Napój', id : 3},
            {name : 'Zeszyt', id : 4}
        ];

        $scope.neworder = {
            date: '',
            status: 0,
            items: []
        };

        $scope.placeOrder = function() {
            var date = new Date();
            $scope.neworder.date = $filter('date')(date.getTime(), 'dd-MM-yyyy HH:mm:ss');
            $scope.neworder.items = [];
            $scope.successMsg = true;
            $timeout(function () { $scope.successMsg = false; }, 3000);
        };
        $scope.successMsg = false;
    }]);