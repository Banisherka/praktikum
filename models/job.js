const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);