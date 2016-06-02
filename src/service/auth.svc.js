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
    function ($http, $q, apiService, avatarConst ,$log) {
        var authorities = [],
            userInfo;

        return {
            //todo: async problem & finish the authorize!
            authorize: function (username, password) {
                apiService.authorize(username,password).then(function (res) {
                    userInfo = res.data.userInfo;
                    userInfo.avatar = avatarConst[res.data.userInfo.role]
                })
            },
            getAuth: function () {
                return authorities;
            },
            getUserInfo: function () {
                $log.debug('-----get-----');
                return userInfo;
            }
        };
    }
]);
