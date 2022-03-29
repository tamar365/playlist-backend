const song = require('../models/song');

async function read(id) {
    return await song.find({_id: id})
}

async function readOne(idSong) {
    return await song.findOne({id: idSong})
}

async function create(req) {
    return await new song(
        {
            songName: req.body.songName,
            id: req.body.id,
        })
        .save();
}

async function update(id, updateSong) {
    return await song.find({_id:id}).update(id, updateSong)
}

async function del(idSong) {
    return await song.deleteOne({_id: idSong})
}

module.exports = {read, readOne, create, update, del};