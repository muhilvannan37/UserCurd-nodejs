const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const {
  userByIdSchema,
  userCreateSchema,
  updateCreateSchema,
  deleteuserSchema,
  loginSchema,
} = require("../schema/user.schema");
const authenticate = require("../../authenticate/authenticate");

router.get("/", authenticate, UserController.GetUsers);
router.get("/:id", authenticate, userByIdSchema, UserController.GetUserById);
router.post("/", authenticate, userCreateSchema, UserController.CreateUser);
router.put("/", authenticate, updateCreateSchema, UserController.UpdateUser);
router.delete("/:id", authenticate, deleteuserSchema, UserController.deleteUser);

router.post("/login", loginSchema, UserController.userLogin);


module.exports = router;