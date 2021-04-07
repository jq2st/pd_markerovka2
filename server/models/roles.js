const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolesSchema = new Schema({
    role: {
        type: String,
        default: 'USER',
        required: true
    }
})

module.exports = mongoose.model('roles', rolesSchema)
