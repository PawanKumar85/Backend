const path = require("path");

const url = "D:/Developer/BackEnd/Youtube/chapter-03/index.js"


// basename method()
console.log(path.basename(url))

// filename method()
console.log(path.basename(__filename ));

// dirname method()
console.log(path.dirname(url))

// extname method()
console.log(path.extname(url));

// join method()
console.log(path.join('/search','label','course/python','oop'))

// normalize method()
console.log(path.normalize("c://temp// foo// bar"))

// parse method()
console.log(path.parse(__filename))