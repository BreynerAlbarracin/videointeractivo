var TC = require("./Controllers/TeachersController");
var SC = require("./Controllers/StudentController");
var SCC = require("./Controllers/ScoresControllers");
var RC = require("./Controllers/RoomsController");

var mongo = require("./Tools/Mongoose").mongo;

var cors = require("cors");
var bodyParser = require("body-parser");
var express = require("express");
var server = express();

server.use(
  cors({
    origin: ["http://localhost:3000", "http://animalgeek.sytes.net"],
  }),
  bodyParser.json()
);

//Validate
server.get("/", ping);

/* TEACHER */
//Get Method
server.get("/teachers", TC.GetTeachers);
server.get("/teachers/stats", TC.GetStats);
//Post Method
server.post("/teachers/login", TC.Login);
server.post("/teachers/register", TC.Register);
server.post("/teachers/enrolledstudent", TC.EnrolledStudent);
/* //TEACHER */

/* STUDENTS */
//Get Method
server.get("/students", SC.GetStudents);
//Post Method
server.post("/students/login", SC.Login);
server.post("/students/register", SC.Register);
/* //STUDENTS */

/* ROOMS */
server.get("/rooms", RC.GetRooms)
server.post("/rooms/createroom", RC.CreateRoom);
/* //ROOMS */

/* Scores */
//Get Method
server.get("/scores/results", SCC.GetScores);
/* //Scores */

server.listen(5001, () => {
  console.log("El servidor está inicializado en el puerto 5001");
});

function ping(req, res) {
  res.send({
    result: "OK!",
  });
}