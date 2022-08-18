const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 }, // String is shorthand for {type: String}
    description: { type: String },
    image: { type: String },
    videoID: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Course", Course);
