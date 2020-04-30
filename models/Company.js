const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    yearFounded: {
      type: String,
      required: [true, 'Please add year founded'],
    },
  },
  {
    // create this before creating virtual below
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

companySchema.virtual('jobs', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'company',
  justOne: false,
});

module.exports = mongoose.model('Company', companySchema);
