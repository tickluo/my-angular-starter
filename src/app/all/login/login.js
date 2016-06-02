/**
 * Created by Jin on 2016/5/30.
 */

app.appModule

    .controller('DemoCtrl', [function () {
        this.isOpen = false;
        this.selectedMode = 'md-fling';
        this.selectedDirection = 'down';
    }])

    .controller('globalCtrl', [
        'authService',
        '$log',
        function (authService, $log) {
            //TODO: change this location to a global scene
            $log.debug('-----auth-----');
            authService.authorize('jin', '123');
        }]);

