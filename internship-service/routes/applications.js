const express = require('express');
const Application = require('../models/Application');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Валидация данных
const applicationValidationRules = [
    body('jobId').isInt().withMessage('Job ID must be an integer'),
    body('userId').isInt().withMessage('User  ID must be an integer'),
    body('resumeId').isInt().withMessage('Resume ID must be an integer'),
    body('coverLetterId').isInt().withMessage('Cover Letter ID must be an integer'),
];

// Получение списка заявок
router.get('/', async (req, res) => {
    const applications = await Application.findAll();
    res.json(applications);
});

// Создание новой заявки
router.post('/', applicationValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const application = await Application.create(req.body);
    res.json(application);
});

// Получение заявки по ID
router.get('/:id', async (req, res) => {
    const application = await Application.findByPk(req.params.id);
    if (!application) {
        res.status(404).json({ message: 'Application not found' });
    } else {
        res.json(application);
    }
});

// Обновление заявки
router.put('/:id', async (req, res) => {
    const application = await Application.findByPk(req.params.id);
    if (!application) {
        res.status(404).json({ message: 'Application not found' });
    } else {
        await application.update(req.body);
        res.json(application);
    }
});

// Удаление заявки
router.delete('/:id', async (req, res) => {
    const application = await Application.findByPk(req.params.id);
    if (!application) {
        res.status(404).json({ message: 'Application not found' });
    } else {
        await application.destroy();
        res.json({ message: 'Application deleted' });
    }
});

module.exports = router;