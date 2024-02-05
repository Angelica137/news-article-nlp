require("dotenv").config;

const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const axios = require("axios");

const app = express();

app.use(express.json());

app.use(express.static("dist"));

// this did now seem to work here
console.log(__dirname);

// this call gets the home page
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.post("/summarise", (req, res) => {
  res.json({ message: "Summarise route hit" });
});

app.listen(3000, function () {
  console.log("example app listening on port 3000!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/summarise", async (req, res) => {
  const urlToSummarise = req.body.url;

  /* send post request to api sending the url to summarise from the input field
	on the client side */

  try {
    const response = await axios.post(
      "https://api.meaningcloud.com/summarization-1.0",
      {
        key: process.env.API_KEY,
        url: urlToSummarise,
        sentences: 10,
      }
    );

    console.log("MeaningCloud API response:", response.data);

    res.send(response.data);
  } catch (error) {
    console.error("error with MeaningCloud API:", error);
    res.status(500).send("error processing summarisation request");
  }
});
