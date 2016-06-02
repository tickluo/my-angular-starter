app.componentModule
    .component('account', {
        templateUrl: 'component/shared/accountContainer.tpl.html',
        controller: function accountManager(authService) {
            var context = this;
            context.user = authService.getUserInfo();
        },
        controllerAs: 'ctrl'
    });