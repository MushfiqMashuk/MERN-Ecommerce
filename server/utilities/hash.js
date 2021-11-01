const CryptoJS = require("crypto-js");

function hash(password) {
  const hashedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.PASSWORD_SECRET_KEY
  );

  return hashedPassword.toString();
}

function decrypt(hashedPassword) {
  const password = CryptoJS.AES.decrypt(
    hashedPassword,
    process.env.PASSWORD_SECRET_KEY
  );

  return password.toString();
}

module.exports = { hash, decrypt };
