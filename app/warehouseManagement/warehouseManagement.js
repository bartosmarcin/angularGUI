'use strict';
(function () {
    var app = angular.module('warehouseManagement', []);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/orders', {
                    templateUrl: 'warehouseManagement.html',
                    controller: 'WarehouseOrdersListCtrl'
                }).
                otherwise({
                    redirectTo: '/orders'
                });
        }]);

    app.controller('WarehouseOrdersListCtrl',['$scope', function($scope){
        this.orders = [order1, order2];

        $scope.Validate = function(order) {
            var isNotEnough = false;

            for(var i = 0; i < order.items.length; i++) {
                if (order.items[i].count > order.items[i].article.availability) {
                    isNotEnough = true;
                }
            }
            return isNotEnough;
        };

        $scope.Confirm = function() {
            alert('Wykonano.')
        }
    }]);

    app.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
        }]);

    var order1 = {
        items: [
            {
                count: 4,
                article: {
                    availability: 3,
                    name: "Komputer"
                }
            },
            {
                count: 1,
                article: {
                    availability: 2,
                    name: "Monitor"
                }
            }
        ],
        client: {
            address: "Kościuszki 12",
            email: "user@firma.pl",
            firstName: "Pan",
            lastName: "Miecio",
            roles: []
        },
        date: "13.10.2014",
        isPlaced: false,
        problems: [],
        reservations: []
    };

    var order2 = {
        items: [
            {
                count: 1,
                article: {
                    availability: 130,
                    name: "Taczka"
                }
            },
            {
                count: 1,
                article: {
                    availability: 200,
                    name: "Młotek"
                }
            }
        ],
        client: {
            address: "Kościuszki 12",
            email: "user@firma.pl",
            firstName: "Pani",
            lastName: "Gienia",
            roles: []
        },
        date: "13.10.2014",
        isPlaced: false,
        problems: [],
        reservations: []
    };
})();