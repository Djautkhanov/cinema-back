const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());
app.use(require("./routes/user.route"));
app.use(require('./routes/movies.route'))  
app.use(require('./routes/booking.route'))   

mongoose.connect(
  "mongodb+srv://vakha:vakha123@cluster0.jzwrdu1.mongodb.net/", 
  async () => {
    try {
      console.log("Успешно соединились с сервером MongoDB");
      app.listen(4000, () => {
        console.log("Сревер успешно запушен");
      });
    } catch (error) {
      console.log(error);
    }
  }
);