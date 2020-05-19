const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// import error handle
const errorHandler = require("./middleware/errorHandle");
// import route
const postRoutes = require("./routes/post");
// mongoose

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/rest-api-node", { useNewUrlParser: true })

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


app.use("/api/post", postRoutes)
app.use(errorHandler);

app.listen(port, () => {
    console.log("listening at port" + port);
})