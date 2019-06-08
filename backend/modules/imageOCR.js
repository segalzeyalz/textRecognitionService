const Tesseract = require("tesseract.js");
const request = require("request");
const fs = require("fs");

module.exports = (req, res, url) => {
  const filename = "pic.png";
  const writeFile = fs.createWriteStream(filename);
  request(url)
    .pipe(writeFile)
    .on("close", () => {
      console.log(url, "saved to", filename);
      Tesseract.recognize(filename)
        .progress(p => {
          console.log("progress", p);
        })
        .catch(err => console.error(err))
        .then(result => {
          res.send(result.text);
          process.exit(0);
        });
    });
};
