const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    role: {
        ref: 'roles',
        type: String
    }
})

module.exports = mongoose.model('users', usersSchema)
