import http from "http";

// create a web server in node Js
const PORT = 3000 || process.env.PORT;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world");
});
server.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

/*
The HTTP interfaces in NodeJS are designed to support many features of the protocol which have been traditionally difficult to use.
⁡⁢⁣⁢Syntax : import http from "http"⁡
*/
