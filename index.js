const express = require('express');
const morgan = require('morgan');
const port = 3000;

const app = express();

app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("<h1>Hello World 2!</h1>")
})

app.get("/hello/", (req,res) => {
    res.json({message: "Hello World from /hello!", anotherThing: "I love dogs"})
})

// // can replace :name with :lang
// app.get("/hello/:name", (req, res) => {
//     console.log("emoji", req.params)
//     res.json({message: 'Hello to you, ${req.params.name}!'})
// })

app.listen(port, () => { console.log('Server is running on port ${port}') })
