const User = require("../Models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      const hash = await bcrypt.hash(
        req.body.password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        login: req.body.login,
        password: hash,
      });
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },

  getUser: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("deleted");
    } catch (error) {
      res.json(error.message);
    }
  }, 

  login: async (req, res) => {
    try {
      const candidate = await User.findOne({ login: req.body.login });
      if (!candidate) {
        return await res.status(401).json({ error: "неверный логин" });
      }
      const valid = await bcrypt.compare(req.body.password, candidate.password);
      if (!valid) {
        return await res.status(401).json({ error: "неверный пароль" });
      }
      const payload = {
        id: candidate._id,
      };
      const token = await jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "7d",
      });
      res.json({ token });
    } catch (error) {
      res.json(error.message);
    }
  },
};
