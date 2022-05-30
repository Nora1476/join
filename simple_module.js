var fs = require("fs");

module.exports.index = (req, res) => {
  fs.readFile("./dist/index.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};
module.exports.login = (req, res) => {
  fs.readFile("./dist/login.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};
module.exports.signin = (req, res) => {
  fs.readFile("./dist/signIn.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

//get 방식 대표 함수를 readFileForm으로 설정해두고 파일 불러올때 재사용 할 수 있음
// const readFileForm = function(where, req, res) {
//   fs.readFile(`./dist/${where}.html`, function (error, data) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

module.exports.postmain = (req, res) => {
  const {
    body: { id, pass },
  } = req;
  console.log(`사용자id : ${id}, pass : ${pass} `);

  fs.readFile("./dist/main.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

module.exports.finish = (req, res) => {
  const {
    body: { id, pass1, name, mnum1, mnum2, mnum3 },
  } = req;
  console.log(
    `회원가입id : ${id}, password: ${pass1}, name: ${name}, mobile: ${mnum1} ${mnum2} ${mnum3}`
  );

  fs.readFile("./dist/finish.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};
