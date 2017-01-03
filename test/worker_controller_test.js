const Worker = require('../models/user');
const app = require('../app');
const request = require('supertest');
const assert = require('assert');

describe("WORKER CONTROLLER TEST", () => {
    
    it("GET WORKERS /api/workers", (done) => {
       
        const james = new Worker({ firstName: 'James', lastName: 'Brandon' });
        const andrew = new Worker({ firstName: 'andrew', lastName: 'Abraham' });
         
        Promise.all([james.save(), andrew.save()])
            .then(() => {
                request(app)
                    .get('/api/workers')
                    .end(() => {
                        Worker.count().then((count) => {
                            assert(count === 2);
                            done();
                    })
                })
                    })
        
    });

    it("GET SINGLE WORKER /api/worker/2", (done) => {
        
        const debby = new Worker({ firstName: "Debby", lastName: "Adeyokun" });

        debby.save()
            .then(() => {
                request(app)
                    .get('/api/workers' + debby._id)
                    .end(() => { 
                        Worker.findById(debby._id)
                            .then((user) => {
                                assert(user.lastName === "Adeyokun");
                                done();
                        })
                    })
            })

    });


    it("CREATE NEW WORKER  POST => /api/workers", (done) => {
 
        Worker.count()       
            .then((count) => {
               
                request(app) 
                    .post("/api/workers")
                    .send({ firstName: 'Paul', lastName: 'Hughes' }) 
                    .end(( ) => {                        
                        Worker.count().then((newCount) => {
                            assert(count + 1 === newCount);
                            done();
                   })
               }) 
                
           } ) 
       
    });

    });


