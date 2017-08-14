myApp.controller('ProductDescriptionCtrl', function ($scope, $stateParams, DatabaseService) {

    $scope.viewName = 'Product Description';
    $scope.productId = $stateParams.productId;
    $scope.product = {};

    DatabaseService.getProductById($scope.productId).then(function (res) {
        console.log(res)
        $scope.product = res;
    });

})