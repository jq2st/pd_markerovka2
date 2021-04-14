const express = require('express')
const controller = require('../controllers/methods')

const router = express.Router()

router.post('/1', controller.method1)
router.post('/2', controller.method2)
router.post('/3', controller.method3)
router.post('/4', controller.method4)
router.post('/5', controller.method5)


module.exports = router