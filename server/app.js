const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use("/", routes);
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

app.listen(9000);
