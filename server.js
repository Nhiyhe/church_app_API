/// <reference path="./typings/tsd.d.ts" />

var express         = require('express'),
    app             = express(),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser');


var PORT = process.env.PORT | 3300;


app.get('/', (req,res) =>{
    res.send('Welcome to Church app');
});

app.listen(PORT, () =>{
    console.log(`Server is running on Port ${PORT}`);
});