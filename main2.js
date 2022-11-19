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

app.get("/game", (req, res) => {
  res.send(
    "<h1> 99  Bottles of beer on the wall</h1> <a href='/game/98'>take one down, pass it around</a>"
  );
});
app.get("/game/:num", (req, res) => {
  if (req.params.num > 0) {
    res.send(
      `<h1>  ${
        req.params.num
      } Bottles of beer on the wall</h1> <a href='/game/${
        req.params.num - 1
      }'>take one down, pass it around</a>`
    );
  } else {
    res.send(
      "<h1> 99  Bottles of beer on the wall</h1> <a href='/game/98'>take one down, pass it around</a>"
    );
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
