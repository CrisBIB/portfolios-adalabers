const cors = require("cors");
const express = require("express");

const portfoliosInfo = require("./data/portfolio.json");
const usersData = require("./data/users.json");

// SERVER

// config server
const app = express();
app.use(express.json());

app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});
