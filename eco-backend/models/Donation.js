const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['organic', 'electronic', 'recyclable', 'other'], 
    required: true 
  },
  description: { type: String },
  quantity: { type: Number },
  pickupAddress: { type: String },
  status: { 
    type: String, 
    enum: ['pending', 'collected', 'cancelled'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);
