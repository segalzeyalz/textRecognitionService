const Tesseract = require("tesseract.js");
const request = require("request");
const fs = require("fs");

module.exports = (req, res, url) => {
  const filename = `${Math.random()*1212121}pic${Math.random()*1212121}.png`;
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
          // process.exit(0);
        });
    });
};
