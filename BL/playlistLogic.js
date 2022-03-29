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
        const newPlaylist = await playlist.create(req.user._id);
        newPlaylist.songs.push({id: req.body.data._id})
        newPlaylist.save();
        return newPlaylist;
      }
}

async function getPlaylist (id) {
    const userPlaylist = await playlist.read(id);
    let songsList = [];
  
    if (userPlaylist?.length > 0) {
      const arraySongs = userPlaylist[0].songs;
      const songsId = arraySongs.map((id) => id.id);
      songsList = await song.read(songsId);
      console.log(songsList)
    }
    
    return songsList;
}

async function removeSongFromPlaylist(req) {
    const existsPlaylist = await playlist.readOne(req.user._id);
    if (!existsPlaylist) {
      res.status(400).json({ message: "The playlist does not exist" });
    } else {
      const existsSong = await song.readOne(req.params.id);
      const song_id = existsSong._id.valueOf();
      const deletedSong = await song.del(existsSong._id);
      existsPlaylist.songs.remove({id: song_id})
      existsPlaylist.save();
      return deletedSong;
    }
}

module.exports = {createPlaylist, getPlaylist, removeSongFromPlaylist};