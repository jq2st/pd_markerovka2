const Role = require("../models/roles")
const User = require("../models/users")

module.exports.login = async function(req, res) {
    const login = req.body.login
    const password = req.body.password

    const user = await User.findOne({name: login})
    if (!user) {
        return res.status(400).json({message: 'no such user'})
    }
    if (user.password != password) {
        return res.status(403).json({message: 'wrong password'})
    }
    res.status(200).json({token: 'token'})
} 

module.exports.reg = function(req, res) {
    const login = req.body.login
    const password = req.body.password

    const newUser = new User({name: login, password: password, role: 'USER'})
    newUser.save()
        .then(() => {
            res.status(200).json({message: 'user saved'})
        }).catch((e) => res.status(403).json({message: 'user save error'}))
} 