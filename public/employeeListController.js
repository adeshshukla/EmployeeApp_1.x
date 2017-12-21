myApp.controller('employeeListController', function($scope, $http) {
    $scope.formData = {};    
    
    $scope.getAllEmployee = function() {
      //  console.log('Get all employee');
        $http.get('/api/getAllEmployee')
            .then(function(data) {
                $scope.employees = data.data;
            },function(err) {
                console.log('Return Error from service');
                console.log(err);
            });
    };

    $scope.getAllEmployeeByName = function() {
        var empName = 'Adesh';
        console.log('Get employee by Name : ' + empName);
        $http.get('/api/getAllEmployeeByName/' + empName)
            .then(function(data) {
                $scope.employees = data.data;                
            },function(err) {
                console.log('Return Error from service');
                console.log(err);
            });
    };

    $scope.getAllEmployeeById = function(empId) {       
        console.log('Get employee by Id : ' + empId);
        $http.get('/api/getAllEmployeeById/' + empId)
            .then(function(data) {                
                $scope.selectedEmployee = data.data[0].Name;                
            },function(err) {
                console.log('Return Error from service');
                console.log(err);
            });
    };

    $scope.deleteEmployee = function(empId){
        $http.delete('/api/deleteEmployee/' + empId)
        .then(function(data){
            console.log('Employee deleted successfully...!!!');
            $scope.getAllEmployee();
        }, function(err){
                console.log('Error in deleting data');
                console.log(err);
        });
    }

    $scope.getAllEmployee();
});