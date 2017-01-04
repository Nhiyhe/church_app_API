var User = require("../models/user");
const request = require('supertest');
var assert = require('assert');

describe("Creating User ", () => {
    
 /*   it("create a new user", (done) => {     
        const james = new User({ firstName: 'James', lastName: 'Lahbury' });
        james.save()
            .then((user) => {            
                assert(!user.isNew);
                done();                
            });        
    });*/

   /* it("create new user by finding user", (done) => {
        const john = new User({ firstName: 'John', lastName: 'Brandon' });
        john.save()
            .then(() => User.findOne({ firstName: 'John' }))
            .then((user) => {
                assert(user.lastName === 'Brandon');
                done();
            });   

    });*/
});