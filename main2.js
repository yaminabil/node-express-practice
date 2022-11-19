const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/greeting", (req, res) => {
  res.send("<h1> hello stranger </h1>");
});
app.get("/greeting/:name", (req, res) => {
  res.send(`<h1>hello ${req.params.name}</h1>`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
