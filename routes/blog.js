const express = require("express");
const { createComment } = require("../controllers/commentController");
const { createPost , getAllPosts } = require("../controllers/postController");
const { likepost, unlikePost } = require("../controllers/likeController");
const router = express.Router()


router.post("/create/comment", createComment)

router.post("/posts/create" ,createPost)

router.get("/posts/getAll", getAllPosts)

router.post("/likes/like", likepost)

router.post("/likes/unlike", unlikePost)



module.exports = router;