import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teacher.js";
const app = express();

const PORT = 3000;

// Load router Module
app.use("/student", student);
app.use("/teacher", teacher);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
