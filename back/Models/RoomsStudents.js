var mongoose = require("mongoose");

exports.RoomsStudents = mongoose.model(
  "RoomsStudents",
  mongoose.Schema({
    studentId: String,
    roomId: String,
    accessNumber: String,
  })
);