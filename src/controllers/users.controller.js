import { User } from '../models/User.js';

export const getUsers = async ( req, res ) => {
    try {
        //throw new Error('query failed');
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUser = async ( req, res ) => {
    try {
        const { uid } = req.params;
        const user = await User.findOne({
            where: {
                uid
            }
        });

        if ( !user ) {
            // Si no hay usuario, enviamos al cliente un 404.
            return res.status(404).json({ message: 'User does not exists.' });
        }

        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUser = async ( req, res ) => {
    const { uid, email, password } = req.body;

    try {
        const newUser = await User.create({
            email,
            password
        });
        res.json(newUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateUsers = async ( req, res ) => {
    try {
        const { uid } = req.params;
        const { email, password } = req.body;

        const user = await User.findByPk(uid);
        user.email = email;
        user.password = password;
        
        await user.save();
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUsers = async ( req, res ) => {
    try {
        const { uid } = req.params;
        await User.destroy({
            where: {
                uid,
            }
        });
        // Enviar al cliente diciendo que no se enviará ningun dato, pero que todo fue bien.
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};