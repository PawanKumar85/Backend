import express from "express";
const app = express();
const PORT = 3000;

app.get("/student/delete/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send(`Student Deleted ${id}`);
});

app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  console.log(category, id);
  res.send(`Product  Category: ${category} Id: ${id}`);
});

app.get("/product/order/:year/and/:month", (req, res) => {
  const { year, month } = req.params;
  res.send(`Year : ${year}  Month : ${month}`);
});

app.get("user/:id", (req, res) => {
  res.send(`ID : ${req.params.id}`);
});

// Quert String
app.get("/product", (req, res) => {
  const { name, age } = req.query;
  
  console.log(name,age);
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
