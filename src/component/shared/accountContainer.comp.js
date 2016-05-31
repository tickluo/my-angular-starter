app.componentModule
    .component('account', {
        templateUrl: 'component/shared/accountContainer.tpl.html',
        controller:function accountManager(){
            this.user = {
                name:'Jin',
                avatar:'asset/svg/twitter.svg'
            }
        },
        controllerAs:'ctrl'
    });