const router = require("express").Router();

const Post = require("../models/postModel");
const cloudinary = require("../config/cloudinaryConfig");
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

router.post(
  "/new-post",
  authMiddleware,
  multer({ storage: storage }).single("file"),
  async (req, res) => {
    console.log(req.body);
    try {
      //upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "snp",
      });

      const newPost = new Post({
        users: req.body.userId,
        description: req.body.description,
        image: result.secure_url,
      });
      await newPost.save();

      const postId = req.body.postId;

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
  }
);
router.get("/get-post", async (req, res) => {
  try {
    const allPosts = await Post.find({});
    res.send({
      success: true,
      data: allPosts,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
