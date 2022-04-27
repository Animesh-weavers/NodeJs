const express = require("express");
const app = express();
app.get("", (req, res) => {
  console.log(req.query);
  res.send([
    {
      name: req.query.name,
      age: req.query.age,
    },
  ]);
});
app.get("/about", (req, res) => {
  res.send("Hello, this is About Page");
});
app.get("/help", (req, res) => {
  res.send("Hello, this is Help Page");
});

app.listen(5000);
