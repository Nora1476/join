const express = require("express");
const path = require("path");
const loogger = require("morgan");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const _path = path.join(__dirname, "./dist");

app.use(express.static(_path));

app.set("port", (process.env.PORT ??= 12010));
const PORT = app.get("port");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//form태그에서  아이디, 비번을 입력하고 post 방식으로 보냈을때 action으로 main페이지로 이동
//   /main으로 이동이 되었을때 id.pass를 받아 콘솔창에 띄우고
//   response로 파일을 열어줌

app.post("/main", (req, res) => {
  const {
    body: { id, pass },
  } = req;
  console.log(id, pass);

  fs.readFile("./dist/main.html", function (error, data) {
    //fs 라이브러리 file 읽어오는 모듈
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

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
  // console.log(`http://127.0.0.1:${PORT}/join`); //쿼리 추가된것도 요렇게 넣어서 같이 확인가능
  // console.log(`http://127.0.0.1:${PORT}/login`);
});
