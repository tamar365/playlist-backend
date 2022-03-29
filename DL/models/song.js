const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songName: { type: String, required: true },
  id: { type: String, required: true },
});

const song = mongoose.model("Song", songSchema);
module.exports = song;