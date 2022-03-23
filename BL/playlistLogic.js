const req = require("express/lib/request");
const playlist = require("../DL/controllers/playlistController");
const song = require("../DL/controllers/songController")

async function createPlaylist (req) {
    const existsPlaylist = await playlist.readOne( req.body._id )
    console.log(existsPlaylist)
    if (existsPlaylist) {
        existsPlaylist.songs.push({id: req.body.data._id});
        existsPlaylist.save();
        return existsPlaylist;
    } else {
        const newPlaylist = await playlist.create(req);
        newPlaylist.songs.push({id: req.body.data._id})
        newPlaylist.save();
        return newPlaylist;
      }
}

async function getPlaylist (req) {
    const userPlaylist = await playlist.readOne({ createBy: req.user._id });
    let songsList = [];
  
    if (userPlaylist?.length > 0) {
      const arraySongs = userPlaylist[0].songs;
      const songIds = arraySongs.map((id) => id.id);
      songsList = await song.readOne({ _id: songIds });
    }
  
    return res.send(songsList);
}

async function removeSongFromPlaylist(req) {
    const existsPlaylist = await playlist.readOne({ createBy: req.user._id });
    if (!existsPlaylist) {
      res.status(400).json({ message: "The playlist does not exist" });
    } else {
      const songDeleted = await song.readOne({ id: req.params.id });
      const song_id = song._id.valueOf();
      songDeleted.deleteOne({ id: song._id });
      playlist.songs.remove({ id: song_id });
      playlist.save();
      return res.send({ songDeleted });
    }
}

module.exports = {createPlaylist, getPlaylist, removeSongFromPlaylist};