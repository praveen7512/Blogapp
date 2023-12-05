const Post  = require("../models/postModel")
const Comment  = require("../models/commentModel")



exports.createComment = async (req, res) => {
    try {
       const {post , user , body} = req. body 
       
       const comment = new Comment({
         post , user , body
       })

       const savedCommnet = await comment.save();


       const updatePost = await Post.findByIdAndUpdate(post , {$push :{comment : savedCommnet._id}}, {new: true})
                          .populate("comment")
                          .exec();

       res.json({ post :updatePost
        
       })               
    } catch (error) {
        return res.status(400).json({
            error : "Error while creating comment"
        }) 
    }
}