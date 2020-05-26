var mongoose = require("mongoose");

exports.Teachers = mongoose.model(
  "Teachers",
  mongoose.Schema({
    name: String,
    pass: String,
    identification: String,
    email: String,
    phone: String,
  })
);