const Like = require("../models/likeModel")
const Post = require("../models/postModel")


exports.likepost = async (req , res) => {
    try {
        const {post , user} = req.body
        const like = new Like({
            post , user
        })
        console.log("wokring is fine")

        const savedLike = await like.save();
        const updatePost =await Post.findByIdAndUpdate(post , {$push : { like : savedLike._id}}, {new :true })
        
        res.json({ 
            like :updatePost
        
        })  

    } catch (error) {
        return res.status(400).json({
            error : "Error while liking post"
        }) 
    }
}

exports.unlikePost = async (req, res)=>{
    try {
        const {post, like} = req.body

        const deletedLike = await Like.findOneAndDelete({
            post : post , _id : like });

        const updatedPost = await Post.findByIdAndUpdate(post , {$pull :{ like: deletedLike._id}},{new :true }) 
        res.send(updatedPost)

    } catch (error) {
        return res.status(400).json({
            error : "Error while unlinking  post"
        }) 
    }
}