const express = require("express");
const router = express.Router();

const newUser = require("../controller/userController")
router.post("/simple", newUser.userController)

module.exports = router;