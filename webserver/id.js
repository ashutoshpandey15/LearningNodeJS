const http = require("http"); //importing http module
const url = require("url"); // importing url module
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello From this side of the page");
  } else if (req.url == "/about") {
    res.end("Hello From about side of the page");
  } else {
    res.writeHead(404, { "Content-type": "text/html" }); // 404 is the status code and the second parameter is the object
    res.end("<h1>404 error page. Page does not exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port number 8000");
});
