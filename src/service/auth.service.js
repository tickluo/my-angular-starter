/*
 app.serviceModule.service('authService', [function () {
 this.a = 1
 }]);
 */

app.serviceModule.factory('authService', [
    '$http',
    function ($http) {
        return $http.get('mockServer/auth.json')
    }]);
