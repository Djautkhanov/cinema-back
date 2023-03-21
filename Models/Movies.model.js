const mongoose = require('mongoose')

const moviesSchema = mongoose.SchemaType({
    image: String,
    name: String,
    year: String,
    description: String,
    genre: String,
    director: String,  

});

const Movies = mongoose.model('Movies', moviesSchema)           

module.exports = Movies  