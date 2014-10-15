'use strict';
(function () {
    var app = angular.module('ordersManagement', []);

    app.controller('OrdersListCtrl', [function () {
        this.orders = [order1];
    }]);

    app.controller('OrderCtrl', [function () {

    }]);

    var order1 = {
        articles: [
            {
                availability: "100",
                name: "Książka"
            },
            {
                availability: "20",
                name: "Seat ibiza"
            }
        ],
        client: {
            address: "Pl. politechniki 12",
            email: "user@firma.pl",
            firstName: "Jan",
            lastName: "Kowalski",
            roles: []
        },
        name: "poop",
        date: "10.10.2014",
        isPlaced: false,
        problems: [],
        reservations: []
    };

    var client = {
        address: "Pl. politechniki 12",
        email: "user@firma.pl",
        firstName: "Jan",
        lastName: "Kowalski",
        roles: []
    };

    var articleBook = {
        availability: "100",
        name: "Książka"
    };

    var articleCar = {
        availability: "20",
        name: "Seat ibiza"
    };


    var orders = [
        {
            id: 1,
            name: "trololo"
        },
        {
            id: 2,
            name: "nazwa zamówienia"
        }
    ];
})();