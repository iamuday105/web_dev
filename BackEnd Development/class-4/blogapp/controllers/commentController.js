

// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// business logic

exports.createComments = async (req, res) => {

    try{
        //  fetch data from the request body 
        const {post, user, body} = req.body;

        // create a commen object
        const comment = new Comment({
            post, user, body
        });

        // save the new comment into the database
        const savedComment = await comment.save();
        

        // find the post by ID , and the new connect to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments:savedComment._id}}, {new:true})
        .populate("comments") //populate the comments array with comment documents
        .exec();


        res.json({
            post: updatedPost,
        })

    }
    catch(error){
        return res.status(500).json({
            error: "Error while creating comment",
        })
    }
}
