const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Убедитесь, что путь правильный

const Job = sequelize.define('Job', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('open', 'closed'),
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Job;