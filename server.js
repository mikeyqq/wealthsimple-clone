const express = require("express");
const cors = require("cors");
// const axios = require("axios");

const app = express();

app.use(cors());

app.get("/api/storyurl", (req, res) => {
  res.send({ body: "Hello From TEST" });
});

app.post("/api/storyurl/image", (req, res) => {
  res.send("Here are your items of images");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
