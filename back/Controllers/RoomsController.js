var Rooms = require("../Models/Rooms").Rooms;

exports.GetRooms = (req, res) => {
    Rooms.find({}, (err, result) => {
        if (err) throw err

        res.send({
            result: result
        })
    })
}

exports.CreateRoom = (req, res) => {
    let data = req.body

    var room = new Rooms({
        name: data.name,
        description: data.description,
        url: data.url,
    })

    room.save((err) => {
        if (err) throw err;
        console.log("room created!")
        res.send({
            result: room
        })
    })
}