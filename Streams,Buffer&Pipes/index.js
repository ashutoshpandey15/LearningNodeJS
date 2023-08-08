const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file not found");
  //   });

  //THE MOST EFFECTIVE WAY IS TO USE PIPE METHOD
  rstream.pipe(res); // this method reads and writes the data at athe same time of the entry
});

server.listen(8000, "127.0.0.1");

// const fs = require('fs');

// // Create a readable stream
// const readableStream = fs.createReadStream('input.txt');

// // Create a writable stream
// const writableStream = fs.createWriteStream('output.txt');

// // Pipe the data from the readable stream to the writable stream
// readableStream.pipe(writableStream);

// // Handle 'finish' event when all data has been written
// writableStream.on('finish', () => {
//   console.log('Data has been written to output.txt');
// });
