'use strict';

app.appModule.config([
    '$locationProvider',
    '$routeProvider',
    '$logProvider',
    'appConst',
    function ($locationProvider, $routeProvider, $logProvider, appConst) {
        $logProvider.debugEnabled(appConst.debug);
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/view1', {
            templateUrl: 'app/view1/view1.html'
        });
        $routeProvider.when('/view2', {
            templateUrl: 'app/view2/view2.html'
        });
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
