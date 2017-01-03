const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

/*console.log("ENVIRONMENT " + process.env.NODE_ENV);
mongoose.createConnection("mongodb://localhost/church_app_test_db");

const db = mongoose.connection;

db.once('open', () => console.log('Server is running'));

db.on('error', (error) => console.log('Oppss something went wrong ' + error));*/

beforeEach((done) => {

    mongoose.connection.collections.workers.drop(() => {
        done();        
    });

});