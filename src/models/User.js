import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Profile } from './Profile.js';

// Esquema de Usuario.
export const User = sequelize.define('users', {
    uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

// ----- Relación de tablas. ------

// ¿Puede existir un Perfil sin un Usuario?
// Queremos configurar una relación uno a uno entre ellos de modo que 'Profile' obtenga una uid (userIdcolumna).
User.hasOne(Profile);
Profile.belongsTo(User, {
    //foreignKey: 'uid'
    type: DataTypes.UUID
});