const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Получение всех пользователей
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// Создание нового пользователя
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});

// Получение пользователя по ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});

// Обновление пользователя
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }
        await user.update(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
});

// Удаление пользователя
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }
        await user.destroy();
        res.json({ message: 'User  deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

module.exports = router;