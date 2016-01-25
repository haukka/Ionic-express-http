angular.module('reader', ['ionic', 'reader.services', 'reader.controller'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
	if(window.cordova && window.cordova.plugins.Keyboard) {
	    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    cordova.plugins.Keyboard.disableScroll(true);
	}
	if(window.StatusBar) {
	    StatusBar.styleDefault();
	}
    });
})

.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
	.state('tab', {
	    url: '/tab',
	    abstract: true,
	    templateUrl: 'templates/head.html'
	})
	.state('tab.flux', {
	    url: '/flux',
	    views: {
		'tab-flux': {
		    templateUrl: 'templates/flux.html',
		    controller: 'FluxListCtrl'
		}
	    }
	})
	.state('tab.flux-detail',{
	    url: '/flux-detail/:fluxId',
	    views: {
		'tab-flux': {
		    templateUrl: 'templates/flux-detail.html',
		    controller: 'FluxDetailCtrl'
		}
	    }
	});
    $urlRouterProvider.otherwise('/tab/flux');
});
