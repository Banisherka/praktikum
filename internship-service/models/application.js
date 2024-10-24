const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Application = sequelize.define('Application', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    resumeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coverLetterId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Application;