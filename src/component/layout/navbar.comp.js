app.componentModule.component('navbar', {
    templateUrl: 'component/layout/navbar.tpl.html',
    controller: navCtrl,
    controllerAs: 'ctrl'
});

function navCtrl($mdSidenav) {
    var context = this;

    context.toggleSidebar = toggleSidebar;
/*    context.isOpenSidebar = isOpenSidebar;
    function isOpenSidebar() {
        return $mdSidenav('sidebarLeft').isOpen();
    }*/

    function toggleSidebar() {
        $mdSidenav('sidebarLeft').toggle();
    }
}