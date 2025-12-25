const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

router.post('/', contactCtrl.createContact);         // public contact form
router.get('/', auth, admin, contactCtrl.getAllContacts); // admin: view messages
module.exports = router;
