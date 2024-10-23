const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Получение списка вакансий с фильтрацией
router.get('/', async (req, res) => {
  const { keyword, status } = req.query;
  const filter = {};

  if (keyword) {
    filter.title = { $regex: keyword, $options: 'i' }; // Регистронезависимый поиск
  }
  if (status) {
    filter.status = status;
  }

  const jobs = await Job.find(filter);
  res.json(jobs);
});

module.exports = router;