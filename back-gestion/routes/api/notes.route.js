var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var NoteController = require('../../controllers/notes.controller');


// Map each API to the Controller FUnctions

router.get('/', NoteController.getNotes)

router.post('/', NoteController.createNote)

router.put('/', NoteController.updateNote)

router.delete('/:id',NoteController.removeNote)


// Export the Router

module.exports = router;