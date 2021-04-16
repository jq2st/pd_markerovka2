const express = require('express')
const controller = require('../controllers/history')

const router = express.Router()

router.get('/', controller.history)


module.exports = router