import { Followers } from '../models/Followers.js';
import { Userfollowers } from '../models/Userfollowers.js';

export const getFollowers = async ( req, res ) => {
};

export const createFollowers = async ( req, res ) => {
    const { userId, followerId } = req.body;

    try {
        const newFollower = await Followers.create({
            userId
        });

        console.log(typeof newFollower);
        if ( newFollower ) {
            const newUserfollower = await Userfollowers.create({
                followerId
            });
        }

        res.json(newUserfollower);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateFollowers = async ( req, res ) => {
};

export const deleteFollowers = async ( req, res ) => {
};

export const getFollower = async ( req, res ) => {
};