const mongoose = require("mongoose");

const HallShema = mongoose.Schema({
  seansTime: {
    type : String ,
    required : true
  },
  name: {
    type: String,
    required: true,
  },
  hallMovi: {
    type : mongoose.Types.ObjectId,
    ref: "Movies"
  },
  price: {
    type : Number,
    required : true
  },
  format: {
    type : String,
    required : true
  },
  rows: {
    type: Number,
    required: true,
  },
  seatsPerRow: {
    type: Number,
    required: true,
  },
  seats: [{ row: Number, seatNumber: Number, isReserved: { type: Boolean, default: false } }],
});

const Hall = mongoose.model("Hall", HallShema);

module.exports = Hall;
