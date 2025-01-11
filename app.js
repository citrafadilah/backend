var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./app-server/routes/index");
var usersRouter = require("./app-server/routes/users");
var butikRouter = require("./app-server/routes/butiks");
var categoriesRouter = require("./app-server/routes/categories");
//CORS Enabled
//Cross Origin Resource Sharing
const mongoose = require("mongoose");
require("./app-server/model/db");
var app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//versi 2.2.12
// "mongodb+srv://mdp:haechan01y@cluster0.myncj.mongodb.net/dbbutik?retryWrites=true&w=majority&appName=Cluster0"
//  "mongodb://mdp:haechan01y@cluster0-shard-00-00.myncj.mongodb.net:27017,cluster0-shard-00-01.myncj.mongodb.net:27017,cluster0-shard-00-02.myncj.mongodb.net:27017/dbbutik?ssl=true&replicaSet=atlas-t07ebu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

// mongoose
//   .connect(
//     "mongodb://mdp:haechan01y@cluster0-shard-00-00.myncj.mongodb.net:27017,cluster0-shard-00-01.myncj.mongodb.net:27017,cluster0-shard-00-02.myncj.mongodb.net:27017/dbbutik?ssl=true&replicaSet=atlas-t07ebu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
//   ).then(() => {
//     console.log("Connected to Database");
//   })
//   .catch((err) => {
//     console.error("App Starting error", err.stack);
//     console.log("Connection Failed");
//   });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/butiks", butikRouter);
app.use("/categories", categoriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page

  res.status(500).json({
    message: "Something went wrong!", // Kirimkan error sebagai JSON
    error: err.message,
  });
});

module.exports = app;


