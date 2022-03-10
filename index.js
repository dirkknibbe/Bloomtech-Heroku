const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.end("<h1>heelo world<h1>");
});

server.listen(9000, () => {
  console.log("server is runnning on port 9000!");
});
