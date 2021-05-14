const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queriesSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    linkImg: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    result: {
        type: Boolean
    }
})

module.exports = mongoose.model('queries', queriesSchema)