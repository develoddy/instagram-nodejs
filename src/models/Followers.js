import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Userfollowers } from './Userfollowers.js';

export const Followers = sequelize.define('followers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    userId: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: true
});


// ----- Relación [ Followers - UserFollowers ]. ------

// Un Perfil tiene muchas seguidores, mientras que cada seguidor pertenece a un solo perfil.
Followers.hasMany(Userfollowers, {
    foreignKey: 'followerId',
    sourceKey:'id'
});

// Cada seguidor pertenece a un perfil.
Userfollowers.belongsTo(Followers, {
    foreignKey: 'followerId',
    targetId: 'id'
});