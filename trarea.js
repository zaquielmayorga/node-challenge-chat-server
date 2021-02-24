const express = require("express");

const app = express();
//Get message
app.get("/message", (request, response) => {
  const respuesta1 = response.send(501);
  console.log();
});

app.get("/message/id", (request, response) => {
  response.send(501);
});

app.post("message", (request, response) => {
  const cuerpo = request.body;
  
});

app.put("/message", (request, response) => {
  response.send(501);
});

//DELETE album
app.delete("/albums/:albumID", (request, response) => {

});
