const http = require("http");
const { redfile, readFile } = require("fs");
const PORT = 3000;
const server = http.createServer((req, res) => {
  let path = req.url;
  switch (path) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      readFile("./index.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
      break;
    case "/about":
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      readFile("./about.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 404;
      readFile("./404.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
      break;
  }
});

server.listen(PORT, console.log("started"));
// server.listen(PORT, console.log("started"));
