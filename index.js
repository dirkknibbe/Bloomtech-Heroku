require("dotenv").config();

const PORT = process.env.PORT || 9000;

const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.end("<h1>heelo world<h1>");
});

server.listen(PORT, () => {
  console.log(process.env.QWERTY);
  console.log(
    `server is runnning on port ${PORT}, user is ${process.env.USER}!`
  );
});
