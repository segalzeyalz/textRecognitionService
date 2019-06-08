const Tesseract = require("tesseract.js");
const request = require("request");
const fs = require("fs");
const url = "http://tesseract.projectnaptha.com/img/eng_bw.png";
const filename = "pic.png";
const writeFile = fs.createWriteStream(filename);

module.exports = express => {
  const router = express.Router();
  router.get("/api", (req, res) => {
    request(url)
      .pipe(writeFile)
      .on("close", function() {
        console.log(url, "saved to", filename);
        Tesseract.recognize(filename)
          .progress(function(p) {
            console.log("progress", p);
          })
          .catch(err => console.error(err))
          .then(function(result) {
            res.send(result.text);
            process.exit(0);
          });
      });
  });

  return router;
};
