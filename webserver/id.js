const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello Form this side of the page");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port number 8000");
});
