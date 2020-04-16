// Database
const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://andrese7:abc123def@cluster0-wt7gc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then( () => console.log("-Succesful connection to database-"))
        .catch( err => console.log(err) );