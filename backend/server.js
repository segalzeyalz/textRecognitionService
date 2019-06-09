const express = require("express");
let cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routers = require("./routers")(express);
const port = 4000;
const app = express();
const corsOptions = {
  origin: "localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser());

app.use("/api", cors(corsOptions), routers);

// launch our backend into a port
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
