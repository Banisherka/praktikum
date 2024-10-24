const express = require('express');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');
const jobsRoutes = require('./routes/jobs');
const applicationsRoutes = require('./routes/applications');
const usersRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const reviewsRoutes = require('./routes/reviews');
const swaggerApp = require('./swagger'); // Добавлено

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Подключение к PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate()
    .then(() => console.log('PostgreSQL connected'))
    .catch(err => console.error('PostgreSQL connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Маршруты
app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reviews', reviewsRoutes);
swaggerApp(app); // Добавлено

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
sequelize.sync()
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.error('Error creating database tables:', err));