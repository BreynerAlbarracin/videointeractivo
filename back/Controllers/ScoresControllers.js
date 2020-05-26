var SC = require("../Models/Scores").Scores;

exports.GetScores = (req, res) => {
    console.log("Return all scores")
    SC.find({}, (err, result) => {
        if (err) throw err
        res.send({
            result: result
        })
    })
}