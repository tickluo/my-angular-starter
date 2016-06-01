app.componentModule
    .component('account', {
        templateUrl: 'component/shared/accountContainer.tpl.html',
        controller:function accountManager(authService){
            //TODO
            authService.then(function(res){
                this.user = res.data;
            });
        },
        controllerAs:'ctrl'
    });