
var Department = require('../models/department');
var Workers = require('../models/user');

var departments = [{name:'Choir'},{name:'Engineering'},{name:'Ushers'},{name:'Hospitality'}];

var Users = [

                {firstname:'James', lastName:'Broody', birthday:'12/05/2000',
                isActive:true, dateJoined:'12/12/2015', dateLeft:null,phoneNumber:'074848484'
                ,email:'james@yahoo.com'},

                {firstname:'Paul', lastName:'Kitty', birthday:'12/05/1963',
                isActive:false, dateJoined:'12/12/2013', dateLeft:null,phoneNumber:'074848484'
                ,email:'paul@yahoo.com'},

                {firstname:'John', lastName:'Papa', birthday:'12/05/1963',
                isActive:true, dateJoined:'12/12/2015', dateLeft:null,phoneNumber:'074848484'
                ,email:'john@yahoo.com'},

                {firstname:'Debby', lastName:'Hundman', birthday:'12/05/2001',
                isActive:false, dateJoined:'12/12/2010', dateLeft:null,phoneNumber:'074848484'
                ,email:'debby@yahoo.com'}

];

var AddDepartments = function(){

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

var AddWorkers = function(){

Workers.remove({}, function(err, response){
    if(err){
        cosole.log(err);
    }else{
        console.log("Workers successfully removed..");
    }
});

 Users.forEach(function(user){
     Workers.create(user, function(err, user){
         if(err){
             console.log(err);
         }else{
             console.log("New Worker Added " + user);
         }
     });
 })
}

module.exports = {
    AddDepartments:AddDepartments,
    AddWorkers:AddWorkers
};