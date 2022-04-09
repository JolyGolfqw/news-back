const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({

  news: {
    ref: 'News',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  text: {
    type: String,
    required: true,
  },

  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
