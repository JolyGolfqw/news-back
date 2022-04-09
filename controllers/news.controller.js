const News = require("../models/News.model");

module.exports.newsController = {
  addNews: async (req, res) => {
    const { img, title, text, category } = req.body;
    try {
      const news = await News.create({
        img,
        title,
        text,
        category,
      });
      return res.send(news);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getNews: async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
};
