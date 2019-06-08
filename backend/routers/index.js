const imageOcrService = require("../modules/imageOCR");
module.exports = express => {
  const router = express.Router();
  router.post("/api", (req, res) => {
    console.log("url", req.body.url);
    const { url } = req.body;
    // const url =
    //   `http://${req.params.url}` ||
    //   "http://tesseract.projectnaptha.com/img/eng_bw.png";
    imageOcrService(req, res, url);
  });

  return router;
};
