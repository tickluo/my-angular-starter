/*
 app.serviceModule.service('authService', [function () {
 this.a = 1
 }]);
 */

app.serviceModule.factory('authService', [
    '$http',
    '$q',
    'apiService',
    'avatarConst',
    '$log',
    function ($http, $q, apiService, avatarConst, $log) {
        var authorities = [],
            userInfo;

        var authorize = function (username, password) {
            var deferred = $q.defer();
            apiService.authorize(username, password).then(function (res) {
                if (res) {
                    userInfo = res.data.userInfo;
                    userInfo.avatar = avatarConst[res.data.userInfo.role];
                    deferred.resolve();
                    $log.debug('userInfoSetting');
                }
                else deferred.reject();

                return deferred.promise;
            })
        };

        return {
            //todo: async problem & finish the authorize!
            authorize: authorize,
            getAuth: function () {
                return authorities;
            },
            getUserInfo: function () {
                $log.debug('-----getUserInfo-----');
                return userInfo;
            }
        };
    }
]);
