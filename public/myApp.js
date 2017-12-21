// public/core.js
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//     $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
// });

    $locationProvider.hashPrefix('');

   $routeProvider.   
   when('/employeeDetail/:mode/:id?', {
      templateUrl: 'employeeDetail.html', controller: 'employeeDetailController'
   }).
   
   when('/employeeList', {
      templateUrl: 'employeeList.html', controller: 'employeeListController'
   }).

   when('/test', {
      templateUrl: 'test.html', controller: 'testController'
   }).
   
   when('/fileOps', {
      templateUrl: 'fileOps.html', controller: 'fileOpsController'
   }).
   
   otherwise({
      redirectTo: '/'
   });
	
}]);
