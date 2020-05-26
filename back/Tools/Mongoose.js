var mongo = require("mongoose");

mongo
  .connect("mongodb://animalgeek.sytes.net/videos")
  .then(() => {
    console.log("Successfully MongoDB Connected");
  })
  .catch((err) => {
    console.error("ERROR!!!!");
    throw err;
  });

exports.mongo = mongo;