const express = require("express");
const { userRouter } = require("./user");
const { accRouter } = require("./account");

const rootRoute = express.Router();

rootRoute.use('/user', userRouter);
rootRoute.use('/account', accRouter);

module.exports = {
  rootRoute
}