myApp.directive('empRow', function(){
    var directive = {};
    directive.restrict = 'E';
    //directive.templateUrl = '/directives/employeeRowDirective.html'
//     directive.template = '<td>{{ emp.Id }} </td><td>{{ emp.Name }} </td><td>{{ emp.Salary }} </td>'
// +'<td><a href="#/employeeDetail/view/{{emp.Id}}"><span role="button" class="glyphicon glyphicon-file"></span></a></td>'
// +'<td><a href="#/employeeDetail/edit/{{emp.Id}}"><span role="button" class="glyphicon glyphicon-edit"></span></a></td>'
// +'<td><a ng-click="deleteEmployee(emp.Id)"><span role="button" class="glyphicon glyphicon-remove"></span></a></td>'
directive.template = '<div>{{ emp.Id }}</div><div>{{ emp.Name }}</div><div>{{ emp.Salary }}</div>'
    directive.scope = {
        emp : '=emp'
    }

    return directive;
})