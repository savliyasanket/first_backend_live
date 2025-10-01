
require("dotenv").config();
const express = require("express");
const { DBconnection } = require("./configs/DataBase");
const UserRouter = require("./routes/User");
const AuthRouter = require("./routes/Auth");
const cookieParser = require("cookie-parser");


const { auth, checkAdmin  } = require("./middlewares/auth");  

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");

// routes
app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/register", auth, checkAdmin, (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// DB connection & routers
DBconnection();
app.use("/user", UserRouter);
app.use("/auth", AuthRouter);

app.listen(process.env.PORT, () => {
  console.log("SERVER IS RUNNING...");
});










