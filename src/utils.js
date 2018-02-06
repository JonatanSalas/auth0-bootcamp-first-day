const bcrypt = require("bcrypt-nodejs");

module.exports.hashValue = (value, salt_strength) => {
    return new Promise((resolve, reject) => {
        // Generate a salt:
        bcrypt.genSalt(salt_strength, (err, salt) => {
            if (err) {
                reject(err);
            }

            // Hash the password using our new salt:
            bcrypt.hash(
                value,
                salt,
                null,
                (error, hash) => {
                    if (error) {
                        reject(error);
                    }

                    // Return the hashed password:
                    resolve(hash);
                }
            );
        });
    });
};

module.exports.compareHashWithValue = (hashedValue, value) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(value, hashedValue, (err, isMatch) => {
            if (err) {
                return reject(err);
            }

            resolve(isMatch);
        });
    });
};
