const Hall = require("../Models/Hall.model");

module.exports.hallController = {
  addHall: async (req, res) => {
    try {
      const hall = await Hall.create({
        seansTime: req.body.seansTime,
        name: req.body.name,
        hallMovi: req.body.hallMovi,
        price: req.body.price,
        format: req.body.format,
        rows: 8,
        seatsPerRow: 104,
        seats: [
          { row: 1, seatNumber: 1 },
          { row: 1, seatNumber: 2 },
          { row: 1, seatNumber: 3 },
          { row: 1, seatNumber: 4 },
          { row: 1, seatNumber: 6 },
          { row: 1, seatNumber: 7 },
          { row: 1, seatNumber: 8 },
          { row: 1, seatNumber: 9 },
          { row: 1, seatNumber: 10 },
          { row: 1, seatNumber: 11 },
          { row: 2, seatNumber: 1 },
          { row: 2, seatNumber: 2 },
          { row: 2, seatNumber: 3 },
          { row: 2, seatNumber: 4 },
          { row: 2, seatNumber: 5 },
          { row: 2, seatNumber: 6 },
          { row: 2, seatNumber: 7 },
          { row: 2, seatNumber: 8 },
          { row: 2, seatNumber: 9 },
          { row: 2, seatNumber: 10 },
          { row: 2, seatNumber: 11 },
          { row: 3, seatNumber: 1 },
          { row: 3, seatNumber: 2 },
          { row: 3, seatNumber: 3 },
          { row: 3, seatNumber: 4 },
          { row: 3, seatNumber: 5 },
          { row: 3, seatNumber: 6 },
          { row: 3, seatNumber: 7 },
          { row: 3, seatNumber: 8 },
          { row: 3, seatNumber: 9 },
          { row: 3, seatNumber: 10 },
          { row: 3, seatNumber: 11 },
          { row: 4, seatNumber: 1 },
          { row: 4, seatNumber: 2 },
          { row: 4, seatNumber: 3 },
          { row: 4, seatNumber: 4 },
          { row: 4, seatNumber: 5 },
          { row: 4, seatNumber: 6 },
          { row: 4, seatNumber: 7 },
          { row: 4, seatNumber: 8 },
          { row: 4, seatNumber: 9 },
          { row: 4, seatNumber: 10 },
          { row: 4, seatNumber: 11 },
          { row: 5, seatNumber: 1 },
          { row: 5, seatNumber: 2 },
          { row: 5, seatNumber: 3 },
          { row: 5, seatNumber: 4 },
          { row: 5, seatNumber: 5 },
          { row: 5, seatNumber: 6 },
          { row: 5, seatNumber: 7 },
          { row: 5, seatNumber: 8 },
          { row: 5, seatNumber: 9 },
          { row: 5, seatNumber: 10 },
          { row: 5, seatNumber: 11 },
          { row: 5, seatNumber: 12 },
          { row: 5, seatNumber: 13 },
          { row: 5, seatNumber: 14 },
          { row: 6, seatNumber: 1 },
          { row: 6, seatNumber: 2 },
          { row: 6, seatNumber: 3 },
          { row: 6, seatNumber: 4 },
          { row: 6, seatNumber: 5 },
          { row: 6, seatNumber: 6 },
          { row: 6, seatNumber: 7 },
          { row: 6, seatNumber: 8 },
          { row: 6, seatNumber: 9 },
          { row: 6, seatNumber: 10 },
          { row: 6, seatNumber: 11 },
          { row: 6, seatNumber: 12 },
          { row: 6, seatNumber: 13 },
          { row: 6, seatNumber: 14 },
          { row: 7, seatNumber: 1 },
          { row: 7, seatNumber: 2 },
          { row: 7, seatNumber: 3 },
          { row: 7, seatNumber: 4 },
          { row: 7, seatNumber: 5 },
          { row: 7, seatNumber: 6 },
          { row: 7, seatNumber: 7 },
          { row: 7, seatNumber: 8 },
          { row: 7, seatNumber: 9 },
          { row: 7, seatNumber: 10 },
          { row: 7, seatNumber: 11 },
          { row: 7, seatNumber: 12 },
          { row: 7, seatNumber: 13 },
          { row: 7, seatNumber: 14 },
          { row: 8, seatNumber: 1 },
          { row: 8, seatNumber: 2 },
          { row: 8, seatNumber: 3 },
          { row: 8, seatNumber: 4 },
          { row: 8, seatNumber: 5 },
          { row: 8, seatNumber: 6 },
          { row: 8, seatNumber: 7 },
          { row: 8, seatNumber: 8 },
          { row: 8, seatNumber: 9 },
          { row: 8, seatNumber: 10 },
          { row: 8, seatNumber: 11 },
          { row: 8, seatNumber: 12 },
          { row: 8, seatNumber: 13 },
          { row: 8, seatNumber: 14 },
          { row: 8, seatNumber: 15 },
          { row: 8, seatNumber: 16 },
          { row: 8, seatNumber: 17 },
          { row: 8, seatNumber: 18 },
        ],
      });
      return res.json(hall);
    } catch (error) {
      res.json(error.message);
    }
  },

  getHall: async (req, res) => {
    try {
      const booking = await Hall.find();
      return res.json(booking);
    } catch (error) {
      console.log(error);
    }
  },

  bookingTicket: async (req, res) => {
    try {
      const hall = await Hall.findById(req.params.id).populate("seats");

      const booking = await hall.seats.map((item) => {
        if (
          item.row == req.body.row &&
          item.seatNumber == req.body.seatNumber
        ) {
          item.isReserved = true;
        }

        return item;
      });
      const bookingTrue = await hall.updateOne({
        seats: booking,
      });

      return res.json(bookingTrue);
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteHall: async (req, res) => {
    try {
      await Hall.findByIdAndDelete(req.params.id);
      return res.json("deleted");
    } catch (error) {
      console.log(error);
    }
  },
};
