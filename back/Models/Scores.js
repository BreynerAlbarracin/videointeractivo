var mongoose = require("mongoose");

exports.Scores = mongoose.model(
  "Scores",
  mongoose.Schema({
    studentId: String,
    roomId: String,
    teacherId: String,
    date: String,
    score: Number,
    errorsCount: Number
  })
)