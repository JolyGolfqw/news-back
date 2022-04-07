const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  category: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  comments: [
    {
      ref: "Comment",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
