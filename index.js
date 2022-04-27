const express = require("express");
const { getMaxListeners } = require("process");
const app = express();
app.get("", (req, res) => {
  console.log(req.query);
  res.send("<h1>Welcome</h1>");
});
app.get("/about", (req, res) => {
  res.send("Hello, this is About Page");
});
app.get("/help", (req, res) => {
  res.send([
    {
      name: "A",
      email: "a@gmail.com",
    },
    {
      name: "B",
      email: "b@gmail.com",
    },
  ]);
});

app.listen(5000);
