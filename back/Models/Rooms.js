var mongoose = require("mongoose");

exports.Rooms = mongoose.model(
  "Rooms",
  mongoose.Schema({
    name: String,
    description: String,
    url: String,
  })
);