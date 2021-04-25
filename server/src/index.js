const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const app = express();

app.use(cors());
app.use(express.json());

const serverPort = 3001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//static server
const staticServerPath = ".public";
app.use(express.static(staticServerPath));

//init and config data base
const db = new Database("./src/adaCards.bs", {
  verbose: console.log,
});

app.post("/card", (req, res) => {
  const query = db.prepare(
    `INSERT INTO adalabers (nick_name, current_job, previous_job, power, promo, programming_languages, more_programming_languages, eployed, photo, background, portfolio) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,)`
  );
  console.log(req.body);
  const queryResult = query.run(
    req.body.nick_name,
    req.body.current_job,
    req.body.previous_job,
    req.body.power,
    req.body.promo,
    req.body.programming_languages,
    req.body.more_programming_languages,
    req.body.employed,
    req.body.photo,
    req.body.background,
    req.body.portfolio
  );
  res.json({
    result: "New adalaber IN",
    userId: queryResult.lastInsertRowId,
  });
});
