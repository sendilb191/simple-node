const http = require("http");
const { json } = require("stream/consumers");

const users = [
  {
    userid: 1,
    name: "sendil",
  },
  {
    userid: 2,
    name: "sudha",
  },
  {
    userid: 3,
    name: "sugan",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (req.url === "/users") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to simple node server");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running in local host ${PORT} port `);
});
