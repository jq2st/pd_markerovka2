const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    linkImgBefore: {
        type: String,
        required: true
    },
    linkImgAfter: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    info: {
        type: String
    },
    user: {
        ref: 'user',
        type: String
    }
})

module.exports = mongoose.model('history', historySchema)
