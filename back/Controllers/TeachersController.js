var Students = require("../Models/Students").Students;
var Teachers = require("../Models/Teachers").Teachers;
var Rooms = require("../Models/Rooms").Rooms;
var RE = require("../Models/RoomsStudents").RoomsStudents;
var Scores = require("../Models/Scores").Scores;

exports.GetTeachers = (req, res) => {
  Teachers.find({}, (err, result) => {
    if (err) throw err
    res.send({
      result: result
    })
  })
}

exports.Login = (req, res) => {
  console.log("Intento de login Maestro: " + JSON.stringify(req.body));

  let data = req.body;

  if (data.user == "" || data.pass == "") {
    res.send({
      err: 1,
      text: "Los campos estan vacios",
    });
  } else {
    return Teachers.findOne({
      email: data.user,
      pass: data.pass,
    }, (err, result) => {
      if (err) {
        res.send({
          err: 2,
          text: "Error, Prueba Mas Tarde",
        });
      }

      if (result == null) {
        res.send({
          err: 2,
          text: "Usuario incorrecto o no existe",
        });
      } else {
        res.send({
          result: result,
        });
      }
    });
  }
}

exports.Register = (req, res) => {
  let data = req.body;

  var teacher = new Teachers({
    name: data.name,
    pass: data.pass,
    identification: data.identification,
    email: data.email,
    phone: data.phone
  });

  teacher.save((err) => {
    if (err) throw err;
    console.log("teacher created!");
    res.send({
      result: teacher
    })
  });
}

exports.EnrolledStudent = (req, res) => {
  console.log(req.body.accessNumber)
  RE.find({
    accessNumber: req.body.accessNumber,
  }, (err, result) => {
    console.log(result)
    if (result.length > 0) {
      console.log("This pass is using with another")
      res.send({
        err: 1,
        text: "Un usuario ya tiene esta contraseña",
      })
    } else {
      console.log("Add User in process")

      var roomStudent = new RE({
        studentId: req.body.studentId,
        roomId: req.body.roomId,
        accessNumber: req.body.accessNumber,
      })

      roomStudent.save((err) => {
        if (err) throw err
        console.log("room created!")

        var scopes = new Scores({
          studentId: req.body.studentId,
          roomId: req.body.roomId,
          teacherId: req.body.teacherId,
          date: Date.now(),
          score: 0,
          errorsCount: 0
        })

        scopes.save((err) => {
          if (err) throw err
          res.send({
            result: {
              scope: scopes,
              roomStudent: roomStudent
            }
          })
        })
      })
    }
  })
}

exports.GetStats = (req, res) => {
  var count = 0
  var best = {}
  var worse = {}

  Students.count({}, (err, result) => {
    if (err) throw err
    count = result

    Scores.findOne({})
      .sort({ score: 'asc' })
      .exec(function (err, bestS) {
        if (err) throw err
        best = bestS

        Scores.findOne({})
          .sort({ score: 'desc' })
          .exec(function (err, worseS) {
            if (err) throw err
            worse = worseS

            res.send({
              count: count,
              best: best,
              worse: worse
            })
          });
      });
  })
}