const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({

  

  news: {
    ref: 'News',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  author: {
    type: String,
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

  date: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
