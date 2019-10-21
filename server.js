const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const axios = require("axios");
const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-url")()
]);

const app = express();
app.use(bodyParser.json());

const got = require("got");

app.use(cors());

app.get("/api/storyurl", (req, res) => {
  res.send({ body: "Hello From TEST" });
});

/******************************************************************************************************************/

//THIS POST REQ WILL TAKE THE ARTICLE URL FROM FRONT END POST AND USE METASCRAPER TO GRAB THE METADATA IMAGE URL

app.post("/api/storyurl/image", (req, res) => {
  (async () => {
    try {
      const { body: html, url } = await got(req.body.storyUrl);
      const metadata = await metascraper({ html, url });
      console.log(metadata.image);
    } catch (error) {
      console.log("ERRORS!!", error);
    }
  })();

  res.send("Here are your items of image url from metadata");
});

/******************************************************************************************************************/

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
