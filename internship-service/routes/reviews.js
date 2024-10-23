const express = require('express');
const Review = require('../internship-service/models/Review');
const router = express.Router();

// Создание отзыва
router.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
});

// Получение отзывов по вакансии
router.get('/job/:jobId', async (req, res) => {
  const reviews = await Review.find({ jobId: req.params.jobId }).populate('userId');
  res.json(reviews);
});

module.exports = router;