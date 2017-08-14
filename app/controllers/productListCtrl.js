myApp.controller('ProductListCtrl', function ($scope, ProductListService, SyncService) {

    $scope.viewName = 'Product List';

    $scope.products = [];




    ProductListService.getAllProductsLocal().then(function (products) {
        $scope.products = products;
    })

    SyncService.syncProducts().then(function (products) {
        //$scope.products = products;
    });

    setInterval(function () {
        SyncService.syncProducts();
    },60000)

})