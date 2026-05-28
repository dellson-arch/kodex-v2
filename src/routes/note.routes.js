const express = require('express')
const router = express.Router()
const {notesValidation} = require('../middlewares/validator.middleware')
const {createNoteController} = require('../controllers/note.controller')

/**
 * @route POST /api/notes/create
 * @description create a new note need title and description
 * @access public
 */
router.post('/create' , notesValidation , createNoteController )


module.exports = router