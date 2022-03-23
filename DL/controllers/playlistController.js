const playList = require('../models/playList');

async function read(filter) {
    return await playList.find(filter)
}
async function readOne(idPlaylist) {
    console.log(idPlaylist)
    return await playList.findOne({id: idPlaylist})
}
async function create(req) {
    return await new playList({createBy: req.user._id,
        songs: [],}).save();
}
async function update(id, updatePlaylist) {
    return await playList.find({_id:id}).update(id, updatePlaylist)
}
async function del(id) {
    return await playList.findByIdAndUpdate(id, {isActive:false})
}

module.exports = {read, readOne, create, update, del};