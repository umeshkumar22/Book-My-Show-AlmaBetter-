const mongodb = require('mongodb');

const mongoURI = "mongodb+srv://Admin:t4UaVnaztokq36sm@mernuser.mzkelwc.mongodb.net/?retryWrites=true&w=majority";

let mongoose = require('mongoose');
const { bookMovieSchema } = require('./model/schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
    
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)


exports.connection = collection_connection;
