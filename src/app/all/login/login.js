/**
 * Created by Jin on 2016/5/30.
 */

app.appModule
    .controller('loginCtrl', [
        '$timeout',
        '$state',
        '$scope',
        function ($timeout,$state,$scope) {
            this.submitLogin = angular.bind(this,startLoginAnimate,$timeout,$state,$scope);
        }]);


function startLoginAnimate($timeout,$state) {
    var context = this;
    context.startFade = true;
    context.startLogin = true;

    $timeout(function () {
        context.hideLoginForm = true;
        $state.go('layout.auth.view1');
    }, 2000);
}

