import express from "express";
import student from "./routes/student.js";
const app = express();
const PORT = 3000;

app.use("/student", student);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
