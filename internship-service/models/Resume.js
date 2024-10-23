const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
  filePath: { type: String, required: true }, // Путь к загруженному файлу
  uploadedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resume', resumeSchema);