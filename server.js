const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const welcomeMessage = require("./welcomeMessage.json");
const app = express();

const fs = require("fs");
const { response } = require("express");

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
  const angelo = postContent.id;

  const result = welcomeMessage.filter((el) => el.id === angelo);

  // const fromObject = result[0].text;
  if (result.length == 0) {
    const copiamosLaVariableJsonMessage = welcomeMessage;
    copiamosLaVariableJsonMessage.push(postContent);
    fs.writeFileSync(
      "./welcomeMessage.json",
      JSON.stringify(copiamosLaVariableJsonMessage)
    );
    console.log(copiamosLaVariableJsonMessage);
    console.log("no existe");
  } else {
    console.log("ya existe");
  }
});
app.post("/welcome/post/hora", (req, res) => {
  const ContenidoPosteadoPorElUsuario = req.body;
  ContenidoPosteadoPorElUsuario.Hora = new Date();
  const copia = welcomeMessage;

  if (
    ContenidoPosteadoPorElUsuario.from &&
    ContenidoPosteadoPorElUsuario.name
  ) {
    copia.push(ContenidoPosteadoPorElUsuario);
    console.log(copia);
    fs.writeFileSync("./welcomeMessage.json", JSON.stringify(copia));
  } else {
    res.status(404).send("la estas cagan...");
  }
  res.send(ContenidoPosteadoPorElUsuario);
  // console.log(copia);
});

app.delete("/welcome/delete", (req, res) => {
  const deleteMessague = req.body;
  const deleteId = deleteMessague.id;
  const result = welcomeMessage.filter((el) => el.id === deleteId);
  const copia = welcomeMessage;
  copia.splice(copia.indexOf(result[0]), 1);
  fs.writeFileSync("./welcomeMessage.json", JSON.stringify(copia));
  res.send(copia);
});

// console.log(fromObject);

// res.send(fromObject);

//   const filterMessage = welcomeMessage.filter((el) => el.id === postContent.id);
//   const newMessage = welcomeMessage;
//   newMessage.push(postContent);
//   fs.writeFileSync("./welcomeMessage.json", JSON.stringify(newMessage));
//   console.log(newMessage);
//  ;

// // app.get("/welcome/:id", function (request, response) {
// //   const id = request.params.id;
// // });

app.listen(4000, () => {
  console.log("welcomed");
});
