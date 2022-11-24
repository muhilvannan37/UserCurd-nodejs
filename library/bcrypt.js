const bcrypt = require("bcrypt");
const saltRounds = 10;

const generatePassword = (password) =>{
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashpassword = bcrypt.hashSync(password, salt);
    return hashpassword;
};

module.exports = {
    generatePassword,
}