import { Post } from '../models/Post.js';

export const getPosts = async ( req, res ) => {
    try {
        //throw new Error('query failed');
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPost = async ( req, res ) => {
};

export const createPost = async ( req, res ) => {
    const { 
        caption, 
        imageURL, 
        likes, 
        ownerImageURL, 
        ownerUid, 
        ownerUsername 
    } = req.body;

    try {
        const newPost = await Post.create({
            caption,
            imageURL,
            likes,
            ownerImageURL,
            ownerUid,
            imageURL,
            ownerUsername
        });
        res.json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePosts = async ( req, res ) => {

};

export const deletePosts = async ( req, res ) => {
};


