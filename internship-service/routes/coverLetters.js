const express = require('express');
const CoverLetter = require('../models/CoverLetter');
const router = express.Router();

// Получение всех сопроводительных писем
router.get('/', async (req, res) => {
    try {
        const coverLetters = await CoverLetter.findAll();
        res.json(coverLetters);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cover letters', error });
    }
});

// Создание нового сопроводительного письма
router.post('/', async (req, res) => {
    try {
        const coverLetter = await CoverLetter.create(req.body);
        res.status(201).json(coverLetter);
    } catch (error) {
        res.status(400).json({ message: 'Error creating cover letter', error });
    }
});

// Другие маршруты для сопроводительных писем можно добавить здесь

module.exports = router;