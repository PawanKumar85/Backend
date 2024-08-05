# Router

## Why do we need Router

Router class is used to create modular,mountable route handler.

A Router instance is a complete middleware and routing system.

Every Express application has a built-in app route.

`steps` :

* Create Router Module - routes/students.js
* Create Router instance

```bash
const express  = require("express")
const router = express.Router()
const app = express();
```

* `Define Router using router object`

```bash
    router.get('/',(req,res) => {
        router.get('/',(req,res) => {
            res.send("Hello world")
        })
    })
```

* `Export router`

```bash
module.exports = router
```

## use()

`app.use()` - It mounts the specified middleware function or functions at the specified path : the middleware function is executed when the base of the requested path matches path.

A route is valid middleware.
An express app is valid middleware.
