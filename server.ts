import express = require("express");
import serveFavicon = require("serve-favicon");
import path = require("path");

const app = express();

app.use(serveFavicon(__dirname + "/favicon.ico"));
app.use(express.static(path.join(__dirname)));

/* app.get("/", function (_req, res) {
  res.sendFile(path.join(__dirname));
}); */

app.get("*", function (_req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080);
