var buy4meNeedItem = angular.module('buy4meNeedItem', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all needItems and show them
	$http.get('/buy4me-angular-server/needItems')
		.success(function(data) {
			$scope.needItems = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createNeedItem = function() {
		$http.post('/buy4me-angular-server/needItems', $scope.formData)
			.success(function(data) {
				$('input').val('');
				$scope.needItems = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a needItem after checking it
	$scope.deleteNeedItem = function(id) {
		$http.delete('/buy4me-angular-server/needItems/' + id)
			.success(function(data) {
				$scope.needItems = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}