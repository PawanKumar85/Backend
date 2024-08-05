import express from "express";
const app = express();
const PORT = 3000;

const data = [
  {
    name: "John Doe",
    age: 30,
    gender: "M",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "F",
  },
  {
    name: "Michael Johnson",
    age: 35,
    gender: "M",
  },
  {
    name: "Emily Brown",
    age: 28,
    gender: "F",
  },
  {
    name: "David Lee",
    age: 42,
    gender: "M",
  },
  {
    name: "Olivia Carter",
    age: 22,
    gender: "F",
  },
  {
    name: "William Wilson",
    age: 38,
    gender: "M",
  },
  {
    name: "Sophia Martinez",
    age: 27,
    gender: "F",
  },
  {
    name: "Benjamin Anderson",
    age: 40,
    gender: "M",
  },
  {
    name: "Ava Miller",
    age: 24,
    gender: "F",
  },
];

// String path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/api/users", (req, res) => {
  console.log(req.method);
  res.json(data);
});

// Regular Expression
app.get(/a/, (req, res) => {
  res.send("This is a route with a regex");
});

// Chained Route Callback

app
  .route("/student")
  .get((req, res) => {
    res.send("All Students");
  })
  .post((req, res) => {
    res.send("Add New Student");
  })
  .put((req, res) => {
    res.send("Put Method");
  });

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
