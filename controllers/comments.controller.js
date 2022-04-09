const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addCommentToNews: async (req, res) => {
    try {
      const comment = await Comment.create({
        user: req.body.user,
        text: req.body.text,
        news: req.body.news,
      });
      return res.json(comment);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getCommentaries: async (req, res) => {
      try {
        const comments = await Comment.find().populate('user')
        res.json(comments)
      } catch (err) {
          res.json({error: err.message})
      }
  },

  deleteComment: async (req, res) => {
    try {
      const comments = await Comment.findByIdAndDelete(req.params.id)
      res.json(comments)
    } catch (err) {
        res.json({error: err.message})
    }
}
};
