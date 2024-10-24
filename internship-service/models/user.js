const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Предполагается, что у вас есть файл для настройки базы данных

const User = sequelize.define('User ', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = User;