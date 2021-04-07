const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://db_user:A5i7gtf1A5i7gtf1@securetec.fhnnu.mongodb.net/markerovka?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('connected'))
    .catch((e) => console.log('not connected', e))

const authRoutes = require('./routes/auth')
const methodsRoutes = require('./routes/methods')
const { users, ROLES } = require('./data')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) 

app.use(setUser)

app.use('/api/auth', authRoutes)
app.use('/api/methods', methodsRoutes)

function setUser(req, res, next) {
    console.log(req.body)
    const userId = req.body.userId
    if (userId) {
        req.user = users.find(user => userId == user.userId)
    }
    else {
        req.user = {role: ROLES.GUEST}
    }
    next()
}

module.exports = app