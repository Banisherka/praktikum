const express = require('express');
const User = require('../internship-service/models/User');
const Application = require('../internship-service/models/Application');
const router = express.Router();

// Получение информации о пользователе
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId);
  const applications = await Application.find({ userId: req.params.userId }).populate('jobId');
  res.json({ user, applications });
});

// Обновление профиля
router.put('/:userId', async (req, res) => {
  const updatedUser  = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
  res.json(updatedUser );
});

// Подписка на уведомления (пока просто пример)
router.post('/:userId/subscribe', (req, res) => {
  // Логика подписки на уведомления
  res.json({ message: 'Subscribed to notifications' });
});

module.exports = router;