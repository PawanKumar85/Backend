import http from "http";
const PORT = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
  // Request
  if (req.url != "/favicon.ico") {
    console.log("Path : ", req.url);
    console.log("Method : ", req.method);
  }

  //   Response
  //   res.setHeader("Content-Type", "text/plain");
  //   res.statusCode = 202;
  //   res.statusMessage = "Good"

  // shorthand of above
  /*
 ⁡⁢⁣⁢ // res.writeHead(statusCode,statusMessage,setHeader)⁡
 */
  res.writeHead(202, "OK", {
    "Content-Type": "text/plain",
  });
  res.end("Server Created");
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
