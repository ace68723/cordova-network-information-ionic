cordova-network-information-ionic
=================================

1.add the ng-cordova.js link into index.html <br>
     src="lib/ngCordova/dist/ng-cordova.js"<br><br>
2.add the cordova.js link into index.html<br>
       src="cordova.js"<br><br>
3.add the network.js link into index.html<br>
       src="./common/network.js"<br><br>
4.Inject ngCordova module into the root module.<br><br>
5.Inject NetworkInfo module into the root module.<br><br>
 angular.module('starter', ['ionic', 'ngCordova','NetworkCtrl','NetworkInfo']);
