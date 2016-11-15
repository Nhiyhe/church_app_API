
var Department = require('../models/department');

var departments = [{name:'Choir'},{name:'Engineering'},{name:'Ushers'},{name:'Hospitality'}];



var AddDepartemnts = function(){

    Department.remove({}, function(err, response){
        if(err){
            console.log(err);
        }else{
            console.log("Departments successfully removed");
        }
    });

    departments.forEach(function(dept){
        Department.create(dept, function(err, department){
            if(err){
                console.log(err);
            }else{
                console.log("New Department created " + department);
            }
        });
    });
}

module.exports = AddDepartemnts;