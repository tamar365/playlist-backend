const playList = require('../models/playList');

async function read(filter) {
    return await playList.find({createBy:filter})
}
async function readOne(idUser) {
    return await playList.findOne({createBy: idUser})
}
async function create(id) {
    return await new playList({createBy: id,
        songs: [],}).save();
}
async function update(songID) {
    playList.songs.remove({id: songID});
    return await playList.save(); 
}
async function del(id) {
    return await playList.findByIdAndUpdate(id, {isActive:false})
}

module.exports = {read, readOne, create, update, del};