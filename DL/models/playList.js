const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema({
  songs: {type: Array},
  createBy: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
});

const playList = mongoose.model("PlayList", playListSchema);
module.exports = playList;