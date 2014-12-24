angular.module('NetworkCtrl', [])

.controller('networkCtrl', function (networkService) {
    this.network = networkService.network
    console.log(networkService.connectionType)
});
