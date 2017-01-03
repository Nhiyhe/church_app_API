const Workers = require('../models/user');

module.exports = function (app) {
    
    //request GET => api/workers/
    app.get('/api/workers', (req, res) => {
        
        Workers.find({}, function (err, workers) {
            if (err) {
                res.send(403).send({ error: err.message });
            } else {
                res.send(workers);
            }
        });
    });

    app.get('/api/workers/:id', (req, res) => {
        Workers.findById(req.params.id, function (err, foundWorker) {
            if (err) {
                res.status(404).send({ error: "Worker Not Found. " + err.message });
            } else {
                res.send(foundWorker);
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