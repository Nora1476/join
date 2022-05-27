const express = require("express");
const path = require("path");
const loogger = require("morgan");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const _path = path.join(__dirname, "./dist");

app.set("port", (process.env.PORT ??= 12010));

app.use(express.static(_path));

const PORT = app.get("port");
app.listen(PORT, () => {
  console.log(`real nodemon Server running at http://127.0.0.1:${PORT}/`);
  console.log(`http://127.0.0.1:${PORT}/join`); //쿼리 추가된것도 요렇게 넣어서 같이 확인가능
  console.log(`http://127.0.0.1:${PORT}/login`);
});
