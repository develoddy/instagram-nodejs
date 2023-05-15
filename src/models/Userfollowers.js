import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Userfollowers = sequelize.define('userfollowers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    //followerId : type.INTEGER,
}, {
    timestamps: true
});