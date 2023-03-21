const mongoose = require('mongoose')

const moviesSchema = mongoose.Schema({  
    image: String,
    name: String,
    year: Number,  
    genre: String,
    director: String,  
    description: String,

});

const Movies = mongoose.model('Movies', moviesSchema)           

module.exports = Movies  