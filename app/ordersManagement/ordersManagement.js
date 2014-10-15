'use strict';
(function () {
    var app = angular.module('ordersManagement', []);

    app.controller('OrdersListCtrl', [function () {
        this.orders = orders;
    }]);

    app.controller('OrderCtrl', [function(){

    }]);

    var orders = [
        {
            id:1,
            name:"trololo"
        },
        {
            id:2,
            name:"nazwa zamówienia"
        }
    ];
})();