app.componentModule.component('sidebar', {
    templateUrl: 'component/layout/sidebar.tpl.html',
    controller: sidebar,
    controllerAs: 'ctrl'
});

function sidebar(sidebarService,authService) {
    var context = this;
    authService.then(function(res){
        context.userName = res.data.userName;
    });
    sidebarService.then(function(res){
        context.menuItems = res;
    })
}


