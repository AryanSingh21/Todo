const express = require("express");
const app = express();

const task = require("./taskController/route");

app.use("/api/v2", task);
