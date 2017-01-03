/// <reference path="./typings/tsd.d.ts" />

var
    app = require('./app'),
    seedDB = require('./controllers/seedDB');
    


var PORT = process.env.PORT | 3300;


app.get('/', (req,res) =>{
    res.send('Welcome to Church app');
});

//seedDB();
//seedDB.AddWorkers();

app.listen(PORT, () =>{
    console.log(`Server is running on Port ${PORT}`);
});