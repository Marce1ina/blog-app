const Post = require("../models/post.model");

exports.getPosts = async (req, res) => {
    try {
        res.status(200).json(await Post.find());
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getSinglePost = async (req, res) => {
    try {
        let post = await Post.findOne({ id: req.params.id });
        post ? res.status(200).json(post) : res.status(404).send("Post not found");
    } catch (err) {
        res.status(500).json(err);
    }
};
