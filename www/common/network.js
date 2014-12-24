'use strict'

var network = angular.module('NetworkInfo',[]);
	
	network.factory('networkService',function  ($cordovaNetwork) {
		this.network = function(){
	      if($cordovaNetwork.isOnline()) {
	       return this.connectionType = 'Online';
	      }
	      else if ($cordovaNetwork.isOffline()) {
	         return this.connectionType = 'Offline';
	      }
	      else {
	        return this.errorMsg = 'Error getting isOffline / isOnline methods';
	      }
	  	}
	  	return {
	  			network: this.network
	  			}
	})

	.run(function ($rootScope, $ionicPlatform, $cordovaNetwork) {

	    $ionicPlatform.ready(function () {
	      
	       $cordovaNetwork.watchOffline();
	       $cordovaNetwork.watchOnline();


	      $rootScope.$on("networkOffline", function () {
	        alert("iPad is now Offline!");
	      });


	      $rootScope.$on("networkOnline", function () {
	        alert("iPad is Online!");
	      });
	    })
	});