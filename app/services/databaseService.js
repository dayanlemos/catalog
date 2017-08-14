myApp.service('DatabaseService', function ($q, $http) {

    return {

        insertProduct: function (product) {
            
            var db = new PouchDB('database');
            
            return $q(function (resolve, reject) {
                
                db.get(product.data).then(function(doc){
                    db.remove(doc).then(function () {
                        console.log(product);
                        db.put({
                            _id: product.data,
                            value: product.value,
                            metaKeywords: product.info.MetaKeywords,
                            image: imageServerUrl + product.info.Image1,
                            text: product.info.Text
                        }).then(function (res) {
                            resolve(res);
                        },function (err) {
                            reject(err);
                        });
                    })
                },function(err){
                    if(err.status == 404){
                        db.put({
                            _id: product.data,
                            value: product.value,
                            metaKeywords: product.info.MetaKeywords,
                            image: imageServerUrl + product.info.Image1,
                            text: product.info.Text
                        }).then(function (res) {
                            resolve(res);
                        },function (err) {
                            reject(err);
                        });
                    }
                }) 
                
            });

        },

        getProductById: function (id) {
            var db = new PouchDB('database');

            return $q(function (resolve, reject) {
                db.get(id).then(function(doc){
                    resolve(doc)
                },function(err){
                    reject(err)
                })
            });
        }
    };




})