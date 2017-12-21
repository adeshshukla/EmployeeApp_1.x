myApp.controller('employeeDetailController', function($scope,$http,$routeParams,$location){
    $scope.mode = $routeParams.mode
    $scope.id = $routeParams.id;
    // console.log(mode);
    // console.log($scope.id);
    $scope.isViewMode = $scope.mode === 'view' ? true:false;
    $scope.pageTitle = $scope.mode === 'edit'? "Edit employee details" : $scope.mode === 'add'? "Add new Employee" : "Employee Details"

    if($scope.mode !== 'add'){
        $http.get('/api/getAllEmployeeById/'+ $scope.id)
        .then(function(response){
            // console.log('Success return from service');
            $scope.employee = response.data[0];
            // console.log($scope.employee);
        }, 
        function(err){
                console.log('Error return from service');
                console.log(err);
        });
    }

    $scope.saveEmployee = function(){
        // console.log($scope.employee);
        if($scope.mode === 'add'){
            $http.post('/api/addEmployee/', $scope.employee)
            .then(function(response){
                console.log('New Employee added successfully...!!!');
                // console.log(response);
                $location.path('/employeeList');
            },function(err){
                console.log('Error return from service');
                // console.log(err);
            });
        }
        else{
            $http.put('/api/saveEmployee/' + $scope.id , $scope.employee)
            .then(function(response){
                console.log('Data updated successfully...!!!');
                $location.path('/employeeList');
                //console.log(response);
            },function(err){
                console.log('Error return from service');
                //console.log(err);
            });
        }
    }
});