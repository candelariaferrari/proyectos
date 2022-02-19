const express = require('express');
const router = express.Router();


let mainController = require('../controllers/mainController');

/* Inicio */
router.get('/', mainController.homeGuest);
router.get('/login', mainController.login);
router.get('/register', mainController.register);

module.exports = router;