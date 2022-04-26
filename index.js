const http = require("http"); //import http

const dataControl = (req, res) => {
  res.write("<h1>Hello, this is animesh dey<h1/>");
  res.end();
};

//create a server
http.createServer(dataControl).listen(4500);
