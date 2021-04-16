const History = require("../models/history")

module.exports.history = async function(req, res) {
    const user = req.user
    History.find({user: user})
        .then(result => res.status(200).json(result))
}