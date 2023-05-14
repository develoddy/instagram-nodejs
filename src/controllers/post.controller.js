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
    try {
        const { id } = req.params;
        const post = await Post.findOne({
            where: {
                id
            }
        });

        if ( !post ) {
            // Si no hay usuario, enviamos al cliente un 404.
            return res.status(404).json({ message: 'Profile does not exists.' });
        }
        res.json(post);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPost = async ( req, res ) => {
    const { 
        caption, 
        imageURL, 
        ownerImageURL, 
        ownerUid, 
        ownerUsername,
        profileId
    } = req.body;

    try {
        const newPost = await Post.create({
            caption,
            imageURL,
            ownerImageURL,
            ownerUid,
            imageURL,
            ownerUsername,
            profileId
        });
        res.json(newPost);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updatePosts = async ( req, res ) => {
    try {
        const { id } = req.params;
        const posts = await Post.findOne({
            where: { id },
        });
        posts.set(req.body);
        await posts.save();
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePosts = async ( req, res ) => {
    try {
        const { id } = req.params;
        await Post.destroy({
            where: {
                id,
            }
        });
        // Enviar al cliente diciendo que no se enviará ningun dato, pero que todo fue bien.
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};