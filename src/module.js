
var app = {};

app.serviceModule = angular.module('myApp.service', []);
app.constModule = angular.module('myApp.const',[]);

app.appModule = angular.module('myApp', [
    'myApp.service',
    'ngRoute',
    'myApp.version',
    'myApp.const'
]);
