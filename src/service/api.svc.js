/**
 * Created by chuan.jin on 2016/6/2.
 */

app.serviceModule.factory('apiService', [
    '$http',
    '$q',
    function ($http, $q) {

        var corsReq = {
            method: 'POST',
            url: 'http://localhost:3003/rest/user/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return {
            authorize: function (username, password) {
                var deferred = $q.defer();
                corsReq.data = JSON.stringify({
                    username: username,
                    password: password
                });

                $http(corsReq)
                    .then(function (res) {
                        res.data.success ? deferred.resolve(res) : deferred.reject();
                    })
                    .catch(function (err) {
                        deferred.reject(err);
                    });
                return deferred.promise;
            }
        }
    }])
;