const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

// db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, dbName: "CodersX-Project-book" }).then(() => console.log("DB connected"))
mongoose.connection.on("error", err => console.log("DB connection error" + err.message))
const app = express();
// bring router
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
// set port 
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", postRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: "Unauthorize" });
  }
});

app.listen(port, () => {
  console.log("app start at port:" + port)
})