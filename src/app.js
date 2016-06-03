'use strict';

app.appModule.config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$logProvider',
    '$mdThemingProvider',
    'appConst',
    function ($locationProvider, $stateProvider, $urlRouterProvider, $logProvider, $mdThemingProvider, appConst) {
        $logProvider.debugEnabled(appConst.debug);
        $locationProvider.hashPrefix('!');

        $mdThemingProvider.theme('default').primaryPalette('grey', {
            'default': '500',
            'hue-1': '200',
            'hue-2': '600',
            'hue-3': '800'
        });

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/all/login/login.html'
            })
            .state('layout', {
                //TODO: set static layout to the route
                /*controller: 'layoutCtrl',
                 controllerAs: 'ctrl',*/
                controller: ['$scope', function ($scope) {
                    $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
                        $scope.transitionState = "active";
                    });
                }],
                templateUrl: 'app/layout.html',
                resolve: {
                    'auth': function (authService, $log) {
                        return authService.authorize();
                    }
                }
            });

        $stateProvider
            .state('error', {
                url: '/error',
                templateUrl: 'app/error/layout.html'
            })
            .state('error.authError', {
                url: '/authError?redirect_state_name',
                templateUrl: 'app/error/authError.page.html'
            });

        $stateProvider
            .state('layout.all', {
                url: '/all',
                /*controller: 'globalCtrl',*/

                template: '<ui-view/>'
            })
            .state('layout.all.login', {
                url: '/view1',
                controller: 'showCtrl',
                /*controllerAs: 'ctrl',*/
                templateUrl: 'app/auth/view1/view1.html'
            });

        $stateProvider
            .state('layout.auth', {
                url: '/auth',
                templateUrl: 'app/auth/layout.html',
                resolve: {
                    authorities: ['$q', 'stateConst', function ($q, stateConst) {
                        return $q.resolve();
                        /*return $q.reject(stateConst.AUTH_REJECT);*/
                    }]
                }
            })
            .state('layout.auth.view1', {
                url: '/view1',
                templateUrl: 'app/auth/view1/view1.html'
            })
            .state('layout.auth.view2', {
                url: '/view2',
                templateUrl: 'app/auth/view2/view2.html'
            });

        $urlRouterProvider.otherwise('/auth/view1')
    }
])

    .run(['$rootScope', 'stateConst', '$state', function ($rootScope, stateConst, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === stateConst.AUTH_REJECT) {
                $state.go('error.authError', {
                    redirect_state_name: fromState.name
                });
            }
        })
    }]);

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document, [
        'myApp'
    ]);
});
