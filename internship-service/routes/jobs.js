const express = require('express');
const Job = require('../models/Job');
const { Op } = require('sequelize');
const router = express.Router();

// Получение списка вакансий с фильтрацией
router.get('/', async (req, res) => {
    const { keyword, status } = req.query;
    const filter = {};

    if (keyword) {
        filter.title = { [Op.iLike]: `%${keyword}%` }; // Регистронезависимый поиск
    }
    if (status) {
        filter.status = status;
    }

    const jobs = await Job.findAll({ where: filter });
    res.json(jobs);
});

// Создание новой вакансии
router.post('/', async (req, res) => {
    const job = await Job.create(req.body);
    res.json(job);
});

// Получение вакансии по ID
router.get('/:id', async (req, res) => {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
        res.status(404).json({ message: 'Job not found' });
    } else {
        res.json(job);
    }
});

// Обновление вакансии
router.put('/:id', async (req, res) => {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
        res.status(404).json({ message: 'Job not found' });
    } else {
        await job.update(req.body);
        res.json(job);
    }
});

// Удаление вакансии
router.delete('/:id', async (req, res) => {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
        res.status(404).json({ message: 'Job not found' });
    } else {
        await job.destroy();
        res.json({ message: 'Job deleted' });
    }
});

module.exports = router;