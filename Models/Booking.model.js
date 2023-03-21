const mongoose =require('mongoose')

const bookingShema = mongoose.SchemaType({
      
})


const Booking = mongoose.model('Booking', bookingShema)

module.exports = Booking   