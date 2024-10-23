const express = require('express');
const Application = require('../models/Application');
const Resume = require('../models/Resume');
const CoverLetter = require('../models/CoverLetter');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Настройка загрузки файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Добавляем дату для уникальности
  },
});

const upload = multer({ storage });

// Подача заявки с загрузкой резюме и сопроводительного письма
router.post('/', upload.single('resume'), async (req, res) => {
  const application = new Application({
    userId: req.body.userId,
    jobId: req.body.jobId,
  });

  await application.save();

  // Сохранение резюме
  const resume = new Resume({
    userId: req.body.userId,
    filePath: req.file.path, // Путь к загруженному резюме
  });

  await resume.save();

  // Если сопроводительное письмо предоставлено, сохраним его
  if (req.body.coverLetter) {
    const coverLetter = new CoverLetter({
      applicationId: application._id,
      text: req.body.coverLetter,
    });
    await coverLetter.save();
  }

  res.status(201).json(application);
});

// Получение всех заявок пользователя
router.get('/user/:userId', async (req, res) => {
  const applications = await Application.find({ userId: req.params.userId }).populate('jobId');
  res.json(applications);
});

module.exports = router;