# Route Parameter

Route parameters are named  URL segments that are used to capturw the values specified at their positions in the URL.

The Captured values are populated in the req.params object,with the name of the route parameter specifies in the path as their respective keys.

The name of route parameters must be made up of "word characters" `([A-Za-z0-9_])`

Examples :

`/student/:id`
`/product/:category/:id`
`/product/order/:year/and/:month`
`/train/:from-:to`
`/location/:state.:city`

## Router Parameter with RegX

To have more control over the exact string that can be matched by route parameter,yo can append a regular expression in parameter(()).

Examples :

`/product/:id([0-9]{2})`
`/product/order/:year/and/:month([a-z])`

## Query Strings in Express.js

### Understanding Query Strings

A query string is the part of a URL that comes after the question mark (?). It's used to pass additional information to the server. For example:

<http://example.com/search?q=nodejs&page=2>
In this URL, q=nodejs and page=2 are query parameters.

`Accessing Query Parameters in Express`

In Express.js, you can access query parameters through the req.query object. It's an object containing key-value pairs representing the query string.

`JavaScript`

```bash
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const searchQuery = req.query.q;
  const page = req.query.page;

  console.log('Search query:', searchQuery);
  console.log('Page:', page);

  // Do something with the query parameters
  res.send(`Searching for ${searchQuery} on page ${page}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

## Handling Missing Query Parameters

It's essential to handle cases where query parameters might be missing. You can use optional chaining or default values to prevent errors:

`JavaScript`

```bash
const searchQuery = req.query.q || 'default search';
const page = req.query.page || 1;
```

### Additional Considerations

`Security:`
 Be cautious when using query parameters directly in database queries to prevent SQL injection.

`Data Validation:` Validate query parameters to ensure they meet expected formats and values.

`Encoding:` For complex data structures, consider using URL encoding and decoding.

`Query String Libraries:` For more complex query string handling, explore libraries like querystring or qs.

`Example with Multiple Query Parameters
JavaScript`

```bash
app.get('/products', (req, res) => {
  const category = req.query.category;
  const priceMin = req.query.priceMin;
  const priceMax = req.query.priceMax;

  // Build a query based on the provided parameters
  // ...

  res.send('Products based on your query');
});
```
