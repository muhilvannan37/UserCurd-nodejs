const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
var config = require("../../config/config.json");
const { generatePassword } = require("../../library/bcrypt");
const { generateToken } = require("../../library/jwt");

async function Getuser() {
  return config;
}

async function GetUserById(id) {
  let userData = config.find((data) => data.id == id);
  if (!userData) throw { message: "User not found" };
  return [userData];
}

async function CreateUser(payload) {
  let checkUser = config.find(
    (data) => data.mobile_no == payload.mobile_no || data.email == payload.email
  );
  if (checkUser) throw { message: "User already exists!" };
  let UUID = uuidv4();
  let password = generatePassword(payload.password);
  let newpayload = {
    id: UUID,
    first_name: payload.first_name,
    last_name: payload.last_name ,
    middle_name: payload.middle_name ? payload.middle_name : "",
    dob: payload.dob ? payload.dob : "",
    email: payload.email,
    mobile_no: payload.mobile_no,
    password: password,
    occupation: payload.occupation ? payload.occupation : "",
    company: payload.company ? payload.company : "",
  };
  config.push(newpayload);
  return [{ id: UUID }];
}

async function UpdateUser(payload) {
  let checkUser = config.find((data) => data.id == payload.id);
  if (!checkUser) throw { message: "User not found" };
  let newpayload = {
    id: payload.id,
    first_name: payload.first_name,
    last_name: payload.last_name,
    middle_name: payload.middle_name ? payload.middle_name : "",
    dob: payload.dob ? payload.dob : "",
    email: payload.email,
    mobile_no: payload.mobile_no,
    occupation: payload.occupation ? payload.occupation : "",
    company: payload.company ? payload.company : "",
  };
  let finalData = [];
  for(let i = 0;i<config.length;i++)
  {
    if(config[i].id == payload.id) finalData.push(newpayload);
    else finalData.push(config[i]);
  }
  config = finalData;
  return [{ id: payload.id }];
};

async function deleteUser(id) {
  let checkUser = config.find((data) => data.id == id);
  if (!checkUser) throw { message: "User not found" };
  let finalData = [];
  for(let i = 0;i<config.length;i++)
  {
    if(config[i].id !== id) finalData.push(config[i]);
  }
  config = finalData;
  return [{ id: id }];
};


async function userLogin(payload) {
  let checkUser = config.find((data) => data.email == payload.email);
  if (!checkUser) throw { message: "User not found" };
  const verifypassword = await bcrypt.compare(payload.password, checkUser.password);
  if(verifypassword) {
    let Token = await generateToken(payload);
    return { data: checkUser, token: Token };
  } 
  throw { message: "Invalid password" };
};

module.exports = {
  Getuser,
  GetUserById,
  CreateUser,
  UpdateUser,
  userLogin,
  deleteUser,
};
