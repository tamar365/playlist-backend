const song = require("../DL/controllers/songController");

async function createSong (req) {
    const existsSong = await song.readOne(req.body.id);
    if(existsSong) {
        return console.log("The song exists");
    }
    return await song.create(req)
}

module.exports = {createSong};