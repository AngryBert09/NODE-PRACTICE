const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  fs.readFile("./Prac/index.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error loading HTML file: ${err}`);
    } else {
      res.write(data);
      res.end();
    }
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
