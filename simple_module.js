var fs = require("fs");

module.exports.index = (req, res) => {
  fs.readFile("./dist/index.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

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
