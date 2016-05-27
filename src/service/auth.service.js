/*
app.serviceModule.service('authService', [function () {
    this.a = 1
}]);
*/

 app.serviceModule.factory('authService',[function () {
 return {
    a:'auth'
 }

 }]);
