const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CoverLetter = sequelize.define('CoverLetter', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = CoverLetter;