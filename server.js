/// <reference path="./typings/tsd.d.ts" />

var express         = require('express'),
    app             = express(),
    mongoose        = require('mongoose'),
    seedDB          = require('./controllers/seedDB');
    bodyParser      = require('body-parser');


var PORT = process.env.PORT | 3300;

mongoose.connect("mongodb://localhost/church_app_db");

var db = mongoose.connection;

db.once('error', () => {
    console.error("Database Not Connected..");
});

db.open('connect', () =>{
    console.log("Database is Online..");
});


app.get('/', (req,res) =>{
    res.send('Welcome to Church app');
});

//seedDB();

app.listen(PORT, () =>{
    console.log(`Server is running on Port ${PORT}`);
});