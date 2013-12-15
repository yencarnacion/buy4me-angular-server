var buy4meTraveling = angular.module('buy4meTraveling', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/buy4me-angular-server/travelLocations')
        .success(function(data) {
            $scope.travelLocations = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTravelLocation = function() {
        $http.post('/buy4me-angular-server/travelLocations', $scope.formData)
            .success(function(data) {
                $('input').val('');
                //$scope.needItems = data;
                d = data;
                $scope.travelLocations.splice(1, 0, data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTravelLocation = function(id) {
        $http.delete('/buy4me-angular-server/travelLocations/' + id)
            .success(function(data) {
                //$scope.needItems = data;
                d = data;
                $scope.travelLocations.splice(data, 1);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}