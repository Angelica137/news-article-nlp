require("dotenv").config();
console.log(`Hello ${process.env.HELLO}`);

const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const axios = require("axios");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../../dist")));

// get the home page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
});

app.get("/test", function (req, res) {
  res.json(mockAPIResponse.json);
});

app.post("/submitForm", async (req, res) => {
  const urlToSummarise = req.body.url;
  const apiURL = "https://api.meaningcloud.com/summarization-1.0";

  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", urlToSummarise);
  formdata.append("sentences", "10");

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      body: formdata,
    });

    if (!response.ok) {
      throw new Error("HTTP error! Status: ${response.status}");
    }

    const data = await response.json();

    console.log("MeaningCloud API response:", data);
    res.json(data);
  } catch (error) {
    console.error("error with MeaningCloud API:", error);
    res.status(500).send("error processing summarise request");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
