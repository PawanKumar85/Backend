# Controller

Controller can group related request handling logic separately. Instead of defining all of your request handling logic as callback in route files,you may wish to organize this using Controller moduler.

`controller/studentController.js`

```bash
    const allStudent = (req,res) => {
    res.send("All Student");
}

    export default allStudent;
```

`index.mjs`

```bash
import express from "express";
import allStudent from './controller/studentController.js";
const app = express();
const PORT = 3000;

app.get('/all',allStudent);
app.listen(PORT,() => {
    console.log("server connected");
})
```
