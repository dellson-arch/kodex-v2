const express = require('express')
const router = express.Router()
const { registerController } = require('../controllers/auth.controller')
const {registerValidation} = require('../middleware/validator.middleware')

/**
 * @route POST /api/auth/register
 * @description create a new user which need name and email
 * @access public
 */
router.post('/register' , registerValidation ,  registerController )

module.exports = router