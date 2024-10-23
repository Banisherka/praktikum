const mongoose = require('mongoose');

const coverLetterSchema = new mongoose.Schema({
  applicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Application', required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('CoverLetter', coverLetterSchema);