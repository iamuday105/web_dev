// import mongoose
const mongoose = require("mongoose");

// routes handler

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Like",
  }],
  comments:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }]
});

// exports

module.exports = mongoose.model("Post", postSchema);
