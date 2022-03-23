const express = require("express");
const router = express.Router();
const playlistLogic = require("../BL/playlistLogic");
const authJWT = require("../Middleware/authentication");
const songLogic = require("../BL/songLogic");


router.post('/addToPlaylist', async (req, res) => {
  try{
    const playlist = await playlistLogic.createPlaylist(req)
    console.log(playlist)
    res.send(playlist)
  }catch(err){
    res.send({code:400, message:err.message || err})
  }
})
// , authJWT
// res.status(500).json({ massage: "internal server error" });

router.get('/', authJWT, async (req, res) => {
  try{
    res.send(await playlistLogic.getPlaylist(req))
  }catch(err){
    res.send({code:400, message:err.message || err})
  }
})

router.delete("/:id", authJWT, async (req, res) => {
  try{
    res.send(await playlistLogic.removeSongFromPlaylist(req)) 
  }catch{
    res.send({code:400, message:err.message || err})
  }
})
// return res.status(401);

module.exports = router;