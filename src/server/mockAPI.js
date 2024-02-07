module.exports = {
  json: {
    title: "test json response",
    message: "this is a message",
    time: "now",
  },
};

/*
app.post("/submitForm", async (req, res) => {
  const urlToSummarise = req.body.url;
  const apiURL = "https://api.meaningcloud.com/summarization-1.0";

  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("url", urlToSummarise);
  formdata.append("sentences", "10");

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      body: formdata,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("MeaningCloud API response:", data);

    if (data.summary) {
      res.json({ summary: data.summary });
    } else {
      res.json({ summary: "" });
    }
  } catch (error) {
    console.error("error with MeaningCloud API:", error);
    res.status(500).send("error processing summarise request");
  }
});
*/
