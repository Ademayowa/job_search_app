const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
  name: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Please add a name'],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  phone: {
    type: String,
    maxlength: [15, 'Phone number cannot be longer than 12 charcters'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a title'],
  },
  jobSummary: {
    type: String,
    required: [true, 'Please add a job summary'],
  },
  salary: {
    type: String,
    required: [true, 'Please add a salary'],
  },
  location: {
    type: String,
    required: true,
  },
  skillLevel: {
    type: String,
    required: [true, 'Please add a skill level'],
    enum: ['intern', 'junior', 'intermediate', 'senior'],
  },
  skills: {
    type: [String],
    required: [true, 'Please add skills'],
  },
  type: {
    type: String,
    required: [true, 'Please add a type'],
  },
  visaSponsorship: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Job', jobSchema);
