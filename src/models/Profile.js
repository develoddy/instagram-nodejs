import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Post } from './Post.js';

// Esquema de Perfil.
export const Profile = sequelize.define('profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    fullname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    phone: {
        type: DataTypes.STRING
    },
    profileImageURL: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

// ----- Relación de tablas. ------

// Un Perfil tiene muchas publicaciones, mientras que cada publicación pertenece a un solo perfil.
Profile.hasMany(Post, {
    // Esta columna lo va a tener la tabla Post.
    foreignKey: 'profileId',

    // Enlazar con el uid del Profile.
    sourceKey:'id'
});

// cada publicación pertenece a un solo perfil.
Post.belongsTo(Profile, {
    foreignKey: 'profileId',
    //Enlazar a la tabla padre (Profile).
    targetId: 'id'
});