var SC = require("../Models/Scores").Scores;
var Students = require("../Models/Students").Students;
var Rooms = require("../Models/Rooms").Rooms;
var RS = require("../Models/RoomsStudents").RoomsStudents;

exports.GetScores = (req, res) => {
    console.log("Return all scores")
    SC.find({}, (err, scores) => {
        if (err) throw err

        var result = []

        scores.forEach(score => {
            console.log(score)

            Students.findOne({
                _id: score.studentId
            }, (err, student) => {
                if (!student) {
                    res.send({
                        err: "No existe el estudiante"
                    })
                } else {
                    console.log(student)

                    Rooms.findOne({
                        _id: score.roomId
                    }, (err, room) => {
                        console.log(room)

                        if (!room) {
                            res.send({
                                err: "No existe la sala"
                            })
                        } else {
                            score.studentId = student.name
                            score.roomId = room.name

                            result.push(score)

                            console.log(result.length)
                            console.log(scores.length)

                            if (result.length == scores.length) {
                                res.send({
                                    result: scores
                                })
                            }
                        }
                    })
                }
            })
        })
    })
}

exports.Register = (req, res) => {
    console.log(req.body)

    var number = req.body.pass
    var time = req.body.time
    var errors = req.body.errors

    if (!number) {
        res.send({
            err: "No se envio pass"
        })
    } else {
        let pass = parseInt(number)
        console.log(pass)

        RS.findOne({
            accessNumber: pass
        }, (err, rs) => {
            console.log(rs)

            if (!rs) {
                res.send({
                    err: "No hay un estudiante con ese numero"
                })
            } else {
                SC.updateOne({
                    studentId: rs.studentId,
                    roomId: rs.roomId,
                },
                    {
                        score: time,
                        errorsCount: errors
                    }, { upsert: true }, (err, raw) => {
                        SC.findOne({
                            studentId: rs.studentId,
                            roomId: rs.roomId,
                        }, (err, result) => {
                            res.send({
                                result: result
                            })
                        })
                    })
            }
        })
    }
}