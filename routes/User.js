
const express = require("express");
const router = express.Router(); 

const { AddUser, GetUser, SingelUser, UpdateUser, DeleteUser } = require("../contorllers/User");

router.post("/",AddUser);
router.get("/",GetUser);
router.get("/:id",SingelUser);
router.put("/:id",UpdateUser);
router.delete("/:id",DeleteUser);

module.exports = router;