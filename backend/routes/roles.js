const express = require("express");
const rolesRouter = express.Router();
const roles = require("../controllers/roles");

rolesRouter.post("/",roles)

module.exports = rolesRouter