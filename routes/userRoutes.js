const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Address = require('../models/Address');

// Endpoint for user registration
router.post('/register', (req, res) => {
    const user = { name: req.body.name };
    User.create(user, (err, userId) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create user' });
        }

        const address = { userId: userId, address: req.body.address };
        Address.create(address, (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to create address' });
            }
            res.status(201).json({ message: 'User registered successfully!' });
        });
    });
});

module.exports = router;
