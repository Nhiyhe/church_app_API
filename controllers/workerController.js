const Workers = require('../models/user');
const  ObjectID = require('mongodb').ObjectID;

module.exports = function (app) {
    
    app.get('/api/workers/:id', (req, res) => {

        if(!ObjectID.isValid(req.params.id)){
            return res.status(404).send("Not a valid ID");
        }
            Workers.findById(req.params.id, function(err, foundWorker){
                if(err){
                    res.status(400).send({err});
                }else{
                    if(!foundWorker){
                        return res.status(404).send({error:"Worker Not found."});
                    }
                    res.send(foundWorker);
                }
            })
    });

    //request GET => api/workers/
    app.get('/api/workers', (req, res) => {
        
        Workers.find({}, function (err, workers) {
            if (err) {
                res.send(400).send({ error: err.message });
            } else {
                res.send(workers);
            }
        });
    });

    

    app.post("/api/workers", (req, res) => {
        Workers.create(req.body, function (err, newlyCreated) {
            if (err) {
                res.status(403).send({ error: err.message });
            } else {
                res.send(newlyCreated);
            }
        });
    });

    app.put("/api/workers/:id", (req, res) => {
        Workers.findByIdAndUpdate(req.params.id, req.body)
            .then(() => Workers.findById(req.params.id))
            .then((worker) => res.send(worker))
            .catch((err) => res.status(404).send({ error: err.message }));
    });


    app.delete("/api/workers/:id", (req, res) => {
        Workers.findByIdAndRemove(req.params.id)
            .then((worker) => res.send(worker))
            .catch((err) => res.status(404).send({ error: err.message }));
    });
    
}