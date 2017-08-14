'use strict';

var serverUrl = location.origin;
var imageServerUrl = 'http://marketing2.webshop.aphixsoftware.com/'




var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {

    $stateProvider
        .state({
            name: 'product-list',
            url: '/product-list',
            templateUrl: 'views/product-list.html',
            controller: 'ProductListCtrl'
        })

        .state({
            name: 'product-description',
            url: '/product-description',
            templateUrl: 'views/product-description.html',
            controller: 'ProductDescriptionCtrl'
        })

        .state({
            name: 'sync',
            url: '/sync',
            templateUrl: 'views/sync.html',
            controller: 'SyncCtrl'
        })
    ;

});
