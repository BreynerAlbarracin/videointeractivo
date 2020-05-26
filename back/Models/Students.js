var mongoose = require("mongoose");

exports.Students = mongoose.model(
  "Students",
  mongoose.Schema({
    name: String,
    identification: String
  })
);