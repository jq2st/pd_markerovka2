const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://db_user:A5i7gtf1A5i7gtf1@securetec.fhnnu.mongodb.net/markerovka?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('connected'))
    .catch((e) => console.log('not connected', e))

const authRoutes = require('./routes/auth')
const checkRoutes = require('./routes/check')
const methodsRoutes = require('./routes/methods')
const historyRoutes = require('./routes/history')
const upload = require('./middleware/upload')
const { ROLES } = require('./data')
const User = require('./models/users')
const keys = require('./config/keys')

const app = express()

app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) 

app.use(setUser)

app.use('/api/auth', authRoutes)
app.use('/api/history', historyRoutes)
app.use('/api/check', upload.single('image'), checkRoutes)
app.use('/api/methods', upload.single('image'), methodsRoutes)

async function setUser(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        await jwt.verify(token, keys.secret, async (err, sxs) => {
            if (err) return res.status(403).json({error: err})
            pUser = await User.findOne({_id: sxs.userId})
            req.user = pUser
        })
    }
    else {
        req.user = {role: ROLES.GUEST}
    }
    next()
}

module.exports = app