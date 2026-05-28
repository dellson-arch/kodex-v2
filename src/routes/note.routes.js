const express = require('express')
const router = express.Router()
const {notesValidation} = require('../middleware/validator.middleware')
const {createNoteController , readNoteController} = require('../controllers/note.controller')

/**
 * @route POST /api/notes/create
 * @description create a new note need title and description
 * @access public
 */
router.post('/create' , notesValidation , createNoteController )

/**
 * @route GET /api/notes/read
 * @description read all the notes
 * @access public
 */
router.post('/read' , readNoteController )

module.exports = router