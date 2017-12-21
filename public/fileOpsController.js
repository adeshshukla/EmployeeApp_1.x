myApp.controller('fileOpsController', function($scope, $http) {
    $scope.empData = [];
	
	$scope.getTextFileData = function(){
		console.log('---- Inside Angular js getTextFileData  ---');
		 $http.get('/api/getTextFileData')
            .then(function(data) {
				console.log('---- Return SUCCESS from getTextFileData service ---');
				console.log(data);
                $scope.empData = data.data;
            },function(err) {
                console.log('Return ERROR from getTextFileData service');
                console.log(err);
            });
	}
});