cordova-network-information-ionic
=================================

1.add the ng-cordova.js link into index.html <br>
      <script src="lib/ngCordova/dist/ng-cordova.js"></script><br>
add the cordova.js link into index.html<br>
      <script src="cordova.js"></script><br>
add the network.js link into index.html<br>
      <script src="./common/network.js"></script><br>
Inject ngCordova module into the root module.<br>
Inject NetworkInfo module into the root module.<br>
 angular.module('starter', ['ionic', 'ngCordova','NetworkCtrl','NetworkInfo']);
