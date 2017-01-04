const express = require('express');
const app = express();
const workerController = require('./controllers/workerController');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var env = process.env.NODE_ENV || 'development';

mongoose.Promise = global.Promise;

if (env === 'development') {
    mongoose.connect("mongodb://localhost/church_app_db");
} else if (env === 'test') {
    mongoose.connect("mongodb://localhost/church_app_db_test");
}

console.log(env);

app.use(bodyParser.json({ urlEncoded: true }));
var db = mongoose.connection;

db.on('error', () => {
    console.error("Database Not Connected..");
});

db.once('open', () =>{
    console.log("Database is Online..");
});

workerController(app);

module.exports = app;