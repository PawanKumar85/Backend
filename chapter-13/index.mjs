import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Pawan Kumar");
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
