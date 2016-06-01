/**
 * Created by chuan.jin on 2016/6/1.
 */

app.serviceModule.factory('sidebarService', [
    '$http',
    '$q',
    '$timeout',
    'authService',
    function ($http, $q, $timeout, auth) {
        var menus = [
            {name:'ADMIN',icon:''},
            {name:'VISITOR',icon:''}
            ];

        return $q.when(menus)
    }]);