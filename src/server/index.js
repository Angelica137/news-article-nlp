require("dotenv").config;

const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const axios = require("axios");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../../dist")));

// get the home page
app.get("/", function (req, res) {
  //console.log(__dirname);
  res.sendFile(path.join(__dirname, "../../dist", "index.html"));
  // use absolute path
  /*const distPath = path.join(__dirname, "..", "..", "dist");
  console.log(__dirname);
  res.sendFile(path.join(distPath, "index.html"));*/
});

app.get("/summarise", (req, res) => {
  //console.log(__dirname);
  res.json({ message: "Summarise route hit" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
