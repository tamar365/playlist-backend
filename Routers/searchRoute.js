const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/:string", async (req, res) => {
  let userQuery = req.params.string;
  
  const options = {
    method: "GET",
    url: "https://youtube-search6.p.rapidapi.com/search/",
    params: { query: userQuery, number: "3" },
    headers: {
      "x-rapidapi-host": "youtube-search6.p.rapidapi.com",
      "x-rapidapi-key": process.env.YOUTUBE_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
