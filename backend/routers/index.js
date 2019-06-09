const imageOcrService = require("../modules/imageOCR");
module.exports = express => {
  const router = express.Router();
  router.post("/image", (req, res) => {
    const { url } = req.body;
    imageOcrService(req, res, url);
  });

  return router;
};
