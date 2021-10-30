const CryptoJS = require("crypto-js");

function hash(password) {
  const hashedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.PASSWORD_SECRET_KEY
  );

  return hashedPassword.toString(CryptoJS.enc.Utf8);
}

function decrypt(hashedPassword) {
  const password = CryptoJS.AES.decrypt(
    hashedPassword,
    process.env.PASSWORD_SECRET_KEY
  );

  return password.toString(CryptoJS.enc.Utf8);
}

module.exports = { hash, decrypt };
