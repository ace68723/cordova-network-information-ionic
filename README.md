cordova-network-information-ionic
=================================

1.add the ng-cordova.js link into index.html: <br>
>     <script src="lib/ngCordova/dist/ng-cordova.js"></script>
>

2.add the cordova.js link into index.html:<br>
>      <script src="cordova.js"></script>
>

3.add the network.js link into index.html:<br>
>      <script src="./common/network.js"></script>
>

4.Inject ngCordova module into the root module,<br><br>
5.Inject NetworkInfo module into the root module,<br><br>
6.Inject NetworkCtrl module into the root module:<br><br>
> angular.module('starter', ['ionic', 'ngCordova','NetworkCtrl','NetworkInfo']);
>

7.Inject network services into networkCtrl controller<br>
    inside NetworkCtrl module:
>angular.module('NetworkCtrl', [])
>
>    .controller('networkCtrl', function (networkService) {
>
>          this.network = networkService.network
>
>    });

8.use "Controller as" syntax
>    .state('tab.dash', {

               url: '/dash',
           
                views: {
            
                  'tab-dash': {
            
                    templateUrl: 'templates/tab-dash.html',
            
                    controller: 'networkCtrl as network'
            
                  }
            
                }
            
>  });

