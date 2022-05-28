var fs = require("fs");

module.exports.index = (req, res) => {
  fs.readFile("./dist/index.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

module.exports.main = (req, res) => {
  fs.readFile("./dist/main.html", function (error, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

module.exports.postmain = (req, res) => {
  const {
    body: { id, pass },
  } = req;
  console.log(id, pass);
};
