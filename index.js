const express = require("express");
const morgan = require("morgan");
const emoji = require("node-emoji");
const port = 3000;

const app = express();

// const fs = require("fs").promises;

const fortunes = ["Embrace the learning journey. Coding experience is built step by step.", "Your dedication to learning to code will open doors to new opportunities.", "Just like debugging, challenges are temporary. Keep coding!", "In the world of tech, every line of code you write is a step toward success.", "Your career switch into tech is like a well-optimized algorithm: efficient and rewarding.", "Every error is an opportunity to learn something new. Don't give up!"];

const name = "unicorn";

app.use(morgan("dev"));

app.get("/api/fortunes/", (req, res) => {
  res.json({ fortunes: `${fortunes[Math.floor(Math.random() * fortunes.length)]}` });
  //Conditional for error response
  //   if (err) {
  //   console.log(`Error reading file from disk: ${err}`);
  // } else {
  // }

  // res.json({fourtune: })
  // parse JSON string to JSON object
  // const fortunes = JSON.parse(data);
});

// can replace :name with :lang
app.get("/api/emoji/:name/", (req, res) => {
  console.log("emoji", req.params);
  res.json({ emoji: emoji.get(`${req.params.name}`) });

  // if res.json({ emoji: emoji.get(`${req.params.name}`) }) === ' ' {
  //   console.log('Emoji does not exist')
  // }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
