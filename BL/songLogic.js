const song = require("../DL/controllers/songController");

async function createSong (req) {
    console.log(req.body)
    const existsSong = await song.readOne({ _id: req.body.id });
    console.log(existsSong)
    if(existsSong) {
        return console.log("The song exists");
    }
    return await song.create(req)
}

module.exports = {createSong};