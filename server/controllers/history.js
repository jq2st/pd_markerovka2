const History = require("../models/history")

module.exports.history = async function(req, res) {
    const user = req.user
    console.log(user)
    History.find({user: user._id})
        .then(result => res.status(200).json(result))
}