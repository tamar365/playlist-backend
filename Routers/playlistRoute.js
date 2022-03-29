const express = require("express");
const router = express.Router();
const playlistLogic = require("../BL/playlistLogic");
const authJWT = require("../Middleware/authentication");


router.post('/addToPlaylist', authJWT, async (req, res) => {
  try{
    const playlist = await playlistLogic.createPlaylist(req)
    res.send(playlist)
  }catch(err){
    res.send({code:400, message:err.message || err})
  }
})

router.get('/', authJWT, async (req, res) => {
  try{
    res.send(await playlistLogic.getPlaylist(req.user._id))
  }catch(err){
    res.send({code:400, message: err.message || err})
  }
})

router.delete("/:id", authJWT, async (req, res) => {
  try{
    res.send(await playlistLogic.removeSongFromPlaylist(req)) 
  }catch (err){
    res.send({code:400, message: err.message || err})
  }
})


module.exports = router;