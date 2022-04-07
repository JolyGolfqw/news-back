const News = require('../models/News.model')

module.exports.newsController = {
    addNews: async (req, res) => {
        const {img, title, text, category} = req.body
        try {
            const news = await News.create({
                img,
                title,
                text,
                category
            })
            return res.json(news)
        } catch (err) {
            return res.json({error: err.message})
        }
    }
}