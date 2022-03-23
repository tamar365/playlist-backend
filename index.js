require("dotenv").config(); 
const express = require("express"); 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const {connectDB}  = require("./DL/db.js");
const { songRoute, userRoute, searchRoute, playlistRoute } = require("./Routers/router.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 

app.use("/api/songs", songRoute);
app.use("/api/users" ,userRoute);
app.use("/api/search", searchRoute);
app.use("/api/playlists", playlistRoute);

connectDB().then(() => {
    console.log("Connected to DB successfully");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
