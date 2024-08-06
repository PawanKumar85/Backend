# View

Views contain the HTML served by your application and separate your application logic from yoour presentation logic. Views are stored in the views directory.

`views/index.html`
html code

## Example

```bash
app.get('/',(req,res) => {
    res.sendFile(join(process.cwd(),'views','index.html'));
})
```

* process.cwd() - process is node's global object,and .cwd() returns where node is running.

* app.sendFile() - This is used to tranfers the file at the given path.Sets the content Type response HTTP header field based on the filename's extension.Unless the root option is set in the options object,path must be an absoute path to the file.
