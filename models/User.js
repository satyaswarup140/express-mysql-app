const db = require('../config/db');

const User = {
    create: (user, callback) => {
        db.query('INSERT INTO User (name) VALUES (?)', [user.name], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    }
};

module.exports = User;
