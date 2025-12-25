const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const donationCtrl = require('../controllers/donationController');

// 🟢 User Routes
router.post('/', auth, donationCtrl.createDonation);                 // Create a donation
router.get('/my-donations', auth, donationCtrl.getUserDonations);    // View logged-in user's donations

// 🔵 Admin Routes
router.get('/all', auth, admin, donationCtrl.getAllDonations);       // View all donations (admin only)
router.put('/:id/status', auth, admin, donationCtrl.updateDonationStatus); // Update donation status (admin only)

module.exports = router;
