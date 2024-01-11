const router = require("express").Router();
const User = require("../models/userModel");
const Post = require("../models/postModel");

router.post("/new-post", async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    await newPost.save();
    res.send({
      success: true,
      message: "Posted Succssfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
