# Routing

Routing refers to determining how an application responds to a client request to a particular endpoints,which is a URL (or Path) an a specific HTTP request method (GET,POST and so on).

Each route can have one or more callback functions,which are executed when the route is matched.

```bash
    Syntax : app.method(path,callback)
    Syntax : app.method(path,[callback1,callback2,...])
```

- app is an instance of express
- method is the HTTP request method (GET,POST,PUT,DELETE etc.)
- path is the URL path
- callback is the function excuted when the route is matched.

## Methods

- GET - Retrive Data
- POST - Create/Insert Data
- PUT - Completely Update Data
- DELETE - Delete Data
- PATCH - Partially Update Data
- All - Any HTTP Request Method

```bash
    app.get('/users',(req,res,next) => {
        res.send('GET request to the homepage')
        next()
    })
```

Path - Route paths can be strings,string patterns or regular expressions.Query strings are not part of the route path.

The Characters ?,+,* and () are subsets of their regular expressions counterparts.

The hyphen(-) and dot(.) are interpreted literally by string-based paths.
If you need to use the doller $ character in a path string, enclose it escaped within ([ and]).

Callback - Route Callback can be in the form of a function, an array of functions, or combinations of both.

You can provide multiple callback functions that behave like middleware to handle a request.The only exceptions is that these callbacks might invoke mext('route') to bypass the remaining route callbacks.

```bash
app.get('/users',(req,res,next) => {
    res.send('GET request to the homepage')
    }
```

- req - The Request object
- res - The Response object
- next - The next middleware function in the application's request-response cycle.

```bash
app.get('/',(req,res,next) => {
    res.send('GET request to the homepage')
    next()
},(req,res) => {
    res.send('Hello World')
})
```

## Chained Route Callbacks

app.route(path) - It returns an instance of a single route,which you can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names.

```bash
app.route('/student')
    .get((req,res) => {
        res.send('All Student')
    })
    .path((req,res) => {
        res.send("Add New Student)
    })
    .put((req,res) => {
    res.send("Update Student")})
```
