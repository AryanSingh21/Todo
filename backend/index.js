const express = require("express");
const connectDatabase = require("./Database");
const app = express();

app.use(express.json());
//connecting database

connectDatabase();

const task = require("./taskController/route");

app.use("/api/v2", task);

app.listen(4000, function () {
  console.log("server started on port 4000");
});
