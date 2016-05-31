'use strict';

app.appModule.config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$logProvider',
    'appConst',
    function ($locationProvider, $stateProvider, $urlRouterProvider, $logProvider, appConst) {
        $logProvider.debugEnabled(appConst.debug);
        $locationProvider.hashPrefix('!');
        $stateProvider
            .state('error',{
                url: '/error',
                templateUrl: 'app/error/layout.html'
            })
            .state('error.authError',{
                url: '/authError?redirect_state_name',
                templateUrl: 'app/error/authError.page.html'
            });
        
        $stateProvider
            .state('all', {
                url: '/all',
                templateUrl: 'app/all/layout.html'
            })
            .state('all.login', {
                url: '/login',
                controller: 'showCtrl',
                /*controllerAs: 'ctrl',*/
                templateUrl: 'app/all/login/login.html'
            });

        $stateProvider
            .state('auth', {
                url: '/auth',
                templateUrl: 'app/auth/layout.html',
                resolve: {
                    authorities: ['$q','stateConst', function ($q,stateConst) {
                        return $q.reject(stateConst.AUTH_REJECT);
                    }]
                }
            })
            .state('auth.view1', {
                url: '/view1',
                templateUrl: 'app/auth/view1/view1.html'
            })
            .state('auth.view2', {
                url: '/view2',
                templateUrl: 'app/auth/view2/view2.html'
            });
        
        $urlRouterProvider.otherwise('/all/login')
    }])

    .run(['$rootScope', 'stateConst', '$state', function ($rootScope, stateConst, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === stateConst.AUTH_REJECT) {
                $state.go('error.authError',{
                    redirect_state_name:fromState.name
                });
            }
        })
    }]);

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document, [
        'myApp'
    ]);
});
