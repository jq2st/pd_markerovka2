const express = require('express')
const controller = require('../controllers/check')

const router = express.Router()

router.post('/', controller.checkImg)


module.exports = router