const http = require("http");
const fs = require("fs");
const path = require("path");

const users = require("./users.json");

const filePath = path.join(__dirname, "users.json");

async function addusers() {
  try {
    const newLength = users.length + 1;
    const newUsers = users.push({ userid: newLength });
    fs.writeFile(filePath, JSON.stringify(newUsers, null, 2));
  } catch (err) {
    console.log("error", err);
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/users") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  } else if (req.url === "/add") {
    try {
      await addusers();
      res.writeHead(201, { "content-type": "text/plain" });
      res.end("Added random data");
    } catch (err) {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Failed to save data");
    }
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running in local host ${PORT} port `);
});
