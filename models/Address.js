const db = require('../config/db');

const Address = {
    create: (address, callback) => {
        db.query('INSERT INTO Address (userId, address) VALUES (?, ?)', [address.userId, address.address], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    }
};

module.exports = Address;
