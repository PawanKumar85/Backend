import http from "http";
const PORT = 3000 || process.env.PORT;

const home = "<h1> Home Page </h1>";
const about = "<h1> About Page </h1>";
const error404 = "<h1> 404 Page Not found </h1>";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/HTML" });
  if (req.url === "/") res.end(home);
  else if (req.url === "/about") res.end(about);
  else res.end(error404);
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
