const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Получение всех вакансий
router.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Редактирование вакансии
router.put('/jobs/:jobId', async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.jobId, req.body, { new: true });
  res.json(updatedJob);
});

// Удаление вакансии
router.delete('/jobs/:jobId', async (req, res) => {
  await Job.findByIdAndDelete(req.params.jobId);
  res.status(204).send();
});

module.exports = router;