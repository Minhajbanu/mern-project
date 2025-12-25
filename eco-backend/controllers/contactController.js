const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, phone, message } = req.body;
    if (!firstName || !message) return res.status(400).json({ message: 'Missing fields' });

    const contact = await Contact.create({ firstName, lastName, phone, message });
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort('-createdAt');
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
