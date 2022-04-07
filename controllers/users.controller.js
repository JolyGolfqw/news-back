const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  registration: async (req, res) => {
    try {
      const { login, password } = req.body

      const hash = await bcrypt.hash(password, Number(process.env.ROUNDS))

      const user = await User.create({login, password: hash})

      res.json(user)
    } catch (err) {
        res.status(400).json({error: `Ошибка при регистрации: ${err.message}`})
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body
    const candidate = await User.findOne({login})

    if (!candidate) {
        return res.status(401).json('Неверный логин')
    }

    const valid = bcrypt.compare(password, candidate.password)

    if (!valid) {
        return res.status(401).json('Неверный пароль')
    }

    const payload = {id: candidate._id}

    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '24h'})
    res.json(token)
  },
};
