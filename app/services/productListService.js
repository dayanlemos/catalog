myApp.service('ProductListService', function ($q, $http) {

    return {
        getAllProductsServer: function () {
            return $q(function(resolve, reject){

                $http.get(serverUrl+'/server-mock/all-products.js').then(function (res) {
                    resolve(res.data);
                }, function (err) {
                    reject(err);
                });


            });
        },

        getAllProductsLocal: function () {
            return $q(function(resolve, reject){

                var db = new PouchDB('database');

                db.allDocs({
                    include_docs: true
                }).then(function (docs) {
                    resolve(docs.rows);
                }, function (err) {
                    reject(err);
                });


            });
        }


    };







})