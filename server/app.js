const bodyParser = require("body-parser");
const express = require("express");
const userRouter = require("./src/routes/userRoutes");
const cors = require("cors");
const app = express();
require("dotenv").config()

app.use(bodyParser.json());
app.use(express.json());

const allowedOrigins = ["http://localhost:5137"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use("/api/user", userRouter);

module.exports = app;
