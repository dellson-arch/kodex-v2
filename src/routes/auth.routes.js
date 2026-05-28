const express = require('express')
const router = express.Router()
const { registerController } = require('../controllers/auth.controller')
const {registerValidation} = require('../middleware/validator.middleware')

router.post('/register' , registerValidation ,  registerController )


module.exports = router