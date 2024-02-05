const express = require("express");
const app = express();

app.use(express.json());

app.get("/summarise", (req, res) => {
  res.json({ message: "Summarise route hit" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
