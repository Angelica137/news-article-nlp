require("dotenv").config();

const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const axios = require("axios");
const apiKey = process.env.API_KEY;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../../dist")));

// get the home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

app.get("/summarise", (req, res) => {
  res.json({ message: "Summarise route hit" });
});

app.get("/test", function (req, res) {
  res.json(mockAPIResponse.json);
});

app.post("/submitForm", async (req, res) => {
  const urlToSummarise = req.body.url;

  /* send post request to api sending the url to summarise from the input field
	on the client side */

  try {
    const response = await axios.post(
      "https://api.meaningcloud.com/summarization-1.0",
      {
        key: apiKey,
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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
