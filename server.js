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
//get 요청이오면 simple_module.index 미들웨어로 처리하겠다. 대신 경로는 "/"이다
app.post("/main", simple_module.postmain);
app.post("/finish", simple_module.finish);

app.post("/finish", (req, res) => {
  const {
    body: { id, pass1, name, mnum1, mnum2, mnum3, email_1, email_2 },
  } = req;
  console.log(id, pass1, name, mnum1, mnum2, mnum3, email_1, email_2);

  fs.readFile("./dist/finish.html", function (error, data) {
    //fs 라이브러리 file 읽어오는 모듈
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.listen(PORT, () => {
  console.log(`real nodemon Server running at http://127.0.0.1:${PORT}/`);
  // console.log(`http://127.0.0.1:${PORT}/main`); //쿼리 추가해서 요렇게도 바로 확인가능
  // console.log(`http://127.0.0.1:${PORT}/login`);
});
