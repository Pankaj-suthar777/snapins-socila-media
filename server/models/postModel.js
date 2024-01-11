const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    caption: {
      type: String,
      required: true,
      trim: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://res-console.cloudinary.com/dgkc7j457/thumbnails/v1/image/upload/v1704650154/cm1wL29vN3ZxMnB2ZXhrbGQxajhpOTd6/as_is",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("posts", postSchema);

module.exports = Post;
