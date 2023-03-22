const mongoose = require("mongoose");

const sesionSchema = mongoose.Schema({
  sessionTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  hall: {
    type: mongoose.Types.ObjectId,
    ref: "Hall",
    required: true,
  },
  movies: {
    type: mongoose.Types.ObjectId,
    ref: "Movies",
    required: true,
  },
});

const Session = mongoose.model("Session", sesionSchema);
module.exports = Session;
