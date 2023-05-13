import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Post = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    caption: {
        type: DataTypes.STRING
    },
    imageURL: {
        type: DataTypes.STRING
    }, 
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    ownerImageURL: {
        type: DataTypes.STRING
    },
    ownerUid: {
        type: DataTypes.INTEGER
    },
    ownerUsername: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});