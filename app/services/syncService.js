myApp.service('SyncService', function ($q, $http, ProductListService, DatabaseService) {

    return {

        syncProducts: function () {
            return $q(function (resolve, reject) {

                ProductListService.getAllProductsServer().then(function (products) {

                    var i = 0;
                    (function insertProduct(product) {

                        DatabaseService.insertProduct(product).then(function (res) {

                            //console.log(res);

                            if(i < products.length)
                                insertProduct(products[i++])
                            else
                                ProductListService.getAllProductsLocal().then(function (docs) {
                                    resolve(docs)
                                })

                        },function (err) {

                            if(i < products.length)
                                insertProduct(products[i++])
                            else
                                ProductListService.getAllProductsLocal().then(function (docs) {
                                    resolve(docs)
                                })

                        })


                    })(products[i])

                }, function (err) {
                    console.log(err);
                });

            });
        }
    };







})