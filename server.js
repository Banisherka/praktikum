const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jobsRoutes = require('./routes/jobs');
const applicationsRoutes = require('./routes/applications');
const usersRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const reviewsRoutes = require('./routes/reviews');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Статическая папка для резюме

// Маршруты
app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/users', usersRoutes); // Маршрут для пользователей
app.use('/api/admin', adminRoutes); // Маршрут для администраторов
app.use('/api/reviews', reviewsRoutes); // Маршрут для отзывов

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});