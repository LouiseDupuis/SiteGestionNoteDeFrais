var express = require('express');
var jwt = require('express-jwt');

var secret_buffer = Buffer.from('mon_secret','utf-8')

var router = express.Router();

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentification');

var auth = jwt({
  secret: secret_buffer,
  userProperty: 'payload'
});

// profile

router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


var notes = require('./api/notes.route')


router.use('/notes', notes);


module.exports = router;