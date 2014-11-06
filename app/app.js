'use strict';
(function () {
    var app = angular.module('ordersManagement', []);

    app.controller('OrdersListCtrl', [function () {
        this.orders = orders;
    }]);

    var orders = [
        {
            id:1,
            name:"trololo"
        },
        {
            id:2,
            name:"order2"
        }];
})();