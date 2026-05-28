const express = require('express');
const router = express.Router();

const { notesValidation } = require('../middleware/validator.middleware');

const authMiddleware = require('../middleware/auth.middleware');

const {
  createNoteController,
  readNoteController,
  updateNoteController,
  noteDeleteController
} = require('../controllers/note.controller');

router.post(
  '/create',
  authMiddleware,
  notesValidation,
  createNoteController
);

router.get(
  '/read',
  authMiddleware,
  readNoteController
);

router.patch(
  '/update/:id',
  authMiddleware,
  notesValidation,
  updateNoteController
);

router.delete(
  '/delete/:id',
  authMiddleware,
  noteDeleteController
);

module.exports = router;