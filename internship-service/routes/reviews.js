const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Получение всех отзывов
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
});

// Создание нового отзыва
router.post('/', async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ message: 'Error creating review', error });
    }
});

// Другие маршруты для отзывов можно добавить здесь

module.exports = router;