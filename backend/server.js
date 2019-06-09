const express = require("express");
let cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routers = require("./routers")(express);
const port = 3001;
const app = express();
app.use(cors());
app.use(bodyParser());
app.use("/api", routers);

// launch our backend into a port
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
