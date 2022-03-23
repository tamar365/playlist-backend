const { Song } = require("./song.js"); 
const { User } = require("./user.js");
const { PlayList} = require("./playList");


const models = { Song, User, PlayList }; 
module.exports = { models }; 
