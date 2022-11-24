const {
  Getuser,
  GetUserById,
  CreateUser,
  UpdateUser,
  deleteUser,
  userLogin,
} = require("../services/user.service");

exports.GetUsers = async(req, res) => {
    let output = {};
    Getuser().then((response)=>{
        output.messsage = "Operation successfull!";
        output.data = response;
        output.status = 200;
        res.status(200).send(output);
    }).catch((error)=>{
        output.messsage = error;
        output.data = [];
        output.status = 422;
        res.status(422).send(output);
    });
};

exports.GetUserById = async (req, res) => {
  let output = {};
  let { id } = req.params;
  GetUserById(id)
    .then((response) => {
      output.messsage = "Operation successfull!";
      output.data = response;
      output.status = 200;
      res.status(200).send(output);
    })
    .catch((error) => {
      output.messsage = error?.message;
      output.data = [];
      output.status = 404;
      res.status(404).send(output);
    });
};

exports.CreateUser = async (req, res) => {
  let output = {};
  let { body } = req;
  CreateUser(body)
    .then((response) => {
      output.messsage = "User created successfull";
      output.data = response;
      output.status = 201;
      res.status(201).send(output);
    })
    .catch((error) => {
      output.messsage = error?.message;
      output.data = [];
      output.status = 422;
      res.status(422).send(output);
    });
};

exports.UpdateUser = async (req, res) => {
  let output = {};
  let { body } = req;
  UpdateUser(body)
    .then((response) => {
      output.messsage = "User updated successfull";
      output.data = response;
      output.status = 200;
      res.status(200).send(output);
    })
    .catch((error) => {
      output.messsage = error?.message;
      output.data = [];
      output.status = 404;
      res.status(404).send(output);
    });
};

exports.deleteUser = async (req, res) => {
  let output = {};
  let { id } = req.params;
  deleteUser(id)
    .then((response) => {
      output.messsage = "User deleted successfull";
      output.data = response;
      output.status = 200;
      res.status(200).send(output);
    })
    .catch((error) => {
      output.messsage = error?.message;
      output.data = [];
      output.status = 404;
      res.status(404).send(output);
    });
};

exports.userLogin = async (req, res) => {
  let output = {};
  let { body } = req;
  userLogin(body)
    .then((response) => {
      output.messsage = "User Login successfull";
      output.data = response.data;
      output.status = 200;
      res.header("Authorization", response.token);
      res.status(200).send(output);
    })
    .catch((error) => {
      output.messsage = error?.message;
      output.data = [];
      output.status = 404;
      res.status(404).send(output);
    });
};