const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");
const simple_module = require("./simple_module.js");
const PORT = 12010;

// path 설정
const _path = path.join(__dirname, "./dist");
app.use(express.static(_path));

//bodyParser 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//get 요청
app.get("/", simple_module.index);
app.get("/login", simple_module.login);
app.get("/signin", simple_module.signin);

//post 요청
app.post("/main", simple_module.postmain);
app.post("/finish", simple_module.finish);

app.listen(PORT, () => {
  console.log(`real nodemon Server running at http://127.0.0.1:${PORT}/`);
  console.log(`http://127.0.0.1:${PORT}/finish`); //쿼리 추가해서 요렇게도 바로 확인가능
  // console.log(`http://127.0.0.1:${PORT}/login`);
});
