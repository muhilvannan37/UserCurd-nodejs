const express = require("express");
const rootRouter = express.Router();
const userRoutes = require("./app/routes/user.routes");

rootRouter.use("/user", userRoutes);

module.exports = rootRouter;