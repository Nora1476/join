const express = require("express");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");
const simple_module = require("./simple_module.js");
const PORT = 12010;

const path = require("path");
const _path = path.join(__dirname, "./dist");

app.use(express.static(_path));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", simple_module.index);

app.post("/main", simple_module.postmain);

app.post("/finish", simple_module.finish);

app.listen(PORT, () => {
  console.log(`real nodemon Server running at http://127.0.0.1:${PORT}/`);
  // console.log(`http://127.0.0.1:${PORT}/join`); //쿼리 추가된것도 요렇게 넣어서 바로 확인가능
  // console.log(`http://127.0.0.1:${PORT}/login`);
});
