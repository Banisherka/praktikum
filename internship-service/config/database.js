const { Sequelize } = require('sequelize');

// Создайте экземпляр Sequelize с вашими настройками
const sequelize = new Sequelize('dolg', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres', 
});

// Проверка подключения
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;