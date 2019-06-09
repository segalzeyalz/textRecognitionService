let cors = require("cors");
const imageOcrService = require("../modules/imageOCR");

const corsOptions = {
  origin: "localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = express => {
  const router = express.Router();
  router.post("/image", cors(corsOptions), (req, res) => {
    const { url } = req.body;
    imageOcrService(req, res, url);
  });

  return router;
};
