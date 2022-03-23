const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");


router.post("/register", async (req, res) => {
  try {
    res.send(await userLogic.createUser(req))
  }catch (err){
    res.send({code:400, message:err.message || err})
  };
})
// res.status(500).json({ message: "internal server error" });

router.post("/login", async (req, res) => {
  try {
    res.send(await userLogic.createUser(req))
  }catch (err){
    res.send({code:400, message:err.message || err})
  };
})
// res.status(500).json({ message: "internal server error" });

router.get("/", async (req, res) => {
  try {
    res.send(await userLogic.getUsers())
  }catch{
    res.send({code:400, message:err.message || err})
  }
})


module.exports = router;