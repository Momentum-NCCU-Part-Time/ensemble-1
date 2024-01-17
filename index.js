const express = require("express");
const morgan = require("morgan");
const port = 3000;

const app = express();

const fs = require("fs").promises;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World 2!</h1>");
  fs.readFile("./fortunes.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const fortunes = JSON.parse(data);

      // print all databases
      fortunes.forEach((db) => {
        console.log(["fortunes"]);
        res.json({ fortune: fortunes });
      });
    }
  });
});

app.get("/fortunes/", (req, res) => {
  res.json({
    message: "fortune:",
    anotherThing: "I love dogs",
  });
});

// // can replace :name with :lang
// app.get("/hello/:name", (req, res) => {
//     console.log("emoji", req.params)
//     res.json({message: 'Hello to you, ${req.params.name}!'})
// })

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
