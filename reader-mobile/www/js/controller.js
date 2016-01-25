angular.module('reader.controller', [])

.controller('FluxListCtrl', function($scope, $ionicModal, $http, Flux) {
    $scope.lists = [];
    $scope.formData = {};

    $ionicModal.fromTemplateUrl('new-list.html', function(modal) {
	$scope.listModal = modal;
    }, {
	scope: $scope,
	animation: 'slide-in-up'
    });

    $scope.createRss = function() {
	if ($scope.formData.url.length > 0 && $scope.formData.name.length > 0) {
	    $http.post('http://127.0.0.1:3000/', $scope.formData)
		.success(function(data) {
		    $scope.formData = {};
		    Flux.set(data.lists);
		    $scope.lists = Flux.all();
		})
		.error(function(data) {
		    console.log("error: " + data);
		});
	    $scope.listModal.hide();
	}
    };

    $scope.removeFromLists = function(index) {
	Flux.remove(index);
	$scope.lists = Flux.all();
    };

    $scope.newList = function() {
	$scope.listModal.show();
    };

    $scope.closeNewList = function() {
	$scope.listModal.hide();
    };
})

.controller('FluxDetailCtrl', function($scope, $stateParams, Flux) {
    $scope.elem = Flux.get($stateParams.fluxId);
});
