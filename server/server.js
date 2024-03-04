const path = require("path");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

const PORT = process.env.PORT;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res
    .status(200)
    .sendField(path.join(__dirname, "../client/index.html"));
});

app.use("*", (req, res) => res.status(404).send("Page not found"));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught an unknown middlware error",
    status: 500,
    message: { err: "An error occured" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () =>
  console.log(`Server online, listening on port: ${PORT}`)
);
