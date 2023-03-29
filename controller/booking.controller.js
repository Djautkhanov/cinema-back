const Booking = require('../Models/Booking.model')

module.exports.bookingController={
    addBooking: async (req, res) =>{
        try{
            const booking = await Booking.create({

            })
            return res.json(booking)
        }catch(error){
            console.log(error)
        }
    },

    getBooking: async (req, res) =>{
        try{
            const booking = await Booking.find()   
            return res.json(booking)
        }catch(error){
            console.log(error)
        }
    },

    editBooking: async (req, res) =>{
        try{
            const booking =await  Booking.findByIdAndUpdate(req.params.id,{

            })
            return res.json(booking)
        }catch(error){
            console.log(error)    
        }
    },

    deleteBooking: async (req, res) =>{
        try{
            const booking = await Booking.findByIdAndDelete(req.params.id)
            return res.json(booking)
        }catch(error){
            console.log(error)  
        }
    }
}