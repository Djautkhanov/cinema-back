const { Router } = require('express')

const  {moviesController} = require('../controller/movies.controller')

const router = Router()

router.post('/movies', moviesController.addMovies)
router.get('/movies', moviesController.getMovies)
router.patch('/movies/:id', moviesController.editMovies)
router.delete('/movies/:id', moviesController.deleteMovies) 


module.exports = router  