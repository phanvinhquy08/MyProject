require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 8001

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, dbName: "CodersX-Project-Book-Manager" }).then(() => console.log("DB connected"))
mongoose.connection.on("error", err => console.log("DB connection error" + err.message))
// import routes
const booksRouter = require("./routes/books.router");
const userRouter = require("./routes/users.router");
const transactionRouter = require("./routes/transactions.router");
const authRouter = require("./routes/auth.router");
const apiTransactionRouter = require("./api/routes/api.transactions.router");
const apiLoginRouter = require("./api/routes/api.login.router")

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(bodyParser.json());
app.use(cookieParser())

app.use("/books", booksRouter);
app.use("/users", userRouter);
app.use("/transactions", transactionRouter);
app.use("/auth", authRouter);

app.use("/api", apiTransactionRouter)
app.use("/api", apiLoginRouter)

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(port, () => console.log("app start at port " + port))