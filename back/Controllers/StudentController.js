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

    let data = req.body;

    if (data.number == "") {
        res.send({
            err: 1,
            text: "Necesitamos tu numero",
        });
    } else {
        let number = parseInt(data.number)

        if (number) {
            RS.findOne({
                accessNumber: number
            }, (err, result) => {
                Students.findOne({
                    id: RS.studentId
                })
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