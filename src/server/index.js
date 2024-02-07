require("dotenv").config();

const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

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
  // Simulate a response from the MeaningCloud API
  const mockApiResponse = {
    summary:
      "This is a mock summary demonstrating how the grid helps maintain consistency across layouts and make faster design decisions. It emphasizes the importance of grids for precise control over alignments and layout on different screen sizes.",
  };

  console.log("Using mock MeaningCloud API response:", mockApiResponse);
  res.json(mockApiResponse); // Send the mock response back to the client
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
