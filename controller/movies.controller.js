
const Movies = require('../Models/Movies.model')  


module.exports.moviesController ={
    addMovies: async(req, res) =>{
        try{
            const movies = await Movies.create({
               image: req.body.image,
               name: req.body.name,
               year: req.body.year,
               genre:req.body.year,
               director: req.body.director  
            })
            return res.json(movies)
        }  catch(error){
          console.log(error)  
        }
    },

    getMovies: async (req, res) =>{
        try{
            const movies = await Movies.find()
            return res.json(movies)
        }catch(error){
            res.json(error.message)
        }
    },


    editMovies: async (req, res) =>{
        try{
            const movies = await Movies.findByIdAndUpdate(req.params.id,{
                image: req.body.image,
                name: req.body.name,
                year: req.body.year,
                genre:req.body.year,
                director: req.body.director 
            })
            return res.json(movies)
        } catch(error){
            console.log(error)
        }
    },


   deleteMovies: async (req, res) =>{
      try{
        const movies = await Movies.findByIdAndDelete(req.params.id)
        return res.json(movies)
      }catch(error){
        console.log(error)
      }
   }
}