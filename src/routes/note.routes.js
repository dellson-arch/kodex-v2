const express = require('express')
const router = express.Router()
const {notesValidation} = require('../middleware/validator.middleware')
const {createNoteController} = require('../controllers/note.controller')
const authMiddleware = require('../middleware/auth.middleware')
/**
 * @route POST /api/notes/create
 * @description create a new note need title and description
 * @access public
 */
router.post('/create' ,authMiddleware , notesValidation ,  createNoteController )


module.exports = router