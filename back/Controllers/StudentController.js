var Students = require("../Models/Students").Students;
var RS = require("../Models/RoomsStudents").RoomsStudents;

exports.GetStudents = (req, res) => {
    Students.find({}, (err, result) => {
        if (err) throw err

        res.send({
            result: result
        })
    })
}

exports.Login = (req, res) => {
    console.log("Intento de login Estudiante: " + JSON.stringify(req.body));

    let data = req.body.user;

    console.log(data)

    if (data == "") {
        res.send({
            err: 1,
            text: "Necesitamos tu numero",
        });
    } else {
        let number = parseInt(data)

        console.log(number)

        if (number) {
            RS.findOne({
                accessNumber: number
            }, (err, room) => {
                if (room) {
                    console.log(room)
                    Students.findOne({
                        _id: room.studentId
                    }, (err, result) => {
                        console.log(result)
                        if (result) {
                            res.send({
                                result: result
                            })
                        } else {
                            res.send({
                                err: 1,
                                text: "Ups parece que tuvimos un error, corre y dile a tu profe"
                            })
                        }
                    })
                } else {
                    res.send({
                        err: 1,
                        text: "Parece que este no es tu numero :c"
                    })
                }
            })
        } else {
            res.send({
                err: 1,
                text: "Solo se pueden colocar numeros",
            });
        }
    }
}

exports.Register = (req, res) => {
    let data = req.body;

    var student = new Students({
        name: data.name,
        identification: data.identification
    });

    student.save((err) => {
        if (err) throw err;
        console.log("student created!");
        res.send({
            result: student
        })
    });
}