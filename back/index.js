const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/index");
const cors = require("cors");
const mongoose = require("mongoose");
const FileUpload = require("express-fileupload");

app.use(
  cors({
    credentials: true,
    origin: true,
    origin: "http://localhost:3000",
  })
);

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
app.use("/static", express.static("public"));
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use("/data", router);

app.listen(4000, function () {
  console.log(`Server running on http://localhost:4000`);
});

module.exports = app;
