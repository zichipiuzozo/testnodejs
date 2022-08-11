const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 }, // String is shorthand for {type: String}
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Course", Course);
