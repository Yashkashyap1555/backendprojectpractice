const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const port = 4001;
const mongoose = require("mongoose");
const router = require("./routes/userRoute");

mongoose.connect("mongodb://127.0.0.1:27017/backendpractice");
const connection = mongoose.connection;
connection.once("open", (req, res) => {
  console.log("mongodb is connected");
});

app.use(bodyparser.json())
app.use("/", router);


app.listen(port, (req, res) => {
  console.log(`server is connected ${port}`);
});
