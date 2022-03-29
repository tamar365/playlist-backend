const express = require("express");
const router = express.Router();
const songLogic = require("../BL/songLogic")
const authJWT = require("../Middleware/authentication")
  

router.post('/newsong', authJWT, async (req,res) => {
  try {
    const newsong = await songLogic.createSong(req)
    res.send(newsong)
  }catch (err) {
    res.send({code:400, message:err.message || err})
  }
})

module.exports = router;
