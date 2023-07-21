const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request created");
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on post number 3000");
});
