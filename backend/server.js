const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = 3000;
const app = express();

app.use(cors());

const router = express.Router();

router.get("/about", (req, res) => {
  res.send("about");
});

app.use("/", router);

// launch our backend into a port
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
