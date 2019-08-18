const Post = require("../models/post.model");
const uuid = require("uuid");

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

exports.addPost = async function(req, res) {
    try {
        const { body } = req;

        if (body.id) {
            let filter = { id: body.id };

            await Post.findOneAndUpdate(filter, body);

            let updatedPost = await Post.findOne(filter);
            res.status(200).json(updatedPost);
        } else {
            let newPost = new Post(body);
            newPost.id = uuid();

            postSaved = await newPost.save();
            res.status(200).json(postSaved);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
