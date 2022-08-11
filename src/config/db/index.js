const mongoose = require("mongoose");

function connect() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connect succcessfully!");
  } catch (error) {
    console.log("connect fail!");
  }
}
module.exports = { connect };
