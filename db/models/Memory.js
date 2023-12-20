const mongoose = require('mongoose');
// const { Schema } = mongoose;

const memorySchema = new mongoose.Schema({
  detail: String,
  year: { type: Number, default: 2023 },
  month: {
    type: String,
    enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    default: 'Jan',
  },
  name: String,
  place: String,
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;
