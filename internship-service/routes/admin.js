const express = require('express');
const router = express.Router();

// Пример маршрута для получения статистики
router.get('/stats', async (req, res) => {
    try {
        // Здесь будет логика для получения статистики
        res.json({ message: 'Admin statistics' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching statistics', error });
    }
});

// Другие маршруты для администрирования можно добавить здесь

module.exports = router;