const { Schema } = require('mongoose');

//Schema model for store the booking details in mongoDB
const bookMovieSchema = new Schema({
    movie: Schema.Types.String,
    slot: Schema.Types.String,
    seats: {
        A1: Schema.Types.Number,
        A2: Schema.Types.Number,
        A3: Schema.Types.Number,
        A4: Schema.Types.Number,
        D1: Schema.Types.Number,
        D2: Schema.Types.Number
    }

})

exports.bookMovieSchema = bookMovieSchema;