const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const port = 8000;

const indexFile = fs.readFileSync("index.html", "utf-8");

app.use(express.static(path.join(__dirname, "../yourQuote")));

app.get("/", (req, res) => {
  //   res.setHeader("Contant-Type", "text/html");

  res.sendFile(path.join(__dirname, indexFile));
});

app.listen(port, () => {
  console.log(`listing the port at ${port}`);
});
