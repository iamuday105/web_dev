const express = require("express");
const router = express.Router();


// Import controller
const {dummyLink, likePost, unlikepost} = require("../controllers/likeController");
const {createComments} = require("../controllers/commentController")
const {createPost , getAllPosts} = require("../controllers/postController")



// create Mapping

router.get("/dummyroute", dummyLink);
router.post("/comments/create",createComments );
router.post("/posts/create",createPost );
router.get("/posts",getAllPosts );
router.post("/likes/like",likePost );
router.post("/likes/unlike",unlikepost );






//export
module.exports =router;
