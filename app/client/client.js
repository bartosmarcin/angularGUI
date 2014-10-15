'use strict';
(function () {
    var app = angular.module('client', []);

    app.controller('ClientsOrdersListCtrl', [function () {
        this.orders = [order1, order2];
    }]);


    var order2 = {
        articles: [
            {
                availability: "80",
                name: "Młotek"
            },
            {
                availability: "2",
                name: "Taczka"
            }
        ],
        client: {
            address: "Kościuszki 12",
            email: "user@firma.pl",
            firstName: "Michał",
            lastName: "Gołaś",
            roles: []
        },
        date: "13.10.2014",
        isPlaced: false,
        problems: [],
        reservations: []
    };

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
        date: "10.10.2014",
        isPlaced: false,
        problems: [
            {
                name:"Brak towaru",
                description:"W magazynie brakuje obecnie niektórych towarów z zamówienia"
            }
        ],
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