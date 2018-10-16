var express = require('express')

var router = express.Router()
var notes = require('./api/notes.route')


router.use('/notes', notes);


module.exports = router;