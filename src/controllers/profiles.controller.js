import { Profile } from '../models/Profile.js';
import { Post } from '../models/Post.js';

export const getProfiles = async ( req, res ) => {
    try {
        const profiles = await Profile.findAll();
        res.json(profiles);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getProfile = async ( req, res ) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findOne({
            where: {
                id
            }
        });

        if ( !profile ) {
            // Si no hay usuario, enviamos al cliente un 404.
            return res.status(404).json({ message: 'Profile does not exists.' });
        }
        res.json(profile);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createProfiles = async ( req, res ) => {
    const { username, fullname, email, phone, profileImageURL, userUid } = req.body;

    try {
        const newProfile = await Profile.create({
            username, 
            fullname, 
            email, 
            phone, 
            profileImageURL,
            userUid
        });
        res.json(newProfile);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateProfiles = async ( req, res ) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findOne({
            where: { id },
        });
        profile.set(req.body);
        await profile.save();
        return res.json(profile);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProfiles = async ( req, res ) => {
    try {
        const { id } = req.params;
        await Profile.destroy({
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

/**
 * Buscar cuantas publicaciones tiene un determinado perfil.
 * @param {*} req 
 * @param {*} res 
 */
export const getProfilesPosts = async (req, res) => {
    const { id } = req.params;

    const posts = await Post.findAll({
        where: { profileId: id },
    });
    res.json(posts);
};