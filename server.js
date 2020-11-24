const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const welcomeMessage = require("./welcomeMessage.json");
const app = express();

const fs = require("fs");

app.use(cors());
app.use(bodyParser.json());

// //This array is our "data store".
// //We will start with one message in the array.
// //Note: messages will be lost when Glitch restarts our server.

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/welcome", function (request, response) {
  response.send(welcomeMessage);
});

//POST album
app.post("/welcome/post", (req, res) => {
  const postContent = req.body;
  console.log(postContent);
  const filterMessage = welcomeMessage.filter((el) => el.id === postContent.id);
  const newMessage = welcomeMessage;
  newMessage.push(postContent);
  fs.writeFileSync("./welcomeMessage.json", JSON.stringify(newMessage));
  console.log(newMessage);
  res.send(postContent);
});

// // app.get("/welcome/:id", function (request, response) {
// //   const id = request.params.id;
// // });

app.listen(3000, () => {
  console.log("welcomed");
});
