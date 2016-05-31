/**
 * Created by Jin on 2016/5/30.
 */

app.appModule

    .controller('DemoCtrl', ['$log',function($log) {
        this.isOpen = false;
        this.selectedMode = 'md-fling';
        this.selectedDirection = 'up';
    }]);

