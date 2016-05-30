var app = {};
app.directiveModule = angular.module('myApp.directive', ['myApp.service']);
app.serviceModule = angular.module('myApp.service', []);
app.constModule = angular.module('myApp.const', []);

app.appModule = angular.module('myApp', [
    'myApp.service',
    'myApp.directive',
    'ui.router',
    'myApp.version',
    'myApp.const'
]);

