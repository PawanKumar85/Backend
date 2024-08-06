import express from "express";
import home from "./routes/home.js";
import about from "./routes/about.js";
const app = express();
const PORT = 3000;

app.use("/home", home);
app.use("/about",about);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
