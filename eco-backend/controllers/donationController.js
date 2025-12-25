const Donation = require('../models/Donation');

// Create a new donation
exports.createDonation = async (req, res) => {
  try {
    const { category, description, quantity, pickupAddress } = req.body;
    if (!category) return res.status(400).json({ message: 'Category is required' });

    const donation = await Donation.create({
      user: req.user._id, // from auth middleware
      category,
      description,
      quantity,
      pickupAddress
    });

    res.status(201).json({ message: 'Donation created successfully', donation });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all donations (Admin)
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate('user', 'name email')
      .sort('-createdAt');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get donations for a specific logged-in user
exports.getUserDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ user: req.user._id }).sort('-createdAt');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update donation (Admin can change status)
exports.updateDonationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ['pending', 'collected', 'cancelled'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const donation = await Donation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).populate('user', 'name email');

    if (!donation) return res.status(404).json({ message: 'Donation not found' });

    res.json({ message: 'Donation status updated', donation });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
