const express = require("express");
const morgan = require("morgan");
const port = 3000;

const app = express();

// const fs = require("fs").promises;

const fortunes = [
  "Embrace the learning journey. Coding experience is built step by step.",
  "Your dedication to learning to code will open doors to new opportunities.",
  "Just like debugging, challenges are temporary. Keep coding!",
  "In the world of tech, every line of code you write is a step toward success.",
  "Your career switch into tech is like a well-optimized algorithm: efficient and rewarding.",
  "Every error is an opportunity to learn something new. Don't give up!",
];

app.use(morgan("dev"));

app.get("/api/fortunes/", (req, res) => {
  res.send(`${fortunes[Math.floor(Math.random() * fortunes.length)]}`);
  // fs.readFile("./fortunes.json", "utf8", (err, data) => {
  //   if (err) {
  //     console.log(`Error reading file from disk: ${err}`);
  //   } else {
  // parse JSON string to JSON object
  // const fortunes = JSON.parse(data);

  // print all databases
  // fortunes.forEach((db) => {
  //   console.log(["fortunes"]);
  //   res.json({ fortune: fortunes });
  // });
});
// app.get("/fortunes/", (req, res) => {
//   res.json({
//     message: "fortune:",
//     anotherThing: "I love dogs",
//   });
// });

// // can replace :name with :lang
// app.get("/hello/:name", (req, res) => {
//     console.log("emoji", req.params)
//     res.json({message: 'Hello to you, ${req.params.name}!'})
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
