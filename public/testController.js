myApp.controller('testController', function($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all employees and show them
    
    
    $scope.getAllEmployee = function() {
        console.log('Get all employee');
        $http.get('/api/getAllEmployee')
            .then(function(data) {
                console.log('Return Success from service');
                $scope.employees = data.data;
                // console.log(data.data[0].Name);
            },function(data) {
                console.log('Return Error from service');
                console.log(data);
            });
    };

    $scope.getAllEmployeeByName = function() {
        // var parameters = {
        //         EmployeeName: 'Adesh'//$scope.keyword
        //     };
        //     var config = {
        //         params: parameters
        //     };
        var empName = 'Adesh';
        console.log('Get employee by Name : ' + empName);
        $http.get('/api/getAllEmployeeByName/' + empName)
            .then(function(data) {
                console.log('Return Success from service');
                $scope.employees = data.data;                
                // console.log(data.data[0].Name);
            },function(data) {
                console.log('Return Error from service');
                console.log(data);
            });
    };

    $scope.getAllEmployeeById = function(empId) {       
        console.log('Get employee by Id : ' + empId);
        $http.get('/api/getAllEmployeeById/' + empId)
            .then(function(data) {
                console.log('Return Success from service');
                $scope.selectedEmployee = data.data[0].Name;
                // $scope.employees = data.data;
                // console.log(data.data[0].Name);
            },function(data) {
                console.log('Return Error from service');
                console.log(data);
            });
    };
});