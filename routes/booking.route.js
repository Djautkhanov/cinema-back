const Router = require('express')

const bookingController = require('../controller/booking.controller')
const router = Router()

router.post('/booking', bookingController.addBooking)
router.get('/booking', bookingController.getBooking)
router.patch('/booking', bookingController.editBooking)
router.delete('/booking', bookingController.deleteBooking)   


module.exports = Router  